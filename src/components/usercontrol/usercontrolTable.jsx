import {
  FaUserCog,
  FaDesktop,
  FaUserEdit,
  FaEye,
  FaTrashAlt,
} from "react-icons/fa";
import { users } from "../../constants/constants";
import "./usercontrolTable.scss"

const UserControlTable = ({ selectedTab,setSelectedTab }) => {
  return (
    <>
      {selectedTab === "User Control" && (
        <div className="user-list">
          <div className="header">
            <h2>
              <FaUserCog className="icon" /> User Control
            </h2>
            {/* Sub Tabs - List and Create */}
            <div className="sub-tab-buttons">
              <button
                className={selectedTab === "List" ? "active" : ""}
                onClick={() => setSelectedTab("List")}
              >
                List
              </button>
              <button
                className={selectedTab === "Create" ? "active" : ""}
                onClick={() => setSelectedTab("Create")}
              >
                + Create
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>User ID</th>
                <th>User Type</th>
                <th>Password</th>
                <th>Biometric</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.type}</td>
                  <td>{user.password}</td>
                  <td>
                    <FaUserCog className="biometric-icon" />
                  </td>
                  <td className="actions">
                    <FaUserEdit className="edit" />
                    <FaEye className="view" />
                    <FaTrashAlt className="delete" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="back-btn">Back</button>
        </div>
      )}
    </>
  );
};

export default UserControlTable;
