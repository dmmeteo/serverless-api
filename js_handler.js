'use strict';

module.exports.hello = async (event, context) => {
  if (event.queryStringParameters && event.queryStringParameters.name) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello ' + event.queryStringParameters.name + ', nice to meet you!'
      })
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function "hello" executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.helloOld = async (event, context, callback) => {
  const device = (headers) => {
    if (headers['CloudFront-Is-Desktop-Viewer']) return 'Desktop'
    if (headers['CloudFront-Is-SmartTV-Viewer']) return 'SmartTV'
    if (headers['CloudFront-Is-Mobile-Viewer']) return 'Mobile'
    if (headers['CloudFront-Is-Tablet-Viewer']) return 'Tablet'
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function "helloOld" executed successfully!',
      your_country: event.headers['CloudFront-Viewer-Country'],
      your_device: device(event.headers)
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
