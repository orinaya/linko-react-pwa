import { FaAngleRight, FaCheck, FaHeart } from "react-icons/fa";
import { FiChevronRight, FiPlus } from "react-icons/fi";
import ButtonParticle from "../particles/ButtonParticle";

function PriceSection() {
  return (
    <>
      <section className="py-20" id="price">
        <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Nos
              <br />
              <span className="text-6xl text-[#FF7401] h-[70px] bg-[#ff9d4c]/20 rounded-xl px-4">tarifs</span>
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-2xl border-2 border-solid border-[#F4F1EE] p-12 flex flex-col md:flex-row items-center gap-8">
              <img
                src="/assets/images/fake-watch.png"
                alt="Montre connectée Linkotion GO"
                className="w-48 h-auto p-4"
              />
              <div>
                <h4 className="uppercase text-blue-600 font-normal text-sm mb-1">
                  Montre connectée
                </h4>
                <h2 className="text-4xl md:text-5xl font-bold mb-2 font-grenadine">
                  Linkotion <span className="text-black uppercase">Go</span>
                </h2>
                <div className="text-8xl font-semibold text-black mb-4">
                  40<span className="text-6xl">€</span>
                  <span className="text-base font-medium text-gray-500">/unité</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Localisation GPS",
                    "Détection de mouvement",
                    "Rechargeable via USB-C",
                    "Plateforme de gestion gratuite",
                    "Produit durable et réparable",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#F6F6F6] rounded-2xl p-8 border-2 border-solid border-[#E4E4E4]">
              <h3 className="text-3xl font-bold mb-2">Les options</h3>
              <p className="font-light  mb-6">
                Personnalisez votre montre Linkotion GO avec des options conçues pour s’adapter à tous les besoins : enfants, groupes ou collectivités.
              </p>

              <ul className="space-y-3 text-blue-600 font-medium">
                {[
                  "Bracelet personnalisable",
                  "Gravure du prénom ou logo de l’établissement",
                  "Mode école : désactive les alertes durant les cours",
                  "Assurance casse & perte pendant 12 mois",
                ].map((option, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FiPlus className="text-blue-600" />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white border-2 border-solid border-[#F4F1EE] rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Essai gratuit</h3>
                <p className="text-gray-600">Accès à la plateforme</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">0€</div>
                <div className="text-gray-600">/mois</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Création et gestion de groupes</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Suivi des membres (sans bracelet)</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Tableau de bord en ligne</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Alertes de présence et d'absence</span>
                </li>
              </ul>
              <ButtonParticle
                title="Commencer"
                variant="tertiary"
                color="orange"
                routeLink="#price"
                className="w-fit"
                iconBefore={FaAngleRight}
              />
            </div>


            <div className="bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="flex gap-2 justify-center items-center absolute top-4 right-4 bg-white border-1 border-solid border-[#FF7401] text-[#FF7401] px-3 py-1 rounded-full text-sm font-semibold">
                <FaHeart />
                Populaire
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Formule complète</h3>
                <p className="text-white">Pour les groupes actifs</p>
              </div>
              <div className="mb-6">
                <div className="text-5xl font-bold">15€</div>
                <div className="text-white">/mois</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-orange-300 mr-3" />
                  <span>Bracelet connecté inclus</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-orange-300 mr-3" />
                  <span>Suivi en temps réel</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-orange-300 mr-3" />
                  <span>Groupes illimités</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-orange-300 mr-3" />
                  <span>Notifications personnalisées</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-orange-300 mr-3" />
                  <span>Support prioritaire</span>
                </li>
              </ul>
              <ButtonParticle
                title="Choisir ce plan"
                variant="primary"
                color="orange"
                routeLink="#price"
                className="w-fit"
                iconBefore={FaAngleRight}
              />
            </div>


            <div className="bg-white border-2 border-solid border-[#F4F1EE] rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Formule Sérénité</h3>
                <p className="text-gray-600">Tranquillité anuelle</p>
              </div>
              <div className="mb-6">
                <div className="text-5xl font-bold text-gray-900">200€</div>
                <div className="text-gray-600">à vie</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Toutes les fonctionnalités</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Gestion de groupes & suivi complet</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Historique et rapports complets</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Assistance premium</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Bracelet offert la 1ère année</span>
                </li>
              </ul>
              <ButtonParticle
                title="Souscrire"
                variant="tertiary"
                color="orange"
                routeLink="#price"
                className="w-fit"
                iconBefore={FaAngleRight}
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Moyens de paiement acceptés</p>
            <div className="flex justify-center items-center space-x-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">VISA</div>
              <div className="bg-red-600 text-white px-4 py-2 rounded font-semibold">MC</div>
              <div className="bg-blue-500 text-white px-4 py-2 rounded font-semibold">PayPal</div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default PriceSection;