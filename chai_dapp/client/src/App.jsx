import React, { useState, useEffect } from 'react';
import abi from "./contractJSON/chai.json";
import { ethers } from "ethers";
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setAccount] = useState('Not connected');

  // Automatically fetch instance
  useEffect(() => {
    const template = async () => {
      const contractAddress = "0xEA29129049A8B3fB0b2318b4aF2c2B45f459Eea7";
      const contractABI = abi.abi;
      // We will be using MetaMask to make transactions on the Goerli testnet

      try {
        const { ethereum } = window;

        const accounts = await ethereum.request({
          method: "eth_requestAccounts"
        });

        setAccount(accounts[0]);

        const provider = new ethers.providers.Web3Provider(ethereum);
        // For writing on the blockchain and changing the state we need a signer
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
            // make docs for this

            
        setState({ provider, signer, contract });

      } catch (error) {
        console.log(error);
      }
    };

    template();
  }, []);

  return (
    <div>
      <h1>Connected Account: {account}</h1>

    </div>
  );
}

export default App;
