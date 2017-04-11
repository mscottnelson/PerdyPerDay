import { Component } from 'react';
import '../stylesheets/ui.scss';

const percentToDecimal = (decimal) => {
        return ((decimal * 100) + '%');
}

const calcGoalProgress = (total, goal) =>{
        return percentToDecimal(total/goal);
}

export const PerDayCount = ({total, coffee, exercise, goal}) => (
    <div className="per-day-count">
        <div className="total-days">
            <span>{total}</span>
            <span>days</span>
        </div>
        <div className="coffee-days">
            <span>{coffee}</span>
            <span>days</span>
        </div>
        <div className="exercise-days">
            <span>{exercise}</span>
            <span>days</span>
        </div>
        <div>
            <span>{calcGoalProgress(total, goal)}</span>
        </div>
    </div>
)