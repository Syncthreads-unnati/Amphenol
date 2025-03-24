import { useState } from "react";
import FilterForm from "../../components/filterForm/filterForm";
import HistoryDashboard from "../../components/history-dashboard/historyDashboard";
import ToggleButton from "../../components/toggleButton/toggleButton";
import { historytoggleData } from "../../constants/constants";
import TableComponent from "../../components/tableComponent/tableComponent";
const History = () => {
  const [activeTab, setActiveTab] = useState("list");
  return (
    <>
      <div style={{ display: "flex" }}>
        <FilterForm />
        <HistoryDashboard />
      </div>

      <ToggleButton
        toggledata={historytoggleData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TableComponent />
    </>
  );
};

export default History;
