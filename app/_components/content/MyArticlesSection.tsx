'use client';

import { useGetMyArticlesQuery } from '@/app/_redux/features/articlesApiSlice';
import MyArticleItem from './MyArticleItem';
import { Article } from '@/app/_redux/features/authApiSlice';

function MyArticlesSection() {
	const { data: articleList } = useGetMyArticlesQuery();

	return (
		<div className='grid grid-cols-1 sm550:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 pb-10 place-content-start'>
			{articleList?.items?.map((article: Article) => (
				<MyArticleItem key={article?.id} article={article} />
			))}
		</div>
	);
}

export default MyArticlesSection;
