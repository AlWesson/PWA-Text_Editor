import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  // create connection to database and the version 
  const jateDb = await openDB('jate', 1);
  // create new transaction and specify the datatbase and data priveleges
  const tx = jateDb.transaction('jate', 'readwrite');
  // open desired object store
  const store = tx.objectStore('jate');
  // put method 
  const request = store.put({id: 1, value: content});
  
  const result = await request;
  console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  const jateDb = await openDB('jate', 1);
  // create new transaction and specify the datatbase and data priveleges 
  const tx = jateDb.transaction('jate', 'readonly');
  // open desired object store
  const store = tx.objectStore('jate');
  // get method to get data fro, the database
  const request = store.getAll();
  
  const result = await request;
  // return statement with a optional chaining operator(?)
  return result?.value;

};

initdb();
