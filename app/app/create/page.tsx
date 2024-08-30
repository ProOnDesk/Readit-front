import Creator from '@/app/_components/creator/Creator';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Stwórz artykuł | ReadIt',
	description:
		'Miejsce gdzie stworzysz swój artykuł i podzielisz się nim ze światem',
};

export default function Page() {
	return (
		<div className='py-16 md:px-10 px-4 max-w-[1800px] w-screen mx-auto'>
			<p className='text-5xl mx-auto text-center mb-10'>
				Witaj w kreatorze artykułów
			</p>
			<Creator />
		</div>
	);
}
