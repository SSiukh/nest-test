import { Module } from '@nestjs/common';
import { LotrService } from './lotr.service';
import { LotrController } from './lotr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lotr } from 'src/entities/lotr.entity';
import { Places } from 'src/entities/places.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lotr, Places])],
  providers: [LotrService],
  controllers: [LotrController],
})
export class LotrModule {}
