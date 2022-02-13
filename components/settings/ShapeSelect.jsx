import shapes from '../../data/shapes';

const ShapeSelect = ({ handleSelect, chainIdx, selectedShape }) => {
  return (
    <select onChange={(e) => handleSelect()}>
      {shapes.map((s) => {
        return (
          <option key={s.id} value={s.id} selected={selectedShape === s.id}>
            {s.title}
          </option>
        );
      })}
    </select>
  );
};

export default ShapeSelect;
