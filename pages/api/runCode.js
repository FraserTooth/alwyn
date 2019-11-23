export default (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(
    JSON.stringify({
      message: 'This is where we will run the code.'
    })
  )
}
