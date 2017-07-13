
const Test = () => (target) => console.log('Server: Test: called...')

@Test()
class TestRunner {}

export default class Server {
  constructor () {
    console.log('Server: constructor(): creating...')
  }
  listen () {
    console.log('server: listen(): called...')
  }
}
