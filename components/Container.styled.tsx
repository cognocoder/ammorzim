import styled from 'styled-components'

export const Main = styled.main`
	background-color: ${(props) => props.theme.container['background-color']};
	color: ${(props) => props.theme.container.color};

	align-content: flex-start;
	align-items: flex-start;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;

	@media only screen and (min-width: 664px) {
		flex-wrap: nowrap;
		min-height: 100vh;
	}
`
