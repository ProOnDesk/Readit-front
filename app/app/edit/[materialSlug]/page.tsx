import Editor from '@/app/_components/creator/Editor';
import { useGetArticleInfoToEditMutation } from '@/app/_redux/features/articleApiSLice';
import { Metadata } from 'next';

interface MaterialEditPageParams {
	params: {
		materialSlug: string;
	};
}

export const metadata: Metadata = {
	title: 'Edytuj artykuł | ReadIt',
	description: 'Miejsce gdzie edytujesz swój artykuł.',
};

export default function Page({ params }: MaterialEditPageParams) {
	return (
		<div className='py-16 md:px-10 px-4 max-w-[1800px] w-screen mx-auto'>
			<p className='text-5xl mx-auto text-center mb-10'>
				Witaj w kreatorze artykułów
			</p>
			<Editor materialSlug={params.materialSlug} />;
		</div>
	);
}
