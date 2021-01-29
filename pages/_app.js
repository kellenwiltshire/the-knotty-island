import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import { useStore } from '../store';

export default function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState);
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

// function MyApp({ Component, pageProps }) {
// 	return <Component {...pageProps} />;
// }

// export default MyApp;
