import React from "react";
import { motion } from "framer-motion";
import { IconDeviceMobile, IconBrandApple, IconBrandAndroid, IconBrandReactNative, IconBrandFlutter, IconCloudUpload, IconShield, IconMap } from "@tabler/icons-react";

export function MobileApps() {
  const platforms = [
    { name: "iOS", icon: IconBrandApple, color: "text-gray-800 dark:text-gray-200" },
    { name: "Android", icon: IconBrandAndroid, color: "text-green-500" },
    { name: "React Native", icon: IconBrandReactNative, color: "text-blue-500" },
    { name: "Flutter", icon: IconBrandFlutter, color: "text-blue-400" },
  ];

  const features = [
    {
      title: "Apps Nativos",
      description: "Desenvolvimento de aplicativos nativos para iOS e Android com performance otimizada e experiência nativa.",
      icon: IconDeviceMobile
    },
    {
      title: "Apps Híbridos",
      description: "Soluções cross-platform que funcionam em múltiplas plataformas com um único código base.",
      icon: IconMap
    },
    {
      title: "Integração Cloud",
      description: "Integração com serviços em nuvem para sincronização de dados e funcionalidades avançadas.",
      icon: IconCloudUpload
    },
    {
      title: "Segurança Avançada",
      description: "Implementação de protocolos de segurança robustos para proteger dados dos usuários.",
      icon: IconShield
    }
  ];

  return (
    <section id="mobile-apps" className="scroll-mt-24">
      <div className="relative">
        {/* Background Decoration */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-full blur-xl" />
        <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mb-6">
              <IconDeviceMobile className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Aplicativos Mobile
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Desenvolvemos aplicativos móveis inovadores que conectam sua marca aos usuários de forma intuitiva e eficiente.
            </p>
          </div>

          {/* Platforms */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8 text-center">
              Plataformas Suportadas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <IconComponent className={`h-10 w-10 ${platform.color} mb-3`} />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {platform.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg mr-4">
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

          {/* Process Steps */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8 text-center">
              Nosso Processo de Desenvolvimento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Análise", desc: "Entendemos suas necessidades" },
                { step: "02", title: "Design", desc: "Criamos protótipos interativos" },
                { step: "03", title: "Desenvolvimento", desc: "Codificamos com qualidade" },
                { step: "04", title: "Deploy", desc: "Publicamos nas lojas" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Desenvolver Meu App
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