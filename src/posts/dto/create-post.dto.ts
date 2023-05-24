import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength, IsInt } from 'class-validator';

@InputType()
export class createPostInput {
  @Field()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  title: string;

  @MaxLength(400)
  @Field({ nullable: true })
  content?: string;

  @IsInt()
  @Field()
  authorId: number;
}
