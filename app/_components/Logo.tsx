import Link from 'next/link';
import React from 'react';

export default function Logo() {
	return (
		<Link href='/' className='mr-5 h-full py-[1.4rem]'>
			<img src='/pencilLogo.png' alt='logo' className='h-full' />
		</Link>
	);
}
