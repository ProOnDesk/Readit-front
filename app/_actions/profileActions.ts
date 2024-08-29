"use server";

import { User } from "../_redux/features/authApiSlice";

export async function fetchUserByIdQuery({ id }: { id: string }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/user/get/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Błąd serwera: ${response.status}`);
    }
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.log("Nie udało się pobrać artykułu", error);
  }
}
