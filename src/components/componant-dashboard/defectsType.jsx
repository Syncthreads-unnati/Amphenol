import React from "react";
import "./component-dashboard.scss"
const DefectTable = ({ defects }) => {
  return (
    <table className="defect-table">
      <thead>
        <tr>
          <th>Defect Type</th>
          <th>Status</th>
          <th>AI Probability</th>
        </tr>
      </thead>
      <tbody>
        {defects.map((defect, index) => (
          <tr key={index}>
            <td>{defect.name}</td>
            <td className={defect.status ? "dot" : ""}></td>
            <td><strong>{defect.probability}%</strong></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DefectTable;
