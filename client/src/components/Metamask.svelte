<script>
    import detectEthereumProvider from "https://cdn.skypack.dev/@metamask/detect-provider";
    import { onMount } from "svelte";

    let provider;
    let currentAccount = "";
    let isConnected = false;
    let chainId = "";
    let message = "";
    let connectedAccount = "";

    let complete = false;

    onMount(async () => {
        provider = await detectEthereumProvider();
        if (provider) {
            isConnected = provider.isConnected();
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
            message = `You do not have an Ethereum Browserwallet installed yet. Option 1: Use https://brave.com Option 2: Install https://metamask.io`;
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
</script>

<div id="metamask">
    {#if message === ""}
        <table>
            <tr>
                <th>isConnected</th>
                <th>chainId</th>
                <th>connectedAccount</th>
            </tr>

            <td>
                {isConnected}
            </td>
            <td>
                {chainId}
            </td>
            <td>
                {connectedAccount}
            </td>
        </table>
    {:else}
        {message}
    {/if}

    <p />

    {#if connectedAccount == "" && complete}
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
