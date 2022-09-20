import { Game } from 'src/game/entities/game.entity';
import { User } from 'src/user/entities/user.entity';

export class Profile {
  id?: string;
  user?: User;
  games?: Game[];
  title: string;
  image_url: string;
}
