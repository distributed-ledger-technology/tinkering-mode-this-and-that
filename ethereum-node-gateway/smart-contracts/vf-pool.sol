// SPDX-License-Identifier: MIT
// This is a template for all volatility farming capital pools ...
// only getCurrentInvestmentAdvices() shall be redifined individually
pragma solidity >=0.8.0 < 0.9.0;

contract VFPool {
    
    enum Direction{ DEPOSIT, WITHDRAW }
    
    enum Side { BUY, SELL }
    
    struct Investor {
        address payable walletAddress;
        uint capitalAtRisk;
        uint pnlAbsolute;
        uint pnlInPercent;
    }
    
    struct PaymentHistoryEntry {
        address walletAddress;
        uint amount;
        uint blocktimestamp;
        Direction direction;
    }
    
    struct Executor {
        address walletAddress;
        uint amountEarned;
    }
    
    struct InvestmentAdvice {
        Side side;
        string pair; 
        uint amount;
    }
    
    Investor[] investors;
    Executor[] executors;
    PaymentHistoryEntry[] paymentHistory;
    
 
    function deposit() public payable {
     
        require(msg.value >= 1000000000000, "the minimum investment amount is 1000000000000 wei.");
     
        Investor memory investor = Investor(payable(msg.sender), msg.value, 0, 0);
     
        investors.push(investor);
     
    }   
 

    function getInvestors() public view returns (Investor[] memory) {
        return investors;
    }
 
    function getOverallInvestmentAmount() public view returns (uint) {
        return address(this).balance;
    }
 

    function withdraw(address payable walletAddress) public {
        
        string memory walletAddressAsString = string(abi.encodePacked(walletAddress));
        for (uint i = 0; i < investors.length; i++) {
            
            if (compareStrings(string(abi.encodePacked(investors[i].walletAddress)), walletAddressAsString)) {
                investors[i].walletAddress.transfer(1000000000000);
            }

        }


        
    }
 

    function getCurrentInvestmentAdvices() internal pure returns (InvestmentAdvice memory) {
        
        InvestmentAdvice memory investmentAdvice = InvestmentAdvice(Side.BUY, 'ETHDAI', 1000000000000000); 

        return investmentAdvice;
    }
    

    // executed by bot 
    function executeCurrentInvestmentAdvices() public {
        
       // InvestmentAdvice memory currentInvestmentAdvice = getCurrentInvestmentAdvices();
        
        // call uniswap to execute the investment advice
        
        transferRewardsToExecutor();
    }
    
    
    function transferRewardsToExecutor() internal {
        
    }

    function compareStrings(string memory a, string memory b) private pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    // function startTrading() public only owner {
        // require only owner 
        
    //    require(address(this).balance; >= 1000000000000, "the minimum capital to start trading with this strategy is 1000000000000 wei.");
        
    //}
    
    
    // function reStartTrading() internal {
        
    // }
    
    
    // function stopTrading() internal {
        
    //     require(msg.value >= 1000000000000, "the minimum capital to start trading with this strategy is 1000000000000 wei.");
        
    // }

    
}