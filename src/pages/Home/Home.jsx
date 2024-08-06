/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner1 from "../../assets/Banner1.webp";
import Banner2 from "../../assets/Banner2.webp";
import "../../App.css";
import ImportantDates from "../../components/ImportantDates/ImportantDates";
import RegistrationTable from "../../components/RegistrationInfo/RegistrationTable";
import ChiefPatron from "../../components/OrganizingCommittee/ChiefPatron";
import Patron from "../../components/OrganizingCommittee/Patron";

const Home = () => {
  const comittee = {
    chiefPatron: [
      {
        name: "Prof. (Dr.) Mukti Kanta Mishra",
        title: "Founder President",
        organization:
          "Centurion University of Technology and Management, India",
        image: "path/to/image1.jpg",
      },
      {
        name: "Prof. D. Narsimha Rao",
        title: "Founder Vice-President",
        organization:
          "Centurion University of Technology and Management, India",
        image: "path/to/image2.jpg",
      },
    ],
    patron: [
      {
        name: "Prof. (Dr.) Supriya Pattanayak",
        title: "Vice-Chancellor",
        organization:
          "Centurion University of Technology and Management, Odisha, India",
        image: "path/to/image3.jpg",
      },
    ],
    financeChair: [
      {
        name: "Prof. (Dr.) Sujata Chakravarty",
        title: "Dean, SoET, Department of Computer Science & Engineering",
        organization:
          "Centurion University of Technology and Management, Bhubaneswar, India",
        image: "path/to/image4.jpg",
      },
      {
        name: "Dr. Rajendra Khadanga",
        title: "Department of Electrical Engineering",
        organization:
          "Centurion University of Technology and Management, Bhubaneswar, India",
        image: "path/to/image5.jpg",
      },
      {
        name: "Dr. Sudhansu Samal",
        title: "Department of Electrical Engineering",
        organization:
          "Centurion University of Technology and Management, Bhubaneswar, India",
        image: "path/to/image6.jpg",
      },
    ],
    organizingChair: [
      {
        name: "Prof. (Dr.) Sujata Chakravarty",
        title: "Dean, SoET, Department of Computer Science & Engineering",
        organization:
          "Centurion University of Technology and Management, Bhubaneswar, India",
        image: "path/to/image7.jpg",
      },
      {
        name: "Mr. Saneev Kumar Das",
        title: "Department of Computer Science & Engineering",
        organization:
          "Centurion University of Technology and Management, Bhubaneswar, India",
        image: "path/to/image8.jpg",
      },
      {
        name: "Mr. Sujit Bebortta",
        title: "Department of Computer Science",
        organization: "Ravenshaw University, Cuttack, India",
        image: "path/to/image9.jpg",
      },
    ],
  };

  const passage1 = `The “International Conference on Responsible, Generative and Explainable AI (ResGenXAI-2024)” is a pioneering event that brings together researchers, practitioners, and enthusiasts to discuss the latest advancements in artificial intelligence. Held from July 15-17, 2024, in New York City, NY, this conference is dedicated to promoting ethical, transparent, and innovative AI solutions. Participants will explore topics such as ethical AI frameworks, explainable AI methods, fairness in AI, privacy-preserving techniques, AI safety, and the latest advancements in generative AI. Join us to engage in multidisciplinary discussions, gain insights from leading experts, and contribute to the future of responsible AI development.`;

  const passage2 = `Welcome to the “International Conference on Responsible, Generative and Explainable AI (ResGenXAI-2024),” a premier forum for exploring the forefront of artificial intelligence research. From July 15-17, 2024, in the vibrant city of New York, this conference will feature high-quality, peer-reviewed papers published in IEEE Xplore, covering crucial areas such as ethical AI, explainability, fairness, privacy, AI safety, and generative AI. Attendees will have the opportunity to delve into interdisciplinary perspectives, network with industry leaders, and discover innovative solutions that address ethical, social, and technical challenges in AI.`;

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs
        tagline="Shaping the Future of AI: Ethical, Transparent, and Innovative Solutions"
        passage={passage1}
        reverse={true}
        img={Banner1}
      />
      <AboutUs
        tagline="Exploring the Frontiers of AI: Responsibility, Innovation, and Collaboration"
        passage={passage2}
        img={Banner2}
      />
      <ImportantDates />
      <RegistrationTable />
      <ChiefPatron />
      <Patron/>
      <Footer />
    </div>
  );
};

export default Home;
