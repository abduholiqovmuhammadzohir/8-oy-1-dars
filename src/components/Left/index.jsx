import React from 'react'
import Chart1 from '../../pages/Chart1'
import Chart2 from '../../pages/Chart2'
import styles from "./index.module.css"

function Left() {
  return (
    <div>
        <div className={styles.sms}>
            <h1>1 oylik SMS lar</h1>
            <h2><span>Umumiy</span><br /> 1000 ta</h2>
        </div>
        <div className={styles.chart}>
            <Chart1></Chart1>
            <Chart2></Chart2>
        </div>
    </div>
  )
}

export default Left