import ProductForm from '@/components/ProductForm'
import ProductsPanel, { ProductsPanelProps } from '@/components/ProductsPanel'
import { useProductsStore } from '@/hooks/ProductsStore'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export async function getStaticProps() {
	try {
		const res = await fetch(`${process.env.HOST}/api/products`)
		const products = await res.json()
		return { props: { products } }
	} catch (error) {
		return { props: { error: JSON.stringify(error) } }
	}
}

const Home: NextPage = ({ products, error }: ProductsPanelProps) => {
	const ProductsStore = useProductsStore((state) => state)
	const router = useRouter()

	useEffect(() => {
		console.log(ProductsStore.status)
		if (ProductsStore.status === 'refetch') {
			ProductsStore.setStatus('')
			router.reload()
		}
	})

	return (
		<>
			<Head>
				<title>ammorzim</title>
				<meta name="description" content="ammorzim varejo e-commerce" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<ProductForm />
				<ProductsPanel products={products} error={error} />
			</main>
		</>
	)
}

export default Home
