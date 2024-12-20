const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-mfaisal',
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      databaseId: 'prediction'
    });
 
    const predictCollection = db.collection('prediction');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;
