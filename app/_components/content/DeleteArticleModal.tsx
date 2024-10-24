import { Article } from '@/app/_redux/features/authApiSlice';
import { CiCircleRemove } from 'react-icons/ci';

interface DeleteArticleModalProps {
	onCloseModal: () => void;
	article: Article;
}

function DeleteArticleModal({
	onCloseModal,
	article,
}: DeleteArticleModalProps) {
    
	function handleDeleteArticle() {
		// handle delete article
	}

	return (
		<div className='flex flex-col items-center gap-8'>
			<span className='text-7xl text-red-400 mx-auto'>
				<CiCircleRemove />
			</span>
			<p className='text-3xl'>Jesteś pewny?</p>
			<p className='text-center'>
				{`Pamiętaj, że jeśli usuniesz artykuł '${article?.title}', nie
				będziesz mógł cofnąć zmian.`}
			</p>
			<div className='grid grid-cols-2 gap-5'>
				<button
					onClick={onCloseModal}
					className='py-2 px-5 hover:bg-whiteSecond transition-colors duration-300 rounded-md'
				>
					Anuluj
				</button>
				<button
					onClick={handleDeleteArticle}
					className='py-2 px-5 bg-red-400 hover:bg-red-500 text-white transition-colors duration-300 rounded-md'
				>
					Usuń
				</button>
			</div>
		</div>
	);
}

export default DeleteArticleModal;
