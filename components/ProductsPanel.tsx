import React from 'react'
import { Section } from './ProductsPanel.styled'
import { ProductInterface } from 'interfaces/Product'
import ProductList from './ProductList'

export interface ProductsPanelProps {
	products?: ProductInterface[]
	error?: any
}

function ProductsPanel({ products, error }: ProductsPanelProps) {
	if (error) console.log(error)

	return (
		<Section>
			<h2>Produtos cadastrados</h2>
			{error && <strong>Erro: tente novamente mais tarde</strong>}
			{products && products.length === 0 && (
				<strong>Não há produtos cadastrados</strong>
			)}
			{products && products.length > 0 && <ProductList products={products} />}
		</Section>
	)
}

export default ProductsPanel
