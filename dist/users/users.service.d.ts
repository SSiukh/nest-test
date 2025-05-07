import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOne(email: string): Promise<User | null>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
