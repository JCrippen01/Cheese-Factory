/*
Pseudo code.

Landing page:
  This page will have two radio buttons
      1.) Chuck Norris
      2.) Dad Joke

  Followed by a generate joke button.

Functions:
  Data Fetch
    Asynch function for chuck
    Asynch function for Dad
    Radio buttons
      If Chuck Norris -> then Chuck norris
        else DAD
  
Data sources:
 https://icanhazdadjoke.com -- Dad Jokes - will return plain text. 
 https://api.chucknorris.io/jokes/random -- Chuck   - will return JSON
*/

async function fetchDadJoke() {
  const url = "https://icanhazdadjoke.com";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "text/plain"
      }
    });
  if (!response.ok) {
    throw new Error(`Error: $response.status`);
  }
  const dadJoke = await response.text();
  console.log(dadJoke)
  return dadJoke
}catch(error) {
    console.error("some shit broke.", error);
    return "No dad joke avalible at this time.";
  }
}
fetchDadJoke()

async function fetchChuckJoke() {
  const url = "https://api.chucknorris.io/jokes/random";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });
  if (!response.ok) {
    throw new Error(`Error: $response.status`);
  }
  const chuckJokeJson = await response.json();
  // console.log(chuckJoke.value)
  return chuckJokeJson.value
}catch(error) {
    console.error("some shit broke.", error);
    return "No dad joke avalible at this time.";
  }
}
fetchChuckJoke().then(chuckJoke => console.log(chuckJoke));
