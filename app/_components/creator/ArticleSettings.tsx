import { useState } from 'react';
import { LuText } from 'react-icons/lu';
import { CiImageOn, CiText } from 'react-icons/ci';
import ListElement from './ListElement';
import AddListElement from './AddListElement';

interface ArticleSettingsProps {
	articleList: { type: string; content: string }[];
	setArticleList: React.Dispatch<
		React.SetStateAction<{ type: string; content: string }[]>
	>;
	setImageList: any;
}

export default function ArticleSettings({
	articleList,
	setArticleList,
	setImageList,
}: ArticleSettingsProps) {
	const [choosenOption, setChoosenOption] = useState<'content' | 'elements'>(
		'elements'
	);

	function onUp(index: number) {
		setArticleList((prev) => {
			const newList = [...prev];
			const element = newList[index];
			newList[index] = newList[index - 1];
			newList[index - 1] = element;
			return newList;
		});
	}
	function onDown(index: number) {
		setArticleList((prev) => {
			const newList = [...prev];
			const element = newList[index];
			newList[index] = newList[index + 1];
			newList[index + 1] = element;
			return newList;
		});
	}
	function onDelete(index: number) {
		let imageCount = 0;
		for (let i = 0; i < index; i++) {
			if (articleList[i].type === 'image') {
				imageCount++;
			}
		}
		setArticleList((prev) => {
			const newList = [...prev];
			newList.splice(index, 1);
			return newList;
		});
		setImageList((prev: any) => {
			const newList = [...prev];
			newList.splice(imageCount, 1);
			return newList;
		});
	}

	return (
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
			<div className='overflow-y-scroll'>
				<div className='flex flex-col'>
					{choosenOption === 'content' ? (
						<>
							{articleList.map((element, index) => (
								<ListElement
									key={index}
									type={element.type}
									onUp={() => onUp(index)}
									onDown={() => onDown(index)}
									onDelete={() => onDelete(index)}
								/>
							))}
						</>
					) : (
						<>
							<AddListElement
								leftIcon={<CiText />}
								text='Dodaj tytuł'
								rightIcon={'+'}
								onClick={() =>
									setArticleList((currList) => [
										...currList,
										{ type: 'title', content: 'Lorem ipsum dolor sit amet.' },
									])
								}
							/>
							<AddListElement
								leftIcon={<LuText />}
								text='Dodaj tekst'
								rightIcon={'+'}
								onClick={() =>
									setArticleList((currList) => [
										...currList,
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
								onClick={() => {
									setArticleList((currList) => [
										...currList,
										{
											type: 'image',
											content:
												'https://blogcdn.gmass.co/blog/wp-content/uploads/2020/12/Featured-image-what-is-an-email-header-43kb.png',
										},
									]);
									setImageList((currList: any) => [...currList, null]);
								}}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
