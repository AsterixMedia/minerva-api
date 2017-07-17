import Express from 'express'

const server = Express()

server
  .get('/', (req, res) => {
    res.send('Hello')
  })
  .listen(3050, () => {
    console.log('We are broadcasting on port 3050')
  })
