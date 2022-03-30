import React, {useState} from 'react';
import { GoListUnordered } from "react-icons/go";
import { BsSearch, BsFillPencilFill } from "react-icons/bs";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import Me from '../images/me.jpeg'
import Google from '../images/google.png'
import History from './History'
import Data from './Api'
import ProfileCard from './ProfileCard'
import GoogleAppCard from './GoogleAppCard'



export default function Homepage() {
    const [card, setCard] = useState(false)
    const [appCard, setAppCard] = useState(false)


    return (
        <>
            <div className="full-body">
{/* Heading Start */}

                <div className="heading">
                    <div className="head">
                        <a href="www.google.com" target="_blank" className="gmail">Gmail</a>
                        <a href="www.google.com" target="_blank" className="images">Images</a>
                        <GoListUnordered className="icon" onClick={() => setAppCard(!appCard)} />
                        <img onClick={() => setCard(!card)} src={Me} alt="Profile-Images" className="profile" />
                    </div>
                </div>

{/* Heading End */}

{/* body start */}

                {card && <ProfileCard />}
                {appCard && <GoogleAppCard />}
                
                
                
                <div className="mid-body">
                    <div className="google">
                        <img src={Google} alt="google" />
                    </div>
                    <div className="full-input">
                        <BsSearch className="searchIcon" />
                        <input type="text" placeholder="Search Google or type a URL" />
                        <a href="google.com">
                            <MdOutlineKeyboardVoice className="voice" />
                        </a>
                    </div>
                </div>

                <div className="full-history">
                    {Data.map((elepopopopopopopopoi) => {
                        return(
                            <History 
                                img={elepopopopopopopopoi.img}
                                p={elepopopopopopopopoi.p}
                            />
                        )
                    })}
                </div>

{/* body end */}


 {/* footer start  */}

                {/* <footer className="footer">
                    <a href="www.google.com"><BsFillPencilFill className="footer-icon"/>Customize the page</a>
                </footer> */}

{/* footer End */}
            </div>
        </>
    );
}
