## TO DO

- In production env (.env) of FE, instead of localhost, call deployed BE URL. Will give CORS error. So on BE, have to say that from my FE URL requests are ok.
- The behavior for Date objects stored in Firestore is going to change. Add the
  following code to your app before calling any other Cloud Firestore methods:
  const firestore = new Firestore();
  const settings = {/_ your settings... _/ timestampsInSnapshots: true};
  firestore.settings(settings);

### DEFECTS

### FEATURES

### TECH DEBT

### QUESTIONS
