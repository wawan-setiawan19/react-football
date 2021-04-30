import image from '../assets/liga1.png'
import '../style/card.css'
const Card = ({ image, name }) => {
  return (
    <div className="card">
      <div className="card-image"><img src={image} alt={image} /></div>
      <div className="card-name">{ name }</div>
    </div>
  );
}

Card.defaultProps = {
  image: image,
  name:'Nama Tim',
}

export default Card;