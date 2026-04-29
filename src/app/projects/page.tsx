import ProjectCard from "@/components/ui/project-card";
import projectsData from "@/data/projects.json";

export default function Projects() {
  return (
    <main className="flex flex-col gap-[50px] justify-start bg-bg min-h-screen px-mobile-scr-mg-x py-25 pt-35 sm:px-scr-mg-x">
      <h1 className="text-2xl text-txt font-bold">Projects</h1>
      <div className="flex flex-col items-center gap-[50px] flex-wrap xl:grid xl:grid-cols-2 xl:auto-rows-fr xl:flex-nowrap xl:items-start">
        {Object.keys(projectsData).map(projectName => (
          <ProjectCard key={projectName} projectName={projectName} isHome={false} />
        ))}
      </div>
    </main>
  );
}
