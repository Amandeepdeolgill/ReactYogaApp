import "./Trainers.css";
import img1 from "../assets/trainer1.jpeg"
import img2 from "../assets/trainer2.webp"
import img4 from "../assets/trainer3.webp"
import img5 from "../assets/trainer4.webp"
import img6 from "../assets/trainer5.jpeg"
export default function Trainers () {
    return (
        <> <h1>Our Trainers:</h1>
        <div className="trainers">
            <div className="trainer">
            <img src={img1}></img>
            <h2>Sierra Brooks</h2>
            </div>
            <div className="trainer">
            <img src={img2}></img>
            <h2>Grace Meadows</h2>
            </div>
            <div className="trainer">
            <img src={img4}></img>  
            <h2>Dakota Fields</h2>
            </div>
            <div className="trainer">
            <img src={img5}></img> 
            <h2>Faith Tanner</h2>
            </div>
            <div className="trainer">
            <img src={img6}></img>
            <h2>Scarlett Morgan</h2></div>
        </div>   </>
    );
}