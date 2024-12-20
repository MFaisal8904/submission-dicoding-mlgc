const { Firestore } = require('@google-cloud/firestore');

const getAllData = async () => {
    const db = new Firestore({
        projectId: 'submissionmlgc-mfaisal',
        keyFilename: 'submissionmlgc-mfaisal-6f5132b37336.json',
        databaseId: 'prediksi-cancer'
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