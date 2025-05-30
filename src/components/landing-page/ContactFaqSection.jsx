'use client'


import { FiChevronDown, FiChevronUp, FiEye } from "react-icons/fi";
import { useState } from 'react';
import { LuSend } from "react-icons/lu";
import ButtonParticle from "../particles/ButtonParticle";

function ContactFaqSection() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const faqItems = [
    {
      id: 1,
      question: "Faut-il une connexion internet pour utiliser le service ?",
      answer: "Non, l'application fonctionne également hors ligne. Certaines fonctionnalités comme les mises à jour en temps réel nécessitent une connexion, mais le suivi de base reste opérationnel sans réseau."
    },
    {
      id: 2,
      question: "Comment fonctionne la géolocalisation ?",
      answer: "La géolocalisation utilise les données GPS de votre appareil pour vous localiser précisément. Vous devez autoriser l'accès à votre position dans les paramètres de votre navigateur."
    },
    {
      id: 3,
      question: "Peut-on gérer plusieurs groupes en même temps ?",
      answer: "Oui, vous pouvez créer et gérer jusqu'à 10 groupes simultanément avec votre compte premium. Le compte gratuit permet de gérer jusqu'à 3 groupes."
    },
    {
      id: 4,
      question: "Qui a accès aux données ?",
      answer: "Seuls les administrateurs de votre groupe et vous-même avez accès à vos données. Nous respectons strictement les réglementations RGPD pour la protection de vos informations personnelles."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Message envoyé !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (<>
    <section className="py-20" id="contact-faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-gray-900">
            Vous avez une
            <br />
            <span className="text-6xl text-[#FF7401] h-[70px] bg-[#ff9d4c]/20 rounded-xl px-4"> question ?</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-gradient-to-b from-[#eff5fe] to-[#f0f6ff]/0 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nous contacter</h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Votre message..."
                />
              </div>
              <ButtonParticle
                title="Envoyer le message"
                variant="primary"
                color="blue"
                onClick={handleSubmit}
                className="w-full"
                iconBefore={LuSend}
              />
            </div>
          </div>

          <div className="bg-white border-2 border-solid border-[#F4F1EE] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre FAQ</h2>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  >
                    <span className="font-medium text-gray-900">{item.question}</span>
                    {openFAQ === item.id ? (
                      <FiChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {openFAQ === item.id && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <ButtonParticle
                title="Voir plus de questions"
                variant="tertiary"
                color="orange"
                routeLink="/"
                className="w-fit"
                iconBefore={FiEye}
              />
            </div>
          </div>
        </div >
      </div>
    </section>
  </>
  );
}

export default ContactFaqSection;