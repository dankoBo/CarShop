import { Routes, Route, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import LogInPage from '../pages/LogInPage';
import RegisterPage from '../pages/RegisterPage'

function Routers() {
	return (
		<div>
			<Routes>
				<Route path='/' element={ <HomePage /> } />
				<Route path='/shop' element={ <ShopPage /> } />
				<Route path='/logIn' element={ <LogInPage /> } />
				<Route path='/register' element={ <RegisterPage /> } />
			</Routes>
		</div>
	);
}

export default Routers;