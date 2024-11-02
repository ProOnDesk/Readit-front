'use client';

import EditProfileElement from '@/app/_components/profile/EditProfileElement';
import Spinner from '@/app/_components/ui/Spinner';
import { useRetrieveUserQuery } from '@/app/_redux/features/authApiSlice';
import Link from 'next/link';
import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';

export default function ProfileSettings() {
	const { data: user, isLoading } = useRetrieveUserQuery();

	if (isLoading)
		return (
			<div className='w-full h-[calc(100vh-64px)] flex justify-center items-center'>
				<Spinner color='green' size='big' />;
			</div>
		);

	return (
		<div className='md900:bg-whiteSecond lg1200:pb-20 h-screen py-5 px-2 sm:px-5'>
			<div className=' md900:px-10 lg:px-20 lg1200:px-12 bg-white max-w-[1200px] mx-auto py-10 rounded-2xl lg1200:shadow-lg'>
				<h3 className='font-semibold text-3xl sm:text-4xl text-left pb-10'>
					Twoje dane
				</h3>
				<div className='flex flex-col gap-5'>
					<EditProfileElement
						contentTitle='first_name'
						content={user?.first_name}
						icon={<CiEdit />}
					/>
					<EditProfileElement
						contentTitle='last_name'
						content={user?.last_name}
						icon={<CiEdit />}
					/>

					<EditProfileElement
						contentTitle='sex'
						content={user?.sex}
						icon={<CiEdit />}
					/>
					<EditProfileElement
						contentTitle='password'
						content={'********'}
						icon={<CiEdit />}
					/>
					<Link
						href='/app/profile'
						className='flex flex-row justify-between items-center p-5 border-2 border-blackSecond/10 rounded-xl group editElement hover:border-mainGreenSecond duration-300 transition-colors'
					>
						<h3 className='text-xl text-left font-semibold flex'>
							Dane profilu
						</h3>
						<span className='row-span-2 col-span-2 text-mainGreenSecond opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
							<span className='text-2xl'>
								<IoIosArrowForward />
							</span>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
