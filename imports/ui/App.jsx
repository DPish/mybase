import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

import Task from './Task.jsx';

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
      ref: 'chart',
      type: 'bar',
      data: {
        labels: ['bos', 'wor', 'sprin'],
        datasets: [{
          label: 'Population',
          data: [1212, 232323, 42424],
        },
        ],
      },
      options: {},
    };
 }
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  componentDidMount() {
    console.log(this.refs.chart.chart_instance); // returns a Chart.js instance reference
  }
  render() {
    const data = {
       labels: [
           "Red",
           "Blue",
           "Yellow"
       ],
       datasets: [
           {
               data: [900, 50, 100],
               backgroundColor: [
                   "#FF6384",
                   "#36A2EB",
                   "#FFCE56"
               ],
               hoverBackgroundColor: [
                   "#FF6384",
                   "#36A2EB",
                   "#FFCE56"
               ]
           }]
      };

   const styles = {
    graphContainer: {
     border: '1px solid black',
     padding: '15px'
    }
  }
  	return <Doughnut ref='chart' data={data} />;
  }
}
