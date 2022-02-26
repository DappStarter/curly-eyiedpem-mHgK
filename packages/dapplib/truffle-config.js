require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stone royal pitch prosper idea clock equal genius'; 
let testAccounts = [
"0xccd042fc924e5d2c3a25da1c8b0b4dcbff1376c5f178a8d2d408a0b37b6bb09f",
"0x11420e4e6c4acd9897b8f9789cdb477e8077b250bf2a9e74c3b425fe7f968522",
"0x3ab70b0b0ce4c983396907a4bb2a0325d3c0f5ec1003b0fcfd9020af038fe18d",
"0x68583bd6daeb1dc870aa49bc1450b3488c518bc718f70300b6f32405ad6efd78",
"0xea211c88c23ed41dfd3d89911203eff0e24fad7b97ee637cdaccff939dfc7d40",
"0x5af197d9d3b1491852db1d67d7fa79c4731c71844ef50babde6f689d1907ae5e",
"0x59b156c6b92b31013858cdf166de8d7e83cddce314c47159abfbff0fba81cb17",
"0xf7bd2df50941da94452bd2e6298d7a37402913cb34f1df397b61369397cd6aa6",
"0x5c1e9f7611fcd696bd90b4e2ee78efc96f8c8ebc91bd9b059991288954d3de2e",
"0xcba744eb5b6b46a9191fc571bf0f5036fa9774a91a16e88a2199140027cf60e8"
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

