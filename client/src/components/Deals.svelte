<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  import { onMount } from "svelte";

  export let apiKey = "";
  export let deals = [];
  export let all = false;
  export let displayedDeals = [];

  function getDataSourceURL() {
    if (window.location == "http://localhost:3027/") {
      // for maintenance

      return `http://localhost:3001/getDeals/apiKey/${apiKey}`;
    }

    return `https://openforce.de/getDeals/apiKey/${apiKey}`;
  }

  async function allDeals() {
    all = true;
    displayedDeals = deals;
  }

  async function getDeals() {
    try {
      const url = getDataSourceURL();
      deals = await (await fetch(url)).json();

      displayedDeals = [...deals];
      if (all === false) displayedDeals.splice(0, deals.length - 100);
    } catch (error) {
      console.log(error.message);
      alert(`I could not get any data for api key ${apiKey}`);
    }
  }

  onMount(async () => {
    await getDeals();
    setInterval(async () => {
      if (apiKey !== "") {
        await getDeals();
      }
    }, 8 * 1000);
  });
  // import InputField from './InputField.svelte';
</script>

{#if deals.length > 0}
  <h2>Last {displayedDeals.length} Deals</h2>

  {#if !all}
    <button on:click={allDeals}> Show me All Deals </button>
  {/if}
  <p><br /></p>
  <table>
    <tr>
      <th>UTC Time</th>
      <th>Side</th>
      <th>Reduce Only</th>
      <th>Reason</th>
      <th>Asset</th>
      <th>Equity Before This Deal</th>
    </tr>

    {#each displayedDeals as deal}
      <tr>
        <td>{deal.utcTime.split(".")[0].replace("T", " ")}</td>
        <td>{deal.action}</td>
        <td>{deal.reduceOnly}</td>
        <td>{deal.reason}</td>
        <td>{deal.asset}</td>
        <td>{deal.equityBeforeThisDeal.toFixed(2)}</td>
      </tr><tr />{/each}
  </table>
{/if}

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
</style>
