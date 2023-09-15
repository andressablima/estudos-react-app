// renderização de listas
const List = () => {
  const items = [
    {
      id: 1,
      name: "Matheus",
    },
    {
      id: 2,
      name: "Andressa",
    },
    {
      id: 3,
      name: "Caio",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default List;
