const db = require('../../db/db.js');

const getTasksController = (req, res) => {
  db.collection('tasks')
    .get()
    .then(snapshot => {
      const snapshotData = [];
      snapshot.forEach(task => {
        snapshotData.push(task.data());
      });
      return res.status(200).json(snapshotData);
    })
    .catch(err => {
      console.log('Error getting tasks', err);
      return res.status(500).send(err);
    });
};

const postTasksController = (req, res) => {
  // logic here to write to firebase
  // post is currently not working
  db.collection('tasks')
    .add({
      taskSummary: 'Wash dishes',
      taskDetails: 'Handwash non-stick pans.',
      contact: {
        email: 'noemail@example.com',
        name: 'Sunny Plant',
        mobilePhone: '0000000000',
      },
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id);
      res.status(201).send(`Document written with ID: ${docRef.id}`);
    })
    .catch(error => {
      console.error('Error adding document: ', error);
      res.status(500).send(`Error adding document: ${error}`);
    });
};

module.exports = {
  getTasksController,
  postTasksController,
};
