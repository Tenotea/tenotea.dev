import { PortfolioProject } from "../projects";

export const raptures:PortfolioProject = {
  id: 'raptures-entertainment',
  name: 'Raptures Ent.',
  label: 'frontend',
  feature: true,
  position: 2,
  primaryImage: {
    id: 1,
    name: 'Raptures Home',
    url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659632163/Raptures_Landing_page_Cover_urfagb.png',
  },
  domainName: 'raptures.io',
  url: 'https://app.raptures.io',
  metaDescription: 'Raptures is a global digital storytelling platform & studio network creating original and industry leading webtoons, comics and animations.',
  description: 'Raptures is a global digital storytelling platform & studio network creating original and industry leading webtoons, comics and animations. We are uniquely focused on stories originating from Black American, African and the Arab worlds. Our global team are based in Nigeria, Ghana, United Arab Emirates and United States.',
  technologies: [
    {
      id: 1,
      name: 'Next.js',
      url: 'https://nextjs.org'
    },
    {
      id: 2,
      name: 'SWR',
      url: 'https://swr.vercel.app/'
    },
    {
      id: 3,
      name: 'Node.js',
      url: 'https://nodejs.org/'
    }
  ],
  durationOfCompletion: 'April 2022 - Present',
  myRole: 'I led the development of the raptures web app, worked closely with the UI designer and backend engineer in ensuring the final ux matched the needs of the users. I also built a component library based on the component designs provided, implemented content/asset caching and took other measures in ensuring the web app was performant',
  productsDeveloped: ['Raptures Web App'],
  snapshots: [
    {
      id: 2,
      name: 'Raptures - Comic Pages',
      url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659632901/Ratures_cover_2_qmtgrc.png'
    },
    {
      id: 3,
      name: 'Raptures Home',
      url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659632163/Raptures_Landing_page_Cover_urfagb.png',
    },
  ],
  theme: '#7733e6'
}
