import { ETwitterStreamEvent, TweetStream, TwitterApi, ETwitterApiError } from 'twitter-api-v2'

const client = new TwitterApi( "AAAAAAAAAAAAAAAAAAAAAHFIeAEAAAAAyxZHe8mVWe6vBrf6LyjCu6BrpEw%3DN7J3OacND4q9bsMxFzGV2TMwmcCm2wZUbTtzhCySFqoR2xU3ZR"
);

var loveTweets = 1;
var hateTweets = 1;

const rules = await client.v2.streamRules();
if (rules.data?.length) {
  await client.v2.updateStreamRules({
    delete: { ids: rules.data.map(rule => rule.id) },
  });
}

await client.v2.updateStreamRules({
  add: [{ value: 'i love you' }, { value: 'i hate you' },],
});

const stream = await client.v2.searchStream();
stream.autoReconnect = true;

stream.on(
  ETwitterStreamEvent.Data,
  eventData => {
    tweet = JSON.parse(eventData);
    console.log(tweet);
    if (tweet.includes('love')) {
      loveTweets = loveTweets + 1;
    } else {
      hateTweets = hateTweets + 1;
    }
  }
);

export { loveTweets, hateTweets }

// const loveTweets = await client.v2.tweetCountRecent('i love you');
// console.log(loveTweets.data[0].tweet_count);
//
// const hateTweets = await client.v2.tweetCountRecent('i hate you');
// console.log(hateTweets.data[0].tweet_count);
//
// export {hateTweets, loveTweets}
