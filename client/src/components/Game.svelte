
<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  
  export let apiKey
  
  let process = ''
  let apiSecret = ''
  let amount = 0.001
  
  async function addToLongPosition() { 
    
    process = 'long'  
    
  }
  
  async function addToShortPosition() { 
    
    process = 'short'  
    
  }
  
  async function deal() { 
    
    let body = {
      apiKey,
      apiSecret,
      amount,
      side: process
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          'Content-Type': 'application/json'
      }
    }


    const url = getGamingURL()
    
    console.log(`calling ${url}`)
    
    const response = await(await fetch(url, options)).json()
    console.log(response)

    alert(`done - shall be visible here in about 8 seconds`)

  }

  function getGamingURL() {

    if (window.location == 'http://localhost:3027/') { // for maintenance 

    return `http://localhost:3001/addToPosition`

  } 

  return `https://openforce.de/addToPosition`

}

</script>

<h2>Gaming Options</h2>

<button on:click={addToLongPosition}>
  Add To Long Position
</button>

<button on:click={addToShortPosition}>
  Add To Short Position
</button>

<p><br></p>

{#if process !== ''}

<input type="text" name="" id="apiSecret" bind:value={apiSecret} placeholder="Enter Your API Secret...">
<br>

<input type="number" name="" id="amount" bind:value={amount} placeholder="Enter Your API Secret..." step="0.001">
<br>

<button on:click={deal}>
  Add {amount} to BTC {process} now
</button>

{/if}



<style>


</style>
