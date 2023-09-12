import Banner from "../layouts/homepage/banner/Banner";
import HowItWorks from "../layouts/homepage/howItWorks/HowItWorks";
import PopularProducts from "../layouts/homepage/popularProducts/PopularProducts";
import Recension from "../layouts/homepage/recension/Recension";

function HomePage() {
	return (
		<div>
			<Banner />
			<PopularProducts />
			<HowItWorks />
			<Recension />
		</div>
	);
}

export default HomePage;