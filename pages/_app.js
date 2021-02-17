import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

export default function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState);
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
