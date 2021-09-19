
<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
import Deals from "@/components/Deals.svelte";
export let accountInfo

  // import InputField from './InputField.svelte';

</script>

<h2>General Account Info</h2>

<table>
  <tr>
    <th>Equity</th>
    <th>Available</th>
    <th>Long Position Size</th>
    <th>Unrealized Long Position PNL in %</th>
    <th>Short Position Size</th>
    <th>Unrealized Short Position PNL %</th>
  </tr>

  <tr>
    <td>{accountInfo.equity.toFixed(2)}</td>
    <td>{accountInfo.avaliableBalance.toFixed(2)}</td>
    <td>{accountInfo.longPositionSize.toFixed(2)}</td>
    <td>{accountInfo.longPositionPNLInPercent.toFixed(2)}</td>
    <td>{accountInfo.shortPositionSize.toFixed(2)}</td>
    <td>{accountInfo.shortPositionPNLInPercent.toFixed(2)}</td>
  </tr>

</table>

<p><br></p>

{#if accountInfo !== undefined}
<Deals bind:accountInfo/>
{/if}
  

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
