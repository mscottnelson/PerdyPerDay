import Coffee from 'react-icons/lib/fa/coffee'
import Exercise from 'react-icons/lib/fa/bicycle'
import Cake from 'react-icons/lib/fa/birthday-cake'
import Beer from 'react-icons/lib/fa/beer'
import Weight from 'react-icons/lib/fa/balance-scale'
import Calendar from 'react-icons/lib/fa/calendar'
import { PerDayRow } from './PerDayRow'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router'

export const PerDayList = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/coffee|exercise|cake|beer/)) ?
    days : days.filter(day => day[filter])

  return (
    <div className="per-day-list">
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
            <tr>
              <td colSpan={4}>
                <Link to="/list-days">
                  All Days
                </Link>
                <Link to="/list-days/coffee">
                  Coffee Days
                </Link>
                <Link to="/list-days/exercise">
                  Exercise Days
                </Link>
                <Link to="/list-days/cake">
                  Cake Days
                </Link>
                <Link to="/list-days/beer">
                  Beer Days
                </Link>
              </td>
            </tr>
        </thead>
        <tbody>
            {filteredDays.map((day, i) =>
            <PerDayRow key={i}
                    {...day} />
            )}
        </tbody>
    </table>
  </div>
)
}

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
