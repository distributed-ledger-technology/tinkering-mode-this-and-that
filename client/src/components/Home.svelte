<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  import AccountInfo from "@/components/AccountInfo.svelte";
  import Game from "@/components/Game.svelte";
  import Show from "@/components/Show.svelte";
  import Party from "@/components/Party.svelte";
  import { onMount } from "svelte";

  // import InputField from './InputField.svelte';

  export let showMode = false;
  let accountInfo;
  let apiKey = "";
  let demoAPIKeys = [
    "GCNuPXHiTsX5FTEDhV",
    "uT3JRHVooieP9FVXH0",
    "rXv8NgUFMYg6Tlq3hk",
  ];

  function getDataSourceURL() {
    if (window.location == "http://localhost:3027/") {
      // for maintenance

      return `http://localhost:3001/getAccountInfo/apiKey/${apiKey}`;
    }

    return `https://openforce.de/getAccountInfo/apiKey/${apiKey}`;
  }

  async function getAccountInfo() {
    try {
      const url = getDataSourceURL();
      accountInfo = await (await fetch(url)).json();
    } catch (error) {
      console.log(error.message);
      alert(`I could not get any data for api key ${apiKey}`);
    }
  }

  onMount(async () => {
    setInterval(async () => {
      let counter = 0;
      if (showMode) {
        if (counter > demoAPIKeys.length - 1) counter = 0;

        apiKey = demoAPIKeys[counter];

        counter++;
      }

      if (apiKey !== "") {
        await getAccountInfo();
      }
    }, 4 * 1000);
  });
</script>

<h1>Volatility Farming</h1>
<a
  target="_blank"
  href="https://github.com/distributed-ledger-technology/cash-services"
>
  <h3>For Friends Only</h3>
</a>

Enter Your API Key

<p />

Example Key (Demo Account):
<br /><br />

GCNuPXHiTsX5FTEDhV

<p><br /></p>

<input type="text" name="" id="" bind:value={apiKey} />

<button on:click={getAccountInfo}> Los </button>

<p>
  {#if accountInfo !== undefined}
    <br />

    <!-- This account uses the following strategy {accountInfo.} - for details explore -->
    This account uses: <b>"{accountInfo.strategy}"</b>
    <br />
    Feel free to add your own strategy
    <a
      target="_blank"
      href="https://deno.land/x/exchange_connectors/src/volatility-farming/investment-advisor"
      >here
    </a>
    <p />

    <br />
    <AccountInfo bind:accountInfo bind:apiKey />

    <br />
    <Game bind:apiKey />

    <p><br /></p>
    <Show bind:apiKey bind:showMode />
    <p><br /></p>

    <a
      target="_blank"
      href="http://localhost:3001/getAssetsUnderManagementDemoAccounts"
      >Assets Under Management - Demo Accounts</a
    >
  {:else}
    <Party />
  {/if}
</p>

<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
