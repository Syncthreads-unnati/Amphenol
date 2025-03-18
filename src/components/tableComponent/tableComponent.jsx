import React from "react";
import "./tableComponent.scss";
import { tableData } from "../../constants/constants";
import DefectPopup from "../defectPopup/defectPopup";


const TableComponent = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {tableData.headers.map((header, index) => (
              <th key={index} className={index === tableData.minMax.min.column ? "highlight-min" : index === tableData.minMax.max.column ? "highlight-max" : ""}>
                {header}
                {index === tableData.minMax.min.column && <div className="min-tag">Min {tableData.minMax.min.value}</div>}
                {index === tableData.minMax.max.column && <div className="max-tag">Max {tableData.minMax.max.value}</div>}
              </th>
            ))}
          </tr>
          <tr>
            {tableData.totals.map((total, index) => (
              <th key={index}>{index === 0 ? `Total ${total}` : `Total ${total}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.lot}</td>
              <td className="id-cell">{row.id}</td>
              {row.values.map((value, cellIndex) => (
                <td key={cellIndex} className={value ? "dot" : ""}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <DefectPopup/>
    </div>
  );
};

export default TableComponent;
