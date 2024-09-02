import { getArticleInfoBySlug } from '@/app/_actions/articlesActions';
import Article from '@/app/_components/materials/Article';
import MaterialDetails from '@/app/_components/materials/MaterialDetails';
import MaterialHeader from '@/app/_components/materials/MaterialHeader';
import OpinionSection from '@/app/_components/materials/OpinionSection';
import { Suspense } from 'react';

export const revalidate = 0;

interface Params {
	params: { materialTitle: string };
	searchParams: any;
}

export async function generateMetadata({ params }: Params) {
	const data = await getArticleInfoBySlug({
		slug: params?.materialTitle,
	});

	return { title: `${`${data?.title} | ReadIt` ?? 'Materiał'}` };
}

export default async function Page({ params, searchParams }: Params) {
	const {
		title,
		summary,
		tags,
		id,
		author: { id: userId, first_name, last_name, avatar_url },
		created_at,
		view_count,
		title_image_url,
		rating,
		rating_count,
	} = await getArticleInfoBySlug({
		slug: params?.materialTitle,
	});
	const author = first_name + ' ' + last_name;
	const convertedTags = tags.map((tag: { value: string }) => tag.value);

	return (
		<div className='py-8 md:py-16 md:px-10 px-4 max-w-[1800px] w-screen mx-auto flex flex-col gap-5 md:gap-10 '>
			<MaterialHeader
				imageLink={title_image_url}
				summary={summary}
				tags={convertedTags}
				title={title}
			/>
			<div className='flex flex-col md:flex-row-reverse'>
				<div className='px-8 py-10 md:border-l-2 border-mainGreen h-fit'>
					<MaterialDetails
						author={author}
						authorAvatarLink={avatar_url}
						date={new Date(created_at)}
						rateCount={rating_count}
						rating={rating}
						viewCount={view_count}
					/>
				</div>
				<div className='flex-1 px-8 py-5'>
					<Article articleId={id} />
					<Suspense
						fallback={<div className='mx-auto'>Ładowanie opinii...</div>}
						key={id}
					>
						<OpinionSection
							articleId={id}
							authorId={userId}
							searchParams={searchParams}
							isPossibleToMakeOpinion={true}
						/>
					</Suspense>
				</div>
			</div>
		</div>
	);
}
