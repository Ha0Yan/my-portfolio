import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hal Yan | Full Stack Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Hao(Hal) Yan',
  subtitle: 'Full Stack Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I currently am working as a Full Stack Engineer located in Vancouver,BC. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.',
  paragraphTwo:
    'I am confident, naturally curious, well-organized person with high attention to detail. Outside of work I have a cat. A big fan of outdoor activities, trying out new recipe in the kitchen',
  paragraphThree:
    ' I would love to get coffee and get to know you, so don’t hesitate to get in touch.',
  resume: 'https://drive.google.com/file/d/1rHEPbeaoT-1YS2JB5ZLk9F8Azrh6R8JM/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Portfolio Website',
    info: '',
    info2: '',
    points: [
      'Implementation based on a portfolio template',
      'Became familiar with the basics of Gatsby for React',
      'Modern UI Design + Reveal Animations',
      'One Page Layout built with React & Gatsby',
      'Styled with Bootstrap v4.3 + Custom SCSS',
      'Fully Responsive',
    ],
    url: 'https://haoyan.netlify.app/',
    repo: 'https://github.com/Ha0Yan/my-portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Realtime Chat App',
    info: '',
    info2: '',
    points: [
      'Implemented the website from concept through deployment referenced the tutorial',
      'Using React 16.8+ with hooks and a CSS Framework - Material UI',
      'Implemented with React Router, React Context API',
      'Linked Google Authentication',
      'Connected real-time database - Firebase Firestore',
      'Deployment using Firebase',
    ],
    url: 'https://realtime-app-22dca.web.app/rooms/RH1T5v3IFptuqAbW3tYp',
    repo: 'https://github.com/Ha0Yan/realtime-app', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: '',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in doing a project together?',
  btn: '',
  email: 'hal.yan@dal.ca',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hal-yan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ha0Yan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
