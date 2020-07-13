import React, { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { GlobalStyles } from "../components/Globalstyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/Themes"
import Modal from "./Modal";
import useModal from '../useModal';



// import myAvatar from '../img/myAvatar.png';
// import { Link } from 'react-router-dom'


function Navbar() {

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
        console.log("clickde");

    }


    const goPro = () => {
        const anchor = document.querySelector('#pro')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    //Modals

    const { isShowing, toggle } = useModal();


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />

                <div className={`header `}>
                    <Modal
                        isShowing={isShowing}
                        hide={toggle}
                    />


                    <div className='navbar'>


                        <div className="navbar_logo">
                            {/* <img src={myAvatar} alt="logo" /> */}
                        </div>

                        <div className='daflex'>

                            <ul className={`navbar_links  `}>

                                <li className='navbar_links-item' >
                                    < p className='navlink' data-text='ABOUT' onClick={toggle}>ABOUT</ p>
                                </li>
                                <li className='navbar_links-item'>
                                    < p className='navlink' data-text='WORKS' onClick={goPro} >WORKS</ p>
                                </li>
                                <li className='navbar_links-item'>
                                    <a href="mailto:yusufkehinde11@gmail.com"> < p className='navlink' data-text='CONTACT' >CONTACT</ p></a>
                                </li>





                            </ul>
                            <div className="darkmode" onClick={themeToggler}>
                                <FaLightbulb className='darkmode_icon' />
                            </div>
                        </div>



                    </div>

                </div>
            </>
        </ThemeProvider>
    )
}
export default Navbar