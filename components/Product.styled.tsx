import styled from 'styled-components'

export const Article = styled.article`
	border: 1px solid;
	margin-bottom: 1rem;
	padding: 0 0.5rem;

	& h3 {
		margin: 0.5rem 0;
	}

	& p {
		margin: 0.5rem 0;
	}

	& p:last-child {
		margin: 1rem 0;
		text-align: right;
	}
`
