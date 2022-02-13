import ratios from '../../data/ratios';

const RatioSelect = ({ handleSelect, chainIdx, selectedRatio }) => {
  return (
    <select onChange={(e) => handleSelect()}>
      {ratios.map((r) => {
        return (
          <option key={r.id} value={r.id} selected={selectedRatio === r.id}>
            {r.title}
          </option>
        );
      })}
    </select>
  );
};

export default RatioSelect;
