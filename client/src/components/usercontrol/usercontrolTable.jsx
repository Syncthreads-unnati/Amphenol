import { FaUserCog, FaUserEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { usersdata } from "../../constants/adminconstant";
import list from "../../assets/image/list.png";
import "./usercontrolTable.scss";
import UserCreate from "./userCreate";
import { useNavigate } from "react-router";

const UserControlTable = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("List");
  const [users, setUsers] = useState(usersdata);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditedUser({ ...user });
  };

  const handleSave = () => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === editingUserId ? { ...editedUser, showPassword: false } : u
      )
    );
    setEditingUserId(null);
    setEditedUser({});
  };

  const handleDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userId));
  };

  const togglePasswordVisibility = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === userId ? { ...u, showPassword: !u.showPassword } : u
      )
    );
  };

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <>
      <div className="user-list">
        <div className="user-list__header">
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
                  <td>
                    {editingUserId === user.id ? (
                      <input
                        value={editedUser.name}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, name: e.target.value })
                        }
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td>
                    {editingUserId === user.id ? (
                      <input
                        value={editedUser.type}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, type: e.target.value })
                        }
                      />
                    ) : (
                      user.type
                    )}
                  </td>
                  <td>
                    {editingUserId === user.id ? (
                      <input
                        value={editedUser.password}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            password: e.target.value,
                          })
                        }
                      />
                    ) : user.showPassword ? (
                      user.password
                    ) : (
                      "*".repeat(user.password.length)
                    )}
                  </td>
                  <td>
                    <FaUserCog className="biometric-icon" />
                  </td>
                  <td className="actions">
                    {editingUserId === user.id ? (
                      <button onClick={handleSave}>Save</button>
                    ) : (
                      <>
                        <FaUserEdit
                          className="edit"
                          onClick={() => handleEdit(user)}
                        />
                        <FaEye
                          className="view"
                          onClick={() => togglePasswordVisibility(user.id)}
                        />
                        <FaTrashAlt
                          className="delete"
                          onClick={() => handleDelete(user.id)}
                        />
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {selectedTab === "Create" && <UserCreate />}
      </div>
      <button className="back-btn" onClick={()=>handleBack()} >Back</button>
    </>
  );
};

export default UserControlTable;
