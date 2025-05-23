import ButtonParticle from "@/components/particles/ButtonParticle";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <ButtonParticle title="Paramètres" routeLink={"/settings"} />
      <ButtonParticle title="Se déconnecter" routeLink={"/"} />
    </div>
  );
}

export default Profile;