import React from "react";
import { motion } from "framer-motion";
import { IconCode, IconBrandReact, IconBrandNextjs, IconBrandNodejs, IconDatabase, IconCloud, IconDeviceDesktop, IconDeviceMobile } from "@tabler/icons-react";

export function WebDevelopment() {
  const technologies = [
    { name: "React", icon: IconBrandReact, color: "text-blue-500" },
    { name: "Next.js", icon: IconBrandNextjs, color: "text-black dark:text-white" },
    { name: "Node.js", icon: IconBrandNodejs, color: "text-green-500" },
    { name: "Database", icon: IconDatabase, color: "text-purple-500" },
    { name: "Cloud", icon: IconCloud, color: "text-sky-500" },
    { name: "Responsive", icon: IconDeviceDesktop, color: "text-orange-500" },
  ];

  const features = [
    {
      title: "Sites Responsivos",
      description: "Desenvolvimento de sites que se adaptam perfeitamente a todos os dispositivos e tamanhos de tela.",
      icon: IconDeviceMobile
    },
    {
      title: "Sistemas Web",
      description: "Criação de sistemas web robustos e escaláveis para gestão empresarial e automação de processos.",
      icon: IconCode
    },
    {
      title: "E-commerce",
      description: "Plataformas de vendas online completas com integração de pagamentos e gestão de estoque.",
      icon: IconCloud
    }
  ];

  return (
    <section id="web-development" className="scroll-mt-24">
      <div className="relative">
        {/* Background Decoration */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
              <IconCode className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Desenvolvimento Web
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Criamos experiências digitais excepcionais com tecnologias modernas e design centrado no usuário.
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8 text-center">
              Tecnologias que Utilizamos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-4 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <IconComponent className={`h-8 w-8 ${tech.color} mb-2`} />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Solicitar Orçamento
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}