const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit',function(e){
// alert("SUBMIT!!");
// })
tweetForm.addEventListener('submit', function(e){
    console.log("SUBMIT!!");
    e.preventDefault();//prevents it from taking to the page mentioned in action
    //this helps to stay on the page, extract data and manipulate content on that page 
    //added later
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value,tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
    //added later
})
const addTweet=(username, tweet)=>{
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}
//in the Console
// document.querySelectorAll('input')[1].value
// '#marshmallow'
// document.querySelectorAll('input')[1].value = '#Marsh'
// '#Marsh'

// better approach 
// console.log(tweetForm.elements.username.value);// username here is name ="username" in html
// Marshneil
// undefined
// console.log(tweetForm.elements.tweet.value);// tweet here is name ="tweet" in html
// #Marsh
// undefined

