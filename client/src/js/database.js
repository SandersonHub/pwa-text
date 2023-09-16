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

//open database
const jateDB = await openDB('jate', 1);

//create transaction
const tx = jateDB.transaction('jate', 'readwrite');

//put content in database
const store = tx.objectStore('jate');

//put request
const request = store.put({ id: 1, value: content });

//wait for request to finish
const result = await request;

//console log the result
console.log(result);
};

// TODO: Add logic for a method that gets all the content from the database

export const getDb = async () => {
  console.log('getdb');
  
  //open database
  const jateDB = await openDB('jate', 1);

  //create transaction
  const tx = jateDB.transaction('jate', 'readonly');

  //get content from database
  const store = tx.objectStore('jate');

   // Get request
   const request = store.getAll();
   
  //wait for request to finish
   const result = await request;
   console.log(result);
    return result;
 };


initdb();
