const db = require('../../db/db.js');

db.collection('tasks')
  .get()
  .then(snapshot => {
    snapshot.forEach(task => {
      console.log(task.id, '=>', task.data());
    });
  })
  .catch(err => {
    console.log('Error getting tasks', err);
  });

const healthController = (req, res) => {
  return res.json({
    ok: 'OK',
  });
};

module.exports = {
  healthController,
};
