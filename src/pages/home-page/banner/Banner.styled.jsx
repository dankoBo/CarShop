import styled from 'styled-components'
import bannerImage from '../../../assets/bannerImages/banner_car.png'

const BannerWrapper = styled.div`
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

const BannerTitle = styled.h2`
	width: 448px;
	height: 129px;
	color: #343434;
	font-family: Rajdhani;
	font-size: 50px;
	font-style: normal;
	font-weight: 700;
`
const BannerImageWrapper = styled.div`
	position: absolute;
	right: 0;
	width: 882px;
	height: 494px;
	background-image: url(${bannerImage});
    background-size: contain;
	z-index: 1;
`

export { BannerWrapper, BannerTitle, TitleRed, BannerImageWrapper, TitleWithButton }