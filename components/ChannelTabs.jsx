import styled from 'styled-components';

const ChannelTabsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 0 2em;
  padding: 0;
  gap: 8px;

  li {
    flex-grow: 0;
    list-style: none;
  }

  button {
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    background: #666666;
    font-style: italic;
    text-align: center;
    font-size: 0.85em;
    font-weight: bold;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
      background: #dddddd;
    }

    &.active {
      border: 3px solid #dedede;
      background: #ffffff;
    }
  }
`;

const ChannelTabs = ({ handleSelectTab, activeTab }) => {
  return (
    <ChannelTabsList>
      <li>
        <button
          type='button'
          className={activeTab === 0 ? 'active' : ''}
          onClick={() => handleSelectTab(0)}
        >
          I
        </button>
      </li>
      <li>
        <button
          type='button'
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleSelectTab(1)}
        >
          II
        </button>
      </li>
      <li>
        <button
          type='button'
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleSelectTab(2)}
        >
          III
        </button>
      </li>
      <li>
        <button
          type='button'
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleSelectTab(3)}
        >
          IV
        </button>
      </li>
      <li>
        <button
          type='button'
          className={activeTab === 4 ? 'active' : ''}
          onClick={() => handleSelectTab(4)}
        >
          V
        </button>
      </li>
      <li>
        <button
          type='button'
          className={activeTab === 5 ? 'active' : ''}
          onClick={() => handleSelectTab(5)}
        >
          VI
        </button>
      </li>
    </ChannelTabsList>
  );
};

export default ChannelTabs;
