import styled from 'styled-components'

const Container = styled.div`
	width: 270px;
	height: 140px;
`

const Title = styled.h2`
	color: #1C1C1C;
	font-family: Rajdhani;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.2px;
`

const ContactContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ContactInfo = styled.p`
	width: 230px;
	margin: 8px 0;
`

const ContactWord = styled.span`
	color: #252A34;
	font-family: Open Sans;
	font-size: 14px;
	font-style: normal;
	font-weight: 900;
`

export { 
	Container, 
	Title, 
	ContactContainer, 
	ContactInfo, 
	ContactWord 
}