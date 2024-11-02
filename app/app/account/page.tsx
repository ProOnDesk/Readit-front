'use client';

import Spinner from '@/app/_components/ui/Spinner';
import { useRetrieveUserQuery } from '@/app/_redux/features/authApiSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';

export default function Page() {
	const router = useRouter();
	const { data: user, isLoading } = useRetrieveUserQuery();
	console.log(user);

	// if (isLoading)
	// 	return (
	// 		<div className='w-full h-[calc(100vh-64px)] flex justify-center items-center'>
	// 			<Spinner color='green' size='big' />;
	// 		</div>
	// 	);

	function handleEdit(item: string) {
		if (item === 'first_name') console.log('edit first name');
		if (item === 'last_name') console.log('edit last name');
		if (item === 'sex') console.log('edit sex');
		if (item === 'password') console.log('edit password');
		if (item === 'profile') router.push('/app/profile');
	}

	return (
		<div className='md900:bg-whiteSecond lg1200:pb-20 h-screen py-5 px-2 sm:px-5'>
			<div className=' md900:px-10 lg:px-20 lg1200:px-12 bg-white max-w-[1200px] mx-auto py-10 lg1200:rounded-2xl lg1200:shadow-lg'>
				<h3 className='font-semibold text-2xl sm500:text-3xl sm:text-4xl text-left pb-10'>
					Twoje dane
				</h3>
				<div className='flex flex-col gap-5'>
					<EditElement
						contentTitle='Imię'
						content={user?.first_name}
						onEdit={() => handleEdit('first_name')}
						icon={<CiEdit />}
					/>
					<EditElement
						contentTitle='Nazwisko'
						content={user?.last_name}
						onEdit={() => handleEdit('last_name')}
						icon={<CiEdit />}
					/>

					<EditElement
						contentTitle='Płeć'
						content={user?.sex}
						onEdit={() => handleEdit('sex')}
						icon={<CiEdit />}
					/>
					<EditElement
						contentTitle='Hasło'
						content={'********'}
						onEdit={() => handleEdit('password')}
						icon={<CiEdit />}
					/>
					<EditElement
						contentTitle='Dane profilu'
						onEdit={() => handleEdit('profile')}
						icon={<IoIosArrowForward />}
					/>
				</div>
			</div>
		</div>
	);
}

function EditElement({
	content,
	contentTitle,
	onEdit,
	icon,
}: {
	content?: string | undefined;
	contentTitle: string | undefined;
	onEdit?: () => void;
	icon: React.ReactNode;
}) {
	return (
		<button
			onClick={onEdit}
			className='flex flex-row justify-between items-center p-5 border-2 border-blackSecond/10 rounded-xl group editElement hover:border-mainGreenSecond duration-300 transition-colors'
		>
			<div className='sm500:grid grid-cols-2 sm500:min-w-[300px]'>
				<h3 className='text-xl text-left font-semibold flex'>{contentTitle}</h3>
				{content && <p className='flex items-center text-xl'>{content}</p>}
			</div>

			<span className='row-span-2 col-span-2 text-mainGreenSecond opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
				<span className='text-2xl'>{icon}</span>
			</span>
		</button>
	);
}
