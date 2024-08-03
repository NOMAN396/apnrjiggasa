import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Assests/css/sb-admin-2.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Assests/bootstrap5.3/css/bootstrap.css';
import '../Assests/bootstrap5.3/css/bootstrap.min.css';

function Dashboard() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));

    return (
        <div  id="content">
{/* <!-- Topbar --> */}
<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    {/* <!-- Sidebar Toggle (Topbar) --> */}
    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
    </button>

    {/* <!-- Topbar Search --> */}
    <form
        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                aria-label="Search" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                </button>
            </div>
        </div>
    </form>

    {/* <!-- Topbar Navbar --> */}
    <ul className="navbar-nav ml-auto">
        {/* <!-- Nav Item - Alerts --> */}
        <li className="nav-item dropdown no-arrow mx-1">
            <Link className="nav-link dropdown-toggle" to="#" id="alertsDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                {/* <!-- Counter - Alerts --> */}
                <span class="badge badge-danger badge-counter">3+</span>
            </Link>
            {/* <!-- Dropdown - Alerts --> */}
        </li>

        {/* <!-- Nav Item - Messages --> */}
        <li className="nav-item dropdown no-arrow mx-1">
            <Link className="nav-link dropdown-toggle" to="#" id="messagesDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-envelope fa-fw"></i>
               
                <span className="badge badge-danger badge-counter">7</span>
            </Link>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        {/* <!-- Nav Item - User Information --> */}
      
<li className="nav-item dropdown no-arrow">
    <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
    </Link>
    {/* <!-- Dropdown - User Information --> */}
    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
        aria-labelledby="userDropdown">
        <Link className="dropdown-item" to="#">
            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
        </Link>
        <Link className="dropdown-item" to="#">
            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
        </Link>
        <Link className="dropdown-item" to="#">
            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
        </Link>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
        </Link>
    </div>
</li>


    </ul>

</nav>

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/index">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </Link>

                {/* Divider */}
                <hr className="sidebar-divider my-0" />

                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/index">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Heading */}
                <div className="sidebar-heading">Interface</div>

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">                           
                            <Link className="collapse-item" to="/buttons">Buttons</Link>
                            <Link className="collapse-item" to="/cards">Cards</Link>
                        </div>
                    </div>
                </li>

                {/* Nav Item - Utilities Collapse Menu */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Utilities</span>
                    </Link>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <Link className="collapse-item" to="/utilities-color">Colors</Link>
                            <Link className="collapse-item" to="/utilities-border">Borders</Link>
                            <Link className="collapse-item" to="/utilities-animation">Animations</Link>
                            <Link className="collapse-item" to="/utilities-other">Other</Link>
                        </div>
                    </div>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider" />

                {/* Heading */}
                <div className="sidebar-heading">Addons</div>

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <Link className="collapse-item" to="/login">Login</Link>
                            <Link className="collapse-item" to="/register">Register</Link>
                            <Link className="collapse-item" to="/forgot-password">Forgot Password</Link>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link className="collapse-item" to="/404">404 Page</Link>
                            <Link className="collapse-item" to="/blank">Blank Page</Link>
                        </div>
                    </div>
                </li>

                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <Link className="nav-link" to="/charts">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span>
                    </Link>
                </li>

                {/* Nav Item - Tables */}
                <li className="nav-item">
                    <Link className="nav-link" to="/tables">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span>
                    </Link>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>



<div id="content-wrapper" className="d-flex flex-column">
{/* <!-- Footer --> */}
<footer className="sticky-footer bg-white">
    <div className="container my-auto">
        <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
        </div>
    </div>
</footer>
{/* <!-- End of Footer --> */}

</div>
        </div>
    );
}

export default Dashboard;
