interface PortfolioProjectsRoute {
  id: number
  name: string
  path?: string
  icon: string
  theme: string
}

export const projectsRoutes:PortfolioProjectsRoute[] = [
  {
    id: 1,
    name: 'All',
    icon: '',
    theme: '#FF903B'
  },
  {
    id: 2,
    name: 'Design',
    icon: '',
    theme: '#4778ff'
  },
  {
    id: 3,
    name: 'Frontend',
    icon: '',
    theme: '#FF246F'
  },
  {
    id: 4,
    name: 'Backend',
    icon: '',
    theme: '#24B262'
  }
]
