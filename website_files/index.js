// This Node.js function attaches the security-related headers to Origin Response

'use strict';

exports.handler = (event, context, callback) => {
    
    const response = event.Records[0].cf.response;
    
    const headers = response.headers;

  headers['strict-transport-security'] = [{
    key:   'Strict-Transport-Security', 
    value: "max-age=31536000; includeSubdomains; preload"
}];

headers['content-security-policy'] = [{
    key:   'Content-Security-Policy', 
    value: "default-src 'none'; base-uri 'none'; form-action 'none'; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://matthewsechrist.cloud; script-src 'self' https://matthewsechrist.cloud/api.js; style-src 'self' https://fonts.googleapis.com *.fontawesome.com; frame-src 'self'; frame-ancestors 'none'; connect-src 'self' https://api.matthewsechrist.cloud/graphql *.fontawesome.com;"
}];

headers['x-content-type-options'] = [{
    key:   'X-Content-Type-Options',
    value: "nosniff"
}];

headers['referrer-policy'] = [{
    key:   'Referrer-Policy',
    value: "strict-origin-when-cross-origin"
}];

headers['x-frame-options'] = [{
    key:   'X-Frame-Options',
    value: "SAMEORIGIN"
}];

headers['permissions-policy'] = [{
    key:   'Permissions-Policy',
    value: "geolocation=()"
}];

  callback(null, response);
};