import { ShopPageContainer, FilterContactsContainer, OurShopPaginationContainer } from './ShopPageStyled'
import Contacts from "../../layouts/shopPage/contacts/Contacts";
import Filter from "../../layouts/shopPage/filter/Filter";
import ShopCars from '../../layouts/shopPage/shopCars/ShopCars';

function ShopPage() {
	return (
		<ShopPageContainer>
			<FilterContactsContainer>
				<Filter />
				<Contacts />
			</FilterContactsContainer>
			<OurShopPaginationContainer>
				<ShopCars />
				Pgination component
			</OurShopPaginationContainer>
		</ShopPageContainer>
	);
}

export default ShopPage;