import styled from 'styled-components'

const Container = styled.div`
	width: 1170px;
	height: 357px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Title = styled.h2`
	width: 301px;
	color: #343434;
	margin: 0 auto;
	font-family: Rajdhani;
	font-size: 36px;
	font-style: normal;
	font-weight: 700;
`

const StepsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export { Container, Title, StepsContainer }