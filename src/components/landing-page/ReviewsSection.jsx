import { FiUserPlus } from "react-icons/fi";
import ButtonParticle from "../particles/ButtonParticle";

function ReviewsSection() {
  return (
    <>
      <section className="py-10 sm:py-20" id="reviews">
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-8 text-center">
              <div className="max-w-[480px] bg-[#F6F6F6] border-2 border-solid border-[#F1ECE9] p-6 rounded-xl flex gap-4 items-center justify-center">
                <div className="flex items-center justify-center rounded-3xl">
                  <img
                    src="/assets/images/pp/meerkat.svg"
                    alt="Linko Logo"
                    className="w-64 h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 py-3.5 bg-transparent">
                  <div className="text-lg font-bold">Jean Biche</div>
                  <span className="text-md italic font-light text-start">
                    "Une solution simple et efficace pour gérer mes groupes scolaires. Je recommande à tous les accompagnateurs !"
                  </span>
                </div>
              </div>
              <div className="max-w-[480px] bg-[#F6F6F6] border-2 border-solid border-[#F1ECE9] p-6 rounded-xl flex gap-4 items-center justify-center">
                <div className="flex items-center justify-center rounded-3xl">
                  <img
                    src="/assets/images/pp/fox.svg"
                    alt="Linko Logo"
                    className="w-64 h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 py-3.5 bg-transparent">
                  <div className="text-lg font-bold">Pepito Pablito</div>
                  <span className="text-md italic font-light text-start">
                    "Le suivi en temps réel me rassure énormément. Toute l'équipe adore l'interface intuitive !"
                  </span>
                </div>
              </div>
              <div className="max-w-[480px] bg-[#F6F6F6] border-2 border-solid border-[#F1ECE9] p-6 rounded-xl flex gap-4 items-center justify-center">
                <div className="flex items-center justify-center rounded-3xl">
                  <img
                    src="/assets/images/pp/penguin.svg"
                    alt="Linko Logo"
                    className="w-64 h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 py-3.5 bg-transparent">
                  <div className="text-lg font-bold">Jan Hammar</div>
                  <span className="text-md italic font-light text-start">
                    "Enfin un outil pensé pour les enfants et les encadrants. Le mode hors-ligne est un vrai plus !"
                  </span>
                </div>
              </div>

            </div>

          </div>
          <div className="bg-[#0057FF] text-white px-8 py-20 rounded-xl">
            <h2 className="font-grenadine text-2xl sm:text-3xl  font-bold mb-6 leading-[1.8] min-w-[316px]">
              Ils nous font
              <span className="ml-2 bg-[#4E96FF] text-white px-1 rounded text-3xl sm:text-4xl">confiance</span>
            </h2>
            <p className="text-white font-light mb-8 max-w-[480px]">
              Car votre confiance est synonyme de notre succès, nous nous engageons à vous offrir une expérience de qualité supérieure
            </p>
            <div className="flex flex-col sm:flex-row gap-8 text-center mb-6">
              <div className="bg-[#4E96FF] px-8 py-6 rounded-xl">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-white">Utilisateurs actifs</div>
              </div>
              <div className="bg-[#4E96FF] px-8 py-6 rounded-xl">
                <div className="text-3xl font-bold text-white">200K+</div>
                <div className="text-white">Groupes créés</div>
              </div>
              <div className="bg-[#4E96FF] px-8 py-6 rounded-xl">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-white">Disponibilité</div>
              </div>
            </div>
            <ButtonParticle
              title="S'inscrire"
              variant="secondary"
              color="orange"
              routeLink="/auth/signup"
              className="w-fit"
              iconBefore={FiUserPlus}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ReviewsSection;