import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type TweetDocument = Tweet & Document;

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
