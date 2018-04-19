import fetch from 'isomorphic-unfetch';

/**
 * use the fetch api to perform the generic ajax request
 * @param {string} requestUrl   - the request url
 * @param {string} method       - the REST method type
 * @param {Object} body         - the request body
 * @param {Object} headers      - list of headers
 */
export default async ({
  requestUrl, method, body = {}, headers = {}
}) => {
  if (typeof requestUrl === 'undefined') {
    throw new Error('[url] required');
  }
  let combinedHeaders = {};

  if (headers && Object.keys(headers).length) {
    combinedHeaders = {
      ...combinedHeaders,
      ...headers
    };
  }

  combinedHeaders = {
    'Content-Type': 'application/json; charset=UTF-8',
    ...combinedHeaders
  };
  const options = {
    method,
    headers: combinedHeaders,
    credentials: 'same-origin'
  };

  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    options.body = typeof body === 'string' ? body : JSON.stringify(body);
  }
  try {
    return await fetch(requestUrl, options);
  } catch (e) {
    throw new Error(e);
  }
};
