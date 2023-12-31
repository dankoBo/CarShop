import { AppWrapper, Global } from './App.styled'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Routers from './routers/Routers'

function App() {
	return (
		<>
			<Global />
			<AppWrapper>
				<Header />
				<Routers />
				<Footer />
			</AppWrapper>
		</>
	)
}

export default App
