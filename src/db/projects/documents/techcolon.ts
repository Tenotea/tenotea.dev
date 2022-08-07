import { PortfolioProject } from "../projects";

export const techcolon:PortfolioProject = {
  id: 'techcolon-blog',
  name: 'Techcolon',
  label: 'frontend',
  feature: true,
  position: 8,
  primaryImage: {
    id: 1,
    url: 'https://i.ibb.co/By1fxVm/techcolon-01.png'
  },
  domainName: 'techcolon.net',
  url: 'https://techcolon.net',
  metaDescription: 'My personal blog where i write web related contents just for the fun of it.',
  description: 'Techcolon is my way of giving back to the community that helped me grow. Even though I don\'t write often, I try my best to write relevant content when I do. I basically write about the web, giving tips and tricks on how to use and create the web.',
  technologies: [
    {
      id: 1,
      name: 'Node.js',
      url: 'https://nodejs.org'
    },
    {
      id: 2,
      name: 'EJS',
      url: 'https://ejs.co'
    },
    {
      id: 2,
      name: 'CSS',
      url: 'https://html.com/css/'
    },
    {
      id: 3,
      name: 'Firebase',
      url: 'https://firebase.google.com'
    },
    {
      id: 4,
      name: 'MailChimp',
      url: 'https://mailchimp.com'
    }
  ],
  durationOfCompletion: 'A working version was built and deployed within 30days. The best part is, the initial version was built entirely using a mobile phone.',
  myRole: 'Solo Fullstack Engineer. It was quite exciting',
  productsDeveloped: ['Techcolon blog', 'Techcolon Admin Panel'],
  snapshots: [{
    id: 2,
    url: 'https://i.ibb.co/4ggBxWW/techcolon-02.png'
  }],
  theme: '#52ff88'
}
