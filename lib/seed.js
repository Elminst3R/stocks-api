const { Wallet } = require('../lib/models');

const seedTheDatabase = async () => {
  let currentWallet = await Wallet.findAll({});

  // only create the wallet when there is no wallet, if there is a wallet do not add anymore tables
  if (currentWallet.length == 0) {
    await Wallet.create({ value: 100000 });
  }
};

seedTheDatabase()