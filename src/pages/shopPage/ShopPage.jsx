import { ShopPageContainer, FilterContactsContainer, OurShopPaginationContainer } from './ShopPageStyled'
import Contacts from "../../layouts/shopPage/contacts/Contacts";
import Filter from "../../layouts/shopPage/filter/Filter";
import ShopCars from '../../layouts/shopPage/shopCars/ShopCars';
import PaginationShop from '../../components/pagination/Pagination';

function ShopPage() {
	return (
		<ShopPageContainer>
			<FilterContactsContainer>
				<Filter />
				<Contacts />
			</FilterContactsContainer>
			<OurShopPaginationContainer>
				<ShopCars />
				<PaginationShop />
			</OurShopPaginationContainer>
		</ShopPageContainer>
	);
}

export default ShopPage;