import "./about-us.css";
import workout from "../../images/blackcoupleexercising.jpeg";
import therapy from "../../images/Caerlyle-Counsel-768x512.jpeg";
import group from "../../images/gettyimages-1308950633-612x612.jpeg";
import remote from "../../images/gettyimages-1346651717-612x612.jpeg";
import remoteWorkout from "../../images/remote_gym.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";

const AboutUs = () => {
  const [name, setName] = useState("FRIEND");

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/all-users");
      const allUsers = response.data.data;
      const emailFromStorage = localStorage.getItem("email");
      if (emailFromStorage && emailFromStorage !== "") {
        const currentUserEmail = JSON.parse(emailFromStorage);
        const currentUser = allUsers.find(
          (user: any) => user.email === currentUserEmail
        );
        if (currentUser) {
          setName(currentUser.username);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="about-us">
      <article className="welcome">
        <h3>HELLO {`${name}`}</h3>
        <p>
          Welcome to <strong>FitMind</strong>, our community focused on mental health and fitness. We strongly believe that caring for both your mind and body is crucial for a happy and satisfying life. Our goal is to provide support along your journey towards enhanced well-being and provide a safe environment to connect with like-minded individuals who share your aspirations. Together, we can strive for mental clarity, physical strength, and a harmonious lifestyle. We're delighted to have you here!
        </p>
      </article>
      <aside>
        <div>
          <img src={therapy} alt="therapy session" className="service" />
          <p className="mental-health">
          Our team of highly trained mental health professionals is ready to lend an empathetic ear and provide support as you express yourself. We understand the importance of being heard and are here to actively listen to your thoughts, feelings, and concerns. Whether you need guidance, a sounding board, or someone to confide in, our dedicated professionals are here to support you on your mental health journey.
          </p>
          <a className="link-up" href="registrationuser">
            Speak to a therapist
          </a>
        </div>
        <div>
          <img src={workout} alt="man working out" className="service" />
          <p className="fitness">
          Our enthusiastic team of fitness experts is eager and ready to train alongside you. They are passionate about helping you achieve your fitness goals and are excited to share their knowledge and expertise. Whether you're just starting your fitness journey or looking to take it to the next level, our dedicated trainers will provide guidance, motivation, and customized workouts to keep you inspired and challenged. Get ready to sweat, push your limits, and achieve your fitness aspirations with our fired-up team by your side. Let's do this together!
          </p>
          <a className="link-up" href="registrationuser">
            Get in touch with a trainer
          </a>
        </div>
        <div>
          <img src={group} alt="man working out" className="service" />
          <p className="fitness">
            Take advantage of our group therapy sessions to connect and grow
          </p>
          <a className="link-up" href="registrationuser">
            Join Group Therapy
          </a>
        </div>
        <div>
          <img src={remote} alt="man working out" className="service" />
          <p className="fitness">
            Virtual therapy sessions available for your convenience
          </p>
          <a className="link-up" href="registrationuser">
            Book a session
          </a>
        </div>
        <div>
          <img src={remoteWorkout} alt="man working out" className="service" />
          <p className="fitness">
            Virtual workout sessions, with routines tailored to suit your needs.
          </p>
          <a className="link-up" href="registrationuser">
            Enroll now
          </a>
        </div>
      </aside>
    </div>
  );
};
export default AboutUs;
