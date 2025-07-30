interface IPill {
  item: string;
}

interface IPillProps {
  items: string[];
}

const Props = ({ item }: IPill) => {
  return <div className="primary-pill">{item}</div>;
};

const Pill = ({ items }: IPillProps) => {
  return (
    <div className="pill-container">
      {items.map((item, index) => (
        <Props key={index} item={item} />
      ))}
    </div>
  );
};

export default Pill;
