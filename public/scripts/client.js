$(document).ready(function() {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


const createTweetElement = function(data) {
  const $tweet = $(`<article class="tweet" >
    <header class="tweet-header">
      <div class="userGroup">
        <img src=${data.user.avatars}>
        <span class="username">${data.user.name}</span>
      </div>
      <div>
      <span class="handle">${data.user.handle}</span>
      </div>
    </header>
    <p>${data.content.text}</p>
    <hr>

    <footer class="tweet-footer">
      <time>${timeago.format(data.created_at)}</time>
      <div class="iconGroup">
        <i class="fas fa-flag"></i>
        <i class="fas fa-heart"></i>
        <i class="fas fa-retweet"></i>
      </div>
    </footer>
   </article>`);     
    return $tweet;
  };

  const renderTweets = function(tweets) {
    // loops through tweets
      for (const tweet of tweets) {
        // calls createTweetElement for each tweet
        let $tweet = createTweetElement(tweet);
        $("#tweets-container").prepend($tweet);
      }
    };
    

//shorthand version of ajax
const loadTweets = function() {
  $.get("/tweets", function($tweet) {
    console.log($tweet)
    renderTweets($tweet);
  });
};



  $("form").submit(function (event) {
    event.preventDefault();
    let serializedData = $(this).serialize();
    // verify here before posting
    if ($('textarea#tweet-text').val().length > 140) {
      alert("You've entered too many characters");
    }
    if ($('textarea#tweet-text').val().length === 0) {
      alert("Your tweet is empty!");
    }
    if ($('textarea#tweet-text').val() === null) {
      alert("You didn't tweet anything!");
    }

      $.post("/tweets", serializedData, function() {
        loadTweets();
      })
 
  });  
})






  


