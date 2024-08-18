import React from "react";
import { ethers } from "ethers";
import "./Buy.css"
const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    
    try {
      const amount = { value: ethers.utils.parseEther("0.01") };
      const transaction = await contract.buyChai(name, message, amount);
      await transaction.wait();
      alert("Transaction is successful");
      window.location.reload();
    } catch (error) {
      console.error("Transaction failed: ", error);
      alert("Transaction failed. See console for details.");
    }
  };

  return (
    <div className="center">
      <h1>Thanks</h1>
      <form onSubmit={buyChai}>
        <div className="inputbox">
          <input type="text" required id="name" />
          <span>Name</span>
        </div>
        <div className="inputbox">
          <input type="text" required id="message" />
          <span>Message</span>
        </div>
        <div className="inputbox">
          <input type="submit" value="Pay" disabled={!state.contract} />
        </div>
      </form>
    </div>
  );
};

export default Buy;
