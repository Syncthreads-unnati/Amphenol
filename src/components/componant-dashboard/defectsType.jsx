import React from "react";

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
            <td className="status-icon">{defect.status ? "✔️" : "❌"}</td>
            <td><strong>{defect.probability}%</strong></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DefectTable;
