import { motion } from "motion/react";
import { Award, Users, Coffee, Heart } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "3+" },
  { icon: Coffee, label: "Projects Completed", value: "16" },
];

export function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center">
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1596443019365-eb263a588404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b3Jrc3BhY2UlMjBkZXNrJTIwc2V0dXAlMjBtaW5pbWFsfGVufDF8fHx8MTc3NjE5MTEwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="About"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="text-5xl md:text-6xl lg:text-7xl mb-6 italic"
              >
                About Me
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Software Engineering graduate from Telkom University with
                  nearly 4 years of professional experience as a UI/UX Designer
                  and Frontend Developer (since 2022). I specialize in bridging
                  the gap between complex user needs and functional,
                  high-fidelity digital products. My expertise spans across the
                  entire product lifecycle from conducting deep UX research and
                  design thinking to implementing responsive interfaces using
                  React.js and Vue.js.
                </p>
                <p>
                  Throughout my career, I have successfully led the design and
                  development of various public sector and smart mobility
                  applications, ensuring they meet high standards of usability
                  and technical feasibility. I am a collaborative
                  problem-solver, highly motivated to leverage emerging
                  technologies and design trends to deliver innovative,
                  user-centric solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
