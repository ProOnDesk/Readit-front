import Creator from '@/app/_components/creator/Creator';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Stwórz artykuł | Just Read',
	description:
		'Miejsce gdzie stworzysz swój artykuł i podzielisz się nim ze światem',
};

export default function Page() {
	return (
		<div className='py-16 px-10 max-w-[1800px] w-screen'>
			<p className='text-3xl mx-auto text-center mb-10'>
				Witaj w kreatorze artykułów
			</p>
			<Creator />
		</div>
	);
}
