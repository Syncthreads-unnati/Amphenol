export const usersdata = [
    {
      id: 1,
      name: "admin",
      type: "Admin",
      password: "12345",
      showPassword: false,
    },
    {
      id: 2,
      name: "guest",
      type: "Guest",
      password: "guest123",
      showPassword: false,
    },
    { id: 3, name: "Naveen Sharma", type: "Admin", password: "12345", showPassword: false, },
    { id: 4, name: "Niraj Shah", type: "Operator", password: "12345", showPassword: false, },
    {
      id: 5,
      name: "Vijay Verma",
      type: "Operator",
      password: "12345",
      showPassword: false,
    },
    {
      id: 6,
      name: "Abhijeet Patil",
      type: "Operator",
      password: "12345",
      showPassword: false,
    },
    {
      id: 7,
      name: "Sunil Gavde",
      type: "Operator",
      password: "12345",
      showPassword: false,
    },
  ];

export const userTypes = ["Admin", "Operator", "Guest"];

export const healthParametersData = [
    { name: "Bowl Feeding Mechanism", progress: 85 },
    { name: "Robotic Arm", progress: 80 },
    { name: "Camera", progress: 75 },
    { name: "Lights", progress: 70 },
    { name: "Processing Circuitry", progress: 65 },
    { name: "Display", progress: 60 },
    { name: "Network", progress: 90 },
    { name: "Storage", progress: 45 }, // Special case
  ];

 export const healthParameters = [
    "Bowl Feeding Mechanism",
    "Robotic Arm",
    "Camera",
    "Lights",
    "Processing Circuitry",
    "Display",
    "Network",
    "Storage",
  ];

export const networkSettings = ["On", "Off"];
export const MaxDataSave = ["05 Days", "10 Days", "15 Days", "20 Days", "25 Days", "30 Days", "35 Days", "40 Days", "45 Days", "50 Days", "55 Days", "60 Days"];
export const SleepTime = ["30 sec", "1 min", "2 min", "3 min", "4 min", "5 min", "6 min", "7 min", "8 min", "9 min", "10 min"];