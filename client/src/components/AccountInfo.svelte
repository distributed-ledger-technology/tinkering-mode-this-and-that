<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  import Deals from "@/components/Deals.svelte";
  import Logs from "@/components/Logs.svelte";

  export let apiKey;
  export let accountInfo;

  // import InputField from './InputField.svelte';
</script>

<h2>Account Info</h2>

<table>
  <tr>
    <th>Equity</th>
    <th>Available</th>
    <th>Long BTC (unr. PNL)</th>
    <th>Short BTC (unr. PNL)</th>
    <th>Long ETH for Stability </th>
  </tr>

  <tr>
    <td>{accountInfo.equity.toFixed(2)}</td>
    <td>{accountInfo.avaliableBalance.toFixed(2)}</td>
    <td
      >{accountInfo.longPositionSize} ({accountInfo.longPositionPNLInPercent.toFixed(
        2
      )})
    </td>
    <td
      >{accountInfo.shortPositionSize} ({accountInfo.shortPositionPNLInPercent.toFixed(
        2
      )})</td
    >
    <td
      ><a target="_blank" href="https://www.bybit.com/trade/usdt/ETHUSDT"
        >{accountInfo.stabilityPositionSize} ({accountInfo.stabilityPositionPNL.toFixed(
          2
        )})</a
      >
    </td>
  </tr>
</table>

<!-- <p></p>
<h2>Long Term Investments</h2>

<table>
  <tr>
    <th>Equity</th>
    <th>Available</th>
    <th>Long BTC Position Size</th>
    <th>Unrealized Long Position PNL in %</th>
    <th>Short BTC Position Size</th>
    <th>Unrealized Short Position PNL %</th>
  </tr>

  <tr>
    <td>{accountInfo.equity.toFixed(2)}</td>
    <td>{accountInfo.avaliableBalance.toFixed(2)}</td>
    <td>{accountInfo.longPositionSize} </td>
    <td>{accountInfo.longPositionPNLInPercent.toFixed(2)}</td>
    <td>{accountInfo.shortPositionSize}</td>
    <td>{accountInfo.shortPositionPNLInPercent.toFixed(2)}</td>
  </tr>
</table> -->

<p><br /></p>

<Logs bind:accountInfo />

<p><br /></p>

{#if accountInfo !== undefined}
  <Deals bind:apiKey />
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
