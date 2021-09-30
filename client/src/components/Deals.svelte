
<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  import { onMount } from 'svelte';

  export let apiKey = ""
  export let deals = []
  
  function getDataSourceURL() {

    if (window.location == 'http://localhost:3027/') { // for maintenance 

      return `http://localhost:3001/getDeals/apiKey/${apiKey}`

    } 

    return `https://openforce.de/getDeals/apiKey/${apiKey}`
    
  }

  async function getDeals() {
  try {
    const url = getDataSourceURL()
    deals = await(await fetch(url)).json()
  }catch(error) {
    console.log(error.message)
    alert(`I could not get any data for api key ${apiKey}`)
  }
}

onMount(async () => {
  setInterval(async()=> {
    if (apiKey !== '') {
      await getDeals()
    }
  }, 8 * 1000)
});
  // import InputField from './InputField.svelte';

</script>

<h2>Last 100 Deals</h2>

<table>
  <tr>
    <th>UTC Time</th>
    <th>Side</th>
    <th>Reduce Only</th>
    <th>Reason</th>
    <th>Asset</th>
    <th>Equity Before This Deal</th>
  </tr>
  
  
    {#each deals as deal}
      <tr>
        <td>{deal.utcTime.split('.')[0].replace('T',' ')}</td>
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
