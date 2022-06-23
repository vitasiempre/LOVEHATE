// const Twit = require('twit')
// const Twitter = require('twitter-v2');
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

const client = new TwitterApi( "AAAAAAAAAAAAAAAAAAAAAHFIeAEAAAAAyxZHe8mVWe6vBrf6LyjCu6BrpEw%3DN7J3OacND4q9bsMxFzGV2TMwmcCm2wZUbTtzhCySFqoR2xU3ZR"
); // (create a client)

const stream = await client.v2.sampleStream();

// Awaits for a tweet
stream.on(
  // Emitted when Node.js {response} emits a 'error' event (contains its payload).
  ETwitterStreamEvent.ConnectionError,
  err => console.log('Connection error!', err),
);

stream.on(
  // Emitted when Node.js {response} is closed by remote or using .close().
  ETwitterStreamEvent.ConnectionClosed,
  () => console.log('Connection has been closed.'),
);

stream.on(
  // Emitted when a Twitter payload (a tweet or not, given the endpoint).
  ETwitterStreamEvent.Data,
  eventData => console.log('Twitter has sent something:', eventData),
);

stream.on(
  // Emitted when a Twitter sent a signal to maintain connection active
  ETwitterStreamEvent.DataKeepAlive,
  () => console.log('Twitter has a keep-alive packet.'),
);

// Enable reconnect feature
stream.autoReconnect = true;

// Be sure to close the stream where you don't want to consume data anymore from it
// stream.close();

// -- Alternative usage --

// You can also use async iterator to iterate over tweets!
for await (const { data } of stream) {
  console.log('This is my tweet:', data);
}
