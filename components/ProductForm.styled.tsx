import styled from 'styled-components'

export const Section = styled.section`
	background-color: ${(props) => props.theme.card['background-color']};
	border: ${(props) => props.theme.card.border};
	border-radius: ${(props) => props.theme.card['border-radius']};
	box-shadow: ${(props) => props.theme.card['box-shadow']};
	color: ${(props) => props.theme.card.color};

	padding: 1rem;
	padding-top: 0;
	margin: 1rem;
	margin-top: 4rem;

	min-width: 300px;
	width: 100%;

	@media only screen and (min-width: 664px) {
		position: sticky;
		top: 4rem;
	}

	& h2 {
		font-size: 1.5rem;
		line-height: 1.5rem;
		margin: 1rem 0;
	}

	& input,
	& textarea,
	& label {
		font-size: 1.125rem;
		margin-top: 0.5rem;
		width: 100%;
	}

	& label {
		display: block;
		margin: 0.5rem 0;
	}

	& label span {
		color: ${(props) => props.theme.form['color:error']};
		display: block;
		font-style: italic;
		margin: 0.25rem 0;
	}

	& p {
		display: flex;
		justify-content: end;
		align-items: center;
		gap: 1rem;
		margin-top: 1rem;
		margin-bottom: 0;
	}

	& textarea {
		min-height: 4.5rem;
		resize: vertical;
	}

	@media only screen and (min-width: 664px) {
		width: initial;
	}
`
