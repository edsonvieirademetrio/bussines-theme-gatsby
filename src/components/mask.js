import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./mask.css"

const Intro = ({ children }) => {
    return (
        <MDBContainer style={{marginTop: "25vh", marginBottom: "50vh"}}>
            <MDBRow >
                <MDBCol md="12" className="white-text text-center">
                    <h2 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5 mask">Venha experimentar</h2>
                    <h3 className="subtext-header h4-responsive mt-2 mb-4">O melhor Hambúrguer pelo melhor preço da cidade.</h3>                    
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Intro;
