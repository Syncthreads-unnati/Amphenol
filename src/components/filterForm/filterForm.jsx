import React, { useState } from "react";
import "./filterForm.scss";

const FilterForm = () => {
  const [filters, setFilters] = useState({
    lotNumber: "",
    connectorType: "",
    defectType: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    defective: false,
    nonDefective: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters Applied:", filters);
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Lot Number</label>
        <input
          type="text"
          name="lotNumber"
          placeholder="Enter Lot Number"
          value={filters.lotNumber}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Connector Type</label>
        <select name="connectorType" value={filters.connectorType} onChange={handleChange}>
          <option value="">Connector Type</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
        </select>
      </div>

      <div className="form-group">
        <label>Defect Type</label>
        <select name="defectType" value={filters.defectType} onChange={handleChange}>
          <option value="">Defect Type</option>
          <option value="defect1">Defect 1</option>
          <option value="defect2">Defect 2</option>
        </select>
      </div>

      <div className="form-group">
        <label>Start Date</label>
        <input type="date" name="startDate" value={filters.startDate} onChange={handleChange} />
      </div>

      <div className="form-group start-time">
        <label>Start Time</label>
        <input type="time" name="startTime" value={filters.startTime} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>End Date</label>
        <input type="date" name="endDate" value={filters.endDate} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>End Time</label>
        <input type="time" name="endTime" value={filters.endTime} onChange={handleChange} />
      </div>

      <div className="checkbox-group">
        <label>
          <input type="checkbox" name="defective" checked={filters.defective} onChange={handleChange} />
          DEFECTIVE
        </label>
        <label>
          <input type="checkbox" name="nonDefective" checked={filters.nonDefective} onChange={handleChange} />
          NON DEFECTIVE
        </label>
      </div>

      <button type="submit" className="apply-btn">Apply Filters</button>
    </form>
  );
};

export default FilterForm;
