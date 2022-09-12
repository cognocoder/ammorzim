import styled from 'styled-components'

export const Main = styled.main`
	align-content: flex-start;
	align-items: flex-start;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;
	width: 100%;

	@media only screen and (min-width: 664px) {
		flex-wrap: nowrap;
		max-height: 100vh;
	}
`
