import Head from 'next/Head';
import Layout from '../components/Layout/Layout';
import Splash from '../components/Splash/Splash';
import ProductCards from '../components/ProductCards/ProductCards';

export default function Home({ data, image }) {
	return (
		<Layout title='The Knotty Island'>
			<Splash />
			<div className='container'>
				<div className='flex flex-row flex-wrap'>
					{data.results.map((results, i) => {
						return (
							<ProductCards
								key={i}
								description={data.results[i].description}
								title={data.results[i].title}
								price={data.results[i].price}
								listing={data.results[i].listing_id}
								image={image}
							/>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps(context) {
	const etsyAPI = 'jf8evf2p7kh6ihl16tew41k4';

	let image = [{}];
	try {
		const res = await fetch(
			`https://openapi.etsy.com/v2/shops/TheKnottyIsland/listings/active?api_key=${etsyAPI}`,
		);
		const data = await res.json();
		for (let i = 0; i < data.results.length; i++) {
			let id = data.results[i].listing_id;
			let imageRes = fetch(
				`https://openapi.etsy.com/v2/listings/${id}/images?api_key=${etsyAPI}`,
			);
			let imageData = await (await imageRes).json();
			image = [{ image: imageData }, ...image];
		}
		return {
			props: { data, image },
		};
	} catch (error) {
		console.log(error);
	}
}
