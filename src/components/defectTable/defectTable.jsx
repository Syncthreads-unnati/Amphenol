import React from "react";
import "./defectTable.scss";

const defectData = [
  { label: "Contact Damage", value: 50, color: "#ff9800" },
  { label: "Contact Direction Change", value: 50, color: "#f48fb1" },
  { label: "Contact Plating Peel Off (Pocket)", value: 20, color: "#7986cb" },
  { label: "Contact Plating Peel Off (Head)", value: 120, color: "#ff8a80" },
  { label: "DE-Flashing", value: 60, color: "#ffeb3b" },
  { label: "DAP Powder", value: 40, color: "#80cbc4" },
  { label: "Deep Gate", value: 140, color: "#4caf50" },
  { label: "Foreign Material", value: 60, color: "#9e9e9e" },
  { label: "Metal Chip Off Molded", value: 45, color: "#7986cb" },
  { label: "Short Contact", value: 45, color: "#03a9f4" },
  { label: "Short Mold", value: 84, color: "#8bc34a" },
  { label: "Vertical Flash", value: 56, color: "#ffccbc" },
  { label: "Machine Tool Mark Pocket", value: 24, color: "#e57373" },
];

const minValue = Math.min(...defectData.map((item) => item.value));
const maxValue = Math.max(...defectData.map((item) => item.value));

const DefectTable = () => {
  return (
    <table className="defect-table">
      <tbody>
        {defectData.map((item, index) => (
          <div style={{display:"flex",width:"100%"}}>
            <span
              className={
                item.value === minValue
                  ? "minvalue"
                  : item.value === maxValue
                  ? "maxvalue"
                  : ""
              }
            >
              {item.value === minValue
                ? "min"
                : item.value === maxValue
                ? "max"
                : ""}
            </span>
            <tr
              key={index}
              id={
                item.value === minValue
                  ? "min"
                  : item.value === maxValue
                  ? "max"
                  : ""
              }
            >
              <td>
                {" "}
                <span>{index + 1}</span>
              </td>
              <td>
                <div className="defect-row">
                  <span
                    className="dot"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.label}
                </div>
              </td>
              <td>{item.value}</td>
            </tr>
          </div>
        ))}
      </tbody>
    </table>
  );
};

export default DefectTable;
