import React, { useState } from 'react';
import './App.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={onClick}>
      <span>{title}</span>
      <span>{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && <div className="accordion-content">{content}</div>}
  </div>
);

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const items = [
  {
    title: ' Wash Trading Case Study for ERC20 Token',
    content: `Conducted a detailed analysis of NEAR token transactions using data from Etherscan. Detected wash trading patterns using statistical tests (Mann-Whitney U Test) and anomaly detection models (Isolation Forest, LOF, One-Class SVM). Applied ARIMA and LSTM for time-series forecasting.`,
  },
  {
    title: ' Surface Waste Detection System using YOLOv5',
    content: `Built a custom waste detection model using YOLOv5 and OpenCV. Collected and labeled a dataset of floating waste, trained a deep learning model, and integrated it with a live camera feed for deployment on an unmanned surface vehicle (USV).`,
  },
  {
    title: ' PDF Merger Web Application',
    content: `Created a Flask-based web application to merge multiple PDF files. Implemented a drag-and-drop interface, file preview, and renaming functionality. Ensured responsiveness for mobile and desktop browsers.`,
  },
  {
    title: ' QR Code Generator',
    content: `Developed a full-stack QR code generation app using HTML, CSS, JavaScript (frontend), and Flask (backend). Hosted on Vercel and Render. Users can input text or URLs and download generated QR codes.`,
  },
  {
    title: ' Background Remover Tool',
    content: `Designed a web tool using Python and image processing techniques to remove backgrounds from images. Built with Flask and JavaScript, it allows users to upload images and download processed results with clean transparency.`,
  },
];



  return (
    <div className="accordion-container">
      <h1 className="accordion-title">Few of My Projects</h1>
      <div className="accordion-wrapper">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={activeIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
