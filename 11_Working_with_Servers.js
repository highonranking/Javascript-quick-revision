// lets have some APIs

const BASE_API = 'http://api.highonranking.com/';
const POST_API = 'http://api.highonranking.com/post';
const JSON_API = 'http://api.highonranking.com/json';
const SLOW_API = 'http://api.highonranking.com/slow';


fetch(BASE_API); // return promise

fetch(BASE_API).then(console.log) // logs promise response


fetch(BASE_API).then(res => res.text()).then(console.log).catch(err=>console.error(err)) // logs promise response

console.log('After fetch'); // this will run before the promise..



// passing prarmas in api
fetch(BASE_API + '?firstName=Abhinav&lastName=Dixit')
.then(res => res.text())
.then(console.log)
.catch(err=>console.error(err)) 

// sweetier syntax

const url = new URL(BASE_API);
url.searchParams.set('firstName', 'Abhinav');
url.searchParams.set('lastName', 'Dixit');
fetch(url)
.then(res => res.text())
.then(console.log)
.catch(err=>console.error(err)) 



// older version before fetch was used

const request = new XMLHttpRequest();
request.addEventListener('load', function(){
    console.log(this.responseText);
});

request.open('GET', BASE_API);
request.send();



/******************** Async  Await  *************/

async function main(){
    const url = new URL(JSON_API);
    url.searchParams.set('firstName', 'Abhinav');
    url.searchParams.set('lastName', 'Dixit');
    try{
        const response = await fetch(url);
        console.log(response.headers.get('content-type'));  // gets content-type like application/json etc...
        const json = await response.json();
        console.log(json);
    } catch(err){
        console.error(err);
    }
    
   

}
main();



/// POST


async function main(){
    const data ={
        name:"Abhinav Dixit",
        age:22
    };

    const headers = new Headers();
    headers.append('Content-type', 'application/json; charset=utf-8')
    const options ={
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    }
    const url = new URL(POST_API);
    try{
        const response = await fetch(url, options);
        console.log(response.headers.get('content-type'));  // gets content-type like application/json etc...
        const json = await response.json();
        console.log(json);
    } catch(err){
        console.error(err);
    }
    
   

}
main();



/// forms


// get form field

const form = document.querySelector('form');
form.addEventListener('submit', onsubmit);

async function onsubmit(event){
    event.preventDefault();
    const options = {
        method: 'POST',
        body: new FormData(form), 
    }
    try{
        const response = await fetch(POST_API, options);
        console.log(response.headers.get('content-type'));  // gets content-type like application/json etc...
        const json = await response.json();
        console.log(json);
    } catch(err){
        console.error(err);
    }
}



/**** Working with Slow APIs... 🐌 ******/ 


// suppose it takes lot of time, abort!



async function main(){
    const abortControlller = new AbortController()
    setTimeout(()=> abortControlller.abort(), 2000); // 2 sec ke baad abort 🛑
    const url = new URL(SLOW_API);
    try{
        const response = await fetch(url, {
            signal: abortControlller.signal,
        });
        console.log(response.headers.get('content-type'));  // gets content-type like application/json etc...
        const json = await response.json();
        console.log(json);
    } catch(err){
        console.error(err);
    }
    
   

}
main();