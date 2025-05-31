const customName = document.getElementById('customname');
const generateBtn = document.querySelector('.randomize');  // matches your button class
const story = document.getElementById('storyText');        // matches your right-page story container

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const characters = [
  'a wizard', 'a dragon', 'a detective', 'an astronaut',
  'a chef', 'a scientist', 'a unicorn', 'a ninja'
];

const places = [
  'an enchanted forest', 'a marketplace', 'a mountain top', 'a coffee shop',
  'the ocean depths', 'a lab', 'a floating island', 'an old library'
];

const events = [
  'found a treasure map', 'met a talking animal', 'solved a puzzle',
  'cooked a perfect meal', 'built a time machine',
  'found a portal', 'spoke with plants', 'saved the day'
];

const reactions = [
  'Everyone cheered!', 'The town was amazed!',
  'It made headlines!', 'Crowds gathered to see!',
  'It was on the news!', 'Even grumps smiled!',
  'It sparked new adventures!', 'It became legend!'
];

const storyTemplates = [
  "One day, :character: was at :place: and :event:. :reaction: :name: saw it all and was amazed!",

  ":character: visited :place:, not knowing they'd soon :event:. :reaction: :name: watched in awe!",

  "At :place:, :character: unexpectedly :event:. :reaction: :name: laughed with joy!",

  "Last Tuesday at :place:, :character: suddenly :event:. :reaction: :name: wrote it all down!"
];

generateBtn.addEventListener('click', generateStory);

function generateStory() {
  const character = randomValueFromArray(characters);
  const place = randomValueFromArray(places);
  const event = randomValueFromArray(events);
  const reaction = randomValueFromArray(reactions);
  const template = randomValueFromArray(storyTemplates);

  let newStory = template;
  newStory = newStory.replace(':character:', character);
  newStory = newStory.replace(':place:', place);
  newStory = newStory.replace(':event:', event);
  newStory = newStory.replace(':reaction:', reaction);

  const name = customName.value.trim() !== '' ? customName.value.trim() : 'Alex';
  newStory = newStory.replace(':name:', name);

  story.textContent = newStory;
}

// Also generate story on Enter key press
customName.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    generateStory();
  }
});
