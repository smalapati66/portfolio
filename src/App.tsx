import { bio } from "./content/bio";
import { experiences } from "./content/experience";
import { projects } from "./content/projects";
import { techStack } from "./content/techStack";
import uchicagoSeal from "./assets/uchicago-seal-168.webp";
import type { Bio, Experience, Project, TechStack } from "./types/content";

function Heading({ children, id }: { children: string; id: string }) {
  return (
    <h2 className="section-heading" id={id}>
      {children}
    </h2>
  );
}
function ExternalLinkIcon() {
  return (
    <svg
      className="external-link-icon"
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m2.25 9.75 7.5-7.5M5 2.25h4.75V7" />
    </svg>
  );
}
function Hero({ data }: { data: Bio }) {
  return (
    <header className="hero">
      <div className="contact-bar" aria-label="Contact details">
        <a href={`mailto:${data.email}`}>{data.email}</a>
        <span aria-hidden="true">/</span>
        <a href={data.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn <ExternalLinkIcon />
        </a>
        <span aria-hidden="true">/</span>
        <a href={data.githubUrl} target="_blank" rel="noreferrer">
          GitHub <ExternalLinkIcon />
        </a>
      </div>
      <div className="hero-heading">
        <h1>{data.name}</h1>
        <img
          className="uchicago-seal"
          src={uchicagoSeal}
          alt="University of Chicago"
        />
      </div>
      {data.tagline && <p className="tagline">{data.tagline}</p>}
      <p className="blurb">{data.blurb}</p>
      <a
        className="resume-link"
        href={data.resumeUrl}
        target="_blank"
        rel="noreferrer"
      >
        View resume (PDF) <ExternalLinkIcon />
      </a>
    </header>
  );
}
function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="experience-card">
      <div className="entry-header">
        <div>
          <h3>{item.role}</h3>
          <p className="company">
            {item.companyUrl ? (
              <a href={item.companyUrl}>{item.company}</a>
            ) : (
              item.company
            )}
          </p>
        </div>
        <p className="date">
          {item.startDate} — {item.endDate}
        </p>
      </div>
      <p className="experience-summary">{item.summary}</p>
      {item.tags && <Tags items={item.tags} />}
    </article>
  );
}
function Tags({ items }: { items: string[] }) {
  return (
    <p className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </p>
  );
}
function ExperienceSection({ items }: { items: Experience[] }) {
  return (
    <section aria-labelledby="experience-heading">
      <Heading id="experience-heading">Experience</Heading>
      <div className="experience-list">
        {items.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
function ProjectCard({ item }: { item: Project }) {
  return (
    <article className="project-card">
      <h3>{item.title}</h3>
      <p className="project-description">{item.description}</p>
      <Tags items={item.tags} />
      {(item.liveUrl || item.repoUrl) && (
        <div className="project-actions">
          {item.liveUrl && (
            <a href={item.liveUrl} target="_blank" rel="noreferrer">
              Live demo <ExternalLinkIcon />
            </a>
          )}
          {item.repoUrl && (
            <span className="project-source">
              <a href={item.repoUrl} target="_blank" rel="noreferrer">
                Source <ExternalLinkIcon />
              </a>
              {item.contributionLabel && (
                <span className="contribution-label">
                  {item.contributionLabel}
                </span>
              )}
            </span>
          )}
        </div>
      )}
    </article>
  );
}
function ProjectsSection({ items }: { items: Project[] }) {
  return (
    <section aria-labelledby="projects-heading">
      <Heading id="projects-heading">Projects</Heading>
      <div className="project-grid">
        {items.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
function TechStackSection({ data }: { data: TechStack }) {
  return (
    <section aria-labelledby="tech-stack-heading">
      <Heading id="tech-stack-heading">Tech Stack</Heading>
      <div className="tech-categories">
        {data.categories.map((category) => (
          <div className="tech-category" key={category.label}>
            <h3>{category.label}</h3>
            <Tags items={category.items} />
          </div>
        ))}
      </div>
    </section>
  );
}
function Footer({ data }: { data: Bio }) {
  return (
    <footer className="footer">
      <a href={`mailto:${data.email}`}>{data.email}</a>
      <span aria-hidden="true"> / </span>
      <a href={data.linkedinUrl} target="_blank" rel="noreferrer">
        LinkedIn <ExternalLinkIcon />
      </a>
    </footer>
  );
}
export default function App() {
  return (
    <main className="page-shell">
      <Hero data={bio} />
      <ExperienceSection items={experiences} />
      <ProjectsSection items={projects} />
      <TechStackSection data={techStack} />
      <Footer data={bio} />
    </main>
  );
}
