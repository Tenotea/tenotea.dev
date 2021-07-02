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
    icon: 'briefcase',
    theme: '#FF903B'
  },
  {
    id: 2,
    name: 'Design',
    icon: 'palette',
    theme: '#4778ff'
  },
  {
    id: 3,
    name: 'Frontend',
    icon: 'desktop-mac',
    theme: '#FF246F'
  },
  {
    id: 4,
    name: 'Backend',
    icon: 'server',
    theme: '#24B262'
  }
]
