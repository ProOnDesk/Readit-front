import { useState } from 'react';
import { LuText } from 'react-icons/lu';
import { CiImageOn, CiText } from 'react-icons/ci';
import ListElement from './ListElement';
import AddListElement from './AddListElement';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCodeSlashOutline } from 'react-icons/io5';

interface ArticleSettingsProps {
	articleList: { content_type: string; content: string }[];
	setArticleList: React.Dispatch<
		React.SetStateAction<{ content_type: string; content: string }[]>
	>;
}

export default function ArticleSettings({
	articleList,
	setArticleList,
}: ArticleSettingsProps) {
	const [choosenOption, setChoosenOption] = useState<'content' | 'elements'>(
		'elements'
	);
	const [isOpened, setIsOpened] = useState(false);

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
		setArticleList((prev) => {
			const newList = [...prev];
			newList.splice(index, 1);
			return newList;
		});
	}

	return (
		<div
			className={`absolute ${
				isOpened ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
			} md:relative md:w-1/4 h-full z-10 border-r-2 md:min-w-[270px] w-[83%] sm400:w-[70%] sm600:w-1/2 border-blackSecond/5 bg-white transition-transform duration-300`}
		>
			<div className='relative flex flex-col h-full'>
				<button
					className='absolute md:hidden flex justify-center items-center rounded-md bg-white border-r-2 border-b-2  border-blackSecond/5 left-full p-3'
					onClick={() => setIsOpened((isOpened) => !isOpened)}
					type='button'
				>
					<IoIosArrowForward
						className={`${
							isOpened && 'rotate-180'
						} transition-transform duration-300 text-3xl`}
					/>
				</button>
				<div className='flex flex-row '>
					<button
						type='button'
						className={`flex-1 p-5 border-b-2 hover:border-mainGreenSecond ${
							choosenOption === 'content' && 'border-mainGreen'
						} duration-300 transition-colors`}
						onClick={() => setChoosenOption('content')}
					>
						Elementy
					</button>
					<button
						type='button'
						className={`flex-1 p-5 border-b-2 hover:border-mainGreenSecond ${
							choosenOption === 'elements' && 'border-mainGreen'
						} duration-300 transition-colors`}
						onClick={() => setChoosenOption('elements')}
					>
						Dodaj
					</button>
				</div>
				<div className='overflow-y-auto'>
					<div className='flex flex-col'>
						{choosenOption === 'content' ? (
							<>
								{articleList.map((element, index) => (
									<ListElement
										key={index}
										type={element.content_type}
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
											{
												content_type: 'title',
												content: 'Lorem ipsum dolor sit amet.',
											},
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
												content_type: 'text',
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
												content_type: 'image',
												content: '',
											},
										]);
									}}
								/>
								<AddListElement
									leftIcon={<IoCodeSlashOutline />}
									text='Dodaj listing'
									rightIcon={'+'}
									onClick={() => {
										setArticleList((currList) => [
											...currList,
											{
												content_type: 'listing',
												content: `int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
											},
										]);
									}}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
