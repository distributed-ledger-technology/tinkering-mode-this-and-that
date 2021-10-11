<script>
  import { onMount } from "svelte";

  let aum = [];
  onMount(async () => {
    setInterval(async () => {
      aum = await getAUM();
    }, 4 * 1000);
  });

  function getDataSourceURL() {
    if (window.location == "http://localhost:3027/") {
      // for maintenance

      return `http://localhost:3001/getAssetsUnderManagementDemoAccounts`;
    }

    return `https://openforce.de/getAssetsUnderManagementDemoAccounts`;
  }

  async function getAUM() {
    try {
      const url = getDataSourceURL();
      const response = await (await fetch(url)).json();
      return response.aum;
    } catch (error) {
      console.log(error.message);
    }
  }
</script>

<table>
  <tr>
    <th>API Key</th>
    <th>Equity</th>
    <th>Available</th>
  </tr>

  {#each aum as asset}
    <tr>
      <td>{asset.apiKey}</td>
      <td>{asset.equity.toFixed(2)}</td>
      <td>{asset.avaliableBalance.toFixed(2)}</td>
    </tr>
  {/each}
</table>

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
