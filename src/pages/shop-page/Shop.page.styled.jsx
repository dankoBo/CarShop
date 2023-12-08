import styled from 'styled-components'

const Container = styled.div`
	width: 1280px;
	display: flex;
	justify-content: space-between;
	padding: 38px 56px 50px;
	
`

const FilterContactsContainer = styled.div`
	width: 270px;
	height: 633px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const PaginationContainer = styled.div`
	height: 1334px;
`

export { Container, FilterContactsContainer, PaginationContainer }