require('dotenv').config();

module.exports = {
  'host': 'localhost',
  'port': 3030,
  'public': '../public/',
  'postgres': 'postgres://postgres:@localhost:5432/feathers_server',
  'authentication': {
    'secret': process.env.AUTH_SECRET,
    'strategies': [
      'jwt'
    ],
    'path': '/authentication',
    'service': 'users',
    'jwt': {
      'header': {
        'type': 'access'
      },
      'audience': 'http://54.163.239.254:3000',
      'subject': 'anonymous',
      'issuer': 'feathers',
      'algorithm': 'HS256',
      'expiresIn': '1d'
    },
    'facebook': {
      'clientID': process.env.FB_CLIENT_ID,
      'clientSecret': process.env.FB_CLIENT_SECRET,
      'successRedirect': '/',
      'scope': [
        'public_profile',
        'email'
      ],
      'profileFields': [
        'id',
        'displayName',
        'first_name',
        'last_name',
        'email',
        'gender',
        'profileUrl',
        'birthday',
        'picture',
        'permissions'
      ]
    },
    'cookie': {
      'enabled': true,
      'name': 'feathers-jwt',
      'httpOnly': false,
      'secure': false
    }
  }
};