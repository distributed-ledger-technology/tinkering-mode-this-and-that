export const vfPool = [
    {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "executeCurrentInvestmentAdvices",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getInvestors",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "walletAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "capitalAtRisk",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pnlAbsolute",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pnlInPercent",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct VFPool.Investor[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOverallInvestmentAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "walletAddress",
                "type": "address"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]