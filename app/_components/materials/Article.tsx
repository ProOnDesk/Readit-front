'use client';

import ImageElement from '@/app/_components/creator/ImageElement';
import TextElement from '@/app/_components/creator/TextElement';
import TitleElement from '@/app/_components/creator/TitleElement';
import { useGetArticleDetailsByIdQuery } from '@/app/_redux/features/articleApiSLice';
import Spinner from '../ui/Spinner';
import { useRouter } from 'next/navigation';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import DisplayListing from './DisplayListing';

interface ArticleProps {
	articleId: number;
	slug: string;
}

interface ArticleElement {
	content_type: string;
	content: string;
}

function Article({ articleId, slug }: ArticleProps) {
	const router = useRouter();
	const {
		data: article,
		isLoading: isArticleLoading,
		error,
		isError,
	} = useGetArticleDetailsByIdQuery({
		article_id: articleId,
	});

	useEffect(() => {
		if (isError) {
			if ((error as FetchBaseQueryError).status === 401) {
				router.push(`/materials/${encodeURIComponent(slug)}`);
			}
		}
	}, [isError, error, slug, router]);

	if (isArticleLoading)
		return (
			<div className='py-10'>
				<Spinner color='green' size='small' />
			</div>
		);

	return (
		<div className='pb-10'>
			{article?.content_elements.map(
				(element: ArticleElement, index: number) => (
					<div key={index} className='lg:px-5 pb-5 w-full'>
						{element?.content_type === 'title' ? (
							<TitleElement element={element} index={index} />
						) : element?.content_type === 'text' ? (
							<TextElement element={element} index={index} />
						) : element?.content_type === 'image' ? (
							<ImageElement index={index} element={element} />
						) : element?.content_type === 'listing' ? (
							<DisplayListing element={element} key={index} />
						) : null}
					</div>
				)
			)}
		</div>
	);
}

export default Article;
