import styled from 'styled-components'

import { ProductInterface } from '@/interfaces/Product'
import { ProductPriceValidator } from '@/validators/Product'

export const Article = styled.article<ProductInterface>`
	background-color: ${(props) => props.theme.card['background-color']};
	border: ${(props) => props.theme.card.border};
	border-radius: ${(props) => props.theme.card['border-radius']};
	box-shadow: ${(props) => props.theme.card['box-shadow']};
	color: ${(props) => {
		return ProductPriceValidator(props.price)
			? props.theme.card.color
			: props.theme.card['color:error']
	}};
	margin-bottom: 1rem;
	padding: 0.5rem 1rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.01);
		transition: all 0.05s ease-in-out;
	}

	& h3 {
		margin: 0.5rem 0;
	}

	& h3 > span:nth-child(2) {
		padding: 0 1ex;
	}

	& p {
		margin: 0.5rem 0;
	}

	& p:last-child {
		margin: 1rem 0;
		text-align: right;
	}
`
