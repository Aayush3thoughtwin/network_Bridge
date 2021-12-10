
const Web3 = require('web3');

const database = require('./db.js');

const dbSchema = require('./schema.js');

const tokenAbi = require('./Bridge.json');

const web3 = new Web3(new Web3('wss://rinkeby.infura.io/ws/v3/a36273ead00942059b6694d4985212dc'));

const contractToken = new web3.eth.Contract(tokenAbi.abi,"0x1FbB76765728EDeA4dF3Dc12Bd8865178a204613");
// console.log(contractToken);

// contractToken.methods.name().call().then(console.log);
let transactionAddress;
console.log(transactionAddress);


contractToken.methods.getAvailableTokens().call().then(console.log)

contractToken.events.TransferToken({fromBlock:0},
    async function (error, event){
        // console.log(event);
        transactionAddress = (event.returnValues.from);
        console.log('transacion Address>>>>>>>>>>>',transactionAddress);
    }
)

// contractToken.events.TransferToken({fromBlock:0
// }, function(error, event){ console.log(event); })
