import React from 'react';

const Menu = () => {
  return (
    <div className="menu">
      <h1>Game Menu</h1>
      <div className="settings">
        <h2>Settings</h2>
        <div className="setting">
          <label htmlFor="table-selection">Table Selection:</label>
          <select id="table-selection">
            <option value="table1">Table 1</option>
            <option value="table2">Table 2</option>
          </select>
        </div>
        <div className="setting">
          <label htmlFor="speed-settings">Speed Settings:</label>
          <input type="number" id="speed-settings" min="1" max="10" />
        </div>
        <div className="setting">
          <label htmlFor="lane-count">Lane Count:</label>
          <input type="number" id="lane-count" min="1" max="10" />
        </div>
        <div className="setting">
          <label htmlFor="voice-settings">Voice Settings:</label>
          <select id="voice-settings">
            <option value="voice1">Voice 1</option>
            <option value="voice2">Voice 2</option>
          </select>
        </div>
        <div className="setting">
          <label htmlFor="beat-selection">Beat Selection:</label>
          <input type="text" id="beat-selection" />
        </div>
        <div className="setting">
          <label htmlFor="spawn-shift">Spawn Shift:</label>
          <input type="number" id="spawn-shift" min="-10" max="10" />
        </div>
      </div>
      <button className="apply-settings">Apply Settings</button>
    </div>
  );
};

export default Menu;