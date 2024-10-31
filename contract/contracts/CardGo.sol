// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract CardGo {

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // modifier onlyOnce() {
    //     require(owner =, "something");
    //     _;
    // }

    // make a modifier that checks user is initialized only once
    
    function initCard() public {  // Add address _addr 
        uint256 card = 0;
    }
}