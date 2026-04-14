import { motion } from 'motion/react';
import { Palette, Code, Smartphone, Zap } from 'lucide-react';

const skillCategories = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Code,
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    skills: ['React Native', 'Responsive Design', 'Mobile-First', 'Progressive Web Apps'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Zap,
    title: 'Tools & Other',
    skills: ['Git', 'VS Code', 'Webpack', 'Vite', 'REST APIs', 'Agile/Scrum'],
    color: 'from-orange-500/20 to-red-500/20',
  },
];

export function Skills() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-5xl md:text-6xl lg:text-7xl mb-4 italic"
          >
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-card border border-border rounded-3xl hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-7 h-7 text-foreground" />
                </div>

                <h3 className="text-xl font-bold mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
