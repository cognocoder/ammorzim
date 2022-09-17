import type { NextApiRequest, NextApiResponse } from 'next'

import { SyncProduct } from '@/models/Product'
import { ProductInterface } from '@/interfaces/Product'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ProductInterface[] | any>
) {
	const Product = await SyncProduct()

	if (req.method === 'GET') {
		const data = await Product.findAll()
		return res.status(200).json(data)
	}

	if (req.method === 'POST') {
		try {
			const data = await Product.create(req.body as ProductInterface)
			res.revalidate('/')
			return res.status(201).json(data)
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	return res.status(404).end()
}
