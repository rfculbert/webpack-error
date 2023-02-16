module.exports = {
    resolve:{
        fallback: {
            crypto: require.resolve("node_modules/crypto")
        }
    }
};