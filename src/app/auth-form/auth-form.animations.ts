
import { trigger, animate, transition, style } from '@angular/animations';

export const formTrigger = trigger('formTrigger', [
  transition( 'void => *', [
    style({
      transform: 'translateX(-350px)'
    }),
    animate('500ms ease-out', style({
      transform: 'translateX(0px)'
    }))
  ]),
  transition( '* => void', [
    style({
      transform: 'translateX(0px)'
    }),
    animate('500ms ease-out', style({
      transform: 'translateX(-350px)'
    }))
  ]),
]);
