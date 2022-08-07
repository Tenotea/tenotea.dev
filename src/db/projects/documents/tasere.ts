import { PortfolioProject } from "../projects";

export const tasere:PortfolioProject = {
  id: 'tasere',
  name: 'Tasere Loan',
  label: 'frontend',
  feature: true,
  position: 5,
  primaryImage: {
    id: 1,
    url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659779854/Tasere_Loan_ujkcfq.png'
  },
  domainName: 'tasereloan.com',
  url: 'https://tasereloan.com/',
  metaDescription: 'Táṣẹ́rẹ́ lends to people, what is minimal to them and will not inconvenience them.',
  description: 'Táṣẹ́rẹ́ lends to people, what is minimal to them and will not inconvenience them. We do not place restrictions; if hundreds of thousands is táṣẹ́rẹ́ to you, we will give you and if it is millions, we will still give you. Our principle is all about granting you an amount, that its repayment will not choke your finances.',
  technologies: [
    {
      id: 1,
      name: 'HTML',
      url: 'https://www.w3schools.com/html/html_intro.asp'
    },
    {
      id: 2,
      name: 'TailwindCSS',
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
  durationOfCompletion: 'AUGUST 2021 - JANUARY 2022',
  myRole: 'Was tasked with redesigning an existing website to meet the needs of the users. Carried out product research and created new user interfaces based on the results. Converted new UI designs to code. Tested and validated user experiences before handing the frontend code over to the backend team.',
  productsDeveloped: ['New UI Design', 'Website based on the new UI design'],
  snapshots: [
    {
      name: 'Tasere loan registration', 
      id: 2,
      url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659779852/Tasere_Loan_-_2_drriss.png'
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/devtenotea/image/upload/v1659779854/Tasere_Loan_ujkcfq.png',
      name: 'Tasere Loan - Home' 
    },
  ],
  theme: '#318CE7'
}
