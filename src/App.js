import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import Certification from "./components/certification/Certification";
import Chatbot from "./components/chatbot/Chatbot";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/footer/BackToTop";

function App() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Certification />
        <Work />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
