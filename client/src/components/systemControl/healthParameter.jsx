import { useState } from "react";
import {healthParameters, healthParametersData } from "../../constants/adminconstant";
import "./healthParameter.scss";

const HealthParameters = ()=>{

    const [running, setRunning] = useState(false);
    const [progress, setProgress] = useState(Array(healthParameters.length).fill(0));
    const [status, setStatus] = useState(Array(healthParameters.length).fill("No Data"));
    // const [isRunning, setIsRunning] = useState(false);
    const getStatus = (progress, name) => {
        if (progress >= 90) return "Connected";
        if (progress >= 70) return "Good Condition";
        if (progress >= 50) return "Average Condition";
        if( progress >= 30) return "Below Average Condition";
        return "Poor Condition";
      };

      const handleRun = () => {
        setRunning(true);
        const interval = setInterval(() => {
          setProgress((prevProgress) => {
            const newProgress = prevProgress.map((p, index) => {
              if (p < 100) {
                return p + 10;
              }
              return p;
            });
    
            
            // Stop interval when all progress reaches 100
            if (newProgress.every((p) => p >= 100)) {
                // setRunning(false);
              clearInterval(interval);
            }
    
            return newProgress;
          });
        }, 500); // Update every 0.5 second
      };
    return (
       <>
       <div className="system-control">
       <div className="system-control__header">
       <h2 className="system-control__title">Health Parameter</h2>
       <button className="system-control__run-button"
       onClick={handleRun} disabled={running}
       >{"Run"}</button>
     </div>
        <table className="table">
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Health Parameter</th>
              <th>Progress Bar</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {healthParameters.map((param, index) => (
              <tr key={index}>
                <td>1</td>
                <td>{param}</td>
                <td>
                  <div className="progressBar">
                  <div
                      className="progress"
                      style={{ width: `${progress[index]}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">
                {running ? getStatus(progress[index], param) : "No Data"}
              </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
       </> 
    )
}
export default HealthParameters;