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
                <div style={{left:'14rem'}}>
                   <Cards
                   emoji= {Herti}
                   heading ={'Design'}
                   detail   ={['Figma,', '  Adobe Xd,','  Adobe Illustrator,','    Adobe premierPro'] }
                   
                   />
                </div>
                <div style={{top:'12rem', left:'-4rem'}}>
                   <Cards
                   emoji= {Glass}
                   heading ={'Dev'}
                   detail   ={['Figma,', '  Adobe Xd,','  Adobe Illustrator,','    Adobe premierPro'] }
                   
                   />
                </div>
               
            </div>

        </div>
    )

}
export default Services;