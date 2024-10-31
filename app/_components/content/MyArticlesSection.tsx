'use client';

import { useGetMyArticlesQuery } from '@/app/_redux/features/articlesApiSlice';
import MyArticleItem from './MyArticleItem';
import { Article } from '@/app/_redux/features/authApiSlice';
import PaginationArticles from '../browseArticles/PaginationArticles';
import Spinner from '../ui/Spinner';
import { useEffect } from 'react';

function MyArticlesSection({
	searchParams,
}: {
	searchParams: { page: string };
}) {
	const {
		data: articleList,
		isLoading: isArticleListLoading,
		isFetching: isArticleListFetching,
		refetch: refetchArticleList,
	} = useGetMyArticlesQuery({
		page: searchParams?.page ?? '1',
	});

	useEffect(() => {
		refetchArticleList();
	}, [refetchArticleList]);

	return (
		<>
			<div className='pb-5'>
				<h3 className='font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left'>
					Moje materiały
				</h3>
				<p>Stworzone materiały: {articleList?.total}</p>
			</div>
			{isArticleListLoading || isArticleListFetching ? (
				<div className='py-20'>
					<Spinner color='green' size='big' />
				</div>
			) : (
				<div className='grid grid-cols-1 sm550:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 pb-10 place-content-start'>
					{articleList?.items?.map((article: Article) => (
						<MyArticleItem
							key={article?.id}
							article={article}
							refetchArticleList={refetchArticleList}
						/>
					))}
				</div>
			)}
			<PaginationArticles data={articleList} scroll={true} />
		</>
	);
}

export default MyArticlesSection;
