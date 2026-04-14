import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import fotoprofil from "../../foto/profil.jpeg";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, ease: "easeInOut" },
  //   },
  // };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        <motion.div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
              Available for work
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-7xl leading-[0.95] tracking-tight">
            <span className="block font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Hi
            </span>
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="block italic"
            >
              My Name is
            </span>
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="block italic"
            >
              M Adam Firdaus
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            UI/UX Designer & Frontend Developer passionate about creating
            beautiful, functional, and user-centered digital products.
          </p>

          <div className="flex gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Get in touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 border border-border rounded-full font-medium hover:bg-secondary transition-all duration-300"
            >
              View work
            </motion.a>
          </div>

          <div className="flex gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-full hover:bg-secondary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-full hover:bg-secondary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="mailto:hello@example.com"
              className="p-3 border border-border rounded-full hover:bg-secondary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="lg:col-span-5 relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-[2rem] rotate-6 blur-2xl" />
            <div className="relative bg-card border border-border rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={fotoprofil}
                alt="Workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
