import Head from 'next/Head';
import Layout from '../components/Layout/Layout';
import Splash from '../components/Splash/Splash';
import ProductCards from '../components/ProductCards/ProductCards';

export default function Home() {
	let data = {
		results: {
			description: 'Lipsum Orem',
			title: 'Sample Title',
			price: 99,
		},
	};
	console.log(data);
	return (
		<Layout title='The Knotty Island'>
			<Splash />

			<ProductCards
				description={data.results.description}
				title={data.results.title}
				price={data.results.price}
			/>
		</Layout>
	);
}

// export async function getStaticProps(context) {
// 	const etsyAPI = 'jf8evf2p7kh6ihl16tew41k4';

// 	let image = [{}];
// 	try {
// 		const res = await fetch(
// 			`https://openapi.etsy.com/v2/shops/TheKnottyIsland/listings/active?api_key=${etsyAPI}`,
// 		);
// 		const data = await res.json();

// for (i = 0; i < data.results.length(); i++) {
// 	const listing = data.results[i].listing_id;
// 	const resimage = await fetch(
// 		`https://openapi.etsy.com/v2/listings/${listing}/images?api_key=jf8evf2p7kh6ihl16tew41k4`,
// 	);
// 	const imageLink = await resimage.json();
// 	image = [{ listing: { imageLink } }, ...image];
// }
// 	} catch (error) {
// 		console.log(error);
// 	}

// 	return {
// 		props: { data },
// 	};
// }
