import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';

export default function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <HomePage />;
}
