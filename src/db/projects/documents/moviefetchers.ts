import { PortfolioProject } from "../projects";

export const movieFetchers:PortfolioProject = {
  id: 'movie-fetchers-asian-dramas',
  name: 'Movie Fetchers',
  label: 'frontend',
  feature: true,
  position: 5,
  primaryImage: {
    id: 1,
    url: 'https://i.ibb.co/mG10p98/moviefetchers-01.png'
  },
  domainName: 'moviefetchers.cf',
  url: 'https://moviefetchers.cf',
  metaDescription: 'Asian Dramas at their best in multiple downloadable formats.',
  description: 'Moviefetchers is a web app built to provide up-to-date information on asian dramas. It was built as a progressive web app (PWA) to assist with the already simple UI Design. The download features is its flagship',
  technologies: [
    {
      id: 1,
      name: 'Vue.js',
      url: 'https://nuxtjs.org'
    },
    {
      id: 2,
      name: 'Vuetify.js',
      url: 'https://vuetifyjs.com'
    },
    {
      id: 3,
      name: 'Node.js',
      url: 'https://nodejs.org'
    },
    {
      id: 4,
      name: 'MongoDB',
      url: 'https://mongodb.com'
    },
    {
      id: 5,
      name: 'Web scraping with axios.js',
      url: 'https://npmjs.com/axios'
    }
  ],
  durationOfCompletion: 'A working version was built within 40days',
  myRole: 'I was the solo Fullstack engineer of the project. I started from ground up the UI Design, to building the REST API and then consuming it in building the website as we know it. This would end up becoming my first design-to-code project and even now, I am still very proud of it',
  productsDeveloped: ['Movie Fetchers website', 'Admin Panel', 'REST APIs'],
  snapshots: [
    {
      id: 2,
      url: 'https://i.ibb.co/XJMXb1v/moviefetchers-02.png'
    }
  ],
  theme: '#ff4747'
}
