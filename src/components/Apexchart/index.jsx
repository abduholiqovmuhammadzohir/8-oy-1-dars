
import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["SMS yuborilganlar", "Linkga kirganlar", "Mahsulot sahifasiga kirganlar","Sotib olganlar", "Izoh qoldirganlar"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [46, 25, 20, 38, 33]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1082"
              height="524"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;