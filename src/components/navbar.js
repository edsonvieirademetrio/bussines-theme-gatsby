import React, { Component } from "react";
import {
  MDBContainer, MDBNavbar,  MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { Link } from 'gatsby';
import CustomNavLink from './customLink';
import { ReactComponent as Logo } from "../images/burger-2.svg";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar color="transparent no-shadow"  expand="md">
        <MDBContainer>          
          <Link to="/" className="navbar-brand mr-2">
            <Logo  className="mr-2" />
              <div className="text-red font-weight-bold font-32 float-right">
                Burger now            
              </div>            
          </Link>
          <MDBNavbarToggler name="navbar-toggler" onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left className="text-uppercase font-weight-bold text-white m-auto">
                <CustomNavLink to="#!">Home</CustomNavLink>
                <CustomNavLink to="#!">Menu</CustomNavLink>
                <CustomNavLink to="#!">Nossa História</CustomNavLink>
                <CustomNavLink to="#!">Contato</CustomNavLink>
                <CustomNavLink to="#!">Pedido online</CustomNavLink>                
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <div className="d-flex align-items-center text-white">
                <CustomNavLink to="#!">
                  <MDBIcon fab icon="facebook" className="ml-1" />
                </CustomNavLink>
                <CustomNavLink to="#!">
                  <MDBIcon fab icon="instagram" className="ml-1" />
                </CustomNavLink>
                <CustomNavLink to="#!">
                  <MDBIcon fab icon="whatsapp" className="ml-1" />
                </CustomNavLink>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
