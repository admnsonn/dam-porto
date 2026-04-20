import { motion } from "motion/react";
import { ExternalLink, Github, Figma } from "lucide-react";

import baznasui from "../../foto/baznas-ui.png";
import cafeasyui from "../../foto/cafeasy-ui.png";
import admincafeui from "../../foto/cafeasy-admin-ui.png";
import selfsafetyui from "../../foto/self-ui.png";
import bahomoleoui from "../../foto/bahomoleo-ui.png";
import otonoui from "../../foto/otono-ui.png";
import admincafefe from "../../foto/cafeasy-fe.png";
import bahofe from "../../foto/bahomoleo-fe.png";
import otonometerfe from "../../foto/otono-fe.png";
import webinarseries from "../../foto/keyfest.png";
import ewallet from "../../foto/e-walelt.jpg";

const sourceBadgeClass = (source: string) => {
  const map: Record<string, string> = {
    "Personal Project": "bg-emerald-500/90",
    Freelance: "bg-indigo-500/90",
    "Project Work": "bg-orange-500/90",
  };

  return map[source] ?? "bg-sky-500/90";
};

const projects = [
  {
    title: "Admin Cafeasy Dashboard",
    description: "Modern e-commerce platform with seamless checkout experience",
    image: admincafefe,
    tags: ["React", "TypeScript", "Tailwind"],
    category: "Frontend",
    source: "Project Work",
    link: "https://github.com/Cafeasy/cafeasy-admin",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Web Bahomoleo Village",
    description: "Analytics dashboard with real-time data visualization",
    image: bahofe,
    tags: ["Next.js", "Chart.js", "API"],
    category: "Frontend",
    source: "Freelance",
    link: "https://github.com/admnsonn/morowali-project",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Otonometer",
    description: "Analytics dashboard with real-time data visualization",
    image: otonometerfe,
    tags: ["Next.js", "Chart.js", "API"],
    category: "Frontend",
    source: "Project Work",
    link: "https://github.com/admnsonn/Otonometer",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Baznas V2",
    description: "Pengembangan Struktur User Interface dan User Experience pada Aplikasi Baznas V2",
    image: baznasui,
    tags: ["Figma", "Design System", "Component Library"],
    category: "UI/UX",
    source: "Project Work",
    link: "https://www.figma.com/proto/7pV1LVuqO3IFoEVHJq4XMJ/Portofolio?page-id=0%3A1&node-id=2137-42760&viewport=132%2C-64%2C0.59&t=1b8JfG4DlGXK58Id-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2137%3A42760&show-proto-sidebar=1",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Cafeasy Mobile App",
    description: "Intuitive banking experience with focus on accessibility",
    image: cafeasyui,
    tags: ["React Native", "UI/UX", "Mobile"],
    category: "UI/UX",
    source: "Project Work",
    link: "https://www.figma.com/proto/YpdEhU7lSIGtWoFiIsstNC/Prototype?page-id=0%3A1&type=design&node-id=27-329&viewport=460%2C245%2C0.12&t=FR4m3DkueCbP2pGx-1&scaling=scale-down&starting-point-node-id=1%3A3",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Admin Cafeasy Dashboard",
    description: "Comprehensive component library for enterprise applications",
    image: admincafeui,
    tags: ["Figma", "Design System", "Component Library"],
    category: "UI/UX",
    source: "Project Work",
    link: "https://www.figma.com/proto/YpdEhU7lSIGtWoFiIsstNC/Prototype?page-id=1839%3A1818&type=design&node-id=1839-4274&viewport=-505%2C-123%2C0.22&t=cjEQbzssg4o3ruCf-1&scaling=scale-down&starting-point-node-id=1839%3A4274&mode=design",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Self Safety Report App",
    description: "Aplikasi pelaporan kondisi darurat dan bencana untuk memantau keselamatan keluarga serta kerabat secara real-time.",
    image: selfsafetyui,
    tags: ["React.Js", "UI/UX", "Mobile"],
    category: "UI/UX",
    source: "Personal Project",
    link: "https://www.figma.com/proto/7pV1LVuqO3IFoEVHJq4XMJ/Portofolio?page-id=0%3A1&node-id=2125-4554&viewport=132%2C-64%2C0.59&t=1b8JfG4DlGXK58Id-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2125%3A4554&show-proto-sidebar=1",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "Web Bahomoleo Village",
    description: "Intuitive banking experience with focus on accessibility",
    image: bahomoleoui,
    tags: ["React Native", "UI/UX", "Mobile"],
    category: "UI/UX",
    source: "Freelance",
    link: "https://example.com/bahomoleo-app",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Otonometer",
    description: "Intuitive banking experience with focus on accessibility",
    image: otonoui,
    tags: ["React Native", "UI/UX", "Mobile"],
    category: "UI/UX",
    source: "Project Work",
    link: "https://www.figma.com/proto/cDE4MWpaZPFl8XNQaaejdV/OTONOMETER_NR_WEBSITE?page-id=0%3A1&node-id=326-8836&node-type=canvas&viewport=-30%2C304%2C0.03&t=4Uas6iVMJXEWvyDj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=244%3A9552",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Keyfest (Indonesia Millenial Connect Regional Bandung)",
    description: "Complete brand identity package for a tech startup",
    image: webinarseries,
    tags: ["Illustrator", "Photoshop", "Branding"],
    category: "Graphic Design",
    source: "Freelance",
    link: "https://drive.google.com/drive/folders/1IesFLaMVvwa0-W4fzFrxG8ywknqUzVqq",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "E-Wallet User Research Challenge (Indosat Ooredoo)",
    description: "Creative poster designs for various campaigns",
    image: ewallet,
    tags: ["Illustrator", "Typography", "Motion Graphics"],
    category: "Graphic Design",
    source: "Project Work",
    link: "https://drive.google.com/drive/folders/1fx9Bna1fkLPjp2v0bD5EUOtbYTgpeFyH",
    span: "lg:col-span-2 lg:row-span-2",
  },
];

export function Projects() {
  const categories = [
    {
      name: "UI/UX Design",
      description:
        "User-centered design solutions that create intuitive and engaging experiences",
      projects: projects.filter((project) => project.category === "UI/UX"),
    },
    {
      name: "Frontend Development",
      description:
        "Building responsive and performant web applications with modern technologies",
      projects: projects.filter((project) => project.category === "Frontend"),
    },
    {
      name: "Graphic Design",
      description:
        "Visual communication through branding, illustrations, and print design",
      projects: projects.filter(
        (project) => project.category === "Graphic Design",
      ),
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl md:text-6xl lg:text-7xl mb-4 italic"
          >
            Selected Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects that showcase my approach to design and
            development across different disciplines.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="mb-20"
          >
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {category.name}
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
              {category.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-3xl bg-card border border-border ${project.span}`}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  <div className="relative h-full p-8 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.source && (
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-semibold shadow-sm ${sourceBadgeClass(project.source)}`}>
                          {project.source}
                        </span>
                      </div>
                    )}

                    <h4 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-white/80 mb-4">{project.description}</p>

                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={project.category === "UI/UX" ? "inline-flex items-center justify-center w-10 h-10 bg-white text-black rounded-full" : "flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium"}
                        aria-label={project.category === "UI/UX" ? `View ${project.title} in Figma` : `View ${project.title}`}
                      >
                        {project.category === "UI/UX" ? (
                          <Figma className="w-5 h-5" />
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            View project
                          </>
                        )}
                      </motion.a>
                      {project.category === "Frontend" && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                        >
                          <Github className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
