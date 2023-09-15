//Imagem dentro do src
import react1 from "../assets/react1.jpeg";

//Imagem dentro do public
const Images = () => {
  return (
    <div>
      <img src="./react2.png" alt="react" />
      <img src={react1} alt="react" />
    </div>
  );
};

export default Images;

//<img src={react1}/> para colocar imagem que esta no src
