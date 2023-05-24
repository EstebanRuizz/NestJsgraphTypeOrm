import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { createPostInput } from './dto/create-post.dto';
import { Author } from 'src/authors/entities/author.entity';
import { AuthorsService } from 'src/authors/authors.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private authorsService: AuthorsService,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postsRepository.find();
  }
  async findProductById(id: number): Promise<Post> {
    return this.postsRepository.findOne({
      where: {
        id,
      },
    });
  }
  createPost(post: createPostInput): Promise<Post> {
    const newPost = this.postsRepository.create(post);
    return this.postsRepository.save(newPost);
  }
  getAuthor(userId: number): Promise<Author> {
    return this.authorsService.findOne(userId);
  }
}
