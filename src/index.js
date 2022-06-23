// const Twit = require('twit')
// const Twitter = require('twitter-v2');ааааа
//
// consumer_key: "8ZZhG4sb0YB5rhQGWH6wBoSSF",
//   consumer_secret: "UxH3HOTKSokQJwYz1UYi15w1YrN6crAzdk34ICoDI2x7UUFfZd",
//   access_token_key: "722011386134544384-MHF6uswESAAxkqdke3Oc1JAyV39iBjC",
//   access_token_secret: "xlaXurYXRXwzBQtFrg4PeUcYbOHsuHIQOdxcIZLUzBrHU",
//   bearer_token: "AAAAAAAAAAAAAAAAAAAAAHFIeAEAAAAAyxZHe8mVWe6vBrf6LyjCu6BrpEw%3DN7J3OacND4q9bsMxFzGV2TMwmcCm2wZUbTtzhCySFqoR2xU3ZR"
//
// var client = new Twitter({
//   consumer_key: "8ZZhG4sb0YB5rhQGWH6wBoSSF",
  // consumer_secret: "UxH3HOTKSokQJwYz1UYi15w1YrN6crAzdk34ICoDI2x7UUFfZd",
  // access_token_key: "722011386134544384-MHF6uswESAAxkqdke3Oc1JAyV39iBjC",
  // access_token_secret: "xlaXurYXRXwzBQtFrg4PeUcYbOHsuHIQOdxcIZLUzBrHU",
  // bearer_token: "AAAAAAAAAAAAAAAAAAAAAHFIeAEAAAAAyxZHe8mVWe6vBrf6LyjCu6BrpEw%3DN7J3OacND4q9bsMxFzGV2TMwmcCm2wZUbTtzhCySFqoR2xU3ZR"
// });
//
// const stream = client.stream('statuses/filter', {track: ['#travel']});
//
//
// (async() => {
//
//   console.log("gey");
//
//   // // Close the stream after 30s.
//   // setTimeout(() => {
//   //   stream.close();
//   // }, 30000);
//
//   for await (const { data } of stream) {
//     console.log(data);
//   }
//
// })()

import { ETwitterStreamEvent, TweetStream, TwitterApi, ETwitterApiError } from 'twitter-api-v2';

const clientLove = new TwitterApi( "AAAAAAAAAAAAAAAAAAAAAHFIeAEAAAAAyxZHe8mVWe6vBrf6LyjCu6BrpEw%3DN7J3OacND4q9bsMxFzGV2TMwmcCm2wZUbTtzhCySFqoR2xU3ZR"
);

const clientHate = new TwitterApi( "AAAAAAAAAAAAAAAAAAAAAHFIeAEAAAAAyxZHe8mVWe6vBrf6LyjCu6BrpEw%3DN7J3OacND4q9bsMxFzGV2TMwmcCm2wZUbTtzhCySFqoR2xU3ZR"
);

var love = 1
var hate = 1

const rulesLove = await clientLove.v2.streamRules();
if (rulesLove.data?.length) {
  await clientLove.v2.updateStreamRules({
    delete: { ids: rulesLove.data.map(rule => rule.id) },
  });
}

// Add our rules
await clientLove.v2.updateStreamRules({
  add: [{ value: 'i love you' }],
});

const streamLove = await clientLove.v2.searchStream();
// Enable auto reconnect
streamLove.autoReconnect = true;

streamLove.on(
  // Emitted when a Twitter payload (a tweet or not, given the endpoint).
  ETwitterStreamEvent.Data,
  eventData => {
    love = love + 1
    console.log("love", love);
  }
);


//------------------------------------------------------

// const rulesHate = await clientHate.v2.streamRules();
// if (rulesHate.data?.length) {
//   await clientHate.v2.updateStreamRules({
//     delete: { ids: rulesHate.data.map(rule => rule.id) },
//   });
// }
//
// // Add our rules
// await clientHate.v2.updateStreamRules({
//   add: [{ value: 'i love you' }],
// });
//
// const streamHate = await clientHate.v2.searchStream();
// // Enable auto reconnect
// streamHate.autoReconnect = true;
//
// streamHate.on(
//   // Emitted when a Twitter payload (a tweet or not, given the endpoint).
//   ETwitterStreamEvent.Data,
//   eventData => {
//     hate = hate + 1
//     console.log("hate", hate);
//   }
// );
