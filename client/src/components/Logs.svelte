<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  import {
    SortService,
    Direction,
  } from "https://deno.land/x/sort@v1.1.1/mod.ts";
  import { onMount } from "svelte";

  export let apiKey = "";
  export let logs = [];

  function getDataSourceURL() {
    if (window.location == "http://localhost:3027/") {
      // for maintenance

      return `http://localhost:3001/getLogs/apiKey/${apiKey}`;
    }

    return `https://openforce.de/getLogs/apiKey/${apiKey}`;
  }

  // async function allDeals() {
  //   all = true;
  //   displayedDeals = deals;
  // }

  async function getLogs() {
    try {
      const url = getDataSourceURL();
      logs = await (await fetch(url)).json();

      // alert(logs[0]);
      console.log(logs[0]);

      const sortOptions = [
        { fieldName: "utcTime", direction: Direction.ASCENDING },
      ];

      logs = SortService.sort(logs, sortOptions);

      // displayedDeals = [...deals];
      // logs = logs.splice(0, logs.length - 4);
    } catch (error) {
      console.log(error.message);
      alert(`I could not get any data for api key ${apiKey}`);
    }
  }

  onMount(async () => {
    await getLogs();
    setInterval(async () => {
      if (apiKey !== "") {
        await getLogs();
      }
    }, 4 * 1000);
  });
  // import InputField from './InputField.svelte';
</script>

{#if logs.length > 0}
  <h2>Last {logs.length} Log Entries</h2>

  <!-- {#if !all}
    <button on:click={allDeals}> Show me All Deals </button> -->
  <!-- {/if} -->
  <p><br /></p>
  <table id="terminalStyle">
    <!-- <tr>
      <th>Message</th>
    </tr> -->

    {#each logs as log}
      <tr>
        <!-- <td
          ><a target="_blank" href="https://www.bybit.com/trade/usdt/BTCUSDT"
          >{log.utcTime.split(".")[0].replace("T", " ")}</a
          ></td
          > -->
        <td>{log.message}</td>
      </tr>
    {/each}
  </table>
{/if}

<style>
  table {
    background-color: black;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    /* border: 1px solid #dddddd; */
    text-align: center;
    padding: 8px;
  }

  /* tr:nth-child(even) {
    background-color: black;
    background-color: #dddddd;
  } */

  #terminalStyle {
    background-color: black;
    color: white;
  }
</style>
