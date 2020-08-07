import React from 'react';
import Menu from '../Menu';
import Footer from '..Footer';
import styled from 'styled-components';

const Main = styled.Main `
background-color: var(--black);
color: var(--white);
flex: 1;
padding-top: 50px;
padding-top: 5%;
padding-top: 5%;


`
;



Function PageDefault (children) {
    retunr (
        <React.Fragment>
        <Menu />
        <Main>
         {children}
         </Main>
        <Footer/>
        </React.Fragment>
    );
}

export default PageDefault;