import Head from 'next/Head';
import Layout from '../components/Layout/Layout';
import Splash from '../components/Splash/Splash';
import ProductCards from '../components/ProductCards/ProductCards';

export default function Home({ data }) {
	return (
		<Layout title='The Knotty Island'>
			<Splash />
			{data.map((listing, i) => {
				return (
					<ProductCards
						key={i}
						description={listing.results[i].description}
						title={listing.results[i].title}
						price={listing.results[i].price}
					/>
				);
			})}
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const etsyAPI = 'jf8evf2p7kh6ihl16tew41k4';
	let data = {};
	let image = [{}];
	try {
		const res = await fetch(
			`https://openapi.etsy.com/v2/shops/TheKnottyIsland/listings/active?api_key=${etsyAPI}`,
		);
		const data = await res.json();

		// for (i = 0; i < data.results.length(); i++) {
		// 	const listing = data.results[i].listing_id;
		// 	const resimage = await fetch(
		// 		`https://openapi.etsy.com/v2/listings/${listing}/images?api_key=jf8evf2p7kh6ihl16tew41k4`,
		// 	);
		// 	const imageLink = await resimage.json();
		// 	image = [{ listing: { imageLink } }, ...image];
		// }
	} catch (error) {
		console.log(error);
	}

	return {
		props: { data },
	};
}
