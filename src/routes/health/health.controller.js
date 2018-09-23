const { db } = require('../../index');

// console.log({ db });

// db.collection('tasks')
//   .get()
//   .then(snapshot => {
//     snapshot.forEach(task => {
//       console.log(task.id, '=>', task.data());
//     });
//   })
//   .catch(err => {
//     console.log('Error getting tasks', err);
//   });

const healthController = (req, res) => {
  console.log({ db });

  return res.json({
    ok: 'OK',
  });
};

module.exports = {
  healthController,
};
