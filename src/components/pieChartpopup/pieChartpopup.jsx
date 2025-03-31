import React from 'react';
import "./pieChartpopup.scss";
import SummaryPieChart from '../summarypiechart/summarypiechart';

const PieChartpopup = ({onClose}) => {
    return (
        <div className="pieChartpopup">
          <SummaryPieChart view={true} onClose={onClose} width={600} height={600}  outerRadius={200}/>
        </div>
    );
}

export default  PieChartpopup ;