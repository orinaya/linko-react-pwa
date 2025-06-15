'use client'
import HomeNavbar from "@/components/landing-page/HomeNavbar";
import ButtonParticle from "@/components/particles/ButtonParticle";
import { IoIosArrowBack } from "react-icons/io";

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-[url('/assets/images/map-pattern.svg')] bg-repeat bg-center bg-contain">
      <HomeNavbar />

      <div className="p-8 max-w-4xl mx-auto">
        <ButtonParticle
          title="Retour"
          variant="ghost"
          color="blue"
          onClick={() => window.history.back()}
          className="mb-6"
          iconBefore={IoIosArrowBack}
        />
        <div className="text-center mb-8 mt-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Mentions
            <br />
            <span className="text-4xl sm:text-5xl text-[#FF7401] h-[70px] bg-[#ff9d4c]/20 rounded-xl px-4">
              Légales
            </span>
          </h1>
          <p className="mt-2 italic">Dernière mise à jour : 15/06/2025</p>
        </div>

        <p className="mb-4">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique,
          il est précisé aux utilisateurs du site Linko l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Édition du site</h2>
        <p className="mb-4">
          Le présent site, accessible à l’URL{" "}
          <a
            href="https://linko-flame.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://linko-flame.vercel.app/
          </a>
          , est édité par :
        </p>
        <p className="mb-4">
          Linko, société au capital de 0 euros, inscrite au R.C.S. de Nantes sous le numéro 898 456 321,
          dont le siège social est situé au 4 chemin de la Chatterie, 44800 Saint-Herblain,
          représentée par Groupe 8 My Digital Project dûment habilité.
        </p>
        <p className="mb-4">
          Le numéro individuel de TVA intracommunautaire de l’éditeur est : FR 40 123456789.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Hébergement</h2>
        <p className="mb-4">
          Le site est hébergé par la société Vercel, située 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis,
          téléphone : +1 (559) 288 7060.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Directeur de publication</h2>
        <p className="mb-4">Le directeur de la publication du site est Groupe 8 My Digital Project.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Nous contacter</h2>
        <p className="mb-2">Par téléphone : +33 7 XX XX XX XX</p>
        <p className="mb-2">Par email : <a href="mailto:contact@linko.com" className="text-blue-600 underline">contact@linko.com</a></p>
        <p className="mb-4">Par courrier : 4 chemin de la Chatterie, 44800 Saint-Herblain</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5.Données personnelles</h2>
        <p className="mb-4">
          Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée,
          disponible dans la section "Charte de Protection des Données Personnelles", conformément au Règlement Général sur la Protection des Données (RGPD) 2016/679 du 27 avril 2016.
        </p>
        <p className="mb-4">
          Linko a désigné un Délégué à la Protection des Données (DPO) auprès de la CNIL (Désignation N° à compléter).
          Les coordonnées du DPO sont :
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Nom : Ori Rte</li>
          <li>Adresse : 4 chemin de la Chatterie, 44800 Saint-Herblain</li>
          <li>Téléphone : +33 7 XX XX XX XX</li>
          <li>Email : <a href="mailto:dpo@linko.com" className="text-blue-600 underline">dpo@linko.com</a></li>
        </ul>

        <p className="mt-6 italic text-sm text-center">
          Génération des mentions légales par Legalstart.
        </p>
      </div>
    </div>
  );
}
