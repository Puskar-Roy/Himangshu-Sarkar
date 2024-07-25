import ActionButton from "@/components/action-button";
import ProjectShowcase from "@/components/project-showcase";
import Sidebar from "@/components/sidebar";
import SkillOutline from "@/components/skill-outline";
import { Separator } from "@/components/ui/separator";
import WorkShowcase from "@/components/work-showcase";
import { FaMedium } from "react-icons/fa6";

import {
  Project,
  WorkExperience,
  aboutYou,
  marketingHeadlines,
  projects,
  skills,
  workExperiences,
} from "@/lib/data";

export default function Home() {
  const resumeLink =
    "https://drive.google.com/file/d/1CkqMNBfaEg_rb2_cbhvugZ_IqMyuTLsx/view?usp=sharing";
  return (
    
    <div className="flex flex-col md:flex-row my-10 mx-10 md:mx-0 space-x-0 md:space-x-10 space-y-10 md:space-y-0 ">
      <Sidebar />
      <div className="md:min-w-[65vh] min-w-full space-y-10">
        <section id="home" key="home" className="space-y-5">
          <div className="text-2xl font-bold tracking-tight">
            {marketingHeadlines.mainHeadline}
          </div>
          <div className="text-muted-foreground">
            {marketingHeadlines.subHeadline}
          </div>
          <div>
            <Separator />
          </div>
          <div className="flex justify-between">
            <ActionButton
              actionText="Resume"
              
            />
            <div className="space-y-1">
              <h3 className="font-medium leading-none">
                {aboutYou.yearsOfExperience}
              </h3>
              <p className="text-xs text-muted-foreground">Experience</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium leading-none">{aboutYou.location}</h3>
              <p className="text-xs text-muted-foreground">Location</p>
            </div>
          </div>
          <div className="space-y-1">
            <div className="space-y-2">
              {skills.map((skill) => (
                <SkillOutline
                  key={skill?.text}
                 // @ts-ignore
                  Icon={skill?.icon || <FaMedium/>}
                  text={skill?.text || ""}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Tech stack</p>
          </div>
        </section>

        <section id="projects" key="projects">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <div>
            <div className="space-y-5 mt-5">
              {projects.map((project: Project) => (
                <ProjectShowcase key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
        <section id="work" key="work">
          <h2 className="text-2xl font-semibold tracking-tight">Work</h2>
          <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6 space-y-6">
              {workExperiences.map(
                (experience: WorkExperience, index: number) => (
                  <WorkShowcase
                    key={experience.company}
                    experience={experience}
                    whetherlast={workExperiences.length == index + 1}
                  />
                )
              )}
            </div>
          </div>
        </section>
        <section id="contact" key="contact">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
            <p className="p-6 text-sm text-muted-foreground">
              Best way to reach me is through:{" "}
              <a href={`mailto:${aboutYou.email}`}>{aboutYou.email}</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
