import React from 'react';
import { render } from 'react-dom';
import { PerDayCount } from './components/PerDayCount';

window.React = React;

render( 
    <PerDayCount total={50}
                 coffee={20}
                 exercise={10}
                 goal={100} />,
    document.getElementById('react-container')
)