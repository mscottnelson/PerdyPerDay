import { createClass } from 'react';

export const App = createClass({
  getInitialState(){
    return {
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
  },
  render() {
    return(
      <div className="app">
        {this.state.allPerDays[0]["place"]}
      </div>
    )
  }
})
