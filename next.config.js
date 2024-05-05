const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog-dev',
        mongodb_password: '1239643k',
        mongodb_username: 'exleonardo',
      },
    }
  }

  return {
    env: {
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-blog',
      mongodb_password: '1239643k',
      mongodb_username: 'exleonardo',
    },
  }
}
