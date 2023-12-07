import styled, { createGlobalStyle } from 'styled-components'

const AppWrapper = styled.div`
	width: 1280px;
	margin: 0 auto;
`

const Global = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		height: 100vh;
	}
`

export { AppWrapper, Global }