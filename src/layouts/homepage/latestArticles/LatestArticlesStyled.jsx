import styled from 'styled-components'

const LatestArticlesWrapper = styled.div`
	width: 1170px;
	height: 367px;
	margin: 70px auto;
`
const LatestArticleTitle = styled.h2`
	width: 301px;
	margin-bottom: 34px;
	color: #343434;
	font-family: Rajdhani;
	font-size: 36px;
	font-style: normal;
	font-weight: 700;
`

const LatestArticlesContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export { LatestArticlesWrapper, LatestArticlesContainer, LatestArticleTitle }