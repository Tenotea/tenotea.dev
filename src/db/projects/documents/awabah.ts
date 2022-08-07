import { PortfolioProject } from "../projects";

export const awabah:PortfolioProject = {
  id: 'awabah',
  name: 'Awabah Nigeria',
  label: 'frontend',
  feature: true,
  position: 1,
  primaryImage: {
    id: 1,
    name: 'Awabah - Customer Dashboard',
    url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659625865/Awabah_Product_Summary_ee1lvd.png',
  },
  domainName: 'awabahng',
  url: 'https://awabahng.com',
  metaDescription: 'Awabah is a digital micro-pension platform for Africa\'s workforce, creating a sustainable future for every African.',
  description: 'Awabah is a digital micro-pension platform for Africa\'s workforce, creating a sustainable future for every African.',
  technologies: [
    {
      id: 1,
      name: 'Nx',
      url: 'https://nx.dev'
    },
    {
      id: 2,
      name: 'React.js',
      url: 'https://reactjs.org'
    },
    {
      id: 3,
      name: 'React Query',
      url: 'https://tanstack.com/query/v4'
    }
  ],
  durationOfCompletion: 'February 2022 - Present',
  myRole: 'Frontend engineer in a team of five. I led the migration of client apps into a monorepo, built shared components and libraries across user facing applications also engaged in code reviews with team members among others.',
  productsDeveloped: ['Customer Dashboard', 'Admin Dashboard'],
  snapshots: [
    {
      id: 2,
      name: 'Arioso - Product Pages',
      url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659626949/file_cover_-_1_qnqvzu.png'
    },
    {
      id: 3,
      name: 'Awabah - Customer Dashboard',
      url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659625865/Awabah_Product_Summary_ee1lvd.png',
    }
  ],
  theme: '#3D663D'
}
