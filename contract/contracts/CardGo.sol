// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract CardGo {

    address public owner;

    struct Card {
        uint256 id;
        string name;
        string description;
        uint256 price;
        uint256 stock;
    }

    struct User {
        address userAddress;
        uint256 ingameMoney;
        uint256[] cardIds;
        Card[] userCards;
    }
     
    Card[] public cards;
    User[] public users;

    constructor() {
        owner = msg.sender;
    }

    // modifier onlyOnce() {
    //     require(owner =, "something");
    //     _;
    // }

    // make a modifier that checks user is initialized only once
    
    function initCard() public {  // Add address _addr 
        users.push(User(msg.sender, 1000, new uint256[](0), new Card[](0)));
    }
}