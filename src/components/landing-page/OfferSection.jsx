import { FiWifi } from "react-icons/fi";

function OfferSection() {
  return (
    <>
      <section className="py-10 sm:py-20" id="offer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-32">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
              Notre offre en
              <br />
              <span className="text-4xl sm:text-6xl text-[#FF7401] h-[70px] bg-[#ff9d4c]/20 rounded-xl px-4">3 étapes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative bg-gradient-to-b from-[#eff5fe] to-[#f0f6ff]/0 rounded-xl p-8">
              <span className="absolute font-semibold mb-4 font-grenadine leading-0 text-[200px] top-0 left-[-20px] text-[#0162ef]/10">1</span>
              <h3 className="text-xl font-semibold mb-4 font-grenadine">Créez vos sorties et vos groupes</h3>
              <p className="text-gray-600 text-start font-light">
                Organisez vos classes, groupes ou équipes en quelques clics depuis une interface simple et intuitive
              </p>
              <div className="flex items-center justify-center rounded-3xl p-4 transform rotate-0 z-10">
                <img
                  src="/assets/images/mockup-phone-group.png"
                  alt="Linko Logo"
                  className="w-64 h-auto object-contain"
                />
              </div>
            </div>

            <div className="min-h-[750px] sm:min-h-auto relative bg-gradient-to-b from-[#eff5fe] to-[#f0f6ff]/0 rounded-xl p-8">
              <span className="absolute font-semibold mb-4 font-grenadine leading-0 text-[200px] top-0 left-[-20px] text-[#0162ef]/10">2</span>
              <h3 className="text-xl font-semibold mb-4 font-grenadine">Équipez-les de bracelets connectés</h3>
              <p className="text-gray-600 text-start font-light">
                Nous vous fournissons les bracelets : légers, sécurisés, adaptés aux enfants et déjà prêts à l’emploi
              </p>
              <div className="flex rounded-3xl transform rotate-0 z-10 relative h-full w-full">
                <img
                  src="/assets/images/mockup-phone-location.png"
                  alt="Linko mockup bluetooth page"
                  className="w-38 object-contain absolute -bottom-6 sm:bottom-14 h-full"
                />
                <FiWifi className="w-16 h-16 text-[#747474] rotate-[-135deg] top-31 absolute right-28 md:right-24" />
                <img
                  src="/assets/images/fake-watch.png"
                  alt="Linko montre"
                  className="w-26 h-auto object-contain absolute right-0"
                />
              </div>
            </div>

            <div className="relative bg-gradient-to-b from-[#eff5fe] to-[#f0f6ff]/0 rounded-xl p-8">
              <span className="absolute font-semibold mb-4 font-grenadine leading-0 text-[200px] top-0 left-[-20px] text-[#0162ef]/10">3</span>
              <h3 className="text-xl font-semibold mb-4 font-grenadine">Suivez les déplacements en temps réel</h3>
              <p className="text-gray-600 text-start font-light">
                Depuis votre smartphone, tablette ou ordinateur, accédez à toutes les infos du groupe en direct
              </p>
              <div className="flex items-center justify-center rounded-3xl p-4 transform rotate-0 z-10">
                <img
                  src="/assets/images/mockup-phone-map.png"
                  alt="Linko Logo"
                  className="w-64 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  );
}

export default OfferSection;