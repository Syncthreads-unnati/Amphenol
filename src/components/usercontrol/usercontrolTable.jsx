import {
  FaUserCog,
  FaUserEdit,
  FaEye,
  FaTrashAlt,
} from "react-icons/fa";
import { useState } from "react";
import { users } from "../../constants/constants";
import list from "../../assets/image/list.png";
import "./usercontrolTable.scss";
import UserCreate from "./userCreate";

const UserControlTable = () => {
  const [selectedTab, setSelectedTab] = useState("List");

  return (
    <>
      <div className="user-list">
        <div className="header">
          <h3>
            <FaUserCog className="icon" /> User Control
          </h3>
          {/* Sub Tabs - List and Create */}
          <div className="sub-tab-buttons">
            <button
              className={selectedTab === "List" ? "active" : ""}
              onClick={() => setSelectedTab("List")}
            >
              <span>
                <img src={list} alt="list" />
              </span>{" "}
              <span>List</span>
            </button>
            <button
              className={selectedTab === "Create" ? "active" : ""}
              onClick={() => setSelectedTab("Create")}
            >
              + Create
            </button>
          </div>
        </div>
        {selectedTab === "List" && (
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
        )}
        {selectedTab === "Create" && (
          <UserCreate/>
        )}
      </div>
      <button className="back-btn">Back</button>
    </>
  );
};

export default UserControlTable;
