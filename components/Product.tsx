import { ProductInterface } from 'interfaces/Product'
import React from 'react'

import { Article } from './Product.styled'

function Product({ product }: { product: ProductInterface }) {
	return (
		<Article {...product}>
			<h3>
				<span>{product.name}</span>
				<span> - </span>
				<span>{product.category}</span>
			</h3>
			<p>{product.description}</p>
			<p>
				R${' '}
				{product.price.toFixed
					? product.price.toFixed(2).toString().replace('.', ',')
					: '0,00'}
			</p>
		</Article>
	)
}

export default Product
