import { FiZap } from "react-icons/fi";
import ButtonParticle from "../particles/ButtonParticle";

function FeatureSection() {
  return (
    <section className="py-10 sm:py-20 relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-auto sm:items-center gap-6 flex-col lg:flex-row">
          <div className="bg-[#0057FF] text-white px-8 py-20 rounded-xl">
            <h2 className="font-grenadine text-2xl sm:text-3xl font-bold mb-6 leading-[1.8] min-w-[316px]">
              Nos fonctionnalités <span className="bg-[#4E96FF] text-white px-1 rounded text-3xl sm:text-4xl">principales</span>
            </h2>
            <p className="text-white/90 font-light mb-8 max-w-[280px]">
              Ajoutez membres et accompagnateurs,
              créez vos groupes, depuis n’importe quelle plateforme
            </p>
            <ButtonParticle
              title="Découvrir nos formules"
              variant="secondary"
              color="orange"
              routeLink="#price"
              className="w-fit"
              iconBefore={FiZap}
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5">
              <FeatureCard
                icon={
                  <img
                    src="/assets/images/location.svg"
                    alt="Linko Logo"
                    className="w-64 h-auto object-contain"
                  />
                }
                title="Géolocalisation"
                desc="Suivez précisément la position de chaque enfant pendant la sortie"
              />
              <FeatureCard
                icon={
                  <img
                    src="/assets/images/notif.svg"
                    alt="Linko Logo"
                    className="w-64 h-auto object-contain"
                  />
                } title="Notifications intelligentes"
                desc="Soyez alerté automatiquement en cas de mouvement suspect ou en cas de détresse"
              />
              <FeatureCard
                icon={
                  <img
                    src="/assets/images/alert.svg"
                    alt="Linko Logo"
                    className="w-64 h-auto object-contain"
                  />
                } title="Alertes en direct"
                desc="Localisez et gérez la situation en un clin d’œil"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-5 lg:-ml-[70px]">
              <FeatureCard
                icon={
                  <img
                    src="/assets/images/settings.svg"
                    alt="Linko Logo"
                    className="w-64 h-auto object-contain"
                  />
                } title="Gestion des sorties"
                desc="Créez, modifiez et organisez vos groupes depuis une interface simple et intuitive"
              />
              <FeatureCard
                icon={
                  <img
                    src="/assets/images/nowifi.svg"
                    alt="Linko Logo"
                    className="w-64 h-auto object-contain"
                  />
                } title="Disponible sans connexion"
                desc="Continuez à suivre et enregistrer les données même sans connexion"
              />
              <FeatureCard
                icon={
                  <img
                    src="/assets/images/check.svg"
                    alt="Linko Logo"
                    className="w-64 h-auto object-contain"
                  />
                } title="Suivi individuel"
                desc="Identifiez chaque enfant, vérifiez sa présence, anticipez tout éloignement"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl p-4 transition w-full sm:w-[255px] border-2 border-[#F1ECE9] border-solid">
      <div className="w-10 h-10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-md font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 font-light">{desc}</p>
    </div>
  );
}

export default FeatureSection;
