import { Container } from './PriceFilter.styled'
import PriceInput from './priceInput/PriceInput'

function PriceFilter({ setMinPrice, setMaxPrice }) {
	function saveMinPrice(event) {
		setMinPrice(event.target.value)
	}

	function saveMaxPrice(event) {
		setMaxPrice(event.target.value)
	}

	return (
		<Container>
			<PriceInput
				label="min"
				onChangeListener={saveMinPrice}
			/>
							-
			<PriceInput
				label="max" 
				onChangeListener={saveMaxPrice}
			/>
		</Container>
	);
}

export default PriceFilter