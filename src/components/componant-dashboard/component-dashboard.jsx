import React from "react";
import Header from "./defectsHeader";
import ImageGrid from "./defectsImage";
import DefectTable from "./defectsType";
import "./component-dashboard.scss";

const ComponentDashboard = () => {
  const images = Array(12).fill({ src: "https://via.placeholder.com/100", overlayText: "AI: 95%" });

  const defects = [
    { name: "Contact Damage", status: true, probability: 95 },
    { name: "Contact Direction Change", status: false, probability: 0 },
    { name: "Contact Plating Peel off (Pocket)", status: true, probability: 94 },
    { name: "Contact Plating Peel off (Head)", status: true, probability: 88 },
    { name: "DAP Powder", status: true, probability: 98 },
    { name: "Foreign Material", status: true, probability: 90 },
    { name: "Metal Chip Off Molded", status: true, probability: 75 },
    { name: "Short Mold", status: true, probability: 70 },
    { name: "Machine Tool Mark Pocket", status: true, probability: 80 },
  ];

  return (
    <div className="dashboard-container">
      <Header />
      <div className="content">
        <ImageGrid images={images} />
        <DefectTable defects={defects} />
      </div>
    </div>
  );
};

export default ComponentDashboard;
