import styled from 'styled-components'
import Card from '@mui/material/Card';

const CardStyled = styled(Card)`
	width: 270px;
	height: 325px;
	position: relative;
`

const CarBrandStyled = styled.h2`
	margin-bottom: 36px;
	width: 180px;
	color: #252A34;
	font-family: Rajdhani;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
`

const CarPriceContainerStyled = styled.div`
	width: 180px;
	display: flex;
`
const CarPriceStyled = styled.p`
	color: #252A34;
	font-family: Rajdhani;
	font-size: 30px;
	font-style: normal;
	font-weight: 700;
`

const CarPriceCrossedStyled = styled.p`
	width: 74px;
	color: #999;
	margin: 10px 0 0 7px;
	font-family: Rajdhani;
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	text-decoration: line-through;
`

const CarPriceDiscoundStyled = styled.p`
	color: #FF2E63;
	font-family: Rajdhani;
	font-size: 30px;
	font-style: normal;
	font-weight: 700;
`

const DeliveryStyled = styled.p`
	margin-left: 5px;
`

export { CardStyled, CarBrandStyled, CarPriceContainerStyled, CarPriceStyled, CarPriceDiscoundStyled, CarPriceCrossedStyled, DeliveryStyled }