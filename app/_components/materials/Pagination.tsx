'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import React from 'react';

function Pagination({
	data,
	SIZE_OF_PAGE,
}: {
	data: any;
	SIZE_OF_PAGE: number;
}) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();
	const pagesCount = Math.ceil(data?.total / SIZE_OF_PAGE);
	const currentPage = searchParams.get('page') ?? 1;

	function handleChangePage(pageNumber: number) {
		const params = new URLSearchParams(searchParams);
		params.set('page', String(pageNumber));
		router.replace(`${pathname}?${params.toString()}`, { scroll: true });
	}

	if (pagesCount < 1) return null;

	if (Number(currentPage) > pagesCount) handleChangePage(pagesCount);

	return (
		<div>
			<div className='flex justify-center gap-2 self-end'>
				<ArrowButton
					disabled={Number(currentPage) <= 1}
					onClick={() => handleChangePage(Number(currentPage) - 1)}
				>
					<FaAngleLeft />
				</ArrowButton>
				<span>{currentPage}</span>
				<span>z</span>
				<span>{pagesCount}</span>
				<ArrowButton
					disabled={Number(currentPage) >= pagesCount}
					onClick={() => handleChangePage(Number(currentPage) + 1)}
				>
					<FaAngleRight />
				</ArrowButton>
			</div>
		</div>
	);
}

function ArrowButton({
	disabled,
	onClick,
	children,
}: {
	disabled: boolean;
	onClick: () => void;
	children: React.ReactNode;
}) {
	if (disabled) return null;
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={
				'text-black hover:text-mainGreen cursor-pointer transition-colors'
			}
		>
			{children}
		</button>
	);
}

export default Pagination;
