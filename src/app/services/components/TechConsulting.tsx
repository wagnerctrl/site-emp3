import React from "react";
import { motion } from "framer-motion";
import { IconBulb, IconChartBar, IconUsers, IconTarget, IconRocket, IconShieldCheck, IconTrendingUp, IconCpu } from "@tabler/icons-react";

export function TechConsulting() {
  const services = [
    {
      title: "Análise Estratégica",
      description: "Avaliação completa da infraestrutura tecnológica atual e identificação de oportunidades de melhoria.",
      icon: IconChartBar
    },
    {
      title: "Transformação Digital",
      description: "Planejamento e execução de processos de digitalização para modernizar operações empresariais.",
      icon: IconRocket
    },
    {
      title: "Arquitetura de Sistemas",
      description: "Design de arquiteturas escaláveis e robustas para suportar o crescimento do seu negócio.",
      icon: IconCpu
    },
    {
      title: "Gestão de Projetos",
      description: "Coordenação especializada de projetos tecnológicos com metodologias ágeis e eficientes.",
      icon: IconUsers
    }
  ];

  const benefits = [
    { icon: IconTarget, title: "Foco em Resultados", desc: "Estratégias alinhadas aos objetivos de negócio" },
    { icon: IconShieldCheck, title: "Segurança Garantida", desc: "Implementação de melhores práticas de segurança" },
    { icon: IconTrendingUp, title: "ROI Comprovado", desc: "Retorno sobre investimento mensurável" },
    { icon: IconBulb, title: "Inovação Contínua", desc: "Soluções tecnológicas de vanguarda" }
  ];

  return (
    <section id="tech-consulting" className="scroll-mt-24">
      <div className="relative">
        {/* Background Decoration */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-xl" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6">
              <IconBulb className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Consultoria Tecnológica
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Orientamos sua empresa na jornada de transformação digital com estratégias personalizadas e expertise técnica.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                        {service.title}
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 text-center"
            >
              Por que Escolher Nossa Consultoria?
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {benefit.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 text-center">
              Nossa Metodologia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { phase: "Diagnóstico", desc: "Análise detalhada do cenário atual", icon: "🔍" },
                { phase: "Estratégia", desc: "Desenvolvimento de plano personalizado", icon: "📋" },
                { phase: "Implementação", desc: "Execução com acompanhamento contínuo", icon: "🚀" }
              ].map((item) => (
                <div key={item.phase} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {item.phase}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Agendar Consultoria
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