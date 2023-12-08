import styled from 'styled-components'
import bannerImage from '../../../assets/images/banner/banner_car.png'

const Container = styled.div`
	position: relative;
	width: 1170px;
	height: 494px;
	margin: 50px auto;
	display: flex;
`
const TitleWithButton = styled.div`
	width: 400px;
	height: 212px;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	z-index: 2;
`

const TitleRed = styled.span`
	color: #FF2E63;
	font-family: Rajdhani;
	font-size: 50px;
	font-style: normal;
	font-weight: 700;
`

const Title = styled.h2`
	width: 448px;
	height: 129px;
	color: #343434;
	font-family: Rajdhani;
	font-size: 50px;
	font-style: normal;
	font-weight: 700;
`
const ImageContainer = styled.div`
	position: absolute;
	right: 0;
	width: 882px;
	height: 494px;
	background-image: url(${bannerImage});
    background-size: contain;
	z-index: 1;
`

export { Container, Title, TitleRed, ImageContainer, TitleWithButton }