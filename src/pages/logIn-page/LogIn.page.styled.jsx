import styled from 'styled-components'

const Container = styled.div`
	width: 417px;
	height: 340px;
	margin: 140px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Title = styled.h2`
	margin-top: 20px;
	color: #252A34;
	font-family: Rajdhani;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: -0.4px;
`

const InputLabel = styled.p`
	margin: 15px 0;
	color: #343434;
	font-family: Open Sans;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: -0.2px;
`

const ButtonContainer = styled.div`
	width: fit-content;
	margin: 15px auto;
`

export { Container, Title, InputLabel, ButtonContainer }