import ComponentDashboard from "../../components/componant-dashboard/component-dashboard";
import Defects from "../../components/defects/defects";
import InputSection from "../../components/inputSection/inputSection";

const Dashboard = () => {
  return (
    <>
      <InputSection />
      <Defects />
      <ComponentDashboard popup={false} />
    </>
  );
};
export default Dashboard;
