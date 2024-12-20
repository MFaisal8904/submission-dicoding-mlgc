const { Firestore } = require('@google-cloud/firestore');

const getAllData = async () => {
    const db = new Firestore({
        projectId: 'submissionmlgc-mfaisal',
        keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        databaseId: 'prediction'
    });
  
    const predictCollection = db.collection('predictions');
  
    const snapshot = await predictCollection.orderBy('createdAt', 'desc').get();
  
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      history: doc.data(),
    }));
  
    return { data };
  };
  
  module.exports = getAllData;
