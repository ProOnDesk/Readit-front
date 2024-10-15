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
	description:
		'Miejsce gdzie edytujesz swój artykuł.',
};

export default function Page({ params }: MaterialEditPageParams) {
	return <Editor materialSlug={params.materialSlug} />;
}
