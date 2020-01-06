const { spawn } = require('child_process')

const runCode = () => {
  const ls = spawn('ls', ['-lh', '/usr'])
}

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(
    JSON.stringify({
      message: req.body.codeString
    })
  )
}
