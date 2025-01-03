interface IPillProps {
  item: string;
}

interface IPillItems {
  items: string[];
}

const Props = ({ item }: IPillProps) => {
  return <div className="primary-pill">{item}</div>;
};

const Pill = ({ items }: IPillItems) => {
  return (
    <div className="pill-container">
      {items.map((item, index) => (
        <Props key={index} item={item} />
      ))}
    </div>
  );
};

export default Pill;
