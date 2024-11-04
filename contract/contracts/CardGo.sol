// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract CardGo {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    struct User {
        address userAddress;
        
    }

    struct Card {
        uint256 health;
    }

    function createUser() public {

    }
}