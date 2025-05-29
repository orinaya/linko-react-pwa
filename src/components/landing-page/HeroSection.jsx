import ButtonParticle from "../particles/ButtonParticle";
import { FiSettings, FiZap } from "react-icons/fi";

function HeroSection() {
  return (
    <>
      <section className="py-20" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 items-center">
            <div className="flex flex-col justify-start items-start gap-14">
              <h1 className="text-6xl line-h font-bold text-[#1A0C00] leading-17 font-grenadine z-10">
                Simplifiez la gestion et le suivi de vos groupes,
                <br />en{' '}
                <span className="text-[#FF7401] h-[70px] bg-[#ff9d4c]/20 rounded-xl px-4">temps réel</span>
              </h1>
              <div className="self-stretch justify-start text-[#1a0c00] text-xl font-medium ">Une plateforme pensée pour les enseignants, animateurs et responsables de groupes d’enfants. Organisez, suivez, informez… sans stress.</div>
              <div className="flex items-center space-x-4">
                <ButtonParticle title="Essayer gratuitement" colorBg="bg-[#FF7401] text-[#FFFFFF]" routeLink='/login' iconBefore={FiZap} />
                <ButtonParticle title="Découvrir nos fonctionnalités" colorBg="bg-[#FFFFFF] text-[#FF7401] border-solid border-[#FF7401] border-1" routeLink='#features' iconBefore={FiSettings} />
              </div>
            </div>
            <div className="relative flex space-x-4">
              <div className=" rounded-3xl p-4 transform rotate-0 z-10">
                <img
                  src="/assets/images/mockup-phone-map.png"
                  alt="Linko Logo"
                  className="w-64 h-auto object-contain"
                />
              </div>
              <div className="rounded-3xl -p-12 transform rotate-11 mt-6 absolute left-[250px] bottom-2.5">
                <img
                  src="/assets/images/mockup-phone-home.png"
                  alt="Linko Logo"
                  className="w-60 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}

export default HeroSection;