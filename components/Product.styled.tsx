import styled from 'styled-components'

export const Article = styled.article`
	background-color: ${(props) => props.theme.card['background-color']};
	border: ${(props) => props.theme.card.border};
	border-radius: ${(props) => props.theme.card['border-radius']};
	box-shadow: ${(props) => props.theme.card['box-shadow']};
	color: ${(props) => props.theme.card.color};
	margin-bottom: 1rem;
	padding: 0.5rem 1rem;
	transition: all 0.2s ease-in-out;

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

	&:hover {
		transform: scale(1.01);
		transition: all 0.05s ease-in-out;
	}
`
