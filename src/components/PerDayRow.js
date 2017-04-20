import Coffee from 'react-icons/lib/fa/coffee';
import Exercise from 'react-icons/lib/fa/bicycle';
import Cake from 'react-icons/lib/fa/birthday-cake';
import Beer from 'react-icons/lib/fa/beer';
import Weight from 'react-icons/lib/fa/balance-scale';
import Calendar from 'react-icons/lib/fa/calendar';

export const PerDayRow = ({place, date, coffee, exercise, cake, beer, weight}) => (
    <tr>
        <td>
            {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
        </td>
        <td>
            {place}
        </td>
        <td>
            {coffee}{(coffee) ? <Coffee/> : null}
            </td>
        <td>
            {exercise}{(exercise) ? <Exercise/> : null}
        </td>
        <td>
            {cake}{(cake) ? <Cake/> : null}
        </td>
        <td>
            {beer}{(beer) ? <Beer/> : null}
        </td>
        <td>
            {weight}<Weight/>
        </td>
    </tr>
)