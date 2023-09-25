import styled from 'styled-components'

const ContactsWrapper = styled.div`
	width: 270px;
	height: 140px;
	
	border: 1px solid green;
`

const TitleStyled = styled.h2`
	color: #1C1C1C;
	font-family: Rajdhani;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.2px;
`

const ContactContainerStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ContactInfoStyled = styled.p`
	width: 230px;
	margin: 8px 0;
`

const ContactWordStyled = styled.span`
	color: #252A34;
	font-family: Open Sans;
	font-size: 14px;
	font-style: normal;
	font-weight: 900;
`

export { ContactsWrapper, TitleStyled, ContactContainerStyled, ContactInfoStyled, ContactWordStyled }