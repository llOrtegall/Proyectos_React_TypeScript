import app from './app'

const Main = () => {
  app.listen(app.get('port'))
}

Main()
