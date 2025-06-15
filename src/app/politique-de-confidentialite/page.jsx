'use client'
import HomeNavbar from "@/components/landing-page/HomeNavbar";
import ButtonParticle from "@/components/particles/ButtonParticle";
import { IoIosArrowBack } from "react-icons/io";

export default function PrivacyPolicy() {
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
            Politique
            <br />
            <span className="text-4xl sm:text-5xl text-[#FF7401] h-[70px] bg-[#ff9d4c]/20 rounded-xl px-4">
              de Confidentialité
            </span>
          </h1>
          <p className="mt-2 italic">Dernière mise à jour : 15/06/2025</p>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">Introduction</h2>
          <p>
            Dans un contexte où les technologies de communication évoluent rapidement, la protection de votre vie privée est une priorité pour nous.
            Nous nous engageons à respecter la confidentialité des données personnelles que vous nous confiez via notre site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">Collecte des données personnelles</h2>
          <p>Nous collectons les données suivantes :</p>
          <ul className="list-disc list-inside mb-4">
            <li>Prénom</li>
            <li>Adresse postale complète</li>
            <li>Code postal</li>
            <li>Adresse électronique (email)</li>
            <li>Numéro de téléphone et télécopieur</li>
          </ul>
          <p>
            Ces données sont recueillies principalement via des formulaires et l’interaction avec notre site, ainsi que par l’utilisation de cookies et fichiers journaux permettant de mieux comprendre votre navigation.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Formulaires concernés</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Formulaire d’inscription au site</li>
            <li>Formulaire de commande</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Utilisation des données</h3>
          <p>Nous utilisons vos données pour :</p>
          <ul className="list-disc list-inside mb-4">
            <li>Suivre vos commandes</li>
            <li>Vous envoyer des informations et offres promotionnelles</li>
            <li>Établir des statistiques anonymes</li>
            <li>Faciliter les échanges et contacts</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Collecte par interactivité</h3>
          <p>Nous collectons également des données lors de vos échanges directs avec nous (par exemple, correspondance), utilisées pour les mêmes finalités citées ci-dessus.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">Droits d’opposition et de retrait</h2>
          <p>
            Vous disposez d’un droit d’opposition, c’est-à-dire que vous pouvez refuser que vos données soient utilisées à certaines fins (notamment publicitaires).
            Vous pouvez aussi demander le retrait de vos données, par exemple, pour ne plus figurer dans une liste de diffusion.
          </p>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter par :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Courrier postal : 4 chemin de la Chatterie, 44800 SAINT-HERBLAIN</li>
            <li>Email : <a href="mailto:contact@linko.com" className="text-blue-600 underline">contact@linko.com</a></li>
            <li>Téléphone : +33 7 XX XX XX XX</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">Droit d’accès, de modification et de suppression</h2>
          <p>
            Vous avez également le droit d’accéder aux données vous concernant, de les modifier ou de demander leur suppression.
          </p>
          <p>Pour ce faire, contactez-nous aux mêmes coordonnées que ci-dessus.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">Sécurité des données</h2>
          <p>
            Nous conservons vos données dans un environnement sécurisé, et nos collaborateurs sont tenus à la confidentialité.
          </p>
          <p>Nous mettons en œuvre les mesures techniques et organisationnelles suivantes :</p>
          <ul className="list-disc list-inside mb-4">
            <li>Protocole SSL pour les échanges sécurisés</li>
            <li>Gestion stricte des accès aux données</li>
            <li>Sauvegardes régulières des données</li>
            <li>Utilisation d’identifiants et mots de passe sécurisés</li>
          </ul>
          <p>
            Malgré ces précautions, la transmission de données sur Internet comporte toujours un risque, et nous ne pouvons garantir une sécurité absolue.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-2">Cadre légal</h2>
          <p>
            Nous respectons pleinement les dispositions du Règlement Général sur la Protection des Données (RGPD) et la législation française en vigueur.
          </p>
        </section>

        <p className="mt-12 italic text-sm text-center">
          Politique de confidentialité générée avec soin par Linko.
        </p>
      </div>
    </div>
  );
}
