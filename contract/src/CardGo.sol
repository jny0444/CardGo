// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

contract CardGo {
    struct Card {
        uint256 id;
        string name;
        string description;
    }

    struct Player {
        address playerAddress;
    }

    constructor() {}

    function registerPlayer() public {}

    function giveCard() public {}
}
