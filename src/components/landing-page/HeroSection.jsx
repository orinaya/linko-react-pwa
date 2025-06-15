import ButtonParticle from "../particles/ButtonParticle";
import { FiSettings, FiZap } from "react-icons/fi";

function HeroSection() {
  return (
    <>
      <section className="py-0 sm:py-24" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-1 md:order-none flex flex-col justify-start items-start gap-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1A0C00] leading-tight font-grenadine z-10">
                Simplifiez la gestion et le suivi de vos groupes,
                <br />
                en{' '}
                <span className="text-[#FF7401] bg-[#ff9d4c]/20 rounded-xl px-3">temps réel</span>
              </h1>
              <p className="text-[#1a0c00] text-base sm:text-xl font-medium">
                Une plateforme pensée pour les enseignants, animateurs et responsables de groupes d’enfants.
              </p>
              <div className="flex flex-col md:flex-col lg:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-fit md:w-full">
                <ButtonParticle
                  title="Essayer gratuitement"
                  variant="primary"
                  color="orange"
                  routeLink="/auth/login"
                  className="w-full"
                  iconBefore={FiZap}
                />
                <ButtonParticle
                  title="Découvrir nos fonctionnalités"
                  variant="secondary"
                  color="orange"
                  routeLink="#features"
                  className="w-full"
                  iconBefore={FiSettings}
                />
              </div>
            </div>
            {/* <div className="relative flex justify-center items-center mt-10 ">
              <img
                src="/assets/images/mockup-phone-map.png"
                alt="Mockup"
                className="w-44 sm:w-64 h-auto z-10"
              />
              <img
                src="/assets/images/mockup-phone-home.png"
                alt="Mockup"
                className="absolute w-40 left-28  top-12 "
              />
            </div> */}

            <div className="relative flex space-x-4">
              <div className="ml-10 md:ml-0 lg:ml-initial rounded-3xl p-4 transform rotate-0 z-10">
                <img
                  src="/assets/images/mockup-phone-map.png"
                  alt="Linko Logo"
                  className="w-30 md:w-50 lg:w-64 h-auto object-contain"
                />
              </div>
              <div className="rounded-3xl -p-12 transform rotate-11 mt-6 absolute left-[180px]  sm:left-[250px] bottom-2.5">
                <img
                  src="/assets/images/mockup-phone-home.png"
                  alt="Linko Logo"
                  className="w-30 md:w-70 lg:w-60 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;