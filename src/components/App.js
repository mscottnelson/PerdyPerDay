import React, { Component } from 'react';
import { PerDayList } from './PerDayList';
import { PerDayCount } from './PerDayCount';
import { AddDayForm } from './AddDayForm';
import { Menu } from './Menu'

export class App extends Component {
  constructor(props){
    console.log("go");
    super(props);
    this.state = {
      allPerDays: [
        {
          place: "Home",
          date: new Date("1/1/2017"),
          coffee: 1,
          exercise: 0,
          cake: 0,
          beer: 0,
          weight: 180
        },
        {
          place: "Home",
          date: new Date("1/2/2017"),
          coffee: 1,
          exercise: 0,
          cake: 1,
          beer: 0,
          weight: 179
        },
        {
          place: "Work",
          date: new Date("1/3/2017"),
          coffee: 3,
          exercise: 1,
          cake: 3,
          beer: 0,
          weight: 178
        },
        {
          place: "Work",
          date: new Date("1/25/2017"),
          coffee: 3,
          exercise: 0,
          cake: 3,
          beer: 1,
          weight: 182
        },
      ],
      filter: false
    }
  }

  countDays(filter) {
    const { allPerDays } = this.state;
    return allPerDays.filter((day) => (filter) ? day[filter] : day).length;
  }

  currentWeight() {
    const { allPerDays } = this.state;
    return allPerDays[allPerDays.length - 1].weight;
  }

  render() {
    return(
      			<div className="app">
              <Menu />
              {
                (this.props.location.pathname === "/") ?
                  <PerDayCount total={this.countDays()}
                    coffee={this.countDays("coffee")}
                    exercise={this.countDays("exercise")}
                    cake={this.countDays("cake")}
                    beer={this.countDays("beer")}
                    weight={this.currentWeight()}
                  /> :
                (this.props.location.pathname === "/add-day") ?
                  <AddDayForm /> :
                <PerDayList days={this.state.allPerDays}
                  filter={this.props.params.filter}/>
              }
      			</div>
    )
  }

}
