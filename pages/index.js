import Layout from '../components/Layout/Layout';
import Splash from '../components/Splash/Splash';
import Categories from '../components/Categories/Categories';

export default function Home() {
	return (
		<Layout title='The Knotty Island'>
			<Splash />
			<div className='container'>
				<div className='flex flex-row flex-wrap'>
					<Categories />
				</div>
			</div>
		</Layout>
	);
}
