'use client';

import { useState } from 'react';
import { LuText } from 'react-icons/lu';
import { CiImageOn, CiText } from 'react-icons/ci';
import AddListElement from './AddListElement';
import ListElement from './ListElement';

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

	function onUp(index: number) {
		console.log(index, 'up');
		setArticleElements((prev) => {
			const newElements = [...prev];
			const element = newElements[index];
			newElements[index] = newElements[index - 1];
			newElements[index - 1] = element;
			return newElements;
		});
	}
	function onDown(index: number) {
		console.log(index, 'down');
		setArticleElements((prev) => {
			const newElements = [...prev];
			const element = newElements[index];
			newElements[index] = newElements[index + 1];
			newElements[index + 1] = element;
			return newElements;
		});
	}
	function onDelete(index: number) {
		console.log(index, 'delete');
		setArticleElements((prev) => {
			const newElements = [...prev];
			newElements.splice(index, 1);
			return newElements;
		});
	}

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
								<ListElement
									key={index}
									leftIcon={<CiText />}
									text={element.type}
									isChoosen={true}
									onUp={() => onUp(index)}
									onDown={() => onDown(index)}
									onDelete={() => onDelete(index)}
								/>
							))}
						</div>
					) : (
						<div className='flex flex-col'>
							<AddListElement
								leftIcon={<CiText />}
								text='Dodaj tytuł'
								rightIcon={'+'}
								onClick={() =>
									setArticleElements([
										...articleElements,
										{ type: 'title', content: 'Lorem ipsum dolor sit amet.' },
									])
								}
							/>
							<AddListElement
								leftIcon={<LuText />}
								text='Dodaj tekst'
								rightIcon={'+'}
								onClick={() =>
									setArticleElements([
										...articleElements,
										{
											type: 'text',
											content:
												'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet voluptatum expedita, non natus perspiciatis minus? Incidunt, dolor. Iure, fuga.',
										},
									])
								}
							/>
							<AddListElement
								leftIcon={<CiImageOn />}
								text='Dodaj zdjęcie'
								rightIcon={'+'}
								onClick={() =>
									setArticleElements([
										...articleElements,
										{
											type: 'image',
											content:
												'https://blogcdn.gmass.co/blog/wp-content/uploads/2020/12/Featured-image-what-is-an-email-header-43kb.png',
										},
									])
								}
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
							<img
								src={element?.content}
								alt='article image'
								className='w-full rounded-sm'
							/>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
}

export default Creator;
