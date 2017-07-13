import 'microbe/client'

import Utils from 'microbe/utils'
import Server from 'microbe/server'

const result = Utils.sortedIndex([30, 50], 40)

console.log('Utils.sortedIndex: ' + result)

const server = new Server()
server.listen()
