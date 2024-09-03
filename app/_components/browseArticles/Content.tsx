import React, { lazy, Suspense, useEffect, useState } from 'react';
import SelectFilter from './SelectFilter';
import { useDebounce } from '@/app/_hooks/useDebounce';
import Filters from './Filters';
import {
	PaginationTypeArticles,
	useGetArticlesSearchQuery,
} from '@/app/_redux/features/articlesApiSlice';
import ArticleItem from '../profile/ArticleItem';
import Spinner from '../ui/Spinner';

// import ArticlesContainer from "./ArticlesContainer";
import { SearchParams } from '@/app/browse/page';
import { getArticlesSearch } from '@/app/_actions/articlesActions';
import ArticlesContainer from './ArticlesContainer';

interface ContentProps {
	params: SearchParams;
	pa: any;
}

// export const revalidate = 0;

export default async function Content({ params, pa }: ContentProps) {
	return <div></div>;
}
