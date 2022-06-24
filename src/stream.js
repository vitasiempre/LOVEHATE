import { ETwitterStreamEvent, TweetStream, TwitterApi, ETwitterApiError } from 'twitter-api-v2'
import * as http from 'http';
import * as path from 'path';

const client = new TwitterApi( "AAAAAAAAAAAAAAAAAAAAAHFIeAEAAAAAyxZHe8mVWe6vBrf6LyjCu6BrpEw%3DN7J3OacND4q9bsMxFzGV2TMwmcCm2wZUbTtzhCySFqoR2xU3ZR"
);

const clientHate = new TwitterApi( "AAAAAAAAAAAAAAAAAAAAAHFIeAEAAAAAyxZHe8mVWe6vBrf6LyjCu6BrpEw%3DN7J3OacND4q9bsMxFzGV2TMwmcCm2wZUbTtzhCySFqoR2xU3ZR"
);

var love = 1;
var hate = 1;

const rules = await client.v2.streamRules();
if (rules.data?.length) {
  await client.v2.updateStreamRules({
    delete: { ids: rules.data.map(rule => rule.id) },
  });
}

// Add our rules
await client.v2.updateStreamRules({
  add: [{ value: 'i love you' }, { value: 'i hate you' },],
});

const stream = await client.v2.searchStream();
// Enable auto reconnect
stream.autoReconnect = true;

// streamLove.on(
//   // Emitted when a Twitter payload (a tweet or not, given the endpoint).
//   ETwitterStreamEvent.Data,
//   eventData => {
//     // love = love + 1;
//     // console.log(eventData);
//     eventData = trim(eventData);
//     tweet = JSON.parse(eventData);
//     console.log(tweet.data.text);
//
//   }
// );

const loveTweets = await client.v2.tweetCountRecent('i love you');
console.log(loveTweets.data[0].tweet_count);

const hateTweets = await client.v2.tweetCountRecent('i hate you');
console.log(hateTweets.data[0].tweet_count);

export {hateTweets, hateTweets}
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
