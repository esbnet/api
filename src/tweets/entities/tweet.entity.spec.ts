import mongoose from 'mongoose';
import { Tweet, TweetSchema } from './tweet.entity';

describe('Tweet Tests', () => {
  describe('Tweet Class', () => {
    it('should be able to create a new Tweet', () => {
      const tweet = new Tweet({
        content: 'Test Hello World!',
        screen_name: 'John',
      });
      expect(tweet.content).toBe('Test Hello World!');
      expect(tweet.screen_name).toBe('John');
    });
  });

  describe('Tweet Persistence', () => {
    let conn: mongoose.Mongoose;

    beforeEach(async () => {
      conn = await mongoose.connect('mongodb://root:root@localhost:27017/tweets_test?authSource=admin')
    })

    afterEach(async () => {
      await conn.disconnect();
    })

    it('create a tweet document ok!', async () => {

      const TweetModel = conn.model('Tweet', TweetSchema)

      const tweet = new TweetModel({
        content: 'Test Hello World!',
        screen_name: 'John',
      });

      await tweet.save();
      const tweetCreated = await TweetModel.findById(tweet._id)

      expect(tweetCreated.content).toBe('Test Hello World!');
      expect(tweetCreated.screen_name).toBe('John');

    })
  })
});
