const AnotherComponent = () => {
  const handleClick = () => {
    console.log("Clicou no botão!");
  };
  return (
    <div>
      <p>Segundo Componente</p>
      <button onClick={handleClick}>Evento de Click</button>
      <hr />
      <button onClick={() => console.log("teste")}>Evento no elemento</button>
    </div>
  );
};

export default AnotherComponent;

//on (do onClick) é a chamada de eventos
//funções nos elementos
