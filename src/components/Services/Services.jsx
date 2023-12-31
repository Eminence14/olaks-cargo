import React from 'react'
import './services.css'
import { FiTruck } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { TbWorldBolt } from "react-icons/tb";
import { LuWarehouse } from "react-icons/lu";

const Services = () => {
  return (
    <div className="flex services">
      <div className="flexCol service-card">
        <FiTruck size={35} color="#0d5195" />
        <h5>forwarding services</h5>
        <p>
          Interactively generate covalent architectures whereas world-class
          leadership skills. Interactively generate covalent architectures
          whereas world-class leadership skills
        </p>
      </div>
      <div className="flexCol service-card">
        <BsBoxSeam size={35} color="#0d5195" />
        <h5>transport of packaged goods</h5>
        <p>
          Interactively generate covalent architectures whereas world-class
          leadership skills. Interactively generate covalent architectures
          whereas world-class leadership skills
        </p>
      </div>
      <div className="flexCol service-card">
        <TbWorldBolt size={35} color="#0d5195" />
        <h5>international road transport</h5>
        <p>
          Interactively generate covalent architectures whereas world-class
          leadership skills. Interactively generate covalent architectures
          whereas world-class leadership skills
        </p>
      </div>
      <div className="flexCol service-card">
        <LuWarehouse size={35} color="#0d5195" />
        <h5>warehousing and storage</h5>
        <p>
          Interactively generate covalent architectures whereas world-class
          leadership skills. Interactively generate covalent architectures
          whereas world-class leadership skills
        </p>
      </div>
    </div>
  );
}

export default Services