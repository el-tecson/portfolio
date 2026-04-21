import { ProgressStates } from "./helpers";

interface Project {
    title: string;
    shortExcerpt: string;
    techStack: string[];
    screenshots: string[] | null;
    status: ProgressStates;
    githubLink: string;
    readmeSrc: string;
    liveDemoLink: string | null;
}

type TechStackData = {
  techStack?: string[] | null;
  database?: string[] | null;
  toolsAndDeployment?: string[] | null;
}

export type {
    Project,
    TechStackData,
}