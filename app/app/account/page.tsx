import ProfileSettings from '@/app/_components/profile/ProfileSettings';
import { Metadata } from 'next';

export const metadata = {
	title: 'Edytuj konto | ReadIt',
	description: 'Edytuj swoje konto na ReadIt',
};

export default function Page() {
	return <ProfileSettings />;
}
