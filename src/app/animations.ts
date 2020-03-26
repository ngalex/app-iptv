import {
    trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
  
  
  // Routable animations
  export const slideInAnimation =
  trigger('routeAnimation', [
    transition('playlists <=> channels', [
      style({ position: 'relative', height: '300px', overflow: 'hidden' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
/*
    export const fadeAnimation = trigger('routeAnimation', [
        transition('heroes => hero', [
            query(':enter, :leave', [
                style({ position: 'relative' }),
                style({
                  position: 'relative',
                  width: '100%'
                })
              ]),
            query(':enter', [
                style({ position: 'relative', opacity: 0 })
            ], { optional: true }),
            query(':leave', [
                animate(300, style({ opacity: 0 }))
            ], { optional: true }),
            query(':enter', [
                style({ position: 'relative', opacity: 0 }),
                animate(300, style({ display: 'visible', opacity: 1 }))
            ], { optional: true })
        ])
    ]);*/