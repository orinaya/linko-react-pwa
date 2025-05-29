import { FiUser, FiUserPlus } from "react-icons/fi";
import ButtonParticle from "../particles/ButtonParticle";

function HomeNavbar() {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20" >
        <div className="flex items-center justify-center">
          <img
            src="/assets/images/linko-black.svg"
            alt="Linko Logo"
            className="w-50 h-auto object-contain"
          />
        </div>
        <div className="flex items-center space-x-4">
          <ButtonParticle title="Se connecter" colorBg="bg-[#FFFFFF] text-[#0162EF] border-solid border-[#0162EF] border-1" routeLink='/login' iconBefore={FiUser} />
          <ButtonParticle title="S'inscrire" colorBg="bg-[#0162EF] text-[#F7F7F8]" routeLink='/signup' iconBefore={FiUserPlus} />
        </div>
      </div>
    </header>
  );
}

export default HomeNavbar;