const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule('CardGo', (m) => {
  const cardGo = m.contract('CardGo', []);

  return { cardGo }; 
})