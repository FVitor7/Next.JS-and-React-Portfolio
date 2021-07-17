const withImages = require('next-images')

module.exports =  {
  ...withImages(),
    future: {
        webpack5: true,
    },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  }
}