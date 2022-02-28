import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import marvel_image from '../../assets/images/marvel_image.png'
import { AuthCheck } from 'reactfire'; 
import { Suspense } from 'react';

interface Props{
    title: string;
}

// Create Styled Components with styled-components
const Root = styled("div",{
    name: 'Root',
    slot: 'Wrapper'
})({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em',
    color: 'black'
})
const NavbarContents = styled('div')( {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '1rem',
    paddingRight: '.5rem' 

})
const HeroContent = styled('div')({
    borderRadius: '10px',
    display: 'grid',
    gridTemplateColumns: '.8fr 1.2fr',
    boxShadow: '.1rem .1rem .5rem 0rem gray',
    width: '95vw',
    height: '75vh',
    marginTop: '2rem',
    margin: '2rem auto',
    justifyContent: 'center',
})
const HeroText = styled('div')({
    padding: '2rem',
    alignItems: 'center'
})
const HeroImage = styled('img')({
    height: '70%',
    width: '100%'

})
const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black',
    textDecoration: 'none'
})
export const Home = ( props:Props) => {
    return (
        <Root>
            <NavbarContainer>
                <Logo>Marvel API</Logo>
                <NavbarContents>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <Suspense fallback={'loading...'}>
                        <AuthCheck fallback={
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                        }>
                        
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/signin">Sign Out</Link>
                        </li>
                        </AuthCheck>
                    </Suspense>
                        
                </NavbarContents>
            </NavbarContainer>    
            <HeroContent>
                <HeroText>
                    <h1>Hello there</h1>
                    <br />
                    <h2>Welcome to Marvel API</h2>
                    <br />
                    <h4>A place to post your favorite marvel Characters</h4>
                    <br />
                    <h4>Click the button to sign up</h4>
                    <br />
                    <Button variant='contained' color='primary'>Sign Up</Button>
                </HeroText>
                <HeroImage src={ marvel_image } alt="hero-image" />

            </HeroContent>
        </Root>
    )
}