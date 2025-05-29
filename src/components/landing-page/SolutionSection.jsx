import { FaCheck } from "react-icons/fa";

function SolutionSection() {
  return (
    <>
      <section className="py-20" id="solution">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-gray-900">
              Une solution en
              <br />
              <span className="text-6xl text-[#FF7401] h-[70px] bg-[#ff9d4c]/20 rounded-xl px-4"> toutes situations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-10 bg-gradient-to-b from-[#eff5fe] to-[#f0f6ff]/0 rounded-xl p-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Notre atout : le bracelet connecté
                </h3>
                <p className="text-gray-700 font-light">
                  Pour garantir une expérience optimale, nous vous fournissons les bracelets : légers, sécurisés et adaptés aux enfants. Vous pouvez tout à fait utiliser uniquement la plateforme, mais le bracelet vous permettra de profiter pleinement de toutes les fonctionnalités de Linko.
                </p>
              </div>
              <div className="flex items-center justify-center gap-8">
                <div className="flex items-center justify-center gap-5">
                  <img
                    src="/assets/images/fake-watch.png"
                    alt="Linko Logo"
                    className="w-40 h-auto object-contain"
                  />
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Localisation GPS</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Détection de mouvement</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Rechargeable via USB-C</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Synchronisation en temps réel</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Pensé pour la sécurité</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Produit durable et réparable</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-10 bg-gradient-to-b from-[#eff5fe] to-[#f0f6ff]/0 rounded-xl p-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Une gestion multiplateforme
                </h3>
                <p className="text-gray-700 font-light">Pour vous faciliter la gestion de vos groupes mais aussi pour faciliter votre expérience lors de sorties, nous avons spécialement conçu pour vous une plateforme adaptée à tous les formats (ordinateur, tablette, téléphone...), selon vos besoins</p>
              </div>
              <div className="flex items-center justify-center gap-16">
                <div className="flex items-center justify-center gap-5">
                  <img
                    src="/assets/images/responsive.png"
                    alt="Linko Logo"
                    className="w-64 h-auto object-contain"
                  />
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Sur tous les appareils</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Aucune installation</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Simple d’utilisation</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Mises à jour instantanées</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Travail collaboratif fluide</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Prêt à l’emploi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default SolutionSection;