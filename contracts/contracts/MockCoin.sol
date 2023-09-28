// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockCoin is ERC20 {
    constructor() ERC20("MockCoin", "MC") {}

    function decimals() public view virtual override returns (uint8) {
        return 6;
    }
}
