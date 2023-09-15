// renederização condicional
const RenderCond = ({ x, y }) => {
  return (
    <div>
      {x > 5 && <p>X é maior que 5</p>}
      {x > 5 ? <p>X é um número alto </p> : <p>X é um número baixo</p>}
      <p>O valor de y é: {y} </p>
    </div>
  );
};

export default RenderCond;

// if e else
//  {x > 5 ? <p>X é um número alto </p> : <p>X é um número baixo</p>}

//props - propriedades passadas do componente pai para o filho
// faz o valor ser passado mais dinamicamente
// ({x}) => { -> props em formato atualizado
// const RenderCond = (props) => {} formato geral do props
