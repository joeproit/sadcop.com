import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import SadCopLogo from './app/assets/img/sadcoplogo2.png';
import './App.css';
import CopCard from './features/sadcops/CopCard';
import { SADCOPS } from './app/shared/SADCOPS';

function App() {
    return (
        <div className='App'>
            <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={SadCopLogo} alt='sadcop logo' />
                        <p>SadCop</p>
                    </NavbarBrand>
                </Container>
            </Navbar>
            <CopCard sadcop={SADCOPS[1]} />
        </div>
    );
}

export default App;
