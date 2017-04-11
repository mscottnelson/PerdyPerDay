import React from 'react';
import { render } from 'react-dom';
import { PerDayCount } from './components/PerDayCount';

window.React = React;

render( 
    <PerDayCount />,
    document.getElementById('react-container')
)