'use client';

import ImageElement from '@/app/_components/creator/ImageElement';
import TextElement from '@/app/_components/creator/TextElement';
import TitleElement from '@/app/_components/creator/TitleElement';
import { useGetArticleDetailsByIdQuery } from '@/app/_redux/features/articleApiSLice';
import Spinner from '../ui/Spinner';

interface ArticleProps {
	articleId: number;
}

interface ArticleElement {
	content_type: string;
	content: string;
}

function Article({ articleId }: ArticleProps) {
	const { data: article, isLoading: isArticleLoading } =
		useGetArticleDetailsByIdQuery({
			article_id: articleId,
		});

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
					<div key={index} className='px-5 pb-5 w-full'>
						{element?.content_type === 'title' ? (
							<TitleElement element={element} index={index} />
						) : element?.content_type === 'text' ? (
							<TextElement element={element} index={index} />
						) : element?.content_type === 'image' ? (
							<ImageElement index={index} element={element} />
						) : null}
					</div>
				)
			)}
		</div>
	);
}

export default Article;
