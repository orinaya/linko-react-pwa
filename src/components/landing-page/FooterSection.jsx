'use client'

import { FiMail, FiPhone, FiUser, FiUserPlus } from "react-icons/fi";
import ButtonParticle from "../particles/ButtonParticle";
import { FaArrowUp } from "react-icons/fa";

function FooterSection() {
  return (
    <>
      <footer id="footer">
        <div className="bg-[#0162EF] text-white max-w-7xl pt-16 pb-6 mx-auto px-4 sm:px-6 lg:px-8 rounded-t-3xl">
          <div className="flex items-center justify-center mb-16">
            <a href="/">
              <img
                src="/assets/images/linko-white.svg"
                alt="Linko Logo"
                className="md:w-50 h-auto w-30 lg:w-70 object-contain"
              />
            </a>
          </div>
          <div className="flex gap-8 justify-around flex-wrap lg:flex-nowrap text-center md:text-left sm:px-8">
            <div className="bg-[#0057FF] text-white">
              <h2 className="font-grenadine text-3xl font-bold mb-6 leading-[1.8] min-w-[316px]">
                Testez dès maintenant
                <br />
                <span className="bg-[#4E96FF] text-white px-1 rounded text-4xl">
                  notre solution
                </span>
              </h2>
              <div className="flex sm:flex-col md:flex-row gap-4 w-full md:w-fit lg:w-full">
                <ButtonParticle
                  title="S'inscrire"
                  variant="primary"
                  color="orange"
                  routeLink="/auth/signup"
                  className="w-full lg:w-full md:w-fit"
                  iconBefore={FiUserPlus}
                />
                <ButtonParticle
                  title="Se connecter"
                  variant="secondary"
                  color="orange"
                  routeLink="/auth/login"
                  className="w-full lg:w-full md:w-fit"
                  iconBefore={FiUser}
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-white">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partenaires</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-white">
                <li className="flex items-start gap-2 flex-col">
                  <div className="flex items-center gap-2">
                    <FiPhone className="text-white" />
                    <p>Téléphone</p>
                  </div>
                  <p className="hover:text-white">+33 X XX XX XX XX</p>
                </li>

                <li className="flex items-start gap-2 flex-col">
                  <div className="flex items-center gap-2">
                    <FiMail className="text-white" />
                    <p>Email</p>
                  </div>
                  <p className="hover:text-white">contact@linko.com</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white">
                <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Statut système</a></li>
              </ul>
            </div>


          </div>

          <div className="w-full flex justify-center my-16">
            <ButtonParticle
              title="Retourner en haut"
              variant="secondary"
              color="blue"
              onClick={() => document.getElementById('home-navbar').scrollIntoView({ behavior: 'smooth' })}
              className="w-fit"
              iconBefore={FaArrowUp}
            />
          </div>


          <div className="border-t border-blue-500 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white text-sm mb-4 md:mb-0">
                © 2025 Linko. Tous droits réservés.
              </div>
              <div className="flex space-x-6 text-white text-sm">
                <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
                <a href="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</a>
                <a href="/conditions-generales-d-utilisation" className="hover:text-white transition-colors">CGU</a>
                <a href="/conditions-generales-de-vente" className="hover:text-white transition-colors">CGV</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;