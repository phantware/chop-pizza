import cookie from 'cookie'

const handler = (res, req) => {
  if (req.method === 'POST') {
    const { username, password } = req.body

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: 'strict',
          path: '/',
        })
      )
      res.statu(200).json('Successful')
    } else {
      res.statu(400).json('Wrong Credentials')
    }
  }
}

export default handler
