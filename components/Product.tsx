import { ProductInterface } from 'interfaces/Product'
import React from 'react'

import { Article } from './Product.styled'

function Product({ product }: { product: ProductInterface }) {
	return (
		<Article>
			<h3>
				<span>{product.name}</span>
				<span> - </span>
				<span>{product.category}</span>
			</h3>
			<p>{product.description}</p>
			<p>R$ {product.price.toFixed(2).toString().replace('.', ',')}</p>
		</Article>
	)
}

export default Product
