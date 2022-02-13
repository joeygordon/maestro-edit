import attenutationAmounts from '../../data/attenuation';

const AttenuationSelect = ({ handleSelect, selectedAmount }) => {
  return (
    <select onChange={(e) => handleSelect()}>
      {attenutationAmounts.map((a) => {
        return (
          <option key={a.id} value={a.id} selected={selectedAmount === a.id}>
            {a.title}
          </option>
        );
      })}
    </select>
  );
};

export default AttenuationSelect;
