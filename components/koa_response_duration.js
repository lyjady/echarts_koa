module.exports = async (ctx, next) => {
  const startTime = new Date();
  await next()
  ctx.set('X-Response-Time', new Date() - startTime)
}
