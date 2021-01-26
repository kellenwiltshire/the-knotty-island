import Head from 'next/Head';
import Layout from '../components/Layout/Layout';
import Splash from '../components/Splash/Splash';

export default function Home() {
	return (
		<Layout title='The Knotty Island'>
			<Splash />
			<ProductCards />
		</Layout>
	);
}
