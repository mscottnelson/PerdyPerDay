import { PropTypes } from 'prop-types';
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
        <div className="coffee-units">
            <span>{coffee}</span>
            <Coffee />
            <span>units</span>
        </div>
        <div className="exercise-units">
            <span>{exercise}</span>
            <Exercise />
            <span>units</span>
        </div>
        <div className="cake-units">
            <span>{cake}</span>
            <Cake />
            <span>days</span>
        </div>
        <div className="beer-units">
            <span>{beer}</span>
            <Beer />
            <span>units</span>
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

PerDayCount.defaultProps = {
    total: 100,
    coffee:90,
    exercise:10,
    cake: 30,
    beer: 30,
    weight: 190,
    goal: 170
}

PerDayCount.propTypes = {
    total: PropTypes.number,
    coffee: PropTypes.number,
    exercise: PropTypes.number,
    cake: PropTypes.number,
    beer: PropTypes.number,
    weight: PropTypes.number,
    goal: PropTypes.number
}
