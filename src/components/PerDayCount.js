import '../stylesheets/ui.scss';
import Coffee from 'react-icons/lib/fa/coffee';
import Bike from 'react-icons/lib/fa/bicycle';
import Calendar from 'react-icons/lib/fa/calendar';

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
            <Calendar />
            <span>days</span>
        </div>
        <div className="coffee-days">
            <span>{coffee}</span>
            <Coffee />
            <span>days</span>
        </div>
        <div className="exercise-days">
            <span>{exercise}</span>
            <Bike />
            <span>days</span>
        </div>
        <div>
            <span>{calcGoalProgress(total, goal)}</span>
        </div>
    </div>
)