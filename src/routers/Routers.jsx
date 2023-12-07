import { Routes, Route, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/shopPage/ShopPage';
import LogInPage from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage'

function Routers() {
	return (
			<Routes>
			<Route path='/' element={ <Home /> } />
			<Route path='/shop' element={ <ShopPage /> } />
			<Route path='/logIn' element={ <LogInPage /> } />
			<Route path='/register' element={ <RegisterPage /> } />
		</Routes>
	);
}

export default Routers;