import "./HomePage.css";
import img1 from '../assets/img1.jpg';
export default function HomePage () {
    return (
        <div className="homepage">
            <img src={img1}></img>
            <h2>Radiate Positivity</h2>
            <h3>Begin Your Wellness Adventure</h3>
            <h4>Get 20% Off</h4>
            <h1>Reviews:</h1>
        <div className="review-container">
            <div className="review">
               <p className="author">John Doe</p>
               <p>⭐️⭐️⭐️⭐️⭐️</p>
               <p className="content"> Finding balance in my hectic life is made easier by its intuitive design, relaxing teachers, and progress tracking. </p>
            </div>
            <div className="review">
               <p className="author">Jane Smith</p>
               <p>⭐️⭐️⭐️⭐️⭐️</p>
               <p className="content"> YogaApp is my go-to place for wellness. Its user-friendly interface, relaxing instructors, and progress monitoring make achieving balance in my hectic schedule a pleasure.</p>
            </div>
            <div className="review">
               <p className="author">Jane Smith</p>
               <p>⭐️⭐️⭐️⭐️</p>
               <p className="content"> YogaApp offers a peaceful getaway from the chaos of life. Its relaxing counsel helps me connect with myself, whether I'm unwinding or creating goals.</p>
            </div>
       </div>
       </div>
    );
}