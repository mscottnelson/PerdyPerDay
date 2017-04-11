import React from 'react';
import '../stylesheets/ui.scss';

const PerDayCount = React.createClass({
    render() {
        return (
            <div className="per-day-count">
                <div className="total-days">
                    <span>5 days</span>
                </div>
                <div className="coffee-days">
                    <span>2 days</span>
                </div>
                <div className="exercise-days">
                    <span>1 exercise day</span>
                </div>
            </div>
        )
    }
})