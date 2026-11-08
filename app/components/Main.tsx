import { ExternalLink, FileText, GraduationCap, Globe, BrainCircuit, FileCode2 } from "lucide-react";

const technologies = [
  {
    category: "Code Languages",
    items: ["JavaScript", "TypeScript", "Python", "Kotlin", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "React Native"],
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Nest.js", "Supabase", "Firebase", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    category: "AI & Data Science",
    items: ["Python", "PyTorch", "Scikit-learn", "YOLO", "OpenCV", "Pandas", "SHAP", "PyRadiomics"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Figma", "Linux"],
  },
  {
    category: "Languages",
    items: ["Portuguese", "English"],
  },
];

const projects = [
  {
    name: "Highus",
    description: "Educational platform for exam preparation and question management.",
    icon: GraduationCap,
    url: "https://highus.com.br",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
      "Python",
      "PyTorch",
      "OCR",
      "YOLO",
    ],
  },
  {
    name: "OpenX Browser",
    description: "Open-source browser project. Frontend development using React Native.",
    icon: Globe,
    url: "https://github.com",
    technologies: ["React Native", "TypeScript", "JavaScript"],
  },
  {
    name: "Dental AI Research",
    description: "Machine learning and computer vision applied to dental radiology and CBCT imaging.",
    icon: BrainCircuit,
    url: "https://github.com",
    technologies: ["Python", "PyTorch", "YOLO", "Scikit-learn", "SHAP"],
  },
  {
    name: "Exam Extraction",
    description: "Automated extraction and processing of exam questions from PDF documents.",
    icon: FileCode2,
    url: "https://github.com",
    technologies: ["Python", "EasyOCR", "PyMuPDF", "OpenCV"],
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
        <a href="/" className="text-base font-semibold tracking-tight">
          Arkadina<span className="text-blue-600">.</span>
        </a>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Arkadina"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 transition hover:text-neutral-900"
          ></a>

          <a
            href="/cv.pdf"
            target="_blank"
            className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 transition hover:text-blue-600"
          >
            <FileText size={15} />
            CV
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-6 text-lg font-semibold tracking-tight text-neutral-900">{children}</h2>;
}

function TechStack() {
  return (
    <section>
      <SectionTitle>Technologies</SectionTitle>

      <div className="space-y-5">
        {technologies.map((group) => (
          <div key={group.category} className="grid gap-2 sm:grid-cols-[160px_1fr]">
            <h3 className="pt-1 text-sm text-neutral-500">{group.category}</h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-700 transition hover:border-blue-300 hover:text-blue-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>

      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <article key={project.name} className="group py-5">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-neutral-900">{project.name}</h3>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.name}`}
                      className="text-neutral-400 transition hover:text-blue-600"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>

                  <p className="mt-1 text-sm leading-6 text-neutral-500">{project.description}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function Main() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <main className="mx-auto max-w-7xl space-y-16 px-5 py-14 sm:py-20">
        <section>
          <h1 className="text-2xl font-semibold tracking-tight">Arkadina</h1>
          <p className="mt-2 max-w-xl text-sm leading-7 text-neutral-500">
            I started programming as a hobby in 2018, when I used to play Minecraft with my best friend, Hubert Ryan. We
            worked on automating macros for Minecraft. Since then, I've been teaching myself how to code, continuously
            learning and never looking back. Together, we founded several technology companies, including Cloudsky, Sixcry, and eventually Highus.
          </p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-neutral-500">
            I would call myself a software developer interested in building digital products, exploring artificial intelligence and solving
            problems through technology.
          </p>
        </section>
        <TechStack />
        <Projects />
      </main>
    </div>
  );
}
