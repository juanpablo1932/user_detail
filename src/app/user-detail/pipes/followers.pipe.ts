import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followers',
  standalone: false,
})
export class FollowersPipe implements PipeTransform {
  transform(value: number | undefined): string {
    return value && value > 0 ? `Seguidores: ${value} ` : 'Sin seguidores';
  }
}
@Pipe({
  name: 'following',
  standalone: false,
})
export class FollowingPipe implements PipeTransform {
  transform(value: number | undefined): string {
    return value && value > 0 ? `Seguidos: ${value}` : 'No sigue a nadie';
  }
}
@Pipe({
  name: 'email',
  standalone: false,
})
export class EmailPipe implements PipeTransform {
  transform(value: string | null): string {
    return value === null ? `No registra` : `${value}`;
  }
}
