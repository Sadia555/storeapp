import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Cover from '../assets/images/Cover.png';

const Styles = styled.div`
  .jumbo {
    background: url(${Cover}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 100px;
    position: relative;
    z-index: -2;
  }

  
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        
      </Container>
    </Jumbo>
  </Styles>
)
