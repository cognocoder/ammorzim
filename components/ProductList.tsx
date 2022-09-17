import React from 'react'

import useProductSlice from '@/hooks/Product.slice'

import Product from './Product'

function ProductList() {
	const products = useProductSlice((state) => state.array)
	const filter = useProductSlice((state) => state.filter)

	return (
		<>
			{products
				.filter((product) =>
					filter.length
						? product.name.toLowerCase().includes(filter.toLowerCase())
						: true
				)
				.map((product, index) => (
					<Product product={product} key={index} />
				))}
		</>
	)
}

export default ProductList
