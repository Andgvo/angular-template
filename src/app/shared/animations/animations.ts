import { trigger, state, style, transition, animate, query, stagger, keyframes } from '@angular/animations';

export function cardAnimation() {
    return trigger('cardAnimation', [
        transition('* => *', [
            // Initially the all cards are not visible
            query(':enter', style({ opacity: 0 }), { optional: true }),
            // Each card will appear sequentially with the delay of 300ms
            query(':enter', stagger('75ms', [
                animate('350ms ease-in', keyframes([
                    style({ opacity: 0, transform: 'scale3d(.3, .3, .3)' }),
                    style({ opacity: 1, transform: 'scale3d( 1,  1,  1)' }),
                ]))
            ]), { optional: true })
        ]),
    ])
}