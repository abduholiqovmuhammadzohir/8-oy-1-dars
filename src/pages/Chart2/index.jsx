import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import styles from "./index.module.css"
class Donut extends Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [26],
            options: {
                chart: {
                    height: 150,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                colors: ['rgba(255, 151, 74, 1)'],
                
                labels: [''],
            },
        }
    }

    render() {

        return (
            <div className="donut">
                <div className={styles.chart1}>
                    <Chart options={this.state.options} series={this.state.series} type="radialBar" width="170" />
                    <h2>260 ta <br /> <span>Hatolik bo'lgan</span></h2>
                </div>
            </div>
        );
    }
}

export default Donut;