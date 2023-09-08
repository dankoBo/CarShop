import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import HomePage from "./HomePage";

function MainPage() {
	return (
		<div>
			<Header />
				<HomePage />
			<Footer />
		</div>
	);
}

export default MainPage;