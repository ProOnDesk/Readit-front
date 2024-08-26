import Image from "next/image";

interface Params {
	params: { materialTitle: string };
}

export default function Page({ params }: Params) {
	const title = 'Jak się te jajka w końcu robi?';
	const summary =
		'Zapraszam do przeczytania artykułu o tym jak zrobić jajka na miękko, na twardo, sadzone, w koszulce i w koszulce z żółtkiem płynnym.';
	const tags = ['jajka', 'gotowanie', 'przepis', 'jedzenie', 'śniadanie'];
	const date = new Date();
	const author = 'Paweł Ochał';
	const image = 'https://images.unsplash.com/photo-1626756786570-7c5d1e3d8b1a';
	const price = 24.99;
	const rate = 4.5;
	const rateCount = 123;
	const article = [
		{
			content_type: 'title',
			content: 'Co to są jajka?',
		},
		{
			content_type: 'text',
			content:
				'Jajka, najczęściej kurze, są jednym z podstawowych produktów spożywczych na świecie. Składają się z trzech głównych części: skorupki, białka i żółtka. Skorupka chroni zawartość jajka, białko (albumina) jest źródłem białka, a żółtko zawiera tłuszcze i witaminy.',
		},
		{
			content_type: 'title',
			content: 'Rodzaje jajek',
		},
		{
			content_type: 'text',
			content:
				'Jajka występują w różnych rozmiarach, kolorach i pochodzeniu. W sklepach najczęściej spotykamy jajka kurze, ale warto zwrócić uwagę na jajka przepiórcze, kacze czy nawet strusie! Kolor skorupki nie wpływa na smak jajka - to jedynie różnorodność gatunków kur.',
		},
		{
			content_type: 'title',
			content: 'Jak wybierać jajka?',
		},
		{
			content_type: 'text',
			content:
				'Wybierając jajka w sklepie, warto zwrócić uwagę na oznaczenia na skorupkach. Kody te informują o sposobie hodowli kur.',
		},
		{
			content_type: 'title',
			content: 'Przechowywanie jajek',
		},
		{
			content_type: 'text',
			content:
				'Jajka najlepiej przechowywać w lodówce, aby zachować ich świeżość. Najlepiej trzymać je w kartonie, który chroni je przed światłem i niepożądanymi zapachami. Czy wiesz, że świeże jajko zanurzone w wodzie opada na dno, a stare unoszą się na powierzchni? To prosty test, który możesz wykonać w domu!',
		},
	];

	return (
		<div className='py-16 md:px-10 px-4 max-w-[1800px] w-screen mx-auto'>
			<p className='text-5xl mx-auto text-center mb-10'>
				{params?.materialTitle}
			</p>
			<div>
				<Image src={image} alt={title} width={1920} height={1080} />
			</div>
			<div></div>
		</div>
	);
}
