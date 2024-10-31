'use client';

import Spinner from '@/app/_components/ui/Spinner';
import { useRetrieveUserQuery } from '@/app/_redux/features/authApiSlice';
import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';

export default function Page() {
	// const { data: user, isLoading } = useRetrieveUserQuery();

	// if (isLoading)
	// 	return (
	// 		<div className='w-full h-[calc(100vh-64px)] flex justify-center items-center'>
	// 			<Spinner color='green' size='big' />;
	// 		</div>
	// 	);

	return (
		<div className='md900:bg-whiteSecond lg1200:pb-20 min-h-screen py-5'>
			<div className=' md900:px-10 lg:px-20 lg1200:px-12 bg-white max-w-[1200px] mx-auto py-10 lg1200:rounded-2xl lg1200:shadow-lg'>
				<h3 className='font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left pb-10'>
					Twoje dane
				</h3>
				<div className='flex flex-col gap-5'>
					<div className='grid grid-cols-[1fr_3fr_auto]'>
						<h3 className='text-xl font-semibold'>Imię</h3>
						<input
							type='text'
							className='outline-none'
							defaultValue={'Paweł'}
						/>
						<button>
							<BsCheck className='text-2xl text-gray-400' />
						</button>
					</div>
					<div className='grid grid-cols-[1fr_3fr_auto]'>
						<h3 className='text-xl font-semibold'>Nazwisko</h3>
						<input
							type='text'
							className='outline-none'
							defaultValue={'Ochał'}
						/>
						<button>
							<BsCheck className='text-2xl text-gray-400' />
						</button>
					</div>
					<div className='grid grid-cols-[1fr_3fr_auto]'>
						<h3 className='text-xl font-semibold'>Płeć</h3>
						<input
							type='text'
							className='outline-none'
							defaultValue={'Mężczyzna'}
						/>
						<button className='text-green-300 hover:text-green-500 w-fit'>
							<BsCheck className='text-2xl ' />
						</button>
					</div>
					<div className='grid grid-cols-[1fr_3fr_auto]'>
						<h3 className='text-xl font-semibold'>Hasło</h3>
						<p>******</p>
						<button>
							<CiEdit className='text-2xl ' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
