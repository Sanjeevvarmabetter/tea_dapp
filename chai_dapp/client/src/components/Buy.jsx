import React from "react";
import { ethers } from "ethers";
// this is all about buying the chai

// this react code need to talk with the smartcontract
// for that use ethers
const Buy=({state})=>{
    
    const BuyChai = async(event) => {
        event.preventDefault();
        const {contract}=state;
        const name = document.querySelector("#name");
        const message = document.querySelector("#message");
        try {
        
        const amount = {value:ethers.utils.parseEther("0.01")};

        // we need to convert ether to wei
        // const amount = {value:0.01}

        const transaction = await contract.BuyChai(name,message,amount)
        await transaction.wait();
        alert("Transaction is successul");
        window.location.reload();
    } catch (error) {
        console.error("Transaction failed: ",error);
        alert("Transaction failed. see console for details");
    }
};
    
    
    return(
        <div>
            <form onSubmit={BuyChai}>
                <input id="name"></input>
                <input id="message"></input>
                <button>Pay</button>
            </form>
        </div>
    );
}


export default Buy;  