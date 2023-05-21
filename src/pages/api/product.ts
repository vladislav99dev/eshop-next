import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from './utils/connectDB'
import * as services from './services/product'

type Data = {
  products: {}[] | null
  errorMessage: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await connectDB();

  } catch (err) {
    return res.status(500)
      .json({ errorMessage: "Internal server error", products: null })
  }
  const products: {}[] = await services.getAll()

  return res.status(200)
    .json({ errorMessage: null, products })

}
