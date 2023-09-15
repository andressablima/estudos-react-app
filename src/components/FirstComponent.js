import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
  return (
    <div>
      <p>Primeiro Componente</p>
      {2 + 2}
      <AnotherComponent />
    </div>
  );
}

export default FirstComponent;

// não pode ter mais de uma div, ou demais estruturas.
