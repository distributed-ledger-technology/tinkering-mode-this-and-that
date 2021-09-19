


<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  import AccountInfo from "@/components/AccountInfo.svelte";

	import { onMount } from 'svelte';

  // import InputField from './InputField.svelte';

    let accountInfo
    let apiKey = ""
  
    async function los() {
    const urlParams = new URLSearchParams(window.location.search)
    try {
      const url = `https://openforce.de/getAccountInfo/apiKey/${apiKey}`
      accountInfo = await(await fetch(url)).json()
      console.log(accountInfo)
    }catch(error) {
      alert(`I could not get any data for api key ${apiKey}`)
    }


	}
</script>

<h1>Trading Bot Statistics</h1> 
  
Enter Your API Key <p></p>
Example Key: <br><br> GCNuPXHiTsX5FTEDhV <p><br></p>
<input type="text" name="" id="" bind:value={apiKey}>



<button on:click={los}>
  Los
</button>
<p>
  <!-- <InputField /> -->
</p>
<p>
  
    {#if accountInfo !== undefined}
    <AccountInfo bind:accountInfo/>
      
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
