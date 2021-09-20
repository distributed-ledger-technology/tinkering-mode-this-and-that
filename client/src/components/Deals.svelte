
<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  
  export let accountInfo
  // import InputField from './InputField.svelte';

</script>

<h2>Deal History</h2>

<table>
  <tr>
    <th>UTC Time</th>
    <th>Side</th>
    <th>Reduce Only</th>
    <th>Reason</th>
    <th>Asset</th>
    <th>Equity Before This Deal</th>
  </tr>
  
  
    {#each accountInfo.dealHistory as deal}
      <tr>
        <td>{deal.utcTime}</td>
        <td>{deal.side}</td>
        <td>{deal.reduceOnly}</td>
        <td>{deal.reason}</td>
        <td>{deal.asset}</td>
        <td>{deal.equityBeforeThisDeal.toFixed(2)}</td>
      
        <tr>
      {/each}
  
</table>


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
