import AppWrapper from './AppStyled'
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Routers from './routers/Routers'

function App() {
	return (
		<AppWrapper>
			<Header />
				<Routers />
			<Footer />
		</AppWrapper>
	)
}

export default App
