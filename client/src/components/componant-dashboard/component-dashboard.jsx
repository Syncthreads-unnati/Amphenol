import React, { useState } from "react";
import Header from "./defectsHeader";
import ImageGrid from "./defectsImage";
import DefectTable from "./defectsType";
import "./component-dashboard.scss";
import DefectPopup from "../defectPopup/defectPopup";
import {mockData} from "../../constants/constants";
import {defects} from "../../constants/constants";

const ComponentDashboard = ({popup}) => {
 const [isPopupOpen, setPopupOpen] = useState(false);
  const [componentImage, setComponentImage] = useState(null);

  return (
    <div className="dashboard-container">
     {!popup?  <Header /> : null} 
      <div className="content">
        <ImageGrid setPopupOpen={setPopupOpen} setComponentImage={setComponentImage}/>
        <DefectTable defects={defects} />
      </div>
      <DefectPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} componentData={mockData} componentImage={componentImage}/>
    </div>
  );
};

export default ComponentDashboard;
