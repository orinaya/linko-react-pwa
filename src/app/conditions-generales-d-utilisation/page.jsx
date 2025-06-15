'use client'
import HomeNavbar from "@/components/landing-page/HomeNavbar";
import ButtonParticle from "@/components/particles/ButtonParticle";
import { IoIosArrowBack } from "react-icons/io";

export default function TermsOfUse() {
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
            Conditions
            <br />
            <span className="text-4xl sm:text-5xl text-[#FF7401] h-[70px] bg-[#ff9d4c]/20 rounded-xl px-4">
              Générales d’Utilisation
            </span>
          </h1>
          <p className="mt-2 italic">Dernière mise à jour : 15/06/2025</p>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Le site internet</h2>
          <p>
            L’adresse du site internet est :{" "}
            <a
              href="https://linko-flame.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://linko-flame.vercel.app
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">2. L’espace membre</h2>
          <p>Le site comprend un espace membre accessible aux utilisateurs inscrits.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">3. L’éditeur du site</h2>
          <p>L’édition du site est assurée par :</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Dénomination sociale :</strong> Linko</li>
            <li><strong>Forme juridique :</strong> SAS</li>
            <li><strong>Capital social :</strong> 0 €</li>
            <li><strong>RCS :</strong> Nantes</li>
            <li><strong>Numéro SIREN :</strong> 898 456 321</li>
            <li><strong>Siège social :</strong> 4 chemin de la Chatterie, 44800 Saint-Herblain, France</li>
            <li><strong>Téléphone :</strong> +33 7 XX XX XX XX</li>
            <li><strong>Email :</strong> <a href="mailto:contact@linko.com" className="text-blue-600 underline">contact@linko.com</a></li>
            <li><strong>Numéro de TVA intracommunautaire :</strong> FR 40 123456789</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Hébergement</h2>
          <p>
            Le site est hébergé par la société <strong>Vercel</strong>, dont le siège social est situé au 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.
            Contact téléphonique ou email : +1 (559) 288 7060.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Services du site internet</h2>
          <p>
            Linko commercialise des solutions matérielles et logicielles pour la géolocalisation sécurisée d’enfants en milieu scolaire, périscolaire et extrascolaire.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">5.1 Montre connectée LINKO</h3>
          <p>
            Dispositif de géolocalisation pour enfants, équipé d’une carte SIM multi-opérateurs, d’un système GPS sécurisé, d’une autonomie de 48h, et d’un boîtier robuste.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">5.2 Application de supervision LINKO</h3>
          <p>
            Application web et mobile disponible sur App Store et Google Play, permettant le suivi en temps réel, la gestion des groupes, la configuration des zones de sécurité, ainsi que l’accès aux historiques.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">5.3 Abonnement au service LINKO</h3>
          <p>
            L’abonnement est obligatoire pour utiliser la montre et comprend :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Accès à l’application</li>
            <li>Activation de la carte SIM</li>
            <li>Assistance technique</li>
            <li>Sécurisation des données</li>
          </ul>
          <p><strong>Tarifs :</strong></p>
          <ul className="list-disc list-inside mb-4">
            <li>Montre : 40 € HT/unité</li>
            <li>Abonnement : 15 € HT/mois/montre ou 200 € HT/an</li>
            <li>Période d’essai gratuite : 1 mois sans engagement</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Collecte de données personnelles</h2>
          <p>Le site collecte des données personnelles.</p>
          <p>Vous pouvez modifier ou supprimer vos données personnelles en nous contactant par :</p>
          <ul className="list-disc list-inside mb-4">
            <li>Email : <a href="mailto:unsubscribe@linko.com" className="text-blue-600 underline">unsubscribe@linko.com</a></li>
            <li>Voie postale : 4 chemin de la Chatterie, 44800 Saint-Herblain</li>
            <li>Formulaire de contact disponible sur le site</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Propriété intellectuelle</h2>
          <p>La marque <strong>Linko</strong> est protégée et déposée sous le nom de la société Linko (SAS).</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Cookies</h2>
          <p>Le site utilise des cookies nécessitant votre consentement préalable.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">9. Publication de contenu utilisateur</h2>
          <p>Les utilisateurs ne peuvent pas publier de contenu sur le site.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">10. Entrée en vigueur</h2>
          <p>Ces Conditions Générales d’Utilisation prennent effet à compter du 15 juin 2025.</p>
        </section>

        <p className="mt-12 italic text-sm text-center">
          CGU générées par Linko.
        </p>
      </div>
    </div>
  );
}
