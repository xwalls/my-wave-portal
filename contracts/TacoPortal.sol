// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TacoPortal {
    uint256 totalTacos;
    string taco_emoji;

    constructor() {
        taco_emoji = unicode"🌮";
        console.log("Im a mexican smart contract");
    }

    function taco() public {
        totalTacos += 1;
        console.log("%s has sent %s for dinner!", msg.sender, taco_emoji);
    }

    function getTotalTacos() public view returns (uint256) {
        console.log("We have %d %s for this night!", totalTacos, taco_emoji);
        return totalTacos;
    }
}