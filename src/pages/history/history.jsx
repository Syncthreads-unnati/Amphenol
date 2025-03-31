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
import SummarygraphChart from "../../components/summarygraphchart/summarygraphchart";
import BargraphSummaryComponent from "../../components/bargraphComponent/bargraphSummaryComponent";
import ComponentDashboard from "../../components/componant-dashboard/component-dashboard";
const History = () => {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <>
      <div style={{ display: "flex" }}>
        <FilterForm />
        <HistoryDashboard />
      </div>
      {(activeTab === "list" || activeTab === "item") && <LotCardComponent />}
      <ToggleButton
        toggledata={historytoggleData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "list" && (
        <TableComponent />
      ) }
      { activeTab === "pie chart" && (
        <>
          <SummaryPieChart view={false} width={560} height={560}  outerRadius={240}/>
          <PieChartSummaryComponent />
        </>
      )} 
      { activeTab === "graph" && (
        <>
          <SummarygraphChart />
          <BargraphSummaryComponent />
        </>
      ) }
      { activeTab === "item" &&(
      <ComponentDashboard popup={false}/>
      )}
    </>
  );
};

export default History;
