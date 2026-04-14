import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href =
      `mailto:muhamadadam.firdaus@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "muhamadadam.firdaus@gmail.com",
      href: "mailto:muhamadadam.firdaus@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0821-2868-9209",
      href: "tel:+6282128689209",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sumedang, Indonesia",
      href: "https://maps.app.goo.gl/VUHWQTBziVKwmJYv7",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl md:text-6xl lg:text-7xl mb-4 italic"
          >
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                through any of the following channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent/10 text-accent rounded-xl group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-accent text-accent-foreground rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
