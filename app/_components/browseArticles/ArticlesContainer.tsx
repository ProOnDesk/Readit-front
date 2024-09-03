import React, { Suspense } from 'react';
import ArticleItem from '../profile/ArticleItem';
import { Article } from '@/app/_redux/features/authApiSlice';
import Spinner from '../ui/Spinner';
import { Pagination } from '@mui/material';
import { PaginationTypeArticles } from '@/app/_redux/features/articlesApiSlice';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import PaginationArticles from './PaginationArticles';
import { getArticlesSearch } from '@/app/_actions/articlesActions';
import { unstable_noStore as noStore } from 'next/cache';
import { SearchParams } from '@/app/browse/page';

interface ArticlesContainerProps {
	pa: SearchParams;
}

export default async function ArticlesContainer({
	pa,
}: ArticlesContainerProps) {
	noStore();
	const data = await getArticlesSearch(pa);
	return (
		<>
			<div className='grid grid-cols-1 sm550:grid-cols-2 md800:grid-cols-3 lg1100:grid-cols-4 gap-x-3 gap-y-6 pb-10'>
				{data?.items.map((article) => (
					<ArticleItem article={article} key={article.id} />
				))}
			</div>
			<PaginationArticles data={data} />
		</>
	);
}