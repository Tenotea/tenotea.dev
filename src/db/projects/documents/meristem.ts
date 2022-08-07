import { PortfolioProject } from "../projects";

export const meristem:PortfolioProject = {
  id: 'meristem',
  name: 'Meristem Securities Ltd.',
  label: 'frontend',
  feature: true,
  position: 4,
  primaryImage: {
    id: 1,
    url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659825062/Meristem_emngze.png'
  },
  domainName: 'meristemng.com',
  url: 'https://meristemng.com/',
  metaDescription: 'Meristem Securities Ltd. a capital market conglomerate, that provides a plethora of distinct financial services',
  description: 'Meristem Securities Ltd. a capital market conglomerate, that provides a plethora of distinct financial services through a range of products in wealth management, stockbroking, financial advisory, trusteeship, registrars and probate management services, investment banking, lease, and loans. With these offerings we have continued to fulfill our promise of wealth creation, preservation and transfer for all clients.',
  technologies: [
    {
      id: 1,
      name: 'HTML',
      url: 'https://www.w3schools.com/html/html_intro.asp'
    },
    {
      id: 2,
      name: 'SCSS',
      url: 'https://www.w3schools.com/css/default.asp'
    },
    {
      id: 3,
      name: 'Typescript',
      url: 'https://www.typescriptlang.org/'
    },
    {
      id: 4,
      name: 'Vite',
      url: 'https://vitejs.dev/'
    },
  ],
  durationOfCompletion: 'JANUARY 2022 - MARCH 2022',
  myRole: 'I was tasked with converting new UI designs to code for use by the backend team. Wrote optimized and responsive styles, accounted for dynamic content served from the backend in defining the layout approach.',
  productsDeveloped: ['Meristem Research', 'Meristem Careers'],
  snapshots: [
    {
      name: 'Meristem Careers',
      id: 2,
      url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659825044/Meristem_Careers_qqfdu9.png'
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659825062/Meristem_emngze.png',
      name: 'Meristem Research' 
    },
  ],
  theme: '#21533D'
}
