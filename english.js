const questionById = new Map(quizSets.flatMap((quiz) => quiz.questions.map((question) => [question.id, question])));
const $ = (selector) => document.querySelector(selector);
const welcomeView = $('#welcome-view');
const quizView = $('#quiz-view');
const finishView = $('#finish-view');
const profileEntry = $('#profile-entry');
const profileNameInput = $('#child-name');
const profileControls = $('#profile-controls');
const progressHub = $('#progress-hub');
const activeChildName = $('#active-child-name');
const quizNextPanel = $('#quiz-next');
const allQuizzesDonePanel = $('#all-quizzes-done');
const nextQuizTitle = $('#next-quiz-title');
const nextQuizDetail = $('#next-quiz-detail');
const continueQuizButton = $('#continue-quiz-button');
const nextQuizButton = $('#next-quiz-button');
const backHomeButton = $('#back-home-button');
const sentenceText = $('#sentence-text');
const answerInput = $('#answer-input');
const typingAnswer = $('#typing-answer');
const choiceAnswer = $('#choice-answer');
const choiceGrid = $('#choice-grid');
const checkButton = $('#check-button');
const nextButton = $('#next-button');
const prevButton = $('#prev-button');
const skipRepeatButton = $('#skip-repeat-button');
const feedback = $('#answer-feedback');
const hintButton = $('#hint-button');
const hintContent = $('#verb-hint');
const progressCurrent = $('#progress-current');
const progressBar = $('#progress-bar');
const progressFill = $('#progress-fill');
const questionModeLabel = $('#question-mode-label');
const questionKicker = $('#question-kicker');
const questionNote = $('#question-note');
const audioActions = $('#audio-actions');
const audioBase = 'audio/en/';
function fullSentence(question) {
  return question.sentence.replace(/<[^>]*>/g, '').replace(/\*\*/g, '').replace('_____', question.answer);
}
function playSentence(question, rate = 1) {
  return window.EnglishAudio.play(`${audioBase}${question.id}.mp3`, fullSentence(question), rate);
}
function wait(ms) { return new Promise((resolve) => window.setTimeout(resolve, ms)); }

// Keep the storage key and quiz IDs so progress from the original Pages site remains available.
const profilesStorageKey = 'gecmis-zaman-kulubu-child-profiles-v1';
const legacyProgressKey = 'gecmis-zaman-kulubu-completed-quizzes';
const legacyMigrationKey = 'gecmis-zaman-kulubu-legacy-progress-migrated-v1';
let profiles;
try {
  const saved = JSON.parse(localStorage.getItem(profilesStorageKey) || '{}');
  profiles = saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {};
} catch { profiles = {}; }
let activeProfile = null;
let currentQuiz = null;
let questions = [];
let questionIndex = 0;
let correctCount = 0;
let hasAnswered = false;
let selectedChoice = '';
let answerResults = {};
let hintLevel = 0;

function saveProfiles() {
  try { localStorage.setItem(profilesStorageKey, JSON.stringify(profiles)); } catch { /* Continue without storage. */ }
}
function questionSignature(question) {
  const normalize = (value) => value.toLocaleLowerCase('tr')
    .replace(/[çğıöşü]/g, (letter) => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' })[letter])
    .replace(/[^a-z0-9]+/g, ' ').trim();
  return `${normalize(question.sentence.replace(/<[^>]*>/g, ' ').replace(/\*\*/g, ' '))}|${normalize(question.answer)}`;
}
function collectSeenQuestions(profile) {
  const seen = new Set(Array.isArray(profile.seenQuestionKeys) ? profile.seenQuestionKeys : []);
  for (const quiz of quizSets) {
    if (profile.completedQuizIds.includes(quiz.id)) {
      quiz.questions.forEach((question) => seen.add(questionSignature(question)));
      continue;
    }
    const state = profile.quizStates[quiz.id];
    if (!Array.isArray(state?.questionOrder)) continue;
    state.questionOrder.slice(0, Math.max(0, state.questionIndex || 0)).forEach((id) => {
      const question = questionById.get(id);
      if (question) seen.add(questionSignature(question));
    });
  }
  profile.seenQuestionKeys = [...seen];
}
function migrateQuizQuestionMix(profile) {
  if (profile.quizQuestionMixVersion === 1) return;
  const seen = new Set(Array.isArray(profile.seenQuestionKeys) ? profile.seenQuestionKeys : []);
  const oldQuizIds = new Set(legacyQuizSets.map((quiz) => quiz.id));
  for (const quiz of legacyQuizSets) {
    if (profile.completedQuizIds.includes(quiz.id)) {
      quiz.questions.forEach((question) => seen.add(questionSignature(question)));
    }
    const state = profile.quizStates[quiz.id];
    if (!Array.isArray(state?.questionOrder)) continue;
    state.questionOrder.slice(0, Math.max(0, state.questionIndex || 0)).forEach((id) => {
      const question = legacyQuestionById.get(id);
      if (question) seen.add(questionSignature(question));
    });
  }
  profile.seenQuestionKeys = [...seen];
  profile.completedQuizIds = profile.completedQuizIds.filter((id) => !oldQuizIds.has(id));
  oldQuizIds.forEach((id) => { delete profile.quizStates[id]; });
  for (const quiz of quizSets) {
    if (quiz.questions.every((question) => seen.has(questionSignature(question)))) {
      profile.completedQuizIds.push(quiz.id);
    }
  }
  profile.quizQuestionMixVersion = 1;
}
function migrateLegacyProgress(profile) {
  try {
    if (localStorage.getItem(legacyMigrationKey) === 'done') return;
    const completed = JSON.parse(localStorage.getItem(legacyProgressKey) || '[]');
    if (Array.isArray(completed)) completed.forEach((index) => {
      if (Number.isInteger(index) && index >= 0 && index < 10) {
        const id = `quiz-${String(index + 1).padStart(2, '0')}`;
        if (!profile.completedQuizIds.includes(id)) profile.completedQuizIds.push(id);
      }
    });
    localStorage.setItem(legacyMigrationKey, 'done');
  } catch { /* No legacy data is required. */ }
}
function showHome() {
  welcomeView.hidden = false;
  quizView.hidden = true;
  finishView.hidden = true;
  window.scrollTo(0, 0);
  if (activeProfile) updateHomeProgress();
}
function activateProfile(name) {
  const displayName = name.trim().replace(/\s+/g, ' ');
  const key = displayName.toLocaleLowerCase('tr');
  if (!key) return;
  if (!profiles[key]) profiles[key] = { displayName, completedQuizIds: [], quizStates: {}, seenQuestionKeys: [] };
  activeProfile = profiles[key];
  activeProfile.displayName = displayName;
  if (!Array.isArray(activeProfile.completedQuizIds)) activeProfile.completedQuizIds = [];
  if (!activeProfile.quizStates || typeof activeProfile.quizStates !== 'object' || Array.isArray(activeProfile.quizStates)) activeProfile.quizStates = {};
  migrateLegacyProgress(activeProfile);
  migrateQuizQuestionMix(activeProfile);
  collectSeenQuestions(activeProfile);
  activeChildName.textContent = displayName;
  profileControls.hidden = false;
  profileEntry.hidden = true;
  progressHub.hidden = false;
  saveProfiles();
  showHome();
}
function nextUncompletedQuiz() {
  if (!activeProfile) return -1;
  return quizSets.findIndex((quiz) => !activeProfile.completedQuizIds.includes(quiz.id));
}
function updateHomeProgress() {
  const index = nextUncompletedQuiz();
  quizNextPanel.hidden = index === -1;
  allQuizzesDonePanel.hidden = index !== -1;
  if (index === -1) return;
  const quiz = quizSets[index];
  nextQuizTitle.textContent = `${activeProfile.displayName}, Quiz ${quiz.number} seni bekliyor`;
  continueQuizButton.innerHTML = `Quiz ${quiz.number}'e devam et <span aria-hidden="true">→</span>`;
  const state = activeProfile.quizStates[quiz.id];
  nextQuizDetail.textContent = state?.questionIndex > 0
    ? `Kaldığın soru ${state.questionIndex + 1}/20 · İki soru türü karışık`
    : '20 soru · Yazarak ve seçeneklerden cevapla';
}
function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}
function makeQuestionOrder(quiz, profile) {
  const seen = new Set(profile.seenQuestionKeys || []);
  const unseenIds = quiz.questions.filter((question) => !seen.has(questionSignature(question))).map((question) => question.id);
  const seenIds = quiz.questions.filter((question) => seen.has(questionSignature(question))).map((question) => question.id);
  return [...shuffle(unseenIds), ...shuffle(seenIds)];
}
function focusCurrentAnswer() {
  if (questions[questionIndex]?.mode === 'choice') choiceGrid.querySelector('.choice-option')?.focus({ preventScroll: true });
  else answerInput.focus({ preventScroll: true });
}
function makeChoiceButton(option, index) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'choice-option';
  button.setAttribute('aria-pressed', 'false');
  button.innerHTML = `<span class="choice-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
  button.lastElementChild.textContent = option;
  button.addEventListener('click', () => {
    if (hasAnswered) return;
    selectedChoice = option;
    choiceGrid.querySelectorAll('.choice-option').forEach((choice) => {
      choice.classList.toggle('is-selected', choice === button);
      choice.setAttribute('aria-pressed', String(choice === button));
    });
    feedback.textContent = '';
    feedback.classList.remove('is-wrong');
    window.EnglishAudio.play(`${audioBase}words/${option}.mp3`, option);
  });
  return button;
}
function renderQuestion() {
  const question = questions[questionIndex];
  hasAnswered = false;
  selectedChoice = '';
  answerInput.value = '';
  answerInput.disabled = false;
  answerInput.classList.remove('is-correct', 'is-wrong');
  feedback.textContent = '';
  feedback.classList.remove('is-wrong');
  checkButton.disabled = false;
  nextButton.disabled = true;
  skipRepeatButton.disabled = false;
  window.EnglishAudio.stop();
  audioActions.hidden = true;
  skipRepeatButton.hidden = !activeProfile.seenQuestionKeys.includes(questionSignature(question));
  nextButton.innerHTML = questionIndex === questions.length - 1 ? 'Quizi bitir <span aria-hidden="true">✓</span>' : 'Sonraki <span aria-hidden="true">→</span>';
  sentenceText.innerHTML = question.sentence.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  hintLevel = 0;
  hintContent.textContent = question.hint;
  hintContent.hidden = true;
  hintButton.innerHTML = 'İpucu <span aria-hidden="true">?</span>';
  hintButton.setAttribute('aria-expanded', 'false');
  const choice = question.mode === 'choice';
  hintButton.innerHTML = choice ? 'İpucu <span aria-hidden="true">?</span>' : '1. ipucu';
  typingAnswer.hidden = choice;
  choiceAnswer.hidden = !choice;
  questionModeLabel.textContent = choice ? 'Doğru seçeneği bul' : 'Cümleyi tamamla';
  questionKicker.textContent = choice ? 'DOĞRU CEVABI SEÇ' : 'BOŞLUĞU DOLDUR';
  questionNote.textContent = choice ? 'Dört seçenekten birini işaretle.' : 'Büyük ya da küçük harfle yazabilirsin.';
  choiceGrid.replaceChildren();
  if (choice) shuffle(question.options).forEach((option, index) => choiceGrid.append(makeChoiceButton(option, index)));
  progressCurrent.textContent = String(questionIndex + 1);
  progressFill.style.width = `${((questionIndex + 1) / questions.length) * 100}%`;
  progressBar.setAttribute('aria-valuenow', String(questionIndex + 1));
  prevButton.disabled = questionIndex === 0;
  const furthest = activeProfile.quizStates[currentQuiz.id]?.questionIndex ?? 0;
  if (answerResults[question.id] || questionIndex < furthest) showSolved(question, answerResults[question.id]);
}
// A question that was already answered is shown solved, never asked again; audio stays available.
function showSolved(question, result) {
  hasAnswered = true;
  const shown = result ? result.guess : question.answer;
  const correct = result ? result.correct : true;
  checkButton.disabled = true;
  nextButton.disabled = false;
  skipRepeatButton.hidden = true;
  audioActions.hidden = false;
  if (question.mode === 'typing') {
    answerInput.value = shown;
    answerInput.disabled = true;
    answerInput.classList.add(correct ? 'is-correct' : 'is-wrong');
  } else {
    choiceGrid.querySelectorAll('.choice-option').forEach((choice) => {
      choice.disabled = true;
      const selected = choice.lastElementChild.textContent === shown;
      choice.classList.toggle('is-selected', selected);
      choice.setAttribute('aria-pressed', String(selected));
    });
  }
  feedback.classList.toggle('is-wrong', !correct);
  if (correct) feedback.textContent = result ? 'Cevabın doğru! Cümleyi tekrar dinleyebilirsin.' : `Bu soruyu çözdün. Doğru cevap: ${question.answer}.`;
  else feedback.innerHTML = `Güzel deneme! Doğru cevap: <b>${question.answer}</b>.`;
}
function enterQuiz(quiz) {
  if (!activeProfile) return;
  currentQuiz = quiz;
  let state = activeProfile.quizStates[quiz.id];
  if (!state || !Array.isArray(state.questionOrder) || state.questionOrder.length !== quiz.questions.length) {
    state = { questionOrder: makeQuestionOrder(quiz, activeProfile), questionIndex: 0 };
    activeProfile.quizStates[quiz.id] = state;
  }
  const ids = new Set(quiz.questions.map((question) => question.id));
  if (!state.questionOrder.every((id) => ids.has(id)) || new Set(state.questionOrder).size !== quiz.questions.length) {
    state.questionOrder = makeQuestionOrder(quiz, activeProfile);
    state.questionIndex = 0;
  }
  if (!Number.isInteger(state.questionIndex) || state.questionIndex < 0 || state.questionIndex >= quiz.questions.length) state.questionIndex = 0;
  saveProfiles();
  questions = state.questionOrder.map((id) => questionById.get(id));
  questionIndex = state.questionIndex;
  correctCount = 0;
  answerResults = {};
  welcomeView.hidden = true;
  quizView.hidden = false;
  finishView.hidden = true;
  renderQuestion();
  window.setTimeout(focusCurrentAnswer, 80);
}
function startQuiz() {
  const index = nextUncompletedQuiz();
  if (index >= 0) enterQuiz(quizSets[index]);
}
function checkAnswer() {
  if (hasAnswered) return;
  const question = questions[questionIndex];
  const guess = question.mode === 'choice' ? selectedChoice : answerInput.value.trim().toLocaleLowerCase('en');
  if (!guess) {
    feedback.textContent = question.mode === 'choice' ? 'Önce bir seçenek işaretle.' : 'Önce cevabını yazmayı dene.';
    feedback.classList.add('is-wrong');
    focusCurrentAnswer();
    return;
  }
  hasAnswered = true;
  const signature = questionSignature(question);
  if (!activeProfile.seenQuestionKeys.includes(signature)) activeProfile.seenQuestionKeys.push(signature);
  saveProfiles();
  const correct = guess.toLocaleLowerCase('en') === question.answer.toLocaleLowerCase('en');
  answerResults[question.id] = { guess, correct };
  if (correct) {
    correctCount += 1;
    feedback.textContent = 'Cevabın doğru! Cümleyi dinleyebilirsin, hazır olunca Sonraki düğmesine bas.';
    if (question.mode === 'typing') answerInput.classList.add('is-correct');
  } else {
    feedback.innerHTML = `Güzel deneme! Doğru cevap: <b>${question.answer}</b>.`;
    feedback.classList.add('is-wrong');
    if (question.mode === 'typing') answerInput.classList.add('is-wrong');
  }
  answerInput.disabled = true;
  checkButton.disabled = true;
  choiceGrid.querySelectorAll('.choice-option').forEach((choice) => { choice.disabled = true; });
  nextButton.disabled = false;
  skipRepeatButton.disabled = true;
  audioActions.hidden = false;
  playSentence(question);
  nextButton.focus();
}
function showFinish() {
  if (!activeProfile.completedQuizIds.includes(currentQuiz.id)) activeProfile.completedQuizIds.push(currentQuiz.id);
  delete activeProfile.quizStates[currentQuiz.id];
  saveProfiles();
  updateHomeProgress();
  quizView.hidden = true;
  finishView.hidden = false;
  const allDone = nextUncompletedQuiz() === -1;
  $('#finish-title').textContent = `Quiz ${currentQuiz.number} tamamlandı!`;
  $('#finish-copy').textContent = allDone
    ? 'Yirmi quizin hepsini bitirdin. Harika çalıştın!'
    : `Bu oturumda ${correctCount}/20 doğru yaptın. Hazır olduğunda sıradaki quize geçebilirsin.`;
  $('#finish-score').textContent = allDone ? `Son quizde ${correctCount}/20 doğru yaptın.` : '';
  nextQuizButton.hidden = allDone;
  backHomeButton.hidden = !allDone;
}
function advanceQuestion() {
  if (questionIndex === questions.length - 1) { showFinish(); return; }
  questionIndex += 1;
  const state = activeProfile.quizStates[currentQuiz.id];
  state.questionIndex = Math.max(state.questionIndex || 0, questionIndex);
  saveProfiles();
  renderQuestion();
  if (!hasAnswered) focusCurrentAnswer();
}
function previousQuestion() {
  if (questionIndex === 0) return;
  questionIndex -= 1;
  renderQuestion();
}

profileEntry.addEventListener('submit', (event) => { event.preventDefault(); activateProfile(profileNameInput.value); });
$('#change-profile-button').addEventListener('click', () => {
  activeProfile = null;
  profileControls.hidden = true;
  profileEntry.hidden = false;
  progressHub.hidden = true;
  profileNameInput.value = '';
  showHome();
  profileNameInput.focus({ preventScroll: true });
});
continueQuizButton.addEventListener('click', startQuiz);
nextQuizButton.addEventListener('click', startQuiz);
backHomeButton.addEventListener('click', showHome);
hintButton.addEventListener('click', () => {
  const question = questions[questionIndex];
  if (question.mode === 'typing') {
    if (hintLevel === 3) {
      hintLevel = 0;
      hintContent.hidden = true;
      hintButton.setAttribute('aria-expanded', 'false');
      hintButton.innerHTML = '1. ipucu';
      return;
    }
    hintLevel += 1;
    const hintText = hintLevel === 1
      ? question.hint
      : hintLevel === 2
        ? `Dört aday: ${question.options.join(' · ')}`
        : `Fiilin şimdiki hâli: ${question.verb}`;
    hintContent.textContent = hintText;
    hintContent.hidden = false;
    hintButton.setAttribute('aria-expanded', 'true');
    hintButton.innerHTML = hintLevel < 3 ? `${hintLevel + 1}. ipucu` : 'İpuçlarını gizle';
    return;
  }
  const expanded = hintButton.getAttribute('aria-expanded') === 'true';
  hintContent.hidden = expanded;
  hintButton.setAttribute('aria-expanded', String(!expanded));
  hintButton.innerHTML = expanded ? 'İpucu <span aria-hidden="true">?</span>' : 'İpucunu gizle';
});
checkButton.addEventListener('click', checkAnswer);
$('#play-sentence').addEventListener('click', () => { if (hasAnswered) playSentence(questions[questionIndex]); });
$('#play-sentence-slow').addEventListener('click', () => { if (hasAnswered) playSentence(questions[questionIndex], 0.7); });
prevButton.addEventListener('click', previousQuestion);
nextButton.addEventListener('click', () => { if (hasAnswered) advanceQuestion(); });
skipRepeatButton.addEventListener('click', () => { if (!skipRepeatButton.hidden) advanceQuestion(); });
answerInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') { event.preventDefault(); checkAnswer(); }
});
