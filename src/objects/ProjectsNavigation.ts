interface PortfolioProjectsRoute {
  id: number
  name: string
  query?: string
  icon: string
  theme: string
}

export const projectsRoutes:PortfolioProjectsRoute[] = [
  {
    id: 1,
    name: 'All',
    icon: 'briefcase',
    query: undefined,
    theme: '#FF903B'
  },
  {
    id: 2,
    name: 'Design',
    icon: 'palette',
    query: 'design',
    theme: '#4778ff'
  },
  {
    id: 3,
    name: 'Frontend',
    icon: 'desktop-mac',
    query: 'frontend',
    theme: '#FF246F'
  },
  {
    id: 4,
    name: 'Backend',
    icon: 'server',
    query: 'backend',
    theme: '#24B262'
  }
]
