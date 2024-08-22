import React from "react";

export default function Page({ params }: { params: { profileId: string } }) {
  const profileId = params.profileId;

  console.log(profileId);

  return <div>Profil uzytkownika o id: {profileId}</div>;
}
