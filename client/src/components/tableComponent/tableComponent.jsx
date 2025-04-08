import React, { useState } from "react";
import "./tableComponent.scss";
import { batchData, tableData } from "../../constants/constants";
import HistoryPopup from "../history-popup/historyPopup";

const TableComponent = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Ensure all batches are expanded by default
  const [expandedBatches, setExpandedBatches] = useState(() => {
    const initialState = {};

    // Ensure all batches from batchData are expanded
    batchData.forEach((batch) => {
      initialState[batch.code] = true;
    });

    // Ensure all batches from tableData are expanded
    if (tableData?.rows) {
      const batchSize = 10;
      tableData.rows.forEach((_, index) => {
        const batchNumber = Math.floor(index / batchSize) + 1;
        initialState[batchNumber] = true;
      });
    }

    return initialState;
  });

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
            {tableData?.headers?.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
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
                  // Find the max and min value in the current batch
                  const batchMax = Math.max(...batch.data);
                  const batchMin = Math.min(...batch.data);
                  const isMax = value === batchMax;
                  const isMin = value === batchMin;
                  return (
                    <td key={index}>
                      <div className={isMax ? "maxtag" : isMin ? "mintag" : ""}>
                        <span
                          className={
                            isMax
                              ? "highlight-max"
                              : isMin
                              ? "highlight-min"
                              : ""
                          }
                        >
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
                <td colSpan={tableData?.headers?.length} className="__batch">
                  <div className="__batch-container">
                    <p>BATCH {batchNumber}</p>
                    <p>{expandedBatches[batchNumber] ? "▼" : "►"}</p>
                  </div>
                </td>
              </tr>

              {/* Expandable Batch Rows */}
              {expandedBatches[batchNumber] && (
                <tr>
                  <td colSpan={tableData?.headers?.length}>
                    <div className={`batch-content ${expandedBatches[batchNumber] ? "expanded" : "collapsed"}`}>
                      {rows.map((row) => (
                        <tr key={row.id}>
                          <td>{batchNumber}</td>
                          <td className="id-cell" onClick={() => setPopupOpen(!isPopupOpen)} style={{ cursor: "pointer" }}>
                            {row.id}
                          </td>
                          {row.values.map((value, cellIndex) => (
                            <td key={cellIndex} className="dot">{value || ""}</td>
                          ))}
                        </tr>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
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
