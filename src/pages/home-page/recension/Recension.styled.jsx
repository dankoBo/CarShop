import styled from 'styled-components'

const Container = styled.div`
	height: 400px;
	margin-top: 50px;
	background-color: rgba(52, 108, 217, 0.12);
	display: flex;
`
const TextContainer = styled.div`
	width: 640px;
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Text = styled.p`
	width: 400px;
	height: 142px;
	color: #343434;
	text-align: center;
	font-family: Open Sans;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
`
const TextAuthor = styled.p`
	width: 400px;
	height: 21px;
	color: #343434;
	text-align: center;
	font-family: Open Sans;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	text-transform: uppercase;
`

export { Container, TextContainer, Text, TextAuthor }