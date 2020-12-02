module.exports = (ctx, items) => {
  const imgBase64 = $cache.get("imgBase64")
  return {
    type: 'image',
    props: {
      image: $image(imgBase64)
    },
  }
}