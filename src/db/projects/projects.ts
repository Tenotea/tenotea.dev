interface PortfolioProject {
  id: string
  name: string
  label: string
  feature: boolean
  position?: number
  primaryImage: string
  link: string
  url: string
  metaDescription?: string
  description: string
  technologies: {
    id: number
    name: string
    url: string
  }[]
  durationOfCompletion: string
  myRole: string,
  productsDeveloped: string[]
  snapshots: string[]
  theme: string
}
