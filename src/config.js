const devConfig = {
    apiEndPoint: 'http://localhost:4800'
}
const prodConfig = {
    apiEndPoint: '<server name>'
}

const config = process.env.NODE_ENV === 'production' ? { ...prodConfig } : { ...devConfig };
export default config;