import MaterialDetails from '@/app/_components/materials/MaterialDetails';
import MaterialHeader from '@/app/_components/materials/MaterialHeader';
import Opinion from '@/app/_components/materials/Opinion';
import { Rating } from '@mui/material';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';

interface Params {
	params: { materialTitle: string };
}

export default function Page({ params }: Params) {
	// 	{params?.materialTitle}
	const title = 'Jak się te jajka w końcu robi? Jak się te jajka w końcu robi';
	const summary =
		'Jajka są uniwersalnym i wartościowym składnikiem diety, bogatym w białko, witaminy, i minerały. Używane w kuchniach świata, stanowią podstawę wielu potraw, od śniadań po desery. Można je gotować, smażyć, piec, a także dodawać do wypieków, co czyni je niezwykle wszechstronnymi. ';
	const tags = ['jajka', 'gotowanie', 'przepis', 'jedzenie', 'śniadanie'];
	const date = new Date();
	const author = 'Paweł Ochał';
	const avatar_link =
		'https://www.dietomedica.pl/wp-content/uploads/2015/07/jajka-pelnowartosciowe-bialko.jpg';
	const image =
		'https://www.dietomedica.pl/wp-content/uploads/2015/07/jajka-pelnowartosciowe-bialko.jpg';
	const price = 24.99;
	const rating = 2.4;
	const rateCount = 123;

	return (
		<div className='py-8 md:py-16 md:px-10 px-4 max-w-[1800px] w-screen mx-auto flex flex-col gap-5 md:gap-10 '>
			<MaterialHeader
				imageLink={image}
				summary={summary}
				tags={tags}
				title={title}
			/>
			<div className='flex flex-col md:flex-row-reverse'>
				<div className='px-8 py-10 md:border-l-2 border-mainGreen'>
					<div className='mb-16 flex flex-col gap-5 min-w-60 px-4 rounded-md'>
						<p className='text-3xl font-semibold text-center'>{price} zł</p>
						<button className='text-center rounded-full bg-mainGreen text-white text-xl font-medium hover:bg-mainGreenSecond transition-colors duration-300 px-6 py-2'>
							Kup teraz
						</button>
					</div>
					<MaterialDetails
						author={author}
						authorAvatarLink={avatar_link}
						date={date}
						rateCount={rateCount}
						rating={rating}
					/>
				</div>
				<div className='flex-1 px-8 flex flex-col gap-6'>
					<p className='text-3xl font-medium mb-5'>Opinie</p>
					<Opinion
						authorName='Jan Kowalski'
						imageSrc={
							'https://i.seadn.io/gae/Ihufw_BbfNUhFBD-XF74FlY2JjpYeUkkTdhzJy_bjEdfz0qKlLMOkxlUKxyJR7ib5dgsji9XZAMuorSX20Fw12q5XZ2LJTj2efcS?auto=format&dpr=1&w=1000'
						}
						rating={4}
						review='Bardzo fajne jajka'
					/>
					<Opinion
						authorName='Jan Kowalski'
						imageSrc={
							'https://i.seadn.io/gae/Ihufw_BbfNUhFBD-XF74FlY2JjpYeUkkTdhzJy_bjEdfz0qKlLMOkxlUKxyJR7ib5dgsji9XZAMuorSX20Fw12q5XZ2LJTj2efcS?auto=format&dpr=1&w=1000'
						}
						rating={3}
						review={
							'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo non justo ultrices posuere. Nullam nec justo non justo ultricesposuere. Nullam nec justo non justo ultrices posuere. Nullam nec justonon justo ultrices posuere. Nullam nec justo non justo ultrices posuere.Nullam nec justo non justo ultrices posuere. Nullam nec justo non justo'
						}
					/>
					<Opinion
						authorName='Jan Kowalski'
						imageSrc={
							'https://i.seadn.io/gae/Ihufw_BbfNUhFBD-XF74FlY2JjpYeUkkTdhzJy_bjEdfz0qKlLMOkxlUKxyJR7ib5dgsji9XZAMuorSX20Fw12q5XZ2LJTj2efcS?auto=format&dpr=1&w=1000'
						}
						rating={4}
						review='Bardzo fajne jajka'
					/>
				</div>
			</div>
		</div>
	);
}
