"use server";

import { PaginationTypeArticles } from "../_redux/features/articlesApiSlice";
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

export async function fetchUserArticles({
  userId,
  page = "1",
}: {
  userId: number;
  page: string;
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/user/get/articles/${userId}?page=${page}&size=12`,
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
    const data: PaginationTypeArticles = await response.json();
    return data;
  } catch (error) {
    console.log("Nie udało się pobrać artykułów", error);
  }
}

export async function fetchUsersNumber() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/user/followers/top/?page=1&size=1`,
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
    const data: PaginationTypeArticles = await response.json();
    return data;
  } catch (error) {
    console.log("Nie udało się pobrać liczby uzytkownikow", error);
  }
}
