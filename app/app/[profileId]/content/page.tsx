import React from "react";

export default function Page({ params }: { params: { profileId: string } }) {
  const profileId = params.profileId;

  return <div>Materiały uzytkownika o id: {profileId}</div>;
}
