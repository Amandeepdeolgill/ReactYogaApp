
import "./Card.css";
export default function Card({cardInfo}) {


  return (
      <div className="card-container">
          {cardInfo.map((card) => (
              <div className="card">
                  <div >
                      {card.url && <img src={card.url} alt={card.move} className="card-img"/>}
                  </div>
                  <h2>{card.move}</h2>
                  <h5>{card.description}</h5>
                  <a id="read" href="#" role="button">Read More!</a>
              </div>
          ))}
      </div>
  );
}

    
    

