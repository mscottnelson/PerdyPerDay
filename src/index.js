import React from 'react';
import { render } from 'react-dom';
import { PerDayList } from './components/PerDayList';
import { PerDayCount } from './components/PerDayCount';

window.React = React;

/*
render(
    <PerDayCount />,
    document.getElementById('react-container')
)
*/
render( 
    <PerDayList days={
        [
           {
               place: "Home",
               date: new Date("1/1/2017"),
               coffee: 1,
               exercise: 0,
               cake: 0,
               beer: 0,
               weight: 180
           },
           {
               place: "Home",
               date: new Date("1/2/2017"),
               coffee: 1,
               exercise: 0,
               cake: 1,
               beer: 0,
               weight: 180
           },
           {
               place: "Work",
               date: new Date("1/3/2017"),
               coffee: 3,
               exercise: 0,
               cake: 3,
               beer: 0,
               weight: 180
           },
        ]
    } />,
    document.getElementById('react-container')
)
