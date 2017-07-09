const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

/* addr is wallet address*/

const balance = addr => web3.fromWei(web3.eth.getBalance(addr), 'ether').toNumber();

const sendTransaction = (amount, addr1, addr2) => web3.eth.sendTransaction({
  from: addr1, to: addr2, value: web3.toWei(amount, 'ether'), gasLimit: 21000, gasPrice: 2000000000,
});

module.exports = {
  balance,
  sendTransaction,
};
