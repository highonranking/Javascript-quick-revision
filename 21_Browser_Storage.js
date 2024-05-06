//These cookies tend to persist far longer than the delicious ones in your cupboard!

// cookiee

document.cookie = 'user=Abhinav';
console.log(document.cookie);

document.cookie = `crush=Ekta; expires=${new Date().toUTCString()}`

document.cookie = `friend=None; max-age=0`; // expire in 0 sec

document.cookie = `friend=None; path=/mypath`; // path where this cookie will store 

document.cookie = `friend=None; secure`; // will work only in HTTPS


document.cookie = `friend=None; secure; samesite=strict`; // dont share cookie cross origin

console.log(document.cookie);


// read values from cookie


const course = document
    .cookie
    .split('; ')  // array of key value pair
    .find(cookie=>cookie.startsWith('course=')) // found
    .split("=")[1] // basically get second value (val after =)




    // web  storage api - much eaiser to work with as compared to cookie, have functions getters and setters, and  more storage
    /**
     * local storage - doesnt expire
     * session storage - expire at end of the session
     * 
     * 
     * - we can set expiration time in cookies, but cant in web storage
     * 
     * - cookies often set by servers
     * - web storge are more specific to browser and Javascript
     */


 
    localStorage.setItem('key', 'value');

    console.log(localStorage.getItem('key'));

    localStorage.removeItem('key')

    // remove everything from localstorage

    localStorage.clear(); // delete everything from localstorage


/// bass naam alag hai bhai... implementation sane h
    sessionStorage.getItem()
    sessionStorage.removeItem()



    // Indexed DB  // complex data storage
    /**
     * Object store database
     * can store files
     * its not relational DB like SQL
     * 
     */


    const request = indexedDB.open('myDatabase', 1); // name , version
    /**
     * Everything with indexDB is async, but will listen with eventlisteners
     * 
     */


    request.addEventListener('upgradeneeded', (event)=> {
        const database = event.target.result;
        const store = database.createObjectStore('users', {keyPath: 'id'});
        store.createIndex('name', 'name'); // name, keypath


        store.add({
            id:0,
            name:"Abhinav",
            crush:"Ekta",
        });

        store.add({
            id:1,
            name:"Abhinav",
            crush:"IQ",
        });


    })


    // to connet to a db
    request.addEventListener('success', (event)=> {
        const database = event.target.result;
       database
        .transaction(['users'], 'readrite')
        .objectStore('users')
        .add({
            id:3,
            name:"Abhinav",
            crush:"Sanc",
        })

    })


    // delete from db




request.addEventListener('success', (event)=> {
        const database = event.target.result;
       database
        .transaction(['users'], 'readrite')
        .objectStore('users')
        .delete(1); // id

    })


    //get


request.addEventListener('success', (event)=> {
    const database = event.target.result;
   const req = database
    .transaction(['users'], 'readrite')
    .objectStore('users')
    .get(0) // async


    req.addEventListener('success', (event)=>{
        console.log(event.target.result.name);
    })

})



request.addEventListener('success', (event)=> {
    const database = event.target.result;
   const req = database
    .transaction(['users'], 'readrite')
    .objectStore('users')
    .index('name')
    .get('Abhinav') // async


    req.addEventListener('success', (event)=>{
        console.log(event.target.result.crush);
    })

})




/**
 * Key Terms
Cookies
The simplest form of browser storage, comprised of string key-value pairs. Cookies are most often set by the server to store information such as the logged in user account, however they can also be created via the document.cookie JavaScript property.

Local Storage
Part of the web storage API, a system for storing information in the browser without any expiration date. Values can be added to local storage with localStorage.setItem('key', 'value'), and the value can be retrieved with localStorage.getItem('key').

Learn more: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
Session Storage
Part of the web storage API, a system for storing information in the browser that expires at the end of a session. Values can be added to session storage with sessionStorage.setItem('key', 'value'), and the value can be retrieved with sessionStorage.getItem('key').

Learn more: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
IndexedDB
A browser API for storing complex objects. IndexedDB uses object stores, which are similar to tables in relational databases. Each object in the object store must then have a unique key used to identify it.

Learn more: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 */
