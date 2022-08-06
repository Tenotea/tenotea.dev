import { PortfolioProject } from "../projects";

export const propConsole:PortfolioProject = {
  id: 'propconsole',
  name: 'PropConsole Managers',
  label: 'frontend',
  feature: true,
  position: 3,
  primaryImage: {
    id: 1,
    url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659751508/Prop_Console_Cover_1_ky2enl.png'
  },
  domainName: 'propconsole.com',
  url: 'https://propconsole.com.ng',
  metaDescription: 'PropConsole Managers is a Saas Solution for Property Managers.',
  description: 'PropConsole Managers is a PropTech Platform with Property Managers being the focal point. It is a Saas Solution that aims to perform three major functions; provide a platform where realtors can showcase their services to property owners and house/home seekers, manage property facilities for clients, store all property related documetns for easy access.',
  technologies: [
    {
      id: 1,
      name: 'React.js',
      url: 'https://reactjs.org'
    },
    {
      id: 2,
      name: 'Framer Motion',
      url: 'https://www.framer.com/motion/'
    }
  ],
  durationOfCompletion: 'AUGUST 2021 - DECEMBER 2021',
  myRole: 'Solo frontend engineer of the project. Was directly involved in the decision making process of the product. Worked closely with the UI design and backend teams to ensure the product requirements were satisfied. Built and tested UI component libraries for reusability across client apps.',
  productsDeveloped: ['Propconsole Marketplace', 'Propconsole Dashboard for agents and tenants', 'Propconsole CMS for agents'],
  snapshots: [
    {
      id: 2,
      url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659751508/Prop_Console_Cover_1_ky2enl.png',
      name: 'Propconsole Marketplace' 
    },
    {
      name: 'Propconsole Dashboard', 
      id: 3,
      url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659751507/Prop_Console_Cover_2_jj4bbn.png'
    }
  ],
  theme: '#538CD1'
}
