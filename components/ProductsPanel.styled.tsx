import styled from 'styled-components'

export const Section = styled.section`
	margin: 0 1rem;
	min-width: 300px;

	& h2 {
		font-size: 1.5rem;
		line-height: 1.5rem;
		margin: 0;
		padding: 1.25rem 0;
	}

	& button {
		margin: 4px;
		padding: 0 1rem;
		position: absolute;
		right: 0;
	}

	& input {
		line-height: 1.5rem;
		margin-bottom: 1rem;
		width: 100%;
	}

	& header {
		background-color: #fff;
		position: sticky;
		top: 0;
	}

	@media only screen and (min-width: 664px) {
		max-height: 100vh;
		max-width: 600px;
		overflow-y: scroll;
		padding-right: 1rem;
	}
`
