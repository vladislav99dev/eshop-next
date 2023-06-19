import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../utils/connectDB';
import * as services from '../services/product';
import { ApiProductResponse } from '@/interfaces/Response';
import { Product } from '@/interfaces/Product';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiProductResponse>
) {
  try {
    const connection = await connectDB();
    if (connection) {
      try {
        const products: Product[] = await services.getAll();
        throw {}
        // return res.status(200)
        //   .json({ error: null, products });
      } catch (err) {
        throw new Error;
      }
    }

  } catch (err) {
    return res.status(500)
      .json({
        error: { message: "Internal server error", status: 500 },
        products: []
      });
  }
}
