import React, { Suspense } from 'react';
import BrowseHeader from '../_components/browseArticles/BrowseHeader';
import Content from '../_components/browseArticles/Content';
import Filters from '../_components/browseArticles/Filters';
import ArticlesContainer from '../_components/browseArticles/ArticlesContainer';
import Spinner from '../_components/ui/Spinner';
import { getArticlesSearch } from '../_actions/articlesActions';

export interface SearchParams {
	sort_by: string;
	sort_order: string;
	min_price: string;
	max_price: string;
	is_free: string;
	min_rating: string;
	tags: string;
	value: string;
	page: string;
}

interface PageProps {
	searchParams: SearchParams;
}

export default async function Page({ searchParams }: PageProps) {
	console.log(searchParams);

	return (
		<div>
			<BrowseHeader />
			<div className='w-full max-w-[1800px] mx-auto'>
				{/* <SelectFilter materialsCount={data.total} /> */}
				<div className='grid md:grid-cols-[320px_1fr]'>
					<Filters />
					<Suspense
						fallback={<Spinner color='green' size='big' />}
						key={JSON.stringify(searchParams)}
					>
						<ArticlesContainer pa={searchParams} />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
