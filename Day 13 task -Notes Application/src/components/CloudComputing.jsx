// src/CloudComputing.jsx
import React from 'react';
import './style.css'

const CloudComputing = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notes of Cloud Computing</h1>
      <br></br>
      <h2 className="text-2xl font-bold mb-4">Unit 1: Introduction to Cloud Computing</h2>
      <p>
        Cloud computing refers to the delivery of computing services, including servers, storage,
        databases, networking, analytics, software, and intelligence, over the internet, to offer
        faster innovation, flexible resources, and economies of scale.
      </p>

      <h2 className="text-2xl font-bold my-4">Unit 2: Cloud Service Models</h2>
      <h3 className="text-xl font-bold mb-2">Infrastructure as a Service (IaaS)</h3>
      <p>
        Provides virtualized computing resources over the internet. Users can rent virtual machines,
        storage, and other fundamental computing resources.
      </p>

      <h3 className="text-xl font-bold mb-2">Platform as a Service (PaaS)</h3>
      <p>
        Delivers a platform that includes operating systems, development frameworks, databases, and
        other tools needed for application development. Users can focus on building and deploying
        applications without managing the underlying infrastructure.
      </p>

      <h3 className="text-xl font-bold mb-2">Software as a Service (SaaS)</h3>
      <p>
        Offers ready-to-use software applications over the internet. Users can access the software
        through a web browser without worrying about installation or maintenance.
      </p>
      <h2 className="text-2xl font-bold my-4">Unit 3: Cloud Deployment Models</h2>
      <p>
        There are three primary cloud deployment models:
      </p>
      <ul>
        <li>Public Cloud: Services provided by third-party providers available to the general public.</li>
        <li>Private Cloud: Cloud infrastructure exclusively used by a single organization.</li>
        <li>Hybrid Cloud: Combination of public and private clouds, providing flexibility.</li>
      </ul>

      <h2 className="text-2xl font-bold my-4">Unit 4: Cloud Security and Challenges</h2>
      <p>
        In the context of cloud security, several considerations and challenges arise:
      </p>
      <h3 className="text-lg font-bold mb-1">Security Considerations</h3>
      <ul>
        <li>Data Encryption: Protecting data during transmission and storage.</li>
        <li>Identity and Access Management (IAM): Ensuring proper authentication and authorization.</li>
        <li>Compliance: Adhering to industry-specific regulations and standards.</li>
      </ul>

      <h3 className="text-lg font-bold mb-1">Challenges</h3>
      <ul>
        <li>Data Privacy: Concerns about the security and privacy of sensitive information.</li>
        <li>Service Outages: Downtime in cloud services impacting business operations.</li>
        <li>Data Transfer Speeds: Issues related to the speed of data transfer over the internet.</li>
      </ul>

      <h2 className="text-2xl font-bold my-4">Unit 5: Emerging Trends in Cloud Computing</h2>
      <p>
        Emerging trends in cloud computing include:
      </p>
      <ul>
        <li>Edge Computing: Bringing computation and data storage closer to the source of data generation.</li>
        <li>Serverless Computing: Running applications without managing the underlying infrastructure.</li>
        <li>AI Integration: Leveraging cloud services to integrate AI and machine learning capabilities.</li>
        <li>Quantum Computing: Exploring the potential of quantum computing for complex problem-solving.</li>
        <li>Sustainable Cloud Computing: Addressing environmental concerns with eco-friendly practices.</li>
      </ul>
      {/* Units 3, 4, and 5 content can be added similarly */}
    </div>
  );
};

export default CloudComputing;
