import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product'
import Order from '../../../models/Order'

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req

  await dbConnect()

  if (method === 'GET') {
    try {
      const order = await Order.findById(id)
      res.status(200).json(order)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  if (method === 'PUT') {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      })
      res.status(201).json(order)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  if (method === 'DELETE') {
    try {
      const product = await Product.create(req.body)
      res.status(201).json(product)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
