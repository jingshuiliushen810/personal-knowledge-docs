module.exports = {
    BASE_URL: '', 
    mongoose: {
        client: {
            // Anyhow, just replace localhost with 127.0.0.1 in the connection string. The issue lies within Windows, see nodejs cannot resolve 'localhost' on windows
            // nodejs cannot resolve 'localhost' on windows: https://stackoverflow.com/questions/6997442/nodejs-cannot-resolve-localhost-on-windows
            url: 'mongodb://127.0.0.1/inkwash',  // 不能使用 localhost, 不然会连接失败
            options: {},
        }
    },
    
    // middleware: ['mytest'],
}