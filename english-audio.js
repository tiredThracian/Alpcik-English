// Plays the prepared MP3 clips and falls back to the browser voice when a clip is missing.
(() => {
  let current = null;
  let token = 0;
  function speak(text, rate) {
    return new Promise((resolve) => {
      if (!text || !('speechSynthesis' in window)) { resolve(false); return; }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = Math.min(rate, 1) * 0.92;
      utterance.onend = () => resolve(true);
      utterance.onerror = () => resolve(false);
      window.speechSynthesis.speak(utterance);
    });
  }
  function stop() {
    token += 1;
    if (current) { current.pause(); current = null; }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }
  // Resolves when playback ends (true) or could not play at all (false).
  function play(src, text, rate = 1) {
    stop();
    const mine = token;
    return new Promise((resolve) => {
      const fallback = () => { if (mine === token) speak(text, rate).then(resolve); else resolve(false); };
      const clip = new Audio(src);
      current = clip;
      clip.preservesPitch = true;
      clip.playbackRate = rate;
      clip.onended = () => resolve(true);
      clip.onerror = fallback;
      clip.play().catch(fallback);
    });
  }
  window.EnglishAudio = { play, stop };
})();
