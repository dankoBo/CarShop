import styled from 'styled-components'
import Card from '@mui/material/Card';

const CardStyled = styled(Card)`
	width: 270px;
	position: relative;
	margin: 10px 0;
`

const CardActionsStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 20px;
`

const CarBrandStyled = styled.h2`
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
	margin: ${props => props.$stylesMargin};
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
	margin-top: 0px;
`

export { CardActionsStyled, CardStyled, CarBrandStyled, CarPriceContainerStyled, CarPriceStyled, CarPriceDiscoundStyled, CarPriceCrossedStyled, DeliveryStyled }