// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TacoPortal {
    uint256 totalTacos;
    string taco_emoji;

    event NewTaco(address indexed from, uint256 timestamp, string message);

    struct Taco {
        address adress_benefactor;
        string message;
        uint256 timestamp;
    }

    Taco[] tacos;

    constructor() {
        taco_emoji = unicode"🌮";
        console.log("Im a mexican smart contract");
    }

    function taco(string memory _message) public {
        totalTacos += 1;
        console.log("%s has sent %s for dinner!", msg.sender, taco_emoji);
        
        tacos.push(Taco(msg.sender, _message, block.timestamp));

        emit NewTaco(msg.sender, block.timestamp, _message);
    }

     function getAllTacos() public view returns (Taco[] memory) {
        return tacos;
    }

    function getTotalTacos() public view returns (uint256) {
        console.log("We have %d %s for this night!", totalTacos, taco_emoji);
        return totalTacos;
    }
}