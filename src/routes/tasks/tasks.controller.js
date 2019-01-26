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
  // writes to firebase
  console.log(
    'req.body rcvd by postTasksController with express.JSON middleware in place:',
    req.body
  );

  var batch = db.batch();
  var tasksCollection = db.collection('tasks');
  console.log('req.body', req.body);
  req.body.forEach(task => {
    const newDoc = tasksCollection.doc();
    return batch.set(newDoc, task);
  });
  console.log({ batch });

  return batch
    .commit()
    .then(docRef => {
      console.log('Document written as docRef: ', docRef);
      res.status(201).send({
        batch: batch,
        // TODO CAROLINE: send something more useful
      });
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
