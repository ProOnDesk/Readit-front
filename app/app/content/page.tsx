import MyArticleItem from '@/app/_components/content/MyArticleItem';

export default function Page({
	searchParams,
}: {
	searchParams: { page: string };
}) {
	return (
		<div className='max-w-[1800px] mx-auto py-10 px-10'>
			<div className='grid grid-cols-1 sm550:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 pb-10 place-content-start'>
				<MyArticleItem />
			</div>
		</div>
	);
}
