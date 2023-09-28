// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

// Use openzeppelin library to improve contract security
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Rewarder is Ownable {
  address public resultsContract;
  uint256 public rewardAmount;
  IERC20 public rewardCoin;
  address public sponsor;

  // Modifier to ensure only resultsContract can call the method
  modifier onlyResultsContract() {
    require(msg.sender == resultsContract, "Rewarder: caller is not the Results contract");
    _;
  }

  function setSponsor(address _sponsor) external onlyOwner {
	sponsor = _sponsor;
  }

  function setRewardCoin(address _rewardCoin) external onlyOwner {
	rewardCoin = IERC20(_rewardCoin);
  }

  function setRewardAmount(uint256 _rewardAmount) external onlyOwner {
	rewardAmount = _rewardAmount;
  }

  constructor (address _sponsor, address _rewardCoin, uint256 _rewardAmount) {
	sponsor = _sponsor;
	rewardAmount = _rewardAmount;
	rewardCoin = IERC20(_rewardCoin);
  }

  function setResultsContract(address _resultsContract) external onlyOwner {
    resultsContract = _resultsContract;
  }

  function payReward(uint256 _multiplier, address _recipient) public onlyResultsContract {
	rewardCoin.transferFrom(sponsor, _recipient, _multiplier * rewardAmount);
  }
}