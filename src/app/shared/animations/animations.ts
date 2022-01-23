import { trigger, style, transition, animate, query, stagger, keyframes } from '@angular/animations';

export function cardAnimation() {
    return trigger('cardAnimation', [
        transition('* => *', [
            // Initially the all cards are not visible
            query(':enter', style({ opacity: 0 }), { optional: true }),
            // Each card will appear sequentially with the delay of 300ms
            query(':enter', stagger('40ms', [
                animate('290ms ease-in', keyframes([
                    style({ opacity: 0, transform: 'scale3d(.3, .3, .3)' }),
                    style({ opacity: 1, transform: 'scale3d( 1,  1,  1)' }),
                ]))
            ]), { optional: true })
        ]),
    ])
}

export function fadeInDownLabel() {
    return trigger('fadeInDownLabel', [
        transition(':enter', [
            style({ opacity: '0', transform: 'translateY(-1px)' }),
            animate('.15s .2s ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
        ])
    ]);
}

export function fadeInDown() {
    return trigger('fadeInDown', [
        transition(':enter', [
            style({ opacity: '0', transform: 'translateY(-20px)' }),
            animate('.15s .1s ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
        ])
    ]);
}