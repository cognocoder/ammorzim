import styled from 'styled-components'

export const SearchContainer = styled.div`
	margin-bottom: 0.5rem;
	position: relative;
`

export const Section = styled.section`
	margin: 0 1rem;
	min-width: 300px;
	width: 100%;

	& h2 {
		font-size: 1.5rem;
		line-height: 1.5rem;
		margin: 0;
		padding: 1.25rem 0;
		padding-left: 0.75rem;
	}

	& button {
		font-size: 1.125rem;
		padding: 0 2.75rem;
		position: absolute;
		top: 8px;
		right: 8px;
		height: calc(100% - 16px);
	}

	& input {
		line-height: 1.5rem;
		width: calc(100% - 0.75rem);
		margin-left: 0.75rem;
		position: relative;
	}

	& header {
		background-color: ${(props) => props.theme.header['background-color']};
		color: ${(props) => props.theme.header.color};
		border-bottom: ${(props) => props.theme.header['border-bottom']};

		padding-bottom: 0.25rem;
		padding-right: 1rem;

		width: calc(100% + 1rem);

		position: sticky;
		top: 0;
		z-index: 1;
	}

	@media only screen and (min-width: 664px) {
		max-width: 600px;
		padding-right: 1rem;
	}
`
