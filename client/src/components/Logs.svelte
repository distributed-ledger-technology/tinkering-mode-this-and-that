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

<!-- <svelte:head>
  <script
    type="text/javascript"
    src="https://s3.tradingview.com/tv.js"></script>

  <script type="text/javascript">
    new TradingView.widget({
      width: 980,
      height: 610,
      symbol: "BITSTAMP:BTCUSD",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_785e5",
    });
  </script>
</svelte:head> -->

{#if logs.length > 0}
  <div id="logList">
    <h2>Last {logs.length} Log Entries</h2>

    <p><br /></p>
    <table id="terminalStyle">
      {#each logs as log}
        <tr>
          <td>{log.message}</td>
        </tr>
      {/each}
    </table>
  </div>

  <div id="priceChart">
    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
      <div id="tradingview_785e5" />
      <div class="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP"
          rel="noopener"
          target="_blank"><span class="blue-text">BTCUSD Chart</span></a
        > by TradingView
      </div>
    </div>
    <!-- TradingView Widget END -->

    <!-- <embed
      src="https://www.bybit.com/trade/usdt/BTCUSDT"
      type="text/html"
      width="500"
      height="200"
    /> -->
  </div>
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
