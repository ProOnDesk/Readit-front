import { useDeleteArticleMutation } from '@/app/_redux/features/articleApiSLice';
import { Article } from '@/app/_redux/features/authApiSlice';
import { CiCircleRemove } from 'react-icons/ci';
import Spinner from '../ui/Spinner';
import toast from 'react-hot-toast';

interface DeleteArticleModalProps {
	onCloseModal: () => void;
	article: Article;
	refetchArticleList: () => void;
}

function DeleteArticleModal({
	onCloseModal,
	article,
	refetchArticleList,
}: DeleteArticleModalProps) {
	const [deleteArticle, { isLoading: isArticleDeleting }] =
		useDeleteArticleMutation();
	function handleDeleteArticle() {
		deleteArticle({ article_id: article.id })
			.unwrap()
			.then(() => {
				onCloseModal();
				refetchArticleList();
				toast.success('Artykuł został usunięty');
			})
			.catch(() => {
				toast.error('Nie udało się usunąć artykułu');
			});
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
					disabled={isArticleDeleting}
					className='py-2 px-5 bg-red-400 hover:bg-red-500 text-white transition-colors duration-300 rounded-md'
				>
					{isArticleDeleting ? <Spinner color='white' size='small' /> : 'Usuń'}
				</button>
			</div>
		</div>
	);
}

export default DeleteArticleModal;
