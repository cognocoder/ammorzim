import React from 'react'

import useProductSlice from '@/hooks/Product.slice'

import Product from './Product'
import { ProductContainer } from './ProductList.styled'

function ProductList() {
	const products = useProductSlice((state) => state.array)
	const filter = useProductSlice((state) => state.filter)

	return (
		<ProductContainer>
			{products
				.filter((product) =>
					filter.length
						? product.name.toLowerCase().includes(filter.toLowerCase())
						: true
				)
				.map((product, index) => (
					<Product product={product} key={index} />
				))}
		</ProductContainer>
	)
}

export default ProductList
