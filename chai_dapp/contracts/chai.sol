// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract chai {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }


    Memo[] memos;

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }


    function buyChai(string calldata name,string calldata message) external payable {
        require(msg.value>0,"need to pay more than 0");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));


    }

    function getMemoes() public view returns(Memo[] memory) {
        return memos;
    }

}