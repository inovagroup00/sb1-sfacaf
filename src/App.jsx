import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaSearchDollar, FaMegaport, FaUsers, FaCheckCircle } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Transformando Negócios em
          <span className="text-blue-500"> Sucesso Digital</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          18 anos de experiência gerando resultados extraordinários
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
        >
          Agende uma Consulta Gratuita
        </motion.button>
      </header>

      {/* Stats Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-700 p-8 rounded-lg">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">18+</h3>
              <p className="text-gray-300">Anos de Experiência</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">7+</h3>
              <p className="text-gray-300">Dígitos em Faturamento</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg">
              <h3 className="text-4xl font-bold text-blue-500 mb-2">500+</h3>
              <p className="text-gray-300">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<FaSearchDollar />}
              title="Marketing de Performance"
              description="Campanhas otimizadas para máximo ROI e conversão"
            />
            <ServiceCard 
              icon={<FaChartLine />}
              title="SEO Avançado"
              description="Estratégias comprovadas para dominar os resultados de busca"
            />
            <ServiceCard 
              icon={<FaMegaport />}
              title="Marketing de Conteúdo"
              description="Conteúdo estratégico que gera autoridade e leads"
            />
            <ServiceCard 
              icon={<FaUsers />}
              title="Gestão de Mídias Sociais"
              description="Engajamento e crescimento orgânico nas redes sociais"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Pronto para Transformar seu Negócio?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agende uma consulta gratuita e descubra como podemos elevar seu negócio ao próximo nível
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300">
            Fale Conosco Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2023 Digital Marketing Expert. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-gray-700 p-6 rounded-lg text-center"
    >
      <div className="text-4xl text-blue-500 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

export default App;