module.exports.timestamp = (event, context, callback) => {
  const response = {
    statusCode: 200, headers: {
      "Content-Type": "text/plain"
    },
    body: parseInt(Date.now() / 1000)
  }

  callback(null, response)
}

