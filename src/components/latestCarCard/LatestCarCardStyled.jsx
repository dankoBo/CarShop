import styled from 'styled-components'
import Card from '@mui/material/Card';

const CardStyled = styled(Card)`
	width: 270px;
	height: 288px;
`

const CarBrandStyled = styled.h2`
	width: 180px;
	color: #252A34;
	font-family: Rajdhani;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
`

const CarDateStyled = styled.p`
	width: 125px;
	margin-top: 7px;
	color: #343434;
	font-family: Open Sans;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
`

export { CarBrandStyled, CarDateStyled, CardStyled }