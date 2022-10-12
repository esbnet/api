import { Tweet } from './tweet.entity';

describe('Tweet Tests', () => {
  it('should be able to create a new Tweet', () => {
    const tweet = new Tweet({
      content: 'Test Hello World!',
      screen_name: 'John',
    });
    expect(tweet.content).toBe('Test Hello World!');
    expect(tweet.screen_name).toBe('John');
  });
});
