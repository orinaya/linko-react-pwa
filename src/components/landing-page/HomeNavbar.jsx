import { FiUser, FiUserPlus } from "react-icons/fi";
import ButtonParticle from "../particles/ButtonParticle";

function HomeNavbar() {
  return (
    <header id="home-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 gap-4 py-4">
        <div className="flex items-center justify-center">
          <img
            src="/assets/images/linko-black.svg"
            alt="Linko Logo"
            className="w-40 h-auto object-contain"
          />
        </div>
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <ButtonParticle
            title="Se connecter"
            variant="secondary"
            color="blue"
            routeLink="/login"
            iconBefore={FiUser}
          />
          <ButtonParticle
            title="S'inscrire"
            variant="primary"
            color="blue"
            routeLink="/signup"
            iconBefore={FiUserPlus}
          />
        </div>
      </div>
    </header>

    // <header id="home-navbar">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20" >
    //     <div className="flex items-center justify-center">
    //       <img
    //         src="/assets/images/linko-black.svg"
    //         alt="Linko Logo"
    //         className="w-50 h-auto object-contain"
    //       />
    //     </div>
    //     <div className="flex items-center space-x-4">
    //       <ButtonParticle
    //         title="Se connecter"
    //         variant="secondary"
    //         color="blue"
    //         routeLink="/login"
    //         iconBefore={FiUser}
    //       />
    //       <ButtonParticle
    //         title="S'inscrire"
    //         variant="primary"
    //         color="blue"
    //         routeLink="/signup"
    //         iconBefore={FiUserPlus}
    //       />
    //     </div>
    //   </div>
    // </header>
  );
}

export default HomeNavbar;