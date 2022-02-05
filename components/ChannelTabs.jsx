import styled from "styled-components";

const ChannelTabsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 0 2em;
  padding: 0;
  gap: 8px;

  li {
    flex-grow: 1;
    list-style: none;
  }

  button {
    width: 100%;
    border: none;
    border-radius: 4px;
    background: #eeeeee;
    padding: 3px;
    text-align: center;
    font-size: 1em;
    cursor: pointer;

    &:hover {
      background: #dddddd;
    }

    &.active {
      background: #cccccc;
    }
  }
`;

const ChannelTabs = ({ handleSelectTab, activeTab }) => {
  return (
    <ChannelTabsList>
      <li>
        <button
          type="button"
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleSelectTab(1)}
        >
          I
        </button>
      </li>
      <li>
        <button
          type="button"
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleSelectTab(2)}
        >
          II
        </button>
      </li>
      <li>
        <button
          type="button"
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleSelectTab(3)}
        >
          III
        </button>
      </li>
      <li>
        <button
          type="button"
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleSelectTab(4)}
        >
          IV
        </button>
      </li>
      <li>
        <button
          type="button"
          className={activeTab === 5 ? "active" : ""}
          onClick={() => handleSelectTab(5)}
        >
          V
        </button>
      </li>
      <li>
        <button
          type="button"
          className={activeTab === 6 ? "active" : ""}
          onClick={() => handleSelectTab(6)}
        >
          VI
        </button>
      </li>
    </ChannelTabsList>
  );
};

export default ChannelTabs;
