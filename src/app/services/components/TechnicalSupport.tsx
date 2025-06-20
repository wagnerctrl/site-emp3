import React from "react";
import { motion } from "framer-motion";
import { IconHeadset, IconClock, IconShield, IconTools, IconPhone, IconMail, IconMessageCircle, IconUserCheck } from "@tabler/icons-react";

export function TechnicalSupport() {
  const supportTypes = [
    {
      title: "Suporte 24/7",
      description: "Atendimento técnico disponível 24 horas por dia, 7 dias por semana para emergências críticas.",
      icon: IconClock,
      highlight: "Disponível sempre"
    },
    {
      title: "Manutenção Preventiva",
      description: "Monitoramento proativo e manutenção regular para evitar problemas antes que aconteçam.",
      icon: IconTools,
      highlight: "Prevenção ativa"
    },
    {
      title: "Segurança Avançada",
      description: "Proteção contínua contra ameaças digitais com atualizações de segurança regulares.",
      icon: IconShield,
      highlight: "Proteção total"
    },
    {
      title: "Suporte Especializado",
      description: "Equipe técnica altamente qualificada com expertise em diversas tecnologias.",
      icon: IconUserCheck,
      highlight: "Expertise comprovada"
    }
  ];

  const channels = [
    { name: "Telefone", icon: IconPhone, desc: "Atendimento direto", contact: "+55 (82) 9 9999-9999" },
    { name: "E-mail", icon: IconMail, desc: "Suporte por e-mail", contact: "suporte@primecodesolutions.com.br" },
    { name: "Chat Online", icon: IconMessageCircle, desc: "Chat em tempo real", contact: "Disponível no site" },
    { name: "WhatsApp", icon: IconPhone, desc: "Suporte via WhatsApp", contact: "Clique para conversar" }
  ];

  const plans = [
    {
      name: "Básico",
      price: "R$ 299",
      period: "/mês",
      features: [
        "Suporte em horário comercial",
        "Tempo de resposta: 4h",
        "Suporte por e-mail e telefone",
        "Manutenção básica mensal"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Profissional",
      price: "R$ 599",
      period: "/mês",
      features: [
        "Suporte 24/7",
        "Tempo de resposta: 1h",
        "Todos os canais de suporte",
        "Manutenção preventiva semanal",
        "Monitoramento em tempo real"
      ],
      color: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "R$ 999",
      period: "/mês",
      features: [
        "Suporte 24/7 prioritário",
        "Tempo de resposta: 15min",
        "Técnico dedicado",
        "Manutenção diária",
        "Relatórios personalizados",
        "SLA garantido"
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="technical-support" className="scroll-mt-24">
      <div className="relative">
        {/* Background Decoration */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-xl" />
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
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6">
              <IconHeadset className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Suporte Técnico Especializado
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Oferecemos suporte técnico completo e confiável para manter seus sistemas funcionando perfeitamente.
            </p>
          </div>

          {/* Support Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {supportTypes.map((support, index) => {
              const IconComponent = support.icon;
              return (
                <motion.div
                  key={support.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                          {support.title}
                        </h4>
                        <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full">
                          {support.highlight}
                        </span>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {support.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Channels */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 text-center"
            >
              Canais de Atendimento
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <motion.div
                    key={channel.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-100 dark:border-orange-800 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      {channel.name}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      {channel.desc}
                    </p>
                    <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                      {channel.contact}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Support Plans */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 text-center"
            >
              Planos de Suporte
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative p-6 bg-white dark:bg-neutral-800 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-purple-300 dark:border-purple-600 scale-105' 
                      : 'border-neutral-200 dark:border-neutral-700 hover:border-orange-300 dark:hover:border-orange-600'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Mais Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                      {plan.name}
                    </h4>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-neutral-600 dark:text-neutral-400 ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
                        <svg className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:-translate-y-1`}>
                    Escolher Plano
                  </button>
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
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Falar com Suporte
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