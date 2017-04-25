import { PropTypes } from 'prop-types';
import { Component } from 'react';

export class AddDayForm extends Component {
  render() {
    return (
      <form className="add-day-form">
        <label htmlFor="place">Place Name</label>
        <input id="place" type="text" required />

        <label htmlFor="date">Date</label>
        <input id="date" type="date" required />

        <div>
          <label htmlFor="coffee">Coffee</label>
          <input id="coffee" type="number" />
        </div>

        <div>
          <label htmlFor="exercise">Exercise</label>
          <input id="exercise" type="number" />
        </div>

        <div>
          <label htmlFor="cake">Cake</label>
          <input id="cake" type="number" />
        </div>

        <div>
          <label htmlFor="beer">Beer</label>
          <input id="beer" type="number" />
        </div>

        <div>
          <label htmlFor="weight">Weight</label>
          <input id="weight" type="number" />
        </div>
      </form>
        )
        }
        }

AddDayForm.propTypes = {
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  coffee: PropTypes.number.isRequired,
  exercise: PropTypes.number.isRequired,
  cake: PropTypes.number.isRequired,
  beer: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired
}
