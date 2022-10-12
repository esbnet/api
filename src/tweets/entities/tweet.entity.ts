import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TweetProps = {
  content: string;
  screen_name: string;
};

@Schema()
export class Tweet {

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  screen_name: string;

  constructor(props: TweetProps) {
    this.content = props.content;
    this.screen_name = props.screen_name;
  }

}

export const TweetSchema = SchemaFactory.createForClass(Tweet)
