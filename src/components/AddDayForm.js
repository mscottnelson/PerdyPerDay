import { PropTypes } from 'prop-types';
import { Component } from 'react';

export class AddDayForm extends Component {

  submit(e){
    e.preventDefault();
    console.log('place', this.refs.place.value);
    console.log('date', this.refs.date.value);
    console.log('coffee', this.refs.coffee.value);
    console.log('exercise', this.refs.exercise.value);
    console.log('cake', this.refs.cake.value);
    console.log('beer', this.refs.beer.value);
  }

  render() {
    return (
      <form className="add-day-form">
        <label htmlFor="place">Place Name</label>
        <input id="place" type="text" required defaultValue={place} ref="place"/>

        <label htmlFor="date">Date</label>
        <input id="date" type="date" required defaultValue={date} ref="date"/>

        <div>
          <label htmlFor="coffee">Coffee</label>
          <input id="coffee" type="number" defaultValue={coffee} ref="coffee"/>
        </div>

        <div>
          <label htmlFor="exercise">Exercise</label>
          <input id="exercise" type="number" defaultValue={exercise} ref="exercise"/>
        </div>

        <div>
          <label htmlFor="cake">Cake</label>
          <input id="cake" type="number" defaultValue={cake} ref="cake"/>
        </div>

        <div>
          <label htmlFor="beer">Beer</label>
          <input id="beer" type="number" defaultValue={beer} ref="beer"/>
        </div>

        <div>
          <label htmlFor="weight">Weight</label>
          <input id="weight" type="number" defaultValue={weight} ref="weight"/>
        </div>
        <button>Add Day</button>
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
