import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboardProfessional.css";
import Link from "../link/link.component";
import Modal from "../modal/modal.component";
import Button from "../button/button.component";
import InputField from "../input-field/input.component";
import { imgArr } from "../displayProfessionals/displayProfessionals.component";

const DashboardProfessional = () => {
  const [data, setData] = useState([]);
  const [profName, setProfName] = useState("");
  const [selectedOption, setSelectedOption] = useState("profile");
  const [users, setUsers] = useState([]);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [adminName, setAdminName] = useState("");
  const [prof, setProf] = useState({});
  const [profImage, setProfImage] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    dob: "",
    gender: "",
    country: "",
    city: "",
    interest: "",
    emergencyContact: "",
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get("http://localhost:3000/professional");
    const allProfessionals = response.data.data;
    setData(allProfessionals);
    const emailFromStorage = localStorage.getItem("email");
    if (emailFromStorage && emailFromStorage !== "") {
      const currentUserEmail = JSON.parse(emailFromStorage);
      const currentProf = allProfessionals.find(
        (prof) => prof.email === currentUserEmail
      );
      const currentProfIndex = allProfessionals.findIndex(
        (prof) => prof.email === currentUserEmail
      );
      setProf(currentProf);
      setProfName(currentProf.name);
      setProfImage(imgArr[currentProfIndex]);
    }
  };

  const handleOpenModal = (appointment) => {
    setSelectedAppointment(appointment);
    setSelectedUser(appointment);
    setModalOpen(true);
    console.log(appointment);
  };

  const handleEditProfile = () => {
    setModalOpen(true);
    setFormData(prof);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const fetchClients = async () => {
    const result = await axios.get("http://localhost:3000/admin/all-users");
    setUsers(result.data.data);
    setSelectedOption("clients");
  };

  const fetchProfessionals = async () => {
    const result = await axios.get("http://localhost:3000/professional");
    setData(result.data.data);
    setSelectedOption("profile");
  };
  const fetchEarnings = async () => {
    const result = await axios.get(
      "http://localhost:3000/admin/all-appointments"
    );
    setAppointments(result.data.data);
    setSelectedOption("earnings");
  };

  const deleteAppointment = async () => {
    if (!selectedAppointment) {
      console.error("selectedAppointment is not defined");
      return;
    }
    // Delete the selected appointment
    await axios.delete(
      `http://localhost:3000/admin/appointment/${selectedAppointment.id}`
    );

    // Fetch the updated list of appointments and update the state
    const result = await axios.get(
      "http://localhost:3000/admin/all-appointments"
    );
    setAppointments(result.data.data);
  };
  const deleteUser = async () => {
    if (!selectedUser) {
      console.error("selected user is not defined");
      return;
    }
    // Delete the selected appointment
    await axios.delete(`http://localhost:3000/admin/users/${selectedUser.id}`);

    // Fetch the updated list of appointments and update the state
    const result = await axios.get("http://localhost:3000/admin/all-users");
    setUsers(result.data.data);
  };

  // useEffect(() => {
  //   const emailFromStorage = localStorage.getItem("email");
  //   const loggedInUserEmail = JSON.parse(emailFromStorage);
  //   if (loggedInUserEmail) {
  //     const currentAdmin = admins.find(
  //       (admin) => admin.email === loggedInUserEmail
  //     );
  //     if (currentAdmin) {
  //       setAdminName(currentAdmin.name);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const handleVerifyProfessional = (professional) => {
    setSelectedProfessional(professional);
  };

  const renderDashboardContent = () => {
    if (selectedOption === "profile") {
      return (
        <section className="appointments-container">
          <div className="profile-content">
            <h1>Hi {profName}</h1>
            <p>Welcome to the family. Sending you lots of love 😊</p>
            <img src={profImage} alt="Professional" className="profImage" />
            <p>Name: {profName}</p>
            <p>Email address: {prof.email}</p>
            <p>Availability: {prof.availability}</p>
            <p>Rate: {prof.rate}</p>
            <p>Phone number: {prof.phoneNumber}</p>
            <p>LinkedIn: {prof.linkedin}</p>
            <p>Status: {prof.status}</p>
            <Button btnText="Edit Profile" onClick={handleEditProfile} />
          </div>
          {modalOpen && (
            <Modal
              className="user-modal"
              onClick={handleCloseModal}
              modalContent={
                <div>
                  <InputField
                    name="username"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="profile-update"
                  />
                  <InputField
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="profile-update"
                  />
                  <InputField
                    name="dob"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="profile-update"
                  />
                  <InputField
                    name="gender"
                    value={formData.rate}
                    onChange={handleInputChange}
                    className="profile-update"
                  />
                  <InputField
                    name="country"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="profile-update"
                  />
                  <InputField
                    name="city"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="profile-update"
                  />
                </div>
              }
            />
          )}
        </section>
      );
    } else if (selectedOption === "clients") {
      return (
        <div className="appointments-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Appointment Type</th>
                <th>Session Type</th>
                <th>Session Date</th>
                <th>Session Frequency</th>
                <th>Additional Info</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td
                    id="name-cell"
                    onClick={() => handleOpenModal(appointment)}
                  >
                    {appointment.fullName}
                  </td>
                  <td>{appointment.email}</td>
                  <td>{appointment.serviceType}</td>
                  <td>{appointment.sessionType}</td>
                  <td>
                    {new Date(appointment.sessionDate).toLocaleDateString()}
                  </td>
                  <td>{appointment.sessionFrequency} </td>
                  <td>{appointment.additionalInfo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {modalOpen && (
            <Modal
              onClick={handleCloseModal}
              modalContent={
                <Button
                  btnText="Delete"
                  className="appointment-modal"
                  onClick={deleteAppointment}
                />
              }
            />
          )}
        </div>
      );
    } else if (selectedOption === "earnings") {
      return (
        <div className="appointments-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Country</th>
                <th>City</th>
                <th>Interests</th>
                <th>Emergency Contact</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td id="name-cell" onClick={() => handleOpenModal(user)}>
                    {user.username}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{new Date(user.dob).toLocaleDateString()}</td>
                  <td>{user.country} </td>
                  <td>{user.city} </td>
                  <td>{user.interest}</td>
                  <td>{user.emergencyContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {modalOpen && (
            <Modal
              onClick={handleCloseModal}
              modalContent={
                <Button
                  btnText="Delete"
                  className="appointment-modal"
                  onClick={deleteUser}
                />
              }
            />
          )}
        </div>
      );
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dash">
        <h1> Hello {profName}, welcome to your dashboard</h1>
      </div>
      <section className="display">
        <nav className="professionals-links">
          <Link
            href="#"
            linkText="PROFILE"
            className={`admin-link${
              selectedOption === "profile" ? " active" : ""
            }`}
            onClick={fetchProfessionals}
          />
          <Link
            href="#"
            linkText="CLIENTS"
            className={`admin-link${
              selectedOption === "clients" ? " active" : ""
            }`}
            onClick={fetchClients}
          />
          <Link
            href="#"
            linkText="EARNINGS"
            className={`admin-link${
              selectedOption === "earnings" ? " active" : ""
            }`}
            onClick={fetchEarnings}
          />
        </nav>
        {renderDashboardContent()}
      </section>
    </div>
  );
};

export default DashboardProfessional;
