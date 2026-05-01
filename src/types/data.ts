import { ProgressStates } from "./helpers"

interface Project {
  title: string
  shortExcerpt: string
  techStack: string[] | null
  screenshots: string[] | null
  status: ProgressStates
  githubLink: string
  readmeSrc: string
  liveDemoLink: string | null
  extensionLink: string | null
  firefoxAddonLink: string | null
}

interface TechStackData {
  techStack?: string[] | null
  database?: string[] | null
  toolsAndDeployment?: string[] | null
}

interface CertificationsData {
  cert_title: string
  cert_desc: string
  cert_link: string
  date_received: string
}

export type { Project, TechStackData, CertificationsData }
