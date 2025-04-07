import { MaxDataSave, networkSettings, SleepTime } from "../../constants/adminconstant";

const NetworkSetting = ({ headingLabel, label, value, onChange }) => {
  return (
    <div className="system-control">
      <div className="system-control__header">
        <h2 className="system-control__title">{headingLabel}</h2>
      </div>
      <div className="network-settings__form-group">
        <label className="network-settings__label">{label}</label>
        <select
          className="network-settings__select"
          value={value}
          onChange={onChange}
        >
          {label === "Network Connectivity" ? (
            networkSettings.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))
          ) : label === "Maximum Data Save" ? (
            MaxDataSave.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
          ) : label === "Sleep Timer" ? (
            SleepTime.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
          ) : null}
        </select>
      </div>
    </div>
  );
};

export default NetworkSetting;
