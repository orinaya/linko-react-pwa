'use client'
import HomeNavbar from "@/components/landing-page/HomeNavbar";
import ButtonParticle from "@/components/particles/ButtonParticle";
import { IoIosArrowBack } from "react-icons/io";

export default function TermsOfSales() {
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
              Générales de Vente
            </span>
          </h1>
          <p className="mt-2 italic">Date de mise en vigueur : 15/06/2025</p>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Objet et champ d’application</h2>
          <p>
            Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les ventes réalisées via le site{" "}
            <a
              href="https://linko-flame.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://linko-flame.vercel.app
            </a>{" "}
            par la société <strong>Linko</strong> (ci-après « le Vendeur »), auprès de ses clients professionnels établis en <strong>France métropolitaine</strong>.
          </p>
          <p>
            Elles s’appliquent à tout achat de produits et services effectués via ce site, à l’exclusion de toute autre condition.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Identification du vendeur</h2>
          <p><strong>Dénomination sociale :</strong> Linko</p>
          <p><strong>Forme juridique :</strong> SAS</p>
          <p><strong>Capital social :</strong> 0 €</p>
          <p><strong>RCS :</strong> Nantes</p>
          <p><strong>Numéro SIREN :</strong> 898 456 321</p>
          <p><strong>Siège social :</strong> 4 chemin de la Chatterie, 44800 Saint-Herblain,  France</p>
          <p><strong>Téléphone :</strong>+33 7 XX XX XX XX</p>
          <p><strong>E-mail :</strong> contact@linko.com</p>
          <p><strong>Numéro de TVA intracommunautaire :</strong> FR 40 123456789</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Produits et services proposés</h2>
          <p>Linko commercialise des solutions matérielles et logicielles pour la géolocalisation sécurisée d’enfants en milieu scolaire, périscolaire ou extrascolaire.</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">3.1 Montre connectée LINKO</h3>
          <p>Dispositif de géolocalisation conçu pour les enfants, équipé d'une carte SIM multi-opérateurs, d’un système GPS sécurisé, d’une autonomie de 48h, et d’un boîtier résistant.</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">3.2 Application de supervision LINKO</h3>
          <p>Interface web/mobile disponible sur App Store et Google Play permettant le suivi en temps réel, la gestion des groupes, la configuration de zones de sécurité et l’accès aux historiques.</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">3.3 Abonnement au service LINKO</h3>
          <p>Obligatoire pour l’usage de la montre. Inclus :</p>
          <ul className="list-disc list-inside mb-4">
            <li>Accès à l’application</li>
            <li>Activation SIM</li>
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
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Processus de commande</h2>
          <p>La commande se fait via le site (bouton « Souscrire »).</p>
          <ol className="list-decimal list-inside mb-4">
            <li>Sélection des produits</li>
            <li>Période d’essai offerte (1 mois)</li>
            <li>Établissement d’un devis valable 3 mois</li>
            <li>Validation de la commande à réception du devis signé et du paiement</li>
            <li>Confirmation de commande par email</li>
            <li>Livraison et accès à l'application</li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Modalités de paiement</h2>
          <p><strong>Moyens acceptés :</strong> Carte bancaire</p>
          <p><strong>Débit :</strong> Le paiement est réalisé à la commande mais débité uniquement à la livraison</p>
          <p><strong>Paiement échelonné :</strong> Possible en 3 mensualités égales, à la même date chaque mois</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Livraison</h2>
          <p><strong>Zone couverte :</strong> France métropolitaine</p>
          <p><strong>Délai :</strong> 3 semaines à compter de la confirmation</p>
          <p><strong>Annulation possible :</strong> En cas de non-respect du délai, le client peut annuler après 7 semaines</p>
          <p><strong>Transporteur indépendant :</strong> Oui</p>
          <p><strong>Réclamation :</strong> Sous 30 jours après réception (par email ou courrier)</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Compte client</h2>
          <p>La commande nécessite la création d’un compte client.</p>
          <p><strong>Désinscription :</strong> par demande à l’adresse <a href="mailto:unsubscribe@linko.com" className="text-blue-600 underline">unsubscribe@linko.com</a></p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Transfert de propriété</h2>
          <p>La propriété est transférée après paiement intégral.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">9. Annulation & droit de rétractation</h2>
          <p>Le client peut annuler la commande avant livraison.</p>
          <p>En tant que professionnel, le droit de rétractation ne s’applique pas sauf indication contraire spécifique.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">10. Garantie & responsabilité</h2>
          <h3 className="text-lg font-semibold mt-4 mb-2">10.1 Garantie légale</h3>
          <p>Linko s’engage à remplacer, réparer ou rembourser les produits défectueux dans un délai d’1 mois après constatation.</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">10.2 Garantie contractuelle</h3>
          <p><strong>Durée :</strong> 12 mois</p>
          <p><strong>Couvre :</strong></p>
          <ul className="list-disc list-inside mb-4">
            <li>Défauts techniques empêchant le fonctionnement normal</li>
            <li>Problèmes de batterie dans les 3 premiers mois</li>
            <li>Défaut d’intégration SIM (si usage conforme)</li>
          </ul>
          <p><strong>Exclusions :</strong></p>
          <ul className="list-disc list-inside mb-4">
            <li>Chocs, immersions prolongées, réparations non autorisées</li>
            <li>Usure normale</li>
          </ul>
          <p><strong>Procédure :</strong> Notification du défaut dans les 15 jours ouvrés, avec preuve d’achat et numéro de série.
            Frais de retour à la charge du client sauf défaut avéré.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">11. Données personnelles</h2>
          <p><strong>Finalité :</strong> Traitement nécessaire à la vente, à la livraison et au suivi client.</p>
          <p><strong>Données collectées :</strong> Nom, prénom, adresse, téléphone, email, données de paiement.</p>
          <p><strong>Destinataires :</strong> Linko et ses prestataires :</p>
          <ul className="list-disc list-inside mb-4">
            <li>Transport</li>
            <li>Paiement</li>
            <li>Maintenance</li>
          </ul>
          <p><strong>Responsable du traitement :</strong> Linko</p>
          <p><strong>Délégué à la protection des données :</strong> Mme Ori Rte, 4 chemin de la Chatterie, 44800 Saint-Herblain</p>
          <p><strong>Droits du client :</strong> Droit d’accès, de rectification, de suppression et de portabilité.</p>
          <p><strong>Demande de suppression :</strong></p>
          <ul className="list-disc list-inside mb-4">
            <li>Par email à <a href="mailto:contact@linko.com" className="text-blue-600 underline">contact@linko.com</a></li>
            <li>Par courrier : Linko - DPO, 4 chemin de la Chatterie, 44800 Saint-Herblain</li>
            <li>Via l’application (bientôt disponible)</li>
          </ul>
          <p>Traitement sous 30 jours. Certaines données peuvent être conservées pour raisons légales ou de sécurité.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">12. Médiation et litiges</h2>
          <p>En cas de litige, une médiation est possible auprès d’un médiateur (en cours de désignation).</p>
          <p><strong>En attendant :</strong> Contact : <a href="mailto:contact@linko.com" className="text-blue-600 underline">contact@linko.com</a></p>
        </section>
      </div>
    </div>
  );
}
