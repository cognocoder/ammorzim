import Container from '@/components/Container'
import ProductForm from '@/components/ProductForm'
import ProductsPanel from '@/components/ProductsPanel'
import useProductSlice from '@/hooks/Product.slice'
import { ProductInterface } from '@/interfaces/Product'
import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect } from 'react'

export async function getStaticProps() {
	try {
		const res = await fetch(`${process.env.HOST}/api/products`)
		const products = await res.json()
		return { props: { products } }
	} catch (error) {
		return { props: { error: 'Error: fetch api products failed.' } }
	}
}

interface Props {
	products?: ProductInterface[]
	error?: string
}

const Home: NextPage = ({ products, error }: Props) => {
	const ProductSlice = useProductSlice((state) => ({
		setArray: state.setArray,
	}))

	useEffect(() => {
		Router.prefetch('/')
		const interval = setInterval(() => {
			Router.push('/', undefined, { scroll: false })
		}, 60 * 1000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	useEffect(() => {
		ProductSlice.setArray(products || [])
	}, [products])

	return (
		<>
			<Head>
				<title>cap.ammo</title>
				<meta name="description" content="cap.ammo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<ProductForm />
				<ProductsPanel error={error || ''} />
			</Container>
		</>
	)
}

export default Home
