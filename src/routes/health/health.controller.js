const db = require('../../db/db.js');

//   db.collection("cities").add({
//     name: "Tokyo",
//     country: "Japan"
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

const healthController = (req, res) => {
  if (req.method === 'GET') {
    db.collection('tasks')
      .get()
      .then(snapshot => {
        return snapshot.forEach(task => {
          console.log('==============');
          console.log(task.id, '=>', task.data());
          return res.json(task.data());
        });
        // res.send()
      })
      .catch(err => {
        console.log('Error getting tasks', err);
      });
  }

  // console.log({ req });

  // return res.json({
  //   ok: 'OK',
  // });
};

const postTasksController = (req, res) => {
  // logic here to write to firebase
};

module.exports = {
  healthController,
};
