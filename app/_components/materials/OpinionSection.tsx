import { getArticleComments } from '@/app/_actions/articlesActions';
import Opinion from './Opinion';
import Pagination from './Pagination';
import { unstable_noStore as noStore } from 'next/cache';

export const revalidate = 0;

interface OpinionsProps {
	articleId: number;
	searchParams: any;
}

interface Opinion {
	content: string;
	rating: number;
	id: number;
	author: {
		id: number;
		first_name: string;
		last_name: string;
		avatar_url: string;
	};
	article_id: number;
	created_at: string;
}

const SIZE_OF_PAGE = 10;

export default async function OpinionSection({
	articleId,
	searchParams,
}: OpinionsProps) {
	noStore();
	const data = await getArticleComments({
		article_id: articleId,
		page: searchParams?.page ?? 1,
		size: SIZE_OF_PAGE,
		sort_order: 'desc',
	});

	return (
		<div className='flex flex-col gap-6'>
			<p className='text-3xl font-medium mb-5'>Opinie</p>
			{data?.items &&
				data.items.map((item: any) => (
					<Opinion
						key={item.id}
						authorName={item.author.first_name}
						imageSrc={item.author.avatar_url}
						rating={item.rating}
						review={item.content}
					/>
				))}
			{data?.items.length === 0 && (
				<p className='text-center text-lg'>Brak opinii</p>
			)}
			<div>
				<Pagination data={data} SIZE_OF_PAGE={SIZE_OF_PAGE} />
			</div>
		</div>
	);
}
