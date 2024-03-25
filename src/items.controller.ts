import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  private items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  @Get()
  findAll() {
    return this.items;
  }
}