import { ProductInterface } from 'interfaces/Product'
import React from 'react'
import Product from './Product'

export interface ProductListProps {
	products: ProductInterface[]
}

function ProductList({ products }: ProductListProps) {
	return (
		<>
			{products.map((product, index) => (
				<Product product={product} key={index} />
			))}
		</>
	)
}

export default ProductList
