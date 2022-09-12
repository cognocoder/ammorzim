import React, { useRef, useState } from 'react'
import { Section } from './ProductsPanel.styled'
import ProductList from './ProductList'
import useProductSlice from '@/hooks/Product.slice'
import Link from 'next/link'
import Router from 'next/router'

function ProductsPanel({ error }: { error: string }) {
	if (error) console.log(error)

	const ref = useRef<HTMLInputElement>(null)

	const ProductSlice = useProductSlice((state) => ({
		array: state.array,
		setFilter: state.setFilter,
	}))

	const [filter, setFilter] = useState({ value: '', sent: '' })

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilter({ value: event.target.value, sent: '' })
	}

	const onClick = () => {
		Router.prefetch('/')
		Router.push('/', undefined, { scroll: false })

		if (filter.sent === filter.value) {
			setFilter({ value: '', sent: '' })
			ProductSlice.setFilter('')
		} else {
			setFilter({ ...filter, sent: filter.value })
			ProductSlice.setFilter(filter.value)
		}

		if (ref.current) {
			ref.current.focus()
		}
	}

	const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			onClick()
		}
	}

	return (
		<Section>
			<header>
				<Link href="/">
					<a>
						<h2>Produtos cadastrados</h2>
					</a>
				</Link>
				{ProductSlice.array && ProductSlice.array.length > 0 && (
					<>
						<input
							ref={ref}
							value={filter.value}
							onChange={onChange}
							onKeyDown={onKeyDown}
						/>
						<button onClick={onClick}>
							{filter.sent.length ? 'limpar' : 'enviar'}
						</button>
					</>
				)}
			</header>
			{error && <strong>Erro: tente novamente mais tarde</strong>}
			{ProductSlice.array && ProductSlice.array.length === 0 && (
				<strong>Não há produtos cadastrados</strong>
			)}
			{ProductSlice.array && ProductSlice.array.length > 0 && <ProductList />}
		</Section>
	)
}

export default ProductsPanel
