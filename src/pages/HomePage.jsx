import Banner from "../layouts/homePageLayout/banner/Banner";
import HowItWorks from "../layouts/homePageLayout/howItWorks/HowItWorks";
import LatestArticles from "../layouts/homePageLayout/latestArticles/LatestArticles";
import PopularProducts from "../layouts/homePageLayout/popularProducts/PopularProducts";
import Recension from "../layouts/homePageLayout/recension/Recension";

function HomePage() {
	return (
		<div>
			<Banner />
			<PopularProducts />
			<HowItWorks />
			<Recension />
			<LatestArticles />
		</div>
	);
}

export default HomePage;