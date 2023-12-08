import { Container } from './PriceInputFilterContainer.styled'
import PriceInputFilter from '../../interface/priceInputFilter/PriceInputFilter'

function PriceInputFilterContainer({ setMinPrice, setMaxPrice }) {
	function saveMinPrice(event) {
		setMinPrice(event.target.value)
	}

	function saveMaxPrice(event) {
		setMaxPrice(event.target.value)
	}

	return (
		<Container>
			<PriceInputFilter
				label="min"
				onChangeListener={saveMinPrice}
			/>
							-
			<PriceInputFilter
				label="max" 
				onChangeListener={saveMaxPrice}
			/>
		</Container>
	);
}

export default PriceInputFilterContainer;