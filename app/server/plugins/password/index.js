/*eslint-env node*/

const spawn = require('child_process').spawnSync

const generate = function generate() {
  const result = spawn('xkcdpass')
  if (result.status === 0) {
    return result.stdout.toString().trim()
  } else {
    // TODO handle error
    return ''
  }
}

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/password',
    handler: (request, reply) => {
      const password = generate()
      reply(null, JSON.stringify({password}))
    },
  })
  next()
}

exports.register.attributes = {
  name: 'getPassword',
  version: '1.0.0',
}
