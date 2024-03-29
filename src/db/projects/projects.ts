import { meristem } from './documents/meristem';
import { tasere } from './documents/tasere';
import { propConsole } from './documents/propconsole';
import { raptures } from './documents/raptures';
import { awabah } from './documents/awabah';
import { arioso } from "./documents/arioso";
import { movieFetchers } from "./documents/moviefetchers";
import { techcolon } from "./documents/techcolon";

export interface PortfolioProject {
  id: string
  name: string
  label: string
  feature: boolean
  position?: number
  primaryImage: ProjectImage
  domainName: string
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
  snapshots: ProjectImage[]
  theme: string
}

export interface ProjectImage {
  id: number
  name?: string
  url: string
  highResUrl?: string
}

const projectObjects = [
  awabah,
  raptures,
  propConsole,
  meristem,
  tasere,
  arioso,
  movieFetchers,
  techcolon,
]

export default projectObjects
