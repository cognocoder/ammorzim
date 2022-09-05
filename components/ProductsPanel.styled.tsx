import styled from 'styled-components'

export const Section = styled.section`
	padding: 0 1rem;
	margin: 0 1rem;

	& h2 {
		font-size: 1.5rem;
		line-height: 1.5rem;
		margin: 1.25rem 0;
	}

	@media only screen and (min-width: 664px) {
		max-height: 100vh;
		max-width: 600px;
		overflow-y: scroll;
	}
`
