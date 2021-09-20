


<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  import AccountInfo from "@/components/AccountInfo.svelte";
  import Party from "@/components/Party.svelte";

	import { onMount } from 'svelte';

  // import InputField from './InputField.svelte';

    let accountInfo
    let apiKey = ""
  
    function getDataSourceURL() {

      if (window.location == 'http://localhost:3027/') { // for maintenance 

        return `http://localhost:3001/getAccountInfo/apiKey/${apiKey}`

      } 

      return `https://openforce.de/getAccountInfo/apiKey/${apiKey}`
      
    }

    async function getAccountInfo() {
    try {
      const url = getDataSourceURL()
      console.log(`calling ${url}`)
      accountInfo = await(await fetch(url)).json()
      console.log(accountInfo)
    }catch(error) {
      console.log(error.message)
      alert(`I could not get any data for api key ${apiKey}`)
    }
	}

  onMount(async () => {
    setInterval(async()=> {
      if (apiKey !== '') {
        await getAccountInfo()
      }
    }, 8 * 1000)
	});

</script>

<h1>For Friends Only</h1> 
  
Enter Your API Key <p></p>
Example Key (Demo Account): <br><br> GCNuPXHiTsX5FTEDhV <p><br></p>
<input type="text" name="" id="" bind:value={apiKey}>



<button on:click={getAccountInfo}>
  Los
</button>
<p>
  <!-- <InputField /> -->
</p>
<p>
  
    {#if accountInfo !== undefined}
      <AccountInfo bind:accountInfo/>
    {:else}
      <Party/>
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
