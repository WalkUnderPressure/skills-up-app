import { Post, PostBlockType, PostTags } from '../model/types/Post';

const MockPostDetailsData: Post = {
  id: '1',
  profileId: '1',
  title: 'Javascript news',
  subtitle: "What's new in JS for 2024?",
  img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  views: 681,
  createdAt: 1724270894246,
  tags: [PostTags.IT],
  blocks: [
    {
      id: '1',
      type: PostBlockType.TEXT,
      title: 'ECMAScript Updates',
      paragraphs: [
        'A new version of JS always causes a stir. Since the ES6 update there has been a new version every year, and we’re expecting this year’s (ES2024) to land around June.',
        'ES6 was a massive release that came six years after its predecessor, ES5. Browser vendors and JavaScript developers were overwhelmed with the sheer number of new features to adopt and learn. Since then, to prevent such a big drop of new features happening at once, there’s been a yearly release cycle.',
        'This yearly release cycle involves proposing any new features, which are then discussed, evaluated, then voted on by a committee before they’re added to the language. This process also allows browsers to try to implement the proposals before they’re officially added to the language, which may help iron out any implementation problems.',
      ],
    },
    {
      id: '4',
      type: PostBlockType.CODE,
      code: 'const today = Temporal.Now.plainDateISO();\n\nconst lastWeek = today.subtract({ days: 7});\n\nconst nextWeek = today.add({ days: 7 });',
    },
    {
      id: '5',
      type: PostBlockType.TEXT,
      title: 'Pipe Operator',
      paragraphs: [
        'In the State of JS 2022 survey, the sixth top answer to “What do you feel is currently missing from JavaScript?” was a Pipe Operator.',
        'A pipe operator is a standard feature in functional languages that allows you to “pipe” a value from one function to another, with the output of the previous function being used as the input to the next (in a similar way that the Fetch API passes any data it returns from one promise to the next).',
      ],
    },
    {
      id: '2',
      type: PostBlockType.IMAGE,
      src: 'https://wavelop.com/static/528bbb228615a3160dcbe094c6fe905e/ba228/js-pipe-function.png',
      title:
        'A pipe function is a function that accepts a series of functions, which process an input parameter and return a output which will be the input for the next function.',
    },
    {
      id: '7',
      type: PostBlockType.TEXT,
      title: 'Records and Tuples',
      paragraphs: [
        'The Record and Tuple proposal aims to bring immutable data structures to JavaScript.',
        'Tuples are similar to arrays — an ordered list of values — but they’re deeply immutable. This means that every value in a tuple must either be a primitive value or another record or tuple (not arrays or objects, because they are mutable in JavaScript).',
      ],
    },
    {
      id: '3',
      type: PostBlockType.CODE,
      //   code: 'const heroes = #["Batman", "Superman", "Wonder Woman"]',
      code: 'const heroes = #["Batman", "Superman", "Wonder Woman", The Record and Tuple proposal aims to bring immutable data structures to JavaScript.]',
    },
    {
      id: '3',
      type: PostBlockType.CODE,
      code: 'const traitors = #{\n  diane: false,\n  paul: true,\n  zac: false,\n  harry: true\n}',
    },
  ],
};

const MockPostDetailsDataTwo: Post = {
  id: '2',
  profileId: '2',
  title: 'What is Science?',
  subtitle: 'Short info about science',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MANNapoli_124545_plato%27s_academy_mosaic.jpg/920px-MANNapoli_124545_plato%27s_academy_mosaic.jpg',
  views: 991,
  createdAt: 1724548384024,
  tags: [PostTags.SCIENCE],
  blocks: [
    {
      id: '1',
      type: PostBlockType.TEXT,
      title: 'Etymology',
      paragraphs: [
        'The word science has been used in Middle English since the 14th century in the sense of "the state of knowing". The word was borrowed from the Anglo-Norman language as the suffix -cience, which was borrowed from the Latin word scientia, meaning "knowledge, awareness, understanding". It is a noun derivative of the Latin sciens meaning "knowing", and undisputedly derived from the Latin sciō, the present participle scīre, meaning "to know".',
      ],
    },
    {
      id: '4',
      type: PostBlockType.IMAGE,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Plimpton_322.jpg/1920px-Plimpton_322.jpg',
      title: 'Babylonian tablet listing pythagorean triples',
    },
    {
      id: '2',
      type: PostBlockType.TEXT,
      title: 'History',
      paragraphs: [
        'Science has no single origin. Rather, systematic methods emerged gradually over the course of tens of thousands of years, taking different forms around the world, and few details are known about the very earliest developments. Women likely played a central role in prehistoric science, as did religious rituals. Some scholars use the term "protoscience" to label activities in the past that resemble modern science in some but not all features; however, this label has also been criticised as denigrating, or too suggestive of presentism, thinking about those activities only in relation to modern categories.',
      ],
    },
  ],
};

export { MockPostDetailsData, MockPostDetailsDataTwo };
