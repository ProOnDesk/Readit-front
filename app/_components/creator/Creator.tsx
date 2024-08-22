'use client';

import { useState } from 'react';
import { LuText } from 'react-icons/lu';
import { CiImageOn, CiText } from 'react-icons/ci';
import AddListElement from './AddListElement';

function Creator() {
	const [choosenOption, setChoosenOption] = useState<'content' | 'elements'>(
		'elements'
	);
	const [articleElements, setArticleElements] = useState([
		{
			type: 'title',
			content: 'Lorem ipsum dolor sit amet.',
		},
		{
			type: 'image',
			content:
				'https://blogcdn.gmass.co/blog/wp-content/uploads/2020/12/Featured-image-what-is-an-email-header-43kb.png',
		},
		{
			type: 'text',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lacus nec nunc ultricies gravida. Nulla facilisi. Nullam nec nunc nec sem tincidunt ultricies. Sed in lacus nec nunc ultricies gravida. Nulla facilisi. Nullam nec nunc nec sem tincidunt ultricies.',
		},
	]);
	return (
		<div className='flex w-full h-[75vh] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
			<div className='flex flex-col w-1/4 border-r-2 border-blackSecond/5'>
				<div className='flex flex-row '>
					<button
						className={`flex-1 p-5 border-b-2 hover:border-mainGreenSecond ${
							choosenOption === 'content' && 'border-mainGreen'
						} duration-300 transition-colors`}
						onClick={() => setChoosenOption('content')}
					>
						Elementy
					</button>
					<button
						className={`flex-1 p-5 border-b-2 hover:border-mainGreenSecond ${
							choosenOption === 'elements' && 'border-mainGreen'
						} duration-300 transition-colors`}
						onClick={() => setChoosenOption('elements')}
					>
						Dodaj
					</button>
				</div>
				<div>
					{choosenOption === 'content' ? (
						<div className='flex flex-col'>
							{articleElements.map((element, index) => (
								<AddListElement
									key={index}
									leftIcon={<CiText />}
									text={element.type}
									rightIcon={'-'}
								/>
							))}
						</div>
					) : (
						<div className='flex flex-col'>
							<AddListElement
								leftIcon={<CiText />}
								text='Dodaj tytuł'
								rightIcon={'+'}
							/>
							<AddListElement
								leftIcon={<LuText />}
								text='Dodaj tekst'
								rightIcon={'+'}
							/>
							<AddListElement
								leftIcon={<CiImageOn />}
								text='Dodaj zdjęcie'
								rightIcon={'+'}
							/>
						</div>
					)}
				</div>
			</div>
			<div className='flex flex-col items-center w-3/4 py-5 overflow-y-scroll'>
				{articleElements.map((element, index) => (
					<div key={index} className='px-5 py-5 w-full'>
						{element.type === 'title' ? (
							<p className='text-3xl '>{element.content}</p>
						) : element.type === 'text' ? (
							<p>{element.content}</p>
						) : element.type === 'image' ? (
							<img src={element?.content} alt='article image' className='mx-auto'/>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
}

export default Creator;
