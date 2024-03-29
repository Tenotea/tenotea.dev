import { PortfolioProject } from "../projects";

export const arioso:PortfolioProject = {
  id: 'arioso-web-music-player',
  name: 'Arioso',
  label: 'frontend',
  feature: true,
  position: 6,
  primaryImage: {
    id: 4,
    name: 'Arioso - Song list',
    url: 'https://i.ibb.co/h907Zwm/Arioso-01.png',
  },
  domainName: 'arioso.ml',
  url: 'https://arioso.ml',
  metaDescription: 'A fully featured web based music player built with nuxt.js with PWA features.',
  description: 'Arioso is a web based music player built as a progressive web app which was enables it to work fully offline. It is fully featured and works with common audio qualities.',
  technologies: [
    {
      id: 1,
      name: 'Nuxt.js',
      url: 'https://nutxjs.org'
    },
    {
      id: 2,
      name: 'Vuetify.js',
      url: 'https://vuetifyjs.com'
    },
    {
      id: 3,
      name: 'LocalForage',
      url: 'https://localforage.github.io/localForage/'
    },
    {
      id: 4,
      name: 'Some browser APIs',
      url: 'https://web.dev/learn'
    }
  ],
  durationOfCompletion: 'A working version was built within 15days',
  myRole: 'Frontend engineer in a team of two. I built the whole thing and got some help improving the performance',
  productsDeveloped: ['A music player'],
  snapshots: [
    {
      id: 2,
      name: 'Arioso - Music session',
      url: 'https://i.ibb.co/BjLkQNh/arioso-2.png'
    },
    {
      id: 3,
      name: 'Arioso - Music list',
      url: 'https://i.ibb.co/h907Zwm/Arioso-01.png'
    }
  ],
  theme: '#c1403d'
}
