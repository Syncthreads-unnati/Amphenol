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
    "Lot",
    "ID",
    "Contact Damage",
    "Contact Direction Change",
    "Contact Plating Peel off (Pocket)",
    "Contact Plating Peel off (Head)",
    "DE Flashing",
    "DAP Powder",
    "Deep Gate",
    "Foreign Material",
    "Metal Chip Off Molded",
    "Short Contact",
    "Short Mold",
    "Vertical Flash",
    "Machine Tool Mark Pocket",
  ],
  totals: [1400, 50, 50, 20, 120, 60, 40, 140, 60, 60, 45, 45, 84, 56, 56], // Example total values
  minMax: { min: { column: 4, value: 20 }, max: { column: 7, value: 140 } }, // Min/Max highlights
  rows: Array.from({ length: 37 }, (_, i) => ({
    lot: 1,
    id: (i + 1).toString().padStart(4, "0"),
    values: Array.from({ length: 13 }, () => (Math.random() > 0.7 ? "●" : "")), // Randomized values
  })),
};
