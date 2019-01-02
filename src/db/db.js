const admin = require('firebase-admin');
// const serviceAccount = require('../../firebase-credentials.json');

console.log('process.env', Object.keys(process.env));

const productionCredentials = {
  type: 'service_account',
  project_id: 'mental-health-auto-action-plan',
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
};

const serviceAccount =
  process.env.NODE_ENV !== 'production'
    ? require('../../firebase-credentials.json')
    : productionCredentials;

// initialize firebase store
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
