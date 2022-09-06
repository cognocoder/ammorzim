import React, { useState } from 'react'
import { Section } from './ProductForm.styled'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductPatterns } from '@/validators/Product'
import Router from 'next/router'
import useProductSlice from '@/hooks/Product.slice'

interface ProductFormInputs {
	name: string
	category: string
	description: string
	price: string
}

function ProductForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ProductFormInputs>()

	const ProductSlice = useProductSlice((state) => ({
		array: state.array,
		setArray: state.setArray,
	}))

	const [createProductStatus, setCreateProductStatus] = useState('')

	const onSubmit: SubmitHandler<ProductFormInputs> = async (data) => {
		const product = {
			...data,
			price: +data.price.replace(',', '.'),
		}

		setCreateProductStatus('Pendente')
		const res = await fetch('api/products', {
			method: 'Post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		})

		if (res.status === 201) {
			ProductSlice.setArray([...ProductSlice.array, product])

			await fetch('api/products/revalidate', {
				headers: {
					pragma: 'no-cache',
					'cache-control': 'no-cache',
				},
			})
			Router.prefetch('/')

			setCreateProductStatus('Cadastrado')
			setTimeout(() => {
				Router.push('/')
				setCreateProductStatus('')
			}, 2000)
			return
		}

		setCreateProductStatus('Erro')
		setTimeout(() => setCreateProductStatus(''), 2000)
		return
	}

	return (
		<Section>
			<h2>Cadastro de produtos</h2>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<label>
					Nome
					<input
						{...register('name', {
							required: {
								value: true,
								message: 'Campo obrigatório',
							},
							pattern: {
								value: ProductPatterns.name,
								message: 'Mínimo de 2 caractéres',
							},
						})}
					/>
					{errors.name && <span>{errors.name.message}</span>}
				</label>
				<label>
					Categoria
					<input
						{...register('category', {
							required: {
								value: true,
								message: 'Campo obrigatório',
							},
							pattern: {
								value: ProductPatterns.category,
								message: 'Mínimo de 4 caractéres',
							},
						})}
					/>
					{errors.category && <span>{errors.category.message}</span>}
				</label>
				<label>
					Preço
					<input
						inputMode="numeric"
						{...register('price', {
							required: {
								value: true,
								message: 'Campo obrigatório',
							},
							pattern: {
								value: ProductPatterns.price,
								message: 'Valor deve ser maior que zero',
							},
						})}
					/>
					{errors.price && <span>{errors.price.message}</span>}
				</label>
				<label>
					Descrição
					<textarea
						rows={2}
						{...register('description', {
							required: {
								value: true,
								message: 'Campo obrigatório',
							},
							pattern: {
								value: ProductPatterns.description,
								message: 'Mínimo de 10 caractéres',
							},
						})}
					/>
					{errors.description && <span>{errors.description.message}</span>}
				</label>
				<p>
					{createProductStatus}
					<button type="submit">Salvar</button>
				</p>
			</form>
		</Section>
	)
}

export default ProductForm
