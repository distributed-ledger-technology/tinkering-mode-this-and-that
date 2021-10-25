// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 < 0.9.0;

contract Pool1 {
    
    struct Investor {
        address walletAddress;
        uint amount;
    }
    
    Investor[] investors;
 
    function deposit() public payable {
     
        require(msg.value >= 1000000000000, "the minimum investment amount is 1000000000000 wei.");
     
        Investor memory investor = Investor(msg.sender, msg.value);
     
        investors.push(investor);
     
    }   
 

    function getInvestors() public view returns (Investor[] memory) {
        return investors;
    }
 
    function getOverallInvestmentAmount() public view returns (uint) {
        return address(this).balance;
    }
 
}