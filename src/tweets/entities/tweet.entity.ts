export type TweetProps = {
  content: string;
  screen_name: string;
};

export class Tweet {
  content: string;
  screen_name: string;

  constructor(props: TweetProps) {
    this.content = props.content;
    this.screen_name = props.screen_name;
  }
}
