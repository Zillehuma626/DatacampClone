import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import services from './servicesData';
import './serviceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const service = services.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  const toggleSubservice = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  if (!service) return <p>Service not found.</p>;

  return (
    <div className="service-detail-container">
      <div
        className="header-image"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <h1>{service.title}</h1>
      </div>

      <div className="service-content">
  <button className="back-button" onClick={() => navigate('/services')}>
    ← Back to Services
  </button>

  <div className="service-layout">
    {/* Left: Static image */}
    <div className="service-image-column">
     <img src={service.sideImage || '/default-side-image.jpg'} alt={`${service.title} side visual`}/>
    </div>

    {/* Right: Subservices Accordion */}
    <div className="service-accordion-column">
      <div className="accordion-container">
        {service.subservices.map((sub, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleSubservice(index)}>
              <h3>{sub.name}</h3>
              <span className="accordion-toggle">{expandedIndex === index ? '−' : '+'}</span>
            </div>
            {expandedIndex === index && (
              <div className="accordion-body">
                <p>{sub.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ServiceDetail;

