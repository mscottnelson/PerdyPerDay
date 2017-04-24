import { Component } from 'react';
import { PerDayList } from './PerDayList';
import { PerDayCount } from './PerDayCount';

export class App extends Component {
  constructor(props){
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
             weight: 180
         },
         {
             place: "Work",
             date: new Date("1/3/2017"),
             coffee: 3,
             exercise: 0,
             cake: 3,
             beer: 0,
             weight: 180
         },
      ]
    }
  }
  countDays(filter) {
    const { allPerDays } = this.state;
    return allPerDays.filter((day) => (filter) ? day[filter] : day).length;
  }
  render() {
    return(
      <div className="app">
        <PerDayList days={this.state.allPerDays}/>
        <PerDayCount total={this.countDays()}
                      cofee={this.countDays("coffee")}
                    exercise={this.countDays("exercise")}/>
      </div>
    )
  }
}
