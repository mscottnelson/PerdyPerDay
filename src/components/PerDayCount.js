import React from 'react';
import '../stylesheets/ui.scss';

export const PerDayCount = React.createClass({
    percentToDecimal(decimal){
        return ((decimal * 100) + '%');
    },
    calcGoalProgress(total, goal){
        return this.percentToDecimal(total/goal);
    },
    render() {
        return (
            <div className="per-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                    <span>days</span>
                </div>
                <div className="coffee-days">
                    <span>{this.props.coffee}</span>
                    <span>days</span>
                </div>
                <div className="exercise-days">
                    <span>{this.props.exercise}</span>
                    <span>days</span>
                </div>
                <div>
                    <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                </div>
            </div>
        )
    }
})