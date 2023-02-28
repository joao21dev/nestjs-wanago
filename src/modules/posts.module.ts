import { Module } from '@nestjs/common';
import PostsController from 'src/controllers/post.controller';
import PostsService from 'src/services/posts.service';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
