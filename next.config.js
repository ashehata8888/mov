// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


// const withPWA = require('next-pwa')
  
//   module.exports = withPWA({
//     // next.js config
//     // reactStrictMode: true,
//     pwa:{
//         dist:"public",
//         register: true,
//     skipWaiting: true,
//     }


//   })


  const withPWA = require('next-pwa')({
    dest: 'public'
  })
  
  module.exports = withPWA({
    // next.js config
    register: true,
    skipWaiting: true,
  })