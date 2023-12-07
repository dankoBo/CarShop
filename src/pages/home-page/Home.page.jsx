import Banner from "./banner/Banner";
import HowItWorks from "./howItWorks/HowItWorks";
import LatestArticles from "./latestArticles/LatestArticles";
import PopularProducts from "./popularProducts/PopularProducts";
import Recension from "./recension/Recension";

function Home() {
	return (
		<>
			<Banner />
			<PopularProducts />
			<HowItWorks />
			<Recension />
			<LatestArticles />
		</>
	);
}

export default Home;