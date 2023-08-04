import app from './app'

const Main = () => {
  app.listen(app.get('port'))
  console.log(`Server on port ${app.get('port')}`)
}

Main()
