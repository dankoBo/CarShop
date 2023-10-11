import styled from 'styled-components'

const FilterWrapper = styled.div`
	width: 270px;
	height: 478px;
	border-radius: 10px;
	box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.15);
	padding: 27px 20px 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const PriceFilterContainer = styled.div`
	height: 80px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const PriceFilterTitle = styled.h2`
	color: #252A34;
	font-family: Rajdhani;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.2px;
`

const BrandsFilterTitle = styled.h2`
	color: #252A34;
	font-family: Rajdhani;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.2px;
`

const BrandsFilterContainer = styled.div`
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const SearchFilterContainer = styled.div`
	height: 70px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const SearchFilterTitle = styled.h2`
	color: #252A34;
	font-family: Rajdhani;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.2px;
`

export { FilterWrapper, PriceFilterContainer, PriceFilterTitle, BrandsFilterContainer, BrandsFilterTitle, SearchFilterContainer, SearchFilterTitle }