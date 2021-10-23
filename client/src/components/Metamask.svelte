<script>
    import detectEthereumProvider from "https://cdn.skypack.dev/@metamask/detect-provider";
    import { onMount } from "svelte";

    let provider;
    let hasBrowserWallet = false;
    let chainId = "";
    let message = "";
    let connectedAccount = "";

    let complete = false;

    onMount(async () => {
        provider = await detectEthereumProvider();
        if (provider) {
            hasBrowserWallet = provider.isConnected();
            chainId = await provider.request({
                method: "eth_chainId",
            });
            provider
                .request({ method: "eth_accounts" })
                .then(handleAccountsChanged)
                .catch((err) => {
                    console.error(err);
                });
        } else {
            message = `In order to use this service, you need an Ethereum Browserwallet.`;
        }
        complete = true;

        provider.on("accountsChanged", handleAccountsChanged); // emitted also on page load.
        provider.on("chainChanged", (chainId) => window.location.reload());
    });
    function handleAccountsChanged(accounts) {
        connectedAccount = accounts;
        console.log(JSON.stringify(accounts));
    }
    function connect() {
        provider
            .request({ method: "eth_requestAccounts" })
            .then(handleAccountsChanged)
            .catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    console.log("Please connect to MetaMask.");
                } else {
                    console.error(err);
                }
            });
    }

    function tbdInfo() {
        alert(
            `currently only the centralized version is fully functional - we are working on the decentralized solution`
        );
    }
</script>

<div id="metamask">
    <table>
        <tr>
            <th>VoFarm Capital Pool</th>
            <th>Amount At Risk</th>
            <th>Corresponding Strategy</th>
            <th>Wallet of Developer</th>
            <th>Your Options</th>
        </tr>

        <td> BTC Long- Short & ETH Long for Stability </td>
        <td> 200 ETH </td>
        <td>
            <a
                href="https://github.com/distributed-ledger-technology/exchange-connectors/blob/main/src/volatility-farming/investment-advisor/alternative-investment-advisors/investment-advisor-BTC-long-short-extreme.ts"
                target="_blank">See Code</a
            >
        </td>
        <td>
            <a
                href="https://etherscan.io/address/0x7a915e362353d72570dcf90aa5baa1c5b341c7aa"
                target="_blank"
            >
                0x7a915e362353d72570dcf90aa5baa1c5b341c7aa
            </a>
        </td>
        <td>
            <button on:click={tbdInfo}>Invest</button>
            <button on:click={tbdInfo}>Withdraw</button>
            <button on:click={tbdInfo}>Donate to Developer</button>
        </td>
    </table>

    <p />
    Implement your own
    <a
        href="https://github.com/distributed-ledger-technology/exchange-connectors/blob/main/src/volatility-farming/investment-advisor/alternative-investment-advisors/investment-advisor-BTC-long-short-extreme.ts"
        target="_blank">VoFarm strategy</a
    >
    and add it to the
    <b> Ethereum Open Source Code Registry </b>
    represented by
    <a
        href="https://ropsten.etherscan.io/address/0x36cafbdd90458cc4c396c9550031d20490d8d4c9"
        target="_blank"
    >
        this smart contract
    </a>.

    <p />
    <button on:click={tbdInfo}>Start Developing</button>
    <button on:click={tbdInfo}>Add Code To Ethereum Open Source Registry</button
    >
    <p />
    <br />
    <p />
    {#if message === ""}
        <table>
            <tr>
                <th>Has Browserwallet</th>
                <th>chainId</th>
                <th>connectedAccount</th>
                <th>OSC Balance</th>
                <th>Capital At Risk</th>
            </tr>

            <td>
                {hasBrowserWallet}
            </td>
            <td>
                {chainId}
            </td>
            <td>
                <a
                    href="https://etherscan.io/address/{connectedAccount}"
                    target="_blank"
                >
                    {connectedAccount}
                </a>
            </td>
            <td> 2 OSC </td>
            <td> 10 ETH </td>
        </table>
    {:else}
        {message}
        <p />
        Option 1: Use
        <a href="https://brave.com" target="_blank">https://brave.com</a>
        <p />
        Option 2: Use
        <a href="https://metamask.io" target="_blank">https://metamask.io</a>
    {/if}

    <p />

    {#if connectedAccount == "" && complete && hasBrowserWallet}
        <button on:click={connect}>Connect To Your Browserwallet</button>
    {/if}

    <!-- <button on:click={disconnect}>Disconnect From Browserwallet </button> -->
</div>

<style>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td,
    th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }

    button {
        text-align: center;
    }
    #metamask {
        text-align: center;
    }
</style>
