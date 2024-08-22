import { Post, PostBlockType, PostTags } from '../model/types/Post';

const MockPostDetailsData: Post = {
  id: '1',
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

export { MockPostDetailsData };
