import React from 'react';
import ArticleItem from '../profile/ArticleItem';

import { PaginationTypeArticles } from '@/app/_redux/features/articlesApiSlice';
import { ImFileEmpty } from 'react-icons/im';
import { SearchParams } from '@/app/browse/page';
import { getArticlesSearch } from '@/app/_actions/articlesActions';

interface ArticlesContainerProps {
	params: SearchParams;
}

export default async function ArticlesContainer({
	params,
}: ArticlesContainerProps) {
	const data: PaginationTypeArticles = await getArticlesSearch(params);

	return (
		<div className='grid grid-cols-1 sm550:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 pb-10 place-content-start'>
			{data?.items.map((article) => (
				<ArticleItem article={article} key={article.id} />
			))}
			{data?.items.length === 0 && (
				<div className='col-span-5 place-self-center flex justify-center items-center gap-2'>
					<ImFileEmpty /> Materiałów na poszukiwany przez Ciebie temat brakuje u
					nas w bazie :(
				</div>
			)}
		</div>
	);
}
