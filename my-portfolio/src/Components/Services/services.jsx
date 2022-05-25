import  React  from "react";
import './services.css'
import Cards from "../cards/cards";
import Glass from "../../assets/img/glasses.png";
import Herti from '../../assets/img/heartemoji.png';
import Humble from '../../assets/img/humble.png'

const Services = ()=>{
    return(
        <div className="services">

            <div className="awesome">
                <span>My awesome</span>

                <span>Services</span>
                <spane>lorm epsome ghjknm
                    <br/>
                    werthggdhjhn abf1ff94
                </spane>
                <button className="button s-button"> Download CV</button>
                <div className="blur s-blurl" style={{background:'#abf1ff94'}}></div>
            </div>
            <div className="cards">
                <div>
                   <Cards
                   emoji= {Herti}
                   heading ={'Design'}
                   detail   ={'figma, Adobe illustrator, Premier Pro, Adobe Xd '}
                   />
                </div>
            </div>

        </div>
    )

}
export default Services;