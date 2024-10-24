import MyArticleItem from '@/app/_components/content/MyArticleItem';
import MyArticlesSection from '@/app/_components/content/MyArticlesSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Moje materiały | ReadIt',
	description: 'Miejsce gdzie znajdziesz wszystkie swoje materiały',
};

export default function Page({
	searchParams,
}: {
	searchParams: { page: string };
}) {
	return (
		<div className='max-w-[1800px] mx-auto py-10 px-10'>
			<MyArticlesSection searchParams={searchParams} />
		</div>
	);
}
