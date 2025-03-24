import React, { useState } from "react";
import "./tableComponent.scss";
import { batchData, tableData } from "../../constants/constants";
import HistoryPopup from "../history-popup/historyPopup";

const TableComponent = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [expandedBatches, setExpandedBatches] = useState({});

  const toggleBatch = (batchCode) => {
    setExpandedBatches((prev) => ({
      ...prev,
      [batchCode]: !prev[batchCode],
    }));
  };

  // Batch size configuration
  const batchSize = 10;
  const batches =
    tableData?.rows?.reduce((acc, row, index) => {
      const batchNumber = Math.floor(index / batchSize) + 1;
      if (!acc[batchNumber]) acc[batchNumber] = [];
      acc[batchNumber].push(row);
      return acc;
    }, {}) || {};

  return (
    <div className="table-container">
      <table>
        {/* Table Header */}
        <thead>
          <tr>
            {tableData?.headers?.map((header, index) => {
              // const isMin = tableData?.minMax?.min?.column === index;
              // const isMax = tableData?.minMax?.max?.column === index;

              return <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {/* BatchData Mapping */}
          {batchData?.map((batch) => (
            <React.Fragment key={batch.code}>
              <tr
                className="batch-header"
                onClick={() => toggleBatch(batch.code)}
              >
                <td>{batch.code}</td>
                <td>{batch.count}</td>
                {batch?.data?.map((value, index) => {
                  // Find the max value in the current batch
                  const batchMax = Math.max(...batch.data);
                  const batchMin = Math.min(...batch.data);
                  // Check if the current value is the maximum in the batch
                  const isMax = value === batchMax;
                  const isMin = value === batchMin;
                  return (
                    <td key={index}>
                      <div className={isMax ? "maxtag" : isMin ? "mintag" : ""}>
                        <span className={isMax ? "highlight-max" : isMin ? "highlight-min" : ""}>
                          {isMax && "Max"}
                          {isMin && "Min"}
                        </span>
                        <span>{value}</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            </React.Fragment>
          ))}

          {/* Table Data Mapping */}
          {Object.entries(batches).map(([batchNumber, rows]) => (
            <React.Fragment key={batchNumber}>
              {/* Expandable Batch Header */}
              <tr
                className="batch-header"
                onClick={() => toggleBatch(batchNumber)}
              >
                <td
                  colSpan={tableData?.headers?.length}
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                >
                  <span>BATCH {batchNumber}</span>
                  <span>{expandedBatches[batchNumber] ? "▼" : "►"}</span>
                </td>
              </tr>

              {/* Expandable Batch Rows */}
              {expandedBatches[batchNumber] &&
                rows.map((row) => (
                  <tr key={row.id}>
                    <td>{batchNumber}</td>
                    <td
                      className="id-cell"
                      onClick={() => setPopupOpen(!isPopupOpen)}
                      style={{ cursor: "pointer" }}
                    >
                      {row.id}
                    </td>
                    {row.values.map((value, cellIndex) => {
                      // const isMin = tableData?.minMax?.min?.column === cellIndex + 2;
                      // const isMax = tableData?.minMax?.max?.column === cellIndex + 2;

                      return (
                        <td key={cellIndex} className="dot">
                          {value || "●"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* History Popup */}
      {isPopupOpen && (
        <HistoryPopup
          isOpen={isPopupOpen}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default TableComponent;
