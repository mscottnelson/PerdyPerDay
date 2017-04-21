import Coffee from 'react-icons/lib/fa/coffee';
import Exercise from 'react-icons/lib/fa/bicycle';
import Cake from 'react-icons/lib/fa/birthday-cake';
import Beer from 'react-icons/lib/fa/beer';
import Weight from 'react-icons/lib/fa/balance-scale';
import Calendar from 'react-icons/lib/fa/calendar';
import { PerDayRow } from './PerDayRow';
import { PropTypes } from 'react';

export const PerDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Place</th>
                <th>Coffee</th>
                <th>Exercise</th>
                <th>Cake</th>
                <th>Beer</th>
                <th>Weight</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) =>
            <PerDayRow key={i}
                    {...day} />
            )}
        </tbody>
    </table>
)

PerDayList.propTypes = {
    days: function(props){
        if(!Array.isArray(props.days)){
            return new Error("PerDayList should be an array");
        }else if(!props.days.length){
                return new Error("PerDayList must have at least one record");
        } else {
                return null;
        }
    }
}

