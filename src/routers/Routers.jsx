import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home-page/Home.page'
import Shop from '../pages/shop-page/Shop.page';
import LogIn from '../pages/logIn-page/LogIn.page';
import Register from '../pages/register-page/Register.page'

function Routers() {
	return (
		<Routes>
			<Route path='/' element={ <Home /> } />
			<Route path='/shop' element={ <Shop /> } />
			<Route path='/logIn' element={ <LogIn /> } />
			<Route path='/register' element={ <Register /> } />
		</Routes>
	);
}

export default Routers;