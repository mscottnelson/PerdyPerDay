import '../stylesheets/ui.scss';
import Coffee from 'react-icons/lib/fa/coffee';
import Exercise from 'react-icons/lib/fa/bicycle';
import Cake from 'react-icons/lib/fa/birthday-cake';
import Beer from 'react-icons/lib/fa/beer';
import Weight from 'react-icons/lib/fa/balance-scale';
import Calendar from 'react-icons/lib/fa/calendar';

const percentToDecimal = (decimal) => {
        return ((decimal * 100) + '%');
}

const calcGoalProgress = (total, goal) =>{
        return percentToDecimal(total/goal);
}

export const PerDayCount = ({total, coffee, exercise, cake, beer, weight, goal}) => (
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
            <Exercise />
            <span>days</span>
        </div>
        <div className="cake-days">
            <span>{cake}</span>
            <Beer />
            <span>days</span>
        </div>
        <div className="beer-days">
            <span>{beer}</span>
            <Beer />
            <span>days</span>
        </div>
        <div className="current-weight">
            <span>{weight}</span>
            <Weight />
            <span>lbs</span>
        </div>
        <div>
            <span>{calcGoalProgress(total, goal)}</span>
        </div>
    </div>
)