import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messagesService.create(messageDto);
  }

  @Put(':id')
  update(@Param() params, @Body() message: Message) {
    return this.messagesService.update(+params.id, message).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
