const questionGroups = [
  { verb: 'be', answer: 'was', answers: ['was', 'was', 'was', 'was', 'was', 'was', 'was', 'was', 'were', 'were', 'were', 'were', 'were', 'were', 'were', 'were'], sentences: [
    'Yesterday, I _____ at the park.', 'Mia _____ happy with her new book.',
    'My brother _____ first in line.', 'The little cat _____ under the table.',
    'It _____ sunny on Monday.', 'Dad _____ at the library after work.',
    'The soup _____ hot at lunchtime.', 'I _____ sleepy after the long walk.',
    'We _____ ready for the school show.', 'They _____ at the beach last Sunday.',
    'My friends _____ excited about the game.', 'Sam and Ella _____ in the garden.',
    'Mum and I _____ early for the bus.', 'The puppies _____ very small.',
    'You _____ kind to your new classmate.', 'The twins _____ at their grandma’s house.',
  ] },
  { verb: 'beat', answer: 'beat', sentences: [
    'Yesterday, I _____ my brother at chess.', 'Our team _____ the Tigers in the match.',
    'Nora _____ me in a race at school.', 'The red team _____ the blue team at football.',
    'We _____ the other class at basketball.', 'Dad _____ me at table tennis.',
    'Maya _____ her best score in the game.', 'The little horse _____ the big horse in the race.',
    'My cousin _____ me at cards last night.', 'They _____ their friends in the quiz.',
    'Ali _____ me in a board game.', 'Our school _____ the next match.',
    'Lena _____ her sister at badminton.', 'The home team _____ the visitors.',
    'I _____ my dad at checkers.', 'The blue player _____ the champion.',
    'We _____ them in the final game.', 'My friend _____ me by one point.',
  ] },
  { verb: 'become', answer: 'became', sentences: [
    'The caterpillar _____ a butterfly.', 'The sky _____ dark before the storm.',
    'My baby cousin _____ sleepy after lunch.', 'The small seed _____ a tall flower.',
    'The quiet room _____ noisy when we came in.', 'Our little puppy _____ a big dog.',
    'The snow _____ soft and wet in the sun.', 'Reading _____ my favourite part of the day.',
    'The water _____ cold in the fridge.', 'A tiny acorn _____ a big oak tree.',
    'The game _____ more fun when my friends joined.', 'The soup _____ warm after a few minutes.',
    'The room _____ bright when we opened the curtains.', 'The baby bird _____ strong enough to fly.',
    'Our class _____ quiet when the teacher arrived.', 'The path _____ muddy after the rain.',
    'The little idea _____ a fun school project.', 'The day _____ special when Grandma visited.',
  ] },
  { verb: 'begin', answer: 'began', sentences: [
    'The movie _____ at six o’clock.', 'Our lesson _____ after the bell rang.',
    'The race _____ when the whistle blew.', 'The rain _____ during our walk.',
    'The story _____ with a funny surprise.', 'The baby _____ to laugh at the puppet.',
    'The music _____ when I pressed play.', 'The school concert _____ on time.',
    'The game _____ after lunch.', 'The little bird _____ to sing in the morning.',
    'We _____ our art project on Tuesday.', 'The class _____ reading a new book.',
    'The clouds _____ to move across the sky.', 'The clock _____ to ring at seven.',
    'Our trip _____ early on Saturday.', 'The puppy _____ to follow me.',
    'The show _____ with a bright light.', 'I _____ my homework after dinner.',
  ] },
  { verb: 'break', answer: 'broke', sentences: [
    'I _____ my pencil by accident.', 'The toy car _____ when it fell.',
    'Ben _____ a cookie in half.', 'The little branch _____ in the wind.',
    'We _____ the piñata at the party.', 'A wave _____ over the sandcastle.',
    'My crayon _____ while I was colouring.', 'The old chair _____ with a loud sound.',
    'Ella _____ the chocolate bar into pieces.', 'The egg _____ when it hit the floor.',
    'The stick _____ when Max stepped on it.', 'I _____ the biscuit and shared it.',
    'The cup _____, but nobody got hurt.', 'The ice _____ under the warm sun.',
    'Our kite _____ free from the string.', 'The toy robot _____ after it fell off the shelf.',
    'The chocolate _____ into four small squares.', 'He _____ the crackers before adding cheese.',
  ] },
  { verb: 'bring', answer: 'brought', sentences: [
    'Sam _____ his lunch to school.', 'I _____ my teddy bear on the trip.',
    'Mum _____ warm coats for everyone.', 'We _____ a ball to the park.',
    'The children _____ their drawings to class.', 'Dad _____ home a bunch of bananas.',
    'My friend _____ a new game to play.', 'Lily _____ flowers for her teacher.',
    'They _____ their dog to the beach.', 'You _____ a big smile to the party.',
    'Our neighbours _____ cookies for the party.', 'The guide _____ a map for us.',
    'I _____ my favourite book to the sleepover.', 'Ben _____ his little sister a glass of water.',
    'The team _____ their medals to school.', 'Grandpa _____ old photos to show us.',
    'We _____ some snacks for the long ride.', 'A kind helper _____ blankets for the puppies.',
  ] },
  { verb: 'build', answer: 'built', sentences: [
    'They _____ a big sandcastle.', 'We _____ a den from blankets.',
    'My sister _____ a tall tower with blocks.', 'Dad _____ a birdhouse for the garden.',
    'The children _____ a snowman after school.', 'I _____ a bridge with my toy bricks.',
    'Our class _____ a model of a rocket.', 'The beavers _____ a dam in the stream.',
    'Maya _____ a little house for her dolls.', 'We _____ a fort under the table.',
    'The workers _____ a new playground.', 'My brother _____ a robot from boxes.',
    'They _____ a path through the garden.', 'I _____ a tower that reached my knees.',
    'The ants _____ a home under the ground.', 'Grandpa _____ a bench for the park.',
    'Our team _____ a raft for the race.', 'The children _____ a castle from cardboard.',
  ] },
  { verb: 'buy', answer: 'bought', sentences: [
    'Dad _____ apples at the shop.', 'I _____ a blue notebook yesterday.',
    'Mum _____ fresh bread for breakfast.', 'We _____ tickets for the school play.',
    'Ella _____ a birthday card for her friend.', 'They _____ a football at the market.',
    'My uncle _____ a warm hat for winter.', 'I _____ a small plant for my room.',
    'The class _____ paint for the art project.', 'Ben _____ a toy train with his pocket money.',
    'We _____ strawberries from the farm shop.', 'Grandma _____ a new lamp for the living room.',
    'She _____ two pencils before class.', 'Our family _____ a big watermelon.',
    'The children _____ lemonade at the fair.', 'He _____ a gift for his sister.',
    'I _____ a comic book after school.', 'Dad _____ a loaf of bread on his way home.',
  ] },
  { verb: 'can', answer: 'could', sentences: [
    'When I was six, I _____ ride a bike.', 'Nina _____ read when she was five.',
    'We _____ see the moon through the window.', 'My grandpa _____ run very fast as a boy.',
    'The baby _____ walk with help last month.', 'I _____ hear the birds in the garden.',
    'They _____ swim across the small pool.', 'Milo _____ climb the low tree by himself.',
    'You _____ play that song on the piano.', 'My sister _____ count to one hundred.',
    'The little dog _____ jump over the log.', 'We _____ visit the museum on our trip.',
    'I _____ see the mountains from the train.', 'Tom _____ tie his shoes all by himself.',
    'The class _____ answer every question.', 'She _____ speak a little French last year.',
    'Our team _____ finish the puzzle together.', 'The bird _____ fly over the tall fence.',
  ] },
  { verb: 'catch', answer: 'caught', sentences: [
    'Lena _____ the ball.', 'I _____ a big fish with Dad.',
    'The goalkeeper _____ the football near the goal.', 'Mum _____ the keys before they hit the floor.',
    'We _____ butterflies in our nets and let them go.', 'Ben _____ the bus just in time.',
    'The kitten _____ a toy mouse.', 'My brother _____ the frisbee in the park.',
    'Ava _____ the ball with one hand.', 'The dog _____ the stick in mid-air.',
    'I _____ a snowflake on my mitten.', 'They _____ the train at the station.',
    'Our team _____ the ball near the net.', 'The farmer _____ a chicken in the yard.',
    'You _____ the ruler before it fell.', 'The little boy _____ his hat in the wind.',
    'Grandpa _____ the small fish carefully.', 'The goalie _____ every ball in the game.',
  ] },
  { verb: 'choose', answer: 'chose', sentences: [
    'He _____ the blue T-shirt.', 'I _____ the apple for my snack.',
    'Mina _____ a story for bedtime.', 'We _____ the red team name.',
    'They _____ seats near the window.', 'My brother _____ the longest pencil.',
    'The class _____ a song to sing.', 'Dad _____ a funny hat at the shop.',
    'Ella _____ the yellow ribbon for her art.', 'You _____ a great book from the library.',
    'I _____ the chocolate ice cream.', 'Our friends _____ a game to play.',
    'Sam _____ the green crayon from the box.', 'The captain _____ Maya for the team.',
    'We _____ the path beside the river.', 'She _____ a small gift for her cousin.',
    'The children _____ their favourite animal.', 'I _____ the easiest puzzle first.',
  ] },
  { verb: 'come', answer: 'came', sentences: [
    'My cousin _____ to our house.', 'The bus _____ around the corner.',
    'Grandma _____ to watch our school show.', 'A little bird _____ to the window.',
    'My friends _____ over after lunch.', 'The puppy _____ when I called its name.',
    'Dad _____ home before dinner.', 'The first snow _____ in December.',
    'Our teacher _____ into the classroom smiling.', 'The train _____ right on time.',
    'Mia _____ to my birthday party.', 'The moon _____ out after sunset.',
    'A bright idea _____ to me during the walk.', 'The kitten _____ out from under the bed.',
    'They _____ back from the park at five.', 'My aunt _____ to visit us last weekend.',
    'The little duck _____ close to the pond.', 'The story _____ to an exciting end.',
  ] },
  { verb: 'cost', answer: 'cost', sentences: [
    'The toy _____ five lira at the shop.', 'My bus ticket _____ ten lira yesterday.',
    'The bright sticker _____ one lira.', 'Those apples _____ twelve lira at the market.',
    'The little book _____ twenty lira last week.', 'Our ice creams _____ thirty lira altogether.',
    'The blue ball _____ fifteen lira at the store.', 'That big cake _____ one hundred lira.',
    'The pencils _____ two lira each.', 'The museum ticket _____ five lira for children.',
    'My new gloves _____ forty lira at the market.', 'The box of crayons _____ twenty-five lira.',
    'The red kite _____ thirty lira yesterday.', 'Those storybooks _____ ten lira each.',
    'The small plant _____ eight lira at the garden shop.', 'Our snacks _____ twelve lira in total.',
    'The shiny badge _____ three lira at the fair.', 'That warm scarf _____ fifty lira in the shop.',
  ] },
  { verb: 'cut', answer: 'cut', sentences: [
    'I _____ the paper with scissors.', 'Mum _____ the cake into eight pieces.',
    'We _____ coloured shapes for our project.', 'Ben _____ the string with little scissors.',
    'The gardener _____ the grass on Saturday.', 'I _____ my sandwich in half.',
    'Ella _____ a star from yellow paper.', 'Dad _____ the ribbon for the present.',
    'They _____ the old branches in the garden.', 'The children _____ pictures from a magazine.',
    'My brother _____ the wrapping paper carefully.', 'We _____ the apple into small pieces.',
    'She _____ a paper heart for her friend.', 'I _____ the tag off my new shirt.',
    'The cook _____ carrots for the soup.', 'He _____ a small window in the cardboard.',
    'Our class _____ paper strips for the collage.', 'Grandma _____ the bread into thick slices.',
  ] },
];

const continuationGroups = [
  { verb: 'do', answer: 'did', sentences: [
    'I _____ my homework after school.', 'Mum _____ the shopping on Saturday.',
    'We _____ a science project together.', 'He _____ the dishes after dinner.',
    'They _____ a good job on the poster.', 'Nora _____ her best in the race.',
    'Dad _____ the cooking last night.', 'I _____ ten jumping jacks in class.',
    'Our team _____ a warm-up before the game.', 'The children _____ a puzzle at the library.',
    'My brother _____ his chores before lunch.', 'You _____ a kind thing for your friend.',
    'Ella _____ a dance for the school show.', 'We _____ a fun activity in art class.',
    'The class _____ an experiment with water.', 'I _____ the first page of my workbook.',
    'Grandpa _____ some gardening in the morning.', 'They _____ a great job building the model.',
    'She _____ a drawing for her teacher.', 'The helpers _____ their work before sunset.',
  ] },
  { verb: 'drink', answer: 'drank', sentences: [
    'I _____ a glass of water after the game.', 'Leo _____ warm milk before bed.',
    'We _____ lemonade at the picnic.', 'The puppy _____ water from its bowl.',
    'Mia _____ orange juice with breakfast.', 'They _____ hot chocolate on the cold day.',
    'Dad _____ a cup of tea in the morning.', 'The players _____ water during the break.',
    'I _____ apple juice with my lunch.', 'Grandma _____ some water after her walk.',
    'The children _____ milk at snack time.', 'Sam _____ from his new water bottle.',
    'We _____ soup from our cups at lunch.', 'The thirsty horse _____ from the stream.',
    'She _____ a smoothie after swimming.', 'My friends _____ water before the race.',
    'The baby _____ from a little cup.', 'I _____ warm tea when I had a cold.',
    'Our class _____ water after PE.', 'He _____ a small glass of juice.',
  ] },
  { verb: 'drive', answer: 'drove', sentences: [
    'Mum _____ us to school yesterday.', 'Dad _____ the car to the farm.',
    'Our taxi _____ slowly through town.', 'Aunt May _____ to our house on Sunday.',
    'The bus _____ over the bridge.', 'Grandpa _____ us to the zoo last week.',
    'The delivery driver _____ the van to the shop.', 'Mum _____ home after work.',
    'The teacher _____ the minibus on our trip.', 'Dad _____ along the quiet country road.',
    'Our neighbour _____ to the market in the morning.', 'The driver _____ carefully in the rain.',
    'Auntie _____ us to the swimming pool.', 'The bus _____ past the green fields.',
    'Grandma _____ her little car to the library.', 'The coach _____ the team to the match.',
    'Mum _____ across town to visit her friend.', 'The farmer _____ his tractor to the barn.',
    'Dad _____ us back home before dinner.', 'The taxi _____ to the train station.',
  ] },
  { verb: 'eat', answer: 'ate', sentences: [
    'I _____ a cheese sandwich for lunch.', 'We _____ watermelon in the garden.',
    'Mina _____ her breakfast before school.', 'The rabbits _____ carrots from the basket.',
    'Dad _____ pasta for dinner last night.', 'They _____ their snacks after the game.',
    'My little brother _____ all his peas.', 'The class _____ fruit during the break.',
    'I _____ a warm bowl of soup at lunch.', 'The goats _____ leaves by the fence.',
    'Grandma _____ a slice of apple pie.', 'We _____ pancakes on Sunday morning.',
    'Sam _____ his picnic under a tree.', 'The ducks _____ crumbs by the pond.',
    'She _____ rice and vegetables for dinner.', 'Our family _____ together at the table.',
    'The puppy _____ its dinner from the bowl.', 'I _____ two strawberries from the plant.',
    'The children _____ popcorn during the film.', 'He _____ an orange after his walk.',
  ] },
  { verb: 'feel', answer: 'felt', sentences: [
    'I _____ happy when my friend visited.', 'Maya _____ proud of her picture.',
    'We _____ excited before the school trip.', 'The kitten _____ warm in its soft bed.',
    'Dad _____ tired after the long walk.', 'They _____ better after a good rest.',
    'Liam _____ nervous before the show.', 'The puppy _____ safe beside its mum.',
    'I _____ cold outside without my coat.', 'Our team _____ cheerful after the game.',
    'Grandma _____ much better in the morning.', 'She _____ surprised by the birthday cake.',
    'The little bird _____ brave on its first flight.', 'You _____ very kind to the new student.',
    'We _____ hungry after playing outside.', 'He _____ sad when the story ended.',
    'The children _____ calm after the music.', 'I _____ sleepy on the ride home.',
    'My sister _____ proud when she finished the puzzle.', 'Everyone _____ welcome at the party.',
  ] },
  { verb: 'fight', answer: 'fought', sentences: [
    'The two teams _____ hard to win the game.', 'In the story, the knights _____ a dragon.',
    'The puppies _____ over the same toy, so we gave them two.', 'Mum and Dad _____ a cold with rest and warm soup.',
    'The brave hero _____ a monster in the story.', 'Our team _____ for the last point.',
    'The squirrels _____ over a nut in the cartoon.', 'The players _____ fairly for the trophy.',
    'The little robots _____ in the funny film.', 'The two boxers _____ in the sports story.',
    'The fox and the bear _____ in the fable.', 'The team _____ back and won the match.',
    'The brave mouse _____ the giant in the tale.', 'The players _____ for a place in the final.',
    'The toy soldiers _____ in my make-believe game.', 'The friends _____ over a ball, then shared it.',
    'The superheroes _____ the space monster together.', 'The wrestlers _____ in the school show.',
    'The characters _____ for the magic key.', 'The two teams _____ until the final whistle.',
  ] },
  { verb: 'find', answer: 'found', sentences: [
    'I _____ my missing sock under the bed.', 'Nina _____ a shiny shell at the beach.',
    'We _____ the answer in our book.', 'Dad _____ his keys on the table.',
    'The dog _____ a stick in the garden.', 'They _____ a quiet place to read.',
    'Mum _____ my hat by the front door.', 'The children _____ a frog near the pond.',
    'I _____ a funny note in my lunchbox.', 'Sam _____ his toy car behind the sofa.',
    'The class _____ three shapes in the picture.', 'Grandpa _____ an old photo in a box.',
    'She _____ a feather beside the tree.', 'We _____ our way back to the picnic spot.',
    'The puppy _____ its ball in the grass.', 'You _____ the last piece of the puzzle.',
    'Maya _____ a blue flower in the field.', 'The hikers _____ a path through the woods.',
    'I _____ my library book in my backpack.', 'The family _____ a nice spot for lunch.',
  ] },
  { verb: 'fly', answer: 'flew', sentences: [
    'The bird _____ over the tall trees.', 'My kite _____ high above the park.',
    'We _____ to Ankara on a plane.', 'A butterfly _____ past the flowers.',
    'The paper plane _____ across the room.', 'The geese _____ south for the winter.',
    'Dad _____ to Izmir for a work trip.', 'The little bird _____ back to its nest.',
    'Our kite _____ over the beach.', 'The plane _____ above the clouds.',
    'A dragon _____ across the sky in the story.', 'The bees _____ from flower to flower.',
    'My red balloon _____ up into the sky.', 'The owl _____ quietly through the night.',
    'The toy helicopter _____ around the room.', 'The swans _____ over the lake.',
    'We _____ home after our holiday.', 'The flag _____ in the strong wind.',
    'A tiny insect _____ near the window.', 'The superhero _____ over the city in the comic.',
  ] },
  { verb: 'forget', answer: 'forgot', sentences: [
    'I _____ my book at home yesterday.', 'Mert _____ to bring his lunchbox.',
    'We _____ the name of the game.', 'She _____ her umbrella on the bus.',
    'Dad _____ to buy the bread.', 'They _____ where they put the map.',
    'I _____ my water bottle at school.', 'The boy _____ his lines in the play.',
    'Mum _____ her glasses on the kitchen table.', 'You _____ to feed the fish this morning.',
    'The class _____ the last word in the song.', 'I _____ my friend’s birthday, so I called her late.',
    'He _____ to close the garden gate.', 'We _____ the picnic blanket in the car.',
    'Aylin _____ her homework folder at home.', 'The tourists _____ the way back to the hotel.',
    'My brother _____ his gloves at the park.', 'The team _____ to bring their ball.',
    'I _____ the answer for a moment, then remembered it.', 'She _____ her library card in her coat pocket.',
  ] },
];

const reviewSentences = [
  { verb: 'be', answer: 'was', sentence: 'Yesterday, I _____ at the park.' },
  { verb: 'be', answer: 'were', sentence: 'Last night, we _____ very tired.' },
  { verb: 'beat', answer: 'beat', sentence: 'Mia _____ me in the game yesterday.' },
  { verb: 'become', answer: 'became', sentence: 'The caterpillar _____ a butterfly.' },
  { verb: 'begin', answer: 'began', sentence: 'The movie _____ at six o’clock last night.' },
  { verb: 'break', answer: 'broke', sentence: 'I _____ my pencil by accident.' },
  { verb: 'bring', answer: 'brought', sentence: 'Sam _____ his lunch to school yesterday.' },
  { verb: 'build', answer: 'built', sentence: 'They _____ a big sandcastle at the beach.' },
  { verb: 'buy', answer: 'bought', sentence: 'Dad _____ apples at the shop yesterday.' },
  { verb: 'can', answer: 'could', sentence: 'When I was six, I _____ ride a bike.' },
  { verb: 'catch', answer: 'caught', sentence: 'Lena _____ the ball during the game.' },
  { verb: 'choose', answer: 'chose', sentence: 'He _____ the blue T-shirt at the shop.' },
  { verb: 'come', answer: 'came', sentence: 'My cousin _____ to our house last Sunday.' },
  { verb: 'cost', answer: 'cost', sentence: 'The toy _____ five lira at the shop.' },
  { verb: 'cut', answer: 'cut', sentence: 'I _____ the paper with scissors yesterday.' },
  { verb: 'be', answer: 'was', sentence: 'The soup _____ hot at lunchtime.' },
  { verb: 'beat', answer: 'beat', sentence: 'Our school _____ the next match last week.' },
  { verb: 'become', answer: 'became', sentence: 'The sky _____ dark before the storm.' },
  { verb: 'begin', answer: 'began', sentence: 'The race _____ when the whistle blew.' },
  { verb: 'break', answer: 'broke', sentence: 'The toy car _____ when it fell.' },
];

const hintByVerb = {
  be: 'Birinin nerede olduğunu ya da nasıl hissettiğini anlatır.',
  beat: 'Bir yarışta ya da oyunda rakibini yenmek.',
  become: 'Tırtılın kelebeğe dönüşmesi.',
  begin: 'Bir işe ilk adımı atmak.',
  break: 'Bir şeyi parçalara ayırmak ya da bir şeyin bozulması.',
  bring: 'Bir şeyi yanında getirip bulunduğun yere taşımak.',
  build: 'Parçaları birleştirerek bir şey yapmak.',
  buy: 'Bir şeyi para vererek almak.',
  can: 'Geçmişte bir şeyi yapabilme gücüne sahip olmak.',
  catch: 'Havada gelen topu ellerinle yakalamak.',
  choose: 'İki ya da daha çok seçenekten birini belirlemek.',
  come: 'Başka bir yerden bulunduğun yere gelmek.',
  cost: 'Bir şeyin fiyatını söylemek.',
  cut: 'Makasla kâğıdı parçalara ayırmak.',
  do: 'Bir işi ya da ödevi yapmak.',
  drink: 'Su ya da meyve suyu içmek.',
  drive: 'Arabayı kullanmak.',
  eat: 'Yemeği ağzına alıp yemek.',
  feel: 'Mutlu, üzgün ya da yorgun olmak gibi bir duygu yaşamak.',
  fight: 'Bir maçta ya da hikâyede karşı tarafla mücadele etmek.',
  find: 'Kaybolan bir şeyi arayıp bulmak.',
  fly: 'Kuşların ya da uçağın gökyüzünde ilerlemesi.',
  forget: 'Bir şeyi hatırlayamamak.',
};

const questionLimits = { be: 16, beat: 15, become: 14, begin: 14, break: 14, bring: 14, build: 14, buy: 14, can: 14, catch: 14, choose: 14, come: 14, cost: 14, cut: 15 };

function interleaveGroups(groups, prefix, limits = {}) {
  const questions = [];
  const maxLength = Math.max(...groups.map(({ verb, sentences }) => limits[verb] ?? sentences.length));
  for (let round = 0; round < maxLength; round += 1) {
    groups.forEach(({ verb, answer, answers, sentences }) => {
      if (round < (limits[verb] ?? sentences.length)) {
        questions.push({
          id: `${prefix}-${verb}-${round + 1}`,
          verb,
          answer: answers?.[round] ?? answer,
          hint: hintByVerb[verb],
          sentence: sentences[round].replace('_____', '<span class="blank">_____</span>'),
        });
      }
    });
  }
  return questions;
}

const oldQuestions = interleaveGroups(questionGroups, 'old', questionLimits);
const reviewedQuestions = reviewSentences.map(({ verb, answer, sentence }, index) => ({
  id: `review-${index + 1}`,
  verb,
  answer,
  hint: hintByVerb[verb],
  sentence: sentence.replace('_____', '<span class="blank">_____</span>'),
}));
const newQuestions = interleaveGroups(continuationGroups, 'new');
const continuationQuestions = [];
for (let round = 0; round < 20; round += 1) {
  continuationQuestions.push(...newQuestions.slice(round * continuationGroups.length, (round + 1) * continuationGroups.length));
  continuationQuestions.push(reviewedQuestions[round]);
}
const answerForms = [...new Set([...questionGroups, ...continuationGroups].map(({ answer }) => answer).concat(reviewSentences.map(({ answer }) => answer)))];

function stableShuffle(items, seed) {
  const result = [...items];
  let state = Array.from(seed).reduce((value, char) => ((value * 31) + char.charCodeAt(0)) >>> 0, 7);
  for (let index = result.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const target = state % (index + 1);
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function makeOptions(question) {
  const distractors = stableShuffle(answerForms.filter((answer) => answer !== question.answer), question.id).slice(0, 3);
  return stableShuffle([question.answer, ...distractors], `${question.id}-options`);
}

function makeQuizzes(questions, firstNumber) {
  return Array.from({ length: 10 }, (_, quizIndex) => {
    const quizNumber = firstNumber + quizIndex;
    const quizQuestions = questions.slice(quizIndex * 20, (quizIndex + 1) * 20).map((question, index) => ({
      ...question,
      mode: index % 2 === 0 ? 'typing' : 'choice',
      options: makeOptions(question),
    }));
    return { id: `quiz-${String(quizNumber).padStart(2, '0')}`, number: quizNumber, questions: quizQuestions };
  });
}

const quizSets = [...makeQuizzes(oldQuestions, 1), ...makeQuizzes(continuationQuestions, 11)];
