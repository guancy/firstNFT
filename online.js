var fs = require('fs');
var Tx = require('ethereumjs-tx').Transaction;
const { Buffer } = require('buffer');
const Web3 = require('web3');
const rpcURL = "https://rinkeby.infura.io/v3/bbad5ba7a7e74989aafe50eaf6fb6899"; 
const web3 = new Web3(rpcURL);

// changeMetadata("nft1.json",[false,false,false,false,"all false"]);
function changeMetadata(file,classAttribute)
{
    
    var result = JSON.parse(fs.readFileSync(file));
    
    console.log(result.attributes[0].value);
    
    result.attributes[0].value=classAttribute[0];
    result.attributes[1].value=classAttribute[1];
    result.attributes[2].value=classAttribute[2];
    result.attributes[3].value=classAttribute[3];
    result["name"]=classAttribute[4];
    
    console.log(result.attributes[0].value);
    
    fs.writeFileSync(file, JSON.stringify(result));


}

// var a = readMetadata("nft1.json");
function readMetadata(file)
{
    var result=[];
    
    var metadata = JSON.parse(fs.readFileSync(file));
    
    result[0]= metadata.attributes[0].value;
    result[1]= metadata.attributes[1].value;
    result[2]= metadata.attributes[2].value;
    result[3]= metadata.attributes[3].value;
    result[4]= metadata["name"];

    return result;


}




//测试账号，直接放私钥
const account1 = "0x2625afC56b47C62C6ba4bCFD346396A4D9b4b085";
const pk1 ="da846c4cfb97abe1254a049b5e37001564c904a312e338f1862b54984b08ce60";
const privateKey1 = Buffer.from(pk1,'hex');

const account2 = "0x18F851de55d51670d926a4A3Daee91177A932cCC";
const pk2 ="6ccfdeb6c7a7652fd80dbc893d383ca4466248db3f91dd0457ffc51f3965b6ff";
const privateKey2 = Buffer.from(pk2,'hex');


const abi =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "classId",
				"type": "uint256"
			}
		],
		"name": "changeAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "classId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "bool",
						"name": "transferable",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "burnable",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "mintable",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "frozen",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "className",
						"type": "string"
					}
				],
				"internalType": "struct homeworkNFT.classAttribute",
				"name": "attribute",
				"type": "tuple"
			}
		],
		"name": "changeClassAttributes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "classAdmins",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "classAttributes",
		"outputs": [
			{
				"internalType": "bool",
				"name": "transferable",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "burnable",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "mintable",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "frozen",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "className",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "classId",
				"type": "uint256"
			}
		],
		"name": "classMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "classId",
				"type": "uint256"
			}
		],
		"name": "className",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "classURIs",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "randomMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "URI",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "bool",
						"name": "transferable",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "burnable",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "mintable",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "frozen",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "className",
						"type": "string"
					}
				],
				"internalType": "struct homeworkNFT.classAttribute",
				"name": "attribute",
				"type": "tuple"
			}
		],
		"name": "registClass",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenClassName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenIdtoClassId",
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
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const contractAddress = "0xb8bb0C539E2cEf916cB0B2E10B573c953C6287B0";
const contract = new web3.eth.Contract(abi,contractAddress);





//没有服务器存metadata,这里找的是BAYC的一个URI示意一下，
var uri = "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1";
// var input = [true,true,true,true,"xx"];
// changeMetadata("nft1.json",[false,false,false,false,"all false"]);
var input = readMetadata("nft1.json");



var toaddress= "0x2625afC56b47C62C6ba4bCFD346396A4D9b4b085";
var classId = 1;



// web3.eth.getTransactionCount(account1, (err, txCount) => {
//     // 创建交易对象
//     // 注册class


//     const txObject = {
//       nonce:    web3.utils.toHex(txCount),
//       to:       contractAddress,
//       gasLimit: web3.utils.toHex(3000000),
//       gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//       data: contract.methods.registClass(uri,input).encodeABI()
//     }

//     // 签署交易
//     const tx = new Tx(txObject,{ chain: 'rinkeby', hardfork: 'petersburg' })
//     tx.sign(privateKey1)
  
//     const serializedTx = tx.serialize()
//     const raw = '0x' + serializedTx.toString('hex')
  
//     // 广播交易
//     web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//       console.log('txHash:', txHash)
//       // 可以去ropsten.etherscan.io查看交易详情
//     })
//   })


web3.eth.getTransactionCount(account1, (err, txCount) => {
    // 创建交易对象
    // 改类属性


    const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       contractAddress,
    gasLimit: web3.utils.toHex(3000000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: contract.methods.changeClassAttributes(classId,input).encodeABI()
    }

    // 签署交易
    const tx = new Tx(txObject,{ chain: 'rinkeby', hardfork: 'petersburg' })
    tx.sign(privateKey1)
  
    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')
  
    // 广播交易
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('txHash:', txHash)
      // 可以去ropsten.etherscan.io查看交易详情
    })
  })

  





