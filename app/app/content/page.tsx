import MyArticleItem from '@/app/_components/content/MyArticleItem';

export default function Page({
	searchParams,
}: {
	searchParams: { page: string };
}) {
	return (
		<div className='grid grid-cols-4 gap-10 max-w-[1800px] mx-auto pt-10 px-10'>
			<MyArticleItem />
		</div>
	);
}
