import { useState } from "react";
import FilterForm from "../../components/filterForm/filterForm";
import HistoryDashboard from "../../components/history-dashboard/historyDashboard";
import ToggleButton from "../../components/toggleButton/toggleButton";
import { historytoggleData } from "../../constants/constants";
import TableComponent from "../../components/tableComponent/tableComponent";
import LotCardComponent from "../../components/lotCardComponent/lotCardComponent";
import "../history/history.scss";
import SummaryPieChart from "../../components/summarypiechart/summarypiechart";
import PieChartSummaryComponent from "../../components/pieChartComponent/piechartSummaryComponent";
const History = () => {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <>
      <div style={{ display: "flex" }}>
        <FilterForm />
        <HistoryDashboard />
      </div>
      {activeTab === "list" && <LotCardComponent />}
      <ToggleButton
        toggledata={historytoggleData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "list" ? (
        <TableComponent />
      ) : activeTab === "pie chart" ? (
        <>
          <SummaryPieChart />
          <PieChartSummaryComponent />
        </>
      ) : (
        <LotCardComponent />
      )}
    </>
  );
};

export default History;
