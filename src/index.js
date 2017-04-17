import React from 'react';
import { render } from 'react-dom';
import { PerDayList } from './components/PerDayList';

window.React = React;

render( 
    <PerDayList days={
        [
           {
               place: "Home",
               date: new Data("1/1/2017"),
               coffee: 1,
               exercise: 0
           },
           {
               place: "Home",
               date: new Data("1/2/2017"),
               coffee: 1,
               cake: 1
           },
           {
               place: "Work",
               date: new Data("1/3/2017"),
               coffee: 3,
               exercise: 0
           },
        ]
    } />,
    document.getElementById('react-container')
)