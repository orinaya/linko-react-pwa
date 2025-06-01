import { FaHourglassStart } from "react-icons/fa";
import { LuImage } from "react-icons/lu";
import ButtonParticle from "./particles/ButtonParticle";
import { FiEye } from "react-icons/fi";

function formatLongDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}

function getRemainingDays(endDate) {
  const today = new Date();
  const end = new Date(endDate);
  const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  return diff > 0 ? `${diff} jours restants` : "Terminé";
}

function TripCardComponent({ trip }) {
  const { title, start_date, end_date, group } = trip;

  const groupName = group?.name || "Groupe inconnu";
  const effectif = group?.members?.length || trip?.group_size || 0;
  const remainingDays = getRemainingDays(end_date);

  return (
    <li className="bg-white p-4 rounded-lg flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <span className="bg-[#FCF1CF] text-[#C0940C] px-3 py-0.5 rounded-full text-sm">Groupe 1</span>
        <span className="flex items-center gap-2 text-sm text-[#0162EF]">
          <FaHourglassStart />
          {remainingDays}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
          <LuImage className="text-green-700 w-2/5 h-2/5" />
        </div>
        <div>
          <p className="font-semibold text-base">{title}</p>
          <div className="flex text-sm gap-1 text-gray-500 flex-wrap">
            <p>{formatLongDate(start_date)}</p>
            <span>au</span>
            <p>{formatLongDate(end_date)}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between gap-3">
          <div className="bg-[#EBF3FF] p-2 rounded-lg w-full">
            <p className="text-[#0162EF] text-sm">Effectif</p>
            <p className="font-medium text-md">27 pers.</p>
          </div>

          <div className="bg-[#EBF3FF] p-2 rounded-lg w-full">
            <p className="text-[#0162EF] text-sm">Encadrants</p>
            <p className="font-medium text-md">4 pers.</p>
          </div>

          <div className="bg-[#EBF3FF] p-2 rounded-lg w-full">
            <p className="text-[#0162EF] text-sm">Durée</p>
            <p className="font-medium text-md">
              {
                Math.ceil(
                  (new Date(end_date) - new Date(start_date)) /
                  (1000 * 60 * 60 * 24)
                )
              } jours
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center bg-[#EBF3FF] p-2 rounded-lg w-full">
          <p className="text-[#0162EF] text-sm">Effectif connecté</p>
          <div className="font-medium text-md">
            <span className="font-bold text-2xl">17</span>
            {' '}/24
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#EBF3FF] p-2 rounded-lg w-full">
          <p className="text-[#0162EF] text-sm">Effectif sans suivi</p>
          <div className="font-medium text-md">
            <span className="font-bold text-2xl">3</span>
            {' '}/24
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#EBF3FF] p-2 rounded-lg w-full">
          <p className="text-[#0162EF] text-sm">Absents</p>
          <div className="font-medium text-md">
            <span className="font-bold text-2xl">2</span>
            {' '}/24
          </div>
        </div>
      </div>

      <ButtonParticle
        title="Voir le détail"
        variant="primary"
        routeLink={`/trips/${trip.id}`}
        color="blue"
        className="w-full"
        iconBefore={FiEye}
      />
    </li>
  );
}

export default TripCardComponent;
