import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { LibraryService } from './library.service';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post('book')
  addBook(@Body() dto: any) {
    return this.libraryService.addBook(dto);
  }

  @Get('books')
  getBooks() {
    return this.libraryService.getBooks();
  }

  @Post('checkout')
  checkoutBook(@Body() dto: any) {
    return this.libraryService.checkoutBook(dto);
  }

  @Post('return')
  returnBook(@Body() dto: any) {
    return this.libraryService.returnBook(dto);
  }

  @Get('barcodescan/:barcode')
  scanBarcode(@Param('barcode') barcode: string) {
    return this.libraryService.scanBarcode(barcode);
  }

  @Delete('book/:id')
  removeBook(@Param('id') id: string) {
    return this.libraryService.removeBook(id);
  }
}
