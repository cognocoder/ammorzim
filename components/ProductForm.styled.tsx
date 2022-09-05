import styled from 'styled-components'

export const Section = styled.section`
	border: 1px solid;
	padding: 1rem;
	padding-top: 0;
	margin: 1rem;
	margin-top: 4rem;
	min-width: 300px;

	& h2 {
		font-size: 1.5rem;
		line-height: 1.5rem;
		margin: 1rem 0;
	}

	& button {
		padding: 0 1rem;
	}

	& input,
	& textarea,
	& label {
		width: 100%;
	}

	& label {
		display: block;
		margin: 0.5rem 0;
	}

	& label span {
		color: #941;
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
		min-height: 42px;
		resize: vertical;
	}
`
