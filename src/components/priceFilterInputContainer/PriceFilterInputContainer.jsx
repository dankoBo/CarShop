import PriceInputFilter from '../../interface/priceInputFilter/PriceInputFilter'
import PriceInputContainer from './PriceInputFilterContainerStyled'

function PriceInputFilterContainer({setMinPrice, setMaxPrice}) {
	function saveMinPrice(event) {
		setMinPrice(event.target.value)
	}

	function saveMaxPrice(event) {
		setMaxPrice(event.target.value)
	}

	return (
		<PriceInputContainer>
			<PriceInputFilter
				label="min"
				onChangeListener={saveMinPrice}
			/>
							-
			<PriceInputFilter
				label="max" 
				onChangeListener={saveMaxPrice}
			/>
		</PriceInputContainer>
	);
}

export default PriceInputFilterContainer;