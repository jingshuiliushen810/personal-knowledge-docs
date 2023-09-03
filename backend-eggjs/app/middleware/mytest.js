module.exports = () => {
    return async function mytest(ctx, next) {
        console.log('mytest start')
        await next()
        console.log('mytest end')
    }
}