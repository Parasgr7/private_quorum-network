module.exports = {
    rpc: {
      host:"localhost",
      port: 22000
    },
    networks: {
      development: {
        host: "localhost", //our network is running on localhost
        port: 22000, // port where your blockchain is running
        network_id: "1337",
        from: "0x552650e60b7376973c95f488287581dd606dc267", // use the account-id generated during the setup process
        gas: 20000000
      }
    }
};
  