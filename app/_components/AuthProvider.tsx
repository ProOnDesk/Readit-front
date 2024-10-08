'use client';

import { redirect } from 'next/navigation';
import { useAppSelector } from '../_redux/hooks';
import Spinner from './ui/Spinner';

export default function AuthProvider() {
	const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

	if (isLoading) return;

	if (!isAuthenticated) {
		redirect('/login');
	}

	return null;
}
