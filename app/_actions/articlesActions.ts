'use server';

export async function getArticleInfoBySlug({ slug }: { slug: string }) {
	const s = 'chwytliwy-tytuł,-który-zszokuje?-śmiało!...';

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_HOST}/articles/slug/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ slug: s }),
			}
		);
		if (!response.ok) {
			throw new Error(`Błąd serwera: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Nie udało się pobrać artykułu', error);
	}
}

export async function getArticleComments({
	article_id,
	page,
	size,
}: {
	article_id: number;
	page: number;
	size: number;
}) {
	const s = 'chwytliwy-tytuł,-który-zszokuje?-śmiało!...';

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_HOST}/articles/comment/all/${article_id}?page=${page}&size=${size}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		if (!response.ok) {
			throw new Error(`Błąd serwera: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Nie udało się pobrać komentarzy', error);
	}
}
