'use client'

import { useEffect, useState } from "react";
import { slugify } from "@/utils/slugify";
import { useRouter } from 'next/navigation';
import { useProfiles } from "@/contexts/ProfileContext";
import { FiMoreVertical, FiUser } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuImage } from "react-icons/lu";
import useGroupsByProfileHook from "@/hooks/useGroupsByProfileHook";
import useMembersByProfileHook from "@/hooks/useMembersByProfile";
import ButtonParticle from "@/components/particles/ButtonParticle";
import FormInputParticle from "@/components/particles/FormInputParticle";
import BottomSheetComponent from "@/components/BottomSheetComponent";
import ImageInputParticle from "@/components/particles/ImageInputParticle";
import { createGroup } from "@/services/user-datas/group";
function Groups() {
  const { currentProfile } = useProfiles();
  const profileId = currentProfile?.id;
  const groupId = currentProfile?.groupId;
  const { groups, loading, error, setLoading, setGroups } = useGroupsByProfileHook(profileId);
  const { members, setMembers } = useMembersByProfileHook(profileId);

  // BottomSheet states
  const [openGroup, setOpenGroup] = useState(false);
  const [openKid, setOpenKid] = useState(false);
  const [openSupervisor, setOpenSupervisor] = useState(false);
  // Form states
  const [groupName, setGroupName] = useState('');
  const [memberFirstname, setMemberFirstname] = useState('');
  const [memberLastname, setMemberLastname] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [membeAvatar, setMemberAvatar] = useState(null);

  // const { members } = useMembersByProfileHook(profileId);
  const supervisors = members.filter((m) => m.roleIds.includes(2));
  const kids = members.filter((m) => m.roleIds.includes(5));
  const router = useRouter();

  useEffect(() => {
    if (profileId === null || profileId === undefined) {
      setGroups([]);
      setMembers([]);
      setLoading(false);
    }
  }, [profileId]);

  // hide show all 
  const [showAllKids, setShowAllKids] = useState(false);
  const [showAllGroups, setShowAllGroups] = useState(false);
  const [showAllSupervisors, setShowAllSupervisors] = useState(false);

  const visibleKids = showAllKids ? kids : kids.slice(0, 5);
  const visibleGroups = showAllGroups ? groups : groups.slice(0, 5);
  const visibleSupervisors = showAllSupervisors ? supervisors : supervisors.slice(0, 5);


  if (!profileId) {
    return <p>Aucun profil sélectionné</p>;
  }

  console.log("Groups:", groups);
  console.log("Members:", members);
  console.log("Accompagnateurs:", supervisors);
  console.log("Kids:", kids);

  return (
    <>

      {/* <ProtectedRoute> */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">Groupes <span className="font-semibold text-sm bg-[#FFE3CC] text-[#FF7401] px-2.5 py-1 rounded-md">{groups.length}</span></h2>

      {loading && <p>Chargement des groupes...</p>}
      {error && <p className="text-red-500">Erreur : {error.message}</p>}

      <div>
        {visibleGroups && visibleGroups.length > 0 ? (
          <ul className="flex flex-col gap-4 mb-4">
            {visibleGroups.map((group) => {
              const handleClick = () => {
                const slug = slugify(group.name);
                router.push(`/groups/${group.id}-${slug}`);
              };

              return (
                <li
                  key={group.id}
                  className="bg-white px-4 py-2 rounded-xl flex items-center gap-4 cursor-pointer"
                  onClick={handleClick}
                >
                  <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                    <LuImage className="text-green-700 w-2/5 h-2/5" />
                  </div>
                  <p>{group.name}</p>
                  <div className="ml-auto flex items-center relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 transition"
                      aria-label="Options"
                    >
                      <FiMoreVertical className="text-xl" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          !loading && <p>Aucun membre trouvé</p>
        )}
      </div>
      {groups.length > 10 && (
        <ButtonParticle
          title={showAllGroups ? 'Voir moins' : 'Voir plus'}
          variant="ghost"
          color="blue"
          onClick={() => setShowAllGroups(!showAllGroups)}
          className="w-full my-2"
        />
      )}
      <ButtonParticle
        title="Créer un groupe"
        variant="primary"
        color="blue"
        onClick={() => setOpenGroup(true)}
        className="w-full mb-8"
        iconBefore={HiOutlineUserGroup}
      />

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">Membres<span className="font-semibold text-sm bg-[#FFE3CC] text-[#FF7401] px-2.5 py-1 rounded-md">{kids.length}</span></h2>
      {loading && <p>Chargement des membres...</p>}
      {error && <p>Erreur : {error.message}</p>}
      <div>
        {visibleKids && visibleKids.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {visibleKids.map((kid) => (
              <li key={kid.id} className="bg-white px-4 py-2 rounded-xl flex items-center gap-4">
                <img
                  src={kid.avatarUrl}
                  alt={`Avatar de ${kid.firstname}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p>{kid.firstname}{' '}{kid.lastname}</p>
                {/* <p>{member.email}</p> */}
                <div className="ml-auto flex items-center relative">
                  <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Options"
                  >
                    <FiMoreVertical className="text-xl" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>Aucun membre trouvé</p>
        )}
      </div>
      {kids.length > 10 && (
        <ButtonParticle
          title={showAllKids ? 'Voir moins' : 'Voir plus'}
          variant="ghost"
          color="blue"
          onClick={() => setShowAllKids(!showAllKids)}
          className="w-full my-2"
        />
      )}
      <ButtonParticle
        title="Créer un membre"
        variant="primary"
        color="blue"
        onClick={() => setOpenKid(true)}
        className="w-full mb-8"
        iconBefore={FiUser}
      />

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">Accompagnateurs<span className="font-semibold text-sm bg-[#FFE3CC] text-[#FF7401] px-2.5 py-1 rounded-md">{supervisors.length}</span></h2>
      {loading && <p>Chargement des membres...</p>}
      {error && <p>Erreur : {error.message}</p>}
      <div>
        {visibleSupervisors && visibleSupervisors.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {visibleSupervisors.map((supervisor) => (
              <li key={supervisor.id} className="bg-white px-4 py-2 rounded-xl flex items-center gap-4">
                <img
                  src={supervisor.avatarUrl}
                  alt={`Avatar de ${supervisor.firstname}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p>{supervisor.firstname}{' '}{supervisor.lastname}</p>
                {/* <p>{member.email}</p> */}
                <div className="ml-auto flex items-center relative">
                  <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Options"
                  >
                    <FiMoreVertical className="text-xl" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>Aucun accompagnateur trouvé</p>
        )}
      </div>
      {supervisors.length > 10 && (
        <ButtonParticle
          title={showAllSupervisors ? 'Voir moins' : 'Voir plus'}
          variant="ghost"
          color="blue"
          onClick={() => setShowAllSupervisors(!showAllSupervisors)}
          className="w-full my-2"
        />
      )}
      <ButtonParticle
        title="Créer un accompagnateur"
        variant="primary"
        color="blue"
        onClick={() => setOpenSupervisor(true)}
        className="w-full"
        iconBefore={FiUser}
      />
      {/* </ProtectedRoute> */}
      {/* BottomSheet groupe */}
      <BottomSheetComponent
        isOpen={openGroup}
        onClose={() => setOpenGroup(false)}
        title="Créer un groupe">
        <form className="flex flex-col gap-4">
          <FormInputParticle
            label="Nom du groupe"
            type="text"
            id="groupName"
            name="groupName"
            placeholder="Entrez un nom"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <button type="submit" className="bg-[#0162EF] text-white px-4 py-2 rounded-md">
            Créer le groupe
          </button>
        </form>
      </BottomSheetComponent>

      {/* BottomSheet membre */}
      <BottomSheetComponent
        isOpen={openKid}
        onClose={() => setOpenKid(false)}
        title="Créer un membre">
        <form
          className="flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!groupName.trim()) return;

            try {
              setLoading(true);
              const newGroup = await createGroup(profileId, groupName);
              setGroups((prev) => [...prev, newGroup]);
              setGroupName('');
              setOpenGroup(false);
            } catch (err) {
              console.error("Erreur lors de la création du groupe :", err);
              alert("Erreur lors de la création du groupe.");
            } finally {
              setLoading(false);
            }
          }}
        >
          <FormInputParticle
            label="Prénom"
            type="text"
            id="kidFirstname"
            name="kidFirstname"
            value={memberFirstname}
            onChange={(e) => setMemberFirstname(e.target.value)}
          />
          <FormInputParticle
            label="Nom"
            type="text"
            id="kidLastname"
            name="kidLastname"
            value={memberLastname}
            onChange={(e) => setMemberLastname(e.target.value)}
          />
          <FormInputParticle
            label="Email"
            type="text"
            id="kidEmail"
            name="kidEmail"
            value={memberEmail}
            onChange={(e) => setMemberEmail(e.target.value)}
          />
          <ImageInputParticle
            label="Photo de profil"
            onChange={(file) => setMemberAvatar(file)}
          />
          <button type="submit" className="bg-[#0162EF] text-white px-4 py-2 rounded-md">
            Créer le membre
          </button>
          {error && <p className="text-red-500 text-sm">Erreur lors de la création du groupe.</p>}
        </form>
      </BottomSheetComponent>

      {/* BottomSheet accompagnateur */}
      <BottomSheetComponent
        isOpen={openSupervisor}
        onClose={() => setOpenSupervisor(false)}
        title="Créer un accompagnateur">
        <form className="flex flex-col gap-4">
          <FormInputParticle
            label="Prénom"
            type="text"
            id="supervisorFirstname"
            name="supervisorFirstname"
            value={memberFirstname}
            onChange={(e) => setMemberFirstname(e.target.value)}
          />
          <FormInputParticle
            label="Nom"
            type="text"
            id="supervisorLastname"
            name="supervisorLastname"
            value={memberLastname}
            onChange={(e) => setSupervisorLastname(e.target.value)}
          />
          <ImageInputParticle
            label="Photo de l'accompagnateur"
            onChange={(file) => setSupervisorAvatar(file)}
          />
          <button type="submit" className="bg-[#0162EF] text-white px-4 py-2 rounded-md">
            Créer l'accompagnateur
          </button>
        </form>
      </BottomSheetComponent>
    </>
  );
}

export default Groups;