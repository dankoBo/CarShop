import styled from 'styled-components'

const RegisterWrapper = styled.div`
	width: 500px;
	height: 443px;
	margin: 130px auto 50px;
`

const RegisterTitle = styled.h4`
	text-align: center;
	margin-bottom: 15px;
	color: #252A34;
	font-family: Rajdhani;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -0.4px;
`

const InputName = styled.p`
	margin: 10px 0;
	color: #343434;
	font-family: Open Sans;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: -0.2px;
`

const FirstLastNamesContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

const PasswordContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

const ButtonWrapper = styled.div`
	width: fit-content;
	margin: 15px auto;
`

const TermsPolicyContainer = styled.div`
	width: 450px;
	margin: 0 auto;
	text-align: center;
`

export { RegisterWrapper, RegisterTitle, InputName, FirstLastNamesContainer, PasswordContainer, ButtonWrapper, TermsPolicyContainer }