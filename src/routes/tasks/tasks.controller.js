const db = require('../../db/db.js');

const getTasksController = (req, res) => {
  db.collection('tasks')
    .get()
    .then(
      snapshot =>
        snapshot.forEach(task => {
          console.log('==============');
          console.log(task.id, '=>', task.data());
          return res.json(task.data());
          // ^ this is only displaying one task.
          // Why is it a different task for each get request?
          // How to display all tasks?
        })
      // res.send();
      // ^ how was this supposed to be used?
    )
    .catch(err => {
      console.log('Error getting tasks', err);
    });

  // return res.json({
  //   ok: 'OK',
  // });
};

const postTasksController = (req, res) => {
  // logic here to write to firebase
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
    })
    .catch(error => {
      console.error('Error adding document: ', error);
    });
};

module.exports = {
  getTasksController,
  postTasksController,
};
