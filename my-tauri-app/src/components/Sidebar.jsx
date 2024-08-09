import React, { useState } from 'react';
import '../components/styles/Sidebar.css';
import { FaQuestionCircle, FaVideo } from 'react-icons/fa';
import { MdDashboard, MdHistory, MdNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsSuitcaseLg } from "react-icons/bs";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineCurrencyDollar, HiOutlineDocumentDuplicate } from "react-icons/hi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="sidebar-wrapper">
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-menu">
            <div className="menu-section">
              <h3>OVERVIEW</h3>
              <div className="menu-item">
                <MdDashboard />
                {!isCollapsed && <span>Dashboard</span>}
              </div>
            </div>
            <div className="menu-section">
              <h3>JOBS</h3>
              <div className="menu-item">
                <IoIosAddCircleOutline />
                {!isCollapsed && <span>Post Job</span>}
              </div>
              <div className="menu-item">
                <BsSuitcaseLg />
                {!isCollapsed && <span>Active Jobs</span>}
              </div>
              <div className="menu-item">
                <BiSolidBriefcaseAlt2 />
                {!isCollapsed && <span>Closed Jobs</span>}
              </div>
            </div>
            <div className="menu-section">
              <h3>CANDIDATES</h3>
              <div className="menu-item">
                <IoPeopleSharp />
                {!isCollapsed && <span>Source Talent</span>}
              </div>
              <div className="menu-item">
                <GrDocumentText />
                {!isCollapsed && <span>Applicants</span>}
              </div>
            </div>
            <div className="menu-section">
              <h3>SUBSCRIPTION</h3>
              <div className="menu-item">
                <HiOutlineCurrencyDollar />
                {!isCollapsed && <span>Subscription Plans</span>}
              </div>
              <div className="menu-item">
                <MdHistory />
                {!isCollapsed && <span>Payment History</span>}
              </div>
            </div>
            <div className="menu-section">
              <h3>RESOURCES</h3>
              <div className="menu-item">
                <FaQuestionCircle />
                {!isCollapsed && <span>Help Center</span>}
              </div>
              <div className="menu-item">
                <HiOutlineDocumentDuplicate />
                {!isCollapsed && <span>Documentation</span>}
              </div>
              <div className="menu-item">
                <FaVideo />
                {!isCollapsed && <span>Tutorial</span>}
              </div>
            </div>
          </div>
        </div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isCollapsed ? <MdOutlineNavigateNext /> : <MdNavigateBefore />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
