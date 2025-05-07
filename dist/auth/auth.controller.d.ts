import { AuthService } from './auth.service';
import { SignInDto } from './dto/sing-in.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        access_token: string;
    }>;
    register(registerDto: RegisterDto): Promise<{
        name: string;
        email: string;
    }>;
}
