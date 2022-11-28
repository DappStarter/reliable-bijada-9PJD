require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remain essay heavy arctic blue genre'; 
let testAccounts = [
"0xf87f885365fcb4d13ae54e2f93bdcbc21494096c40c21a0204ed9fd38e77bf04",
"0x0c3b2eb2b2683e1b166a4edb2a9971dd1a53dbb03380fe6ca3ed5b611e871e74",
"0xa35ea89d1528652f26fa54c110fa74853c256bf402d1f029bc71a9c286ff264f",
"0xc60c6fef1c915bdef4ce12192cad309fdf5d4c38bb2e642743c7a8cd6fd98e01",
"0x120c20c85e80149719646fe324c09cca782963583391f44c17c0e904b1c8b61c",
"0x5dac9767dc45be3899da2c04ebf02c491141bc998274c161e72d20b9f322af97",
"0x8cdd1d94bff3bda3c65323745dc151b24333cdb19736564f8e542a9d3712abc2",
"0xef133d56a952cfa1ad07aff137a0f9846750b2bef154508a978ad15efbdb3c5b",
"0xc6fc0bec40133489411dcb7928ae4678fda8a89243348ff62abf65175778d503",
"0x7833d40f69959647a9c81ae6ec848d9a2668024080da963b124947278fd64a6b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

