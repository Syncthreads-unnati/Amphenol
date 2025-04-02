import image1 from "../assets/image/defect1.png";
import image2 from "../assets/image/defect2.jpg";   
import image3 from "../assets/image/image3.jpg";
import image4 from "../assets/image/image4.png";
import image5 from "../assets/image/image5.png";
import image6 from "../assets/image/image6.jpg";
import image7 from "../assets/image/image7.jpg";
import image8 from "../assets/image/image8.jpg";
import image9 from "../assets/image/image9.jpg";
import image10 from "../assets/image/image10.jpg";
import image11 from "../assets/image/image11.jpg";
import image12 from "../assets/image/image12.jpg";
export const images = [
    { src: image1, overlayText: "AI: 95%" },
    { src: image2, overlayText: "AI: 95%" },
    { src: image3, overlayText: "AI: 95%" },
    { src: image4, overlayText: "AI: 95%" },
    { src: image5, overlayText: "AI: 95%" },
    { src: image6, overlayText: "AI: 95%" },
    { src: image7, overlayText: "AI: 95%" },
    { src: image8, overlayText: "AI: 95%" },
    { src: image9, overlayText: "AI: 95%" },
    { src: image10, overlayText: "AI: 95%" },
    { src: image11, overlayText: "AI: 95%" },
    { src: image12, overlayText: "AI: 95%" },
  ]

export const connectorType = ["106535-00","106535-01","106535-02",];

 export const defects = [
    { name: "Contact Damage", status: true, probability: 95 },
    { name: "Contact Direction Change", status: false, probability: 0 },
    { name: "Contact Plating Peel off (Pocket)", status: true, probability: 94 },
    { name: "Contact Plating Peel off (Head)", status: true, probability: 88 },
    { name: "DE-flashing", status: false, probability: 0 },
    { name: "DAP Powder", status: true, probability: 98 },
    { name: "Deep Gate", status: false, probability: 0 },
    { name: "Foreign Material", status: true, probability: 90 },
    { name: "Flat Head Contact", status: false, probability: 0 },
    { name: "Metal Chip Off Molded", status: true, probability: 75 },
    { name: "Short Mold", status: true, probability: 70 },
    { name: "Vertical Flash", status: false, probability: 0 },
    { name: "Machine Tool Mark Pocket", status: true, probability: 80 },
  ];

 export const mockData = {
    number: 1400,
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
    defects: [
      {
        name: "Contact Plating Peel Off",
        count: 4,
        avgProbability: 94.75,
        instances: [
          { name: "Contact Plating Peel Off", probability: 98 },
          { name: "Contact Plating Peel Off", probability: 92 },
          { name: "Contact Plating Peel Off", probability: 95 },
          { name: "Contact Plating Peel Off", probability: 94 }
        ]
      },
      {
        name: "Metal Chipp Off Moulded",
        count: 2,
        avgProbability: 95,
        instances: [
          { name: "Metal Chipp Off Moulded", probability: 96 },
          { name: "Metal Chipp Off Moulded", probability: 94 }
        ]
      }
    ]
  };

export const toggleData = [
    { name: "pie chart" },
    { name: "graph" },
  ];
  
export const historytoggleData = [
  { name: "item" },
  { name: "list" },
  { name: "pie chart" },
  { name: "graph" },
]

// Table data
export const tableData = {
  headers: [
    "Batch Code",
    "Count",
    "CD",
    "CDC",
    "CPPO(P)",
    "CPPO(H)",
    "DF",
    "DP",
    "DG",
    "FM",
    "MCOM",
    "SC",
    "SM",
    "VF",
    "MTMP",
  ],
  // totals: [1400, 50, 50, 20, 120, 60, 40, 140, 60, 60, 45, 45, 84, 56, 56], // Example total values
  // minMax: { min: { column: 4, value: 20 }, max: { column: 7, value: 140 } }, // Min/Max highlights
  rows: Array.from({ length: 37 }, (_, i) => ({
    lot: 1,
    id: (i + 1).toString().padStart(4, "0"),
    values: Array.from({ length: 13 }, () => (Math.random() > 0.7 ? "●" : "")), // Randomized values
  })),
};
export const batchData = [
  {
    code: "Batch 1",
    count: 1400,
    connectorType: "106535-01",
    startDate: "18-03-2025",
    endDate: "18-03-2025",
    startTime: "9:00 am",
    endTime: "1:00 pm",
    data: [50, 20, 120, 140, 60, 40, 45, 45, 45, 84, 36, 56,56],
    details: ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010"],
  },
  {
    code: "Batch 2",
    count: 1400,
    connectorType: "106535-01",
    startDate: "18-03-2025",
    endDate: "18-03-2025",
    startTime: "9:00 am",
    endTime: "1:00 pm",
    data: [50,20, 120, 160, 60, 40, 45, 45, 45, 84, 36, 56, 56],
    details: ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010"],
  },
  {
    code: "Batch 3",
    count: 1400,
    connectorType: "106535-01",
    startDate: "18-03-2025",
    endDate: "18-03-2025",
    startTime: "9:00 am",
    endTime: "1:00 pm",
    data: [50, 80, 90,  116, 60, 40, 70, 45, 45, 84, 36, 56,56],
    details: ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010"],
  },
];
// Pie chart data
export const pieChartData = [
  { name: "1", value: 50 },
  { name: "2", value: 50 },
  { name: "3", value: 20 },
  { name: "4", value: 120 },
  { name: "5", value: 60 },
  { name: "6", value: 40 },
  { name: "7", value: 140 },
  { name: "8", value: 60 },
  { name: "9", value: 45 },
  { name: "10", value: 45 },
  { name: "11", value: 84 },
  { name: "12", value: 56 },
  { name: "13", value: 30 },
]

// Custom background colors
export const backgroundColor = [
  "#FFA322",
  "#7E7E7E",
  "#4085FF",
  "#FFEC61",
  "#F1589B",
  "#4EC8B0",
  "#96C923",
  "#DC3CA9",
  "#49C2FF",
  "#7341D5", 
  "#0CA70C",
  "#E74649",
  "#D89447",
];

export const lotData = [
  {
    id: 1,
    totalCount: 1400,
    defectCount: 826,
    okCount: 574,
    connectorType: "106535-01",
    startDate: "18-03-2025",
    endDate: "18-03-2025",
    startTime: "9:00 am",
    endTime: "1:00 pm",
  },
  {
    id: 2,
    totalCount: 1400,
    defectCount: 806,
    okCount: 594,
    connectorType: "106535-02",
    startDate: "18-03-2025",
    endDate: "18-03-2025",
    startTime: "1:30 pm",
    endTime: "5:30 pm",
  },
  {
    id: 3,
    totalCount: 1400,
    defectCount: 886,
    okCount: 514,
    connectorType: "106535-03",
    startDate: "18-03-2025",
    endDate: "18-03-2025",
    startTime: "6:00 pm",
    endTime: "9:00 pm",
  },
  {
    id: 4,
    totalCount: 1400,
    defectCount: 886,
    okCount: 514,
    connectorType: "106535-03",
    startDate: "18-03-2025",
    endDate: "18-03-2025",
    startTime: "6:00 pm",
    endTime: "9:00 pm",
  },
  {
    id: 5,
    totalCount: 1400,
    defectCount: 886,
    okCount: 514,
    connectorType: "106535-03",
    startDate: "18-03-2025",
    endDate: "18-03-2025",
    startTime: "6:00 pm",
    endTime: "9:00 pm",
  },
  {
    id: 6,
    totalCount: 1400,
    defectCount: 886,
    okCount: 514,
    connectorType: "106535-03",
    startDate: "18-03-2025",
    endDate: "18-03-2025",
    startTime: "6:00 pm",
    endTime: "9:00 pm",
  }
]

export const pielotData = [
    { id: 1, value: "0140" },
    { id: 2, value: "0160" },
    { id: 3, value: "0116" },
    { id: 4, value: "0116" },
  ];

export const pieCardData = [
    {
      id: 1,
      lotName: "LOT 1",
      totalCount: 1400,
      maxDefect: { type: "CPPO(P)", value: 140 },
      minDefect: { type: "DP", value: 20 },
      pieChartData: [
        { name: "Type 1", value: 245, color: "#f4b400" },
        { name: "Type 2", value: 210, color: "#0f9d58" },
        { name: "Type 3", value: 185, color: "#db4437" },
        { name: "Type 4", value: 160, color: "#4285f4" },
      ],
    },
    {
      id: 2,
      lotName: "LOT 2",
      totalCount: 1500,
      maxDefect: { type: "XYZ(Q)", value: 180 },
      minDefect: { type: "AB", value: 30 },
      pieChartData: [
        { name: "Type A", value: 300, color: "#ff6d01" },
        { name: "Type B", value: 200, color: "#ab47bc" },
        { name: "Type C", value: 250, color: "#00acc1" },
        { name: "Type D", value: 180, color: "#ff4081" },
      ],
    },
    {
      id: 3,
      lotName: "LOT 3",
      totalCount: 1600,
      maxDefect: { type: "DEF(T)", value: 220 },
      minDefect: { type: "GH", value: 40 },
      pieChartData: [
        { name: "Type X", value: 320, color: "#7e57c2" },
        { name: "Type Y", value: 280, color: "#78909c" },
        { name: "Type Z", value: 190, color: "#f4b400" },
        { name: "Type W", value: 210, color: "#0f9d58" },
      ],
    },
    {
      id: 3,
      lotName: "LOT 4",
      totalCount: 1600,
      maxDefect: { type: "DEF(T)", value: 220 },
      minDefect: { type: "GH", value: 40 },
      pieChartData: [
        { name: "Type X", value: 320, color: "#7e57c2" },
        { name: "Type Y", value: 280, color: "#78909c" },
        { name: "Type Z", value: 190, color: "#f4b400" },
        { name: "Type W", value: 210, color: "#0f9d58" },
      ],
    },
  ];
  
  //bar graph data 
  export const graphlabels = [
    "Contact Damage",
    "Contact Direction Change",
    "Contact Plating Peel Off (Pocket)",
    "Contact Plating Peel Off (Head)",
    "DE-Flashing",
    "DAP Powder",
    "Deep Gate",
    "Foreign Material",
    "Metal Chip Off Molded",
    "Short Contact",
    "Short Mold",
    "Vertical Flash",
    "Machine Tool Mark Pocket",
  ];

  export const graphvalues = [50, 50, 20, 120, 60, 40, 140, 60, 45, 45, 84, 55, 30];

  export const graphbackgroundColors = [
    "#FFA500", "#808080", "#4085FF", "#FFEC61", "#FF1493", "#4EC8B0",
    "#96C923", "#DC3CA9", "#49C2FF", "#7341D5", "#0CA70C", "#E74649", "#D89447"
  ];

  export const multiplegraphvalues = [
    
      {
        "graphId": "Lot 1 Graph",
        "data": [
          { "label": "Category A", "value": 45 },
          { "label": "Category B", "value": 30 },
          { "label": "Category C", "value": 55 },
          { "label": "Category D", "value": 20 },
          { "label": "Category E", "value": 40 },
          { "label": "Category E", "value": 40 },
          { "label": "Category E", "value": 40 },
          { "label": "Category E", "value": 40 },
          { "label": "Category E", "value": 40 },
          { "label": "Category E", "value": 40 },
          { "label": "Category E", "value": 40 },
          { "label": "Category E", "value": 40 },
        ]
      },
      {
        "graphId": "Lot 2 Graph",
        "data": [
          { "label": "Category A", "value": 50 },
          { "label": "Category A", "value": 50 },
          { "label": "Category B", "value": 35 },
          { "label": "Category B", "value": 35 },
          { "label": "Category C", "value": 60 },
          { "label": "Category C", "value": 60 },
          { "label": "Category D", "value": 25 },
          { "label": "Category D", "value": 25 },
          { "label": "Category D", "value": 125 },
          { "label": "Category D", "value": 25 },
          { "label": "Category D", "value": 25 },
          { "label": "Category E", "value": 45 },
          { "label": "Category E", "value": 45 }
        ]
      },
      {
        "graphId": "Lot 3 Graph",
        "data": [
          { "label": "Category A", "value": 55 },
          { "label": "Category A", "value": 45 },
          { "label": "Category A", "value": 115 },
          { "label": "Category B", "value": 40 },
          { "label": "Category A", "value": 55 },
          { "label": "Category D", "value": 30 },
          { "label": "Category C", "value": 65 },
          { "label": "Category B", "value": 40 },
          { "label": "Category D", "value": 130 },
          { "label": "Category E", "value": 50 },
          { "label": "Category E", "value": 50 },
          { "label": "Category E", "value": 50 },
          { "label": "Category E", "value": 50 }
        ]
      }
  ];

  export const cardData = [
    {
      id: 1,
      type: "Max",
      value: "0140",
      total: "1400",
      color: "red",
    },
    {
      id: 2,
      type: "Min",
      value: "0020",
      total: "1400",
      color: "green",
    },
  ];

  export const users = [
    { id: 1, name: "Naveen Sharma", type: "Admin", password: "**************" },
    { id: 2, name: "Niraj Shah", type: "Operator", password: "**************" },
    { id: 3, name: "Vijay Verma", type: "Operator", password: "**************" },
    { id: 4, name: "Abhijeet Patil", type: "Operator", password: "**************" },
    { id: 5, name: "Sunil Gavde", type: "Operator", password: "**************" },
  ];