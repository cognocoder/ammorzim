import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if (req.method === 'GET') {
		res.revalidate('/')
		return res.status(200).json({ revalidated: true })
	}

	return res.status(404).end()
}
