import React from "react";
import "./defectTable.scss";
const defectsData = [
  { id: 1, label: "Contact Damage", value: 50, color: "#FF9800" },
  { id: 2, label: "Contact Direction Change", value: 50, color: "#F48FB1" },
  { id: 3, label: "Contact Plating Peel Off (Pocket)", value: 20, color: "#7986CB" },
  { id: 4, label: "Contact Plating Peel Off (Head)", value: 120, color: "#FF8A80" },
  { id: 5, label: "DE-Flashing", value: 60, color: "#FFEB3B" },
  { id: 6, label: "DAP Powder", value: 40, color: "#80CBC4" },
  { id: 7, label: "Deep Gate", value: 140, color: "#4CAF50" },
  { id: 8, label: "Foreign Material", value: 60, color: "#9E9E9E" },
  { id: 9, label: "Metal Chip Off Molded", value: 45, color: "#7986CB" },
  { id: 10, label: "Short Contact", value: 45, color: "#03A9F4" },
  { id: 11, label: "Short Mold", value: 84, color: "#8BC34A" },
  { id: 12, label: "Vertical Flash", value: 56, color: "#FFCCBC" },
  { id: 13, label: "Machine Tool Mark Pocket", value: 30, color: "#E57373" }
];
const minCount = Math.min(...defectsData.map((item) => item.value));
const maxCount = Math.max(...defectsData.map((item) => item.value));

const DefectTable = () => {
  return (
      <table className="defects-table">
        <tbody>
          {defectsData.map((item) => (
            <tr
            key={item.id}
            className={
              item.value === minCount
              ? "min-row"
              : item.value === maxCount
              ? "max-row"
              : ""
            }
            >
            <div className={
              item.value === minCount
              ? "min-label"
              : item.value === maxCount
              ? "max-label"
              : ""
            }>{item.value === minCount
              ? "min"
              : item.value === maxCount
              ? "max"
              : ""}</div>
              <td>{item.id}</td>
              <td>
                <div className="dot" style={{ backgroundColor: item.color }}></div>
                {item.label}
              </td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};
export default DefectTable;









