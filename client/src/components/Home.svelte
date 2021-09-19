


<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  import AccountInfo from "@/components/AccountInfo.svelte";

	import { onMount } from 'svelte';

  // import InputField from './InputField.svelte';

  let accountInfo, apiKey
  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search)
    apiKey = urlParams.get('apikey');
    // const url = `http://localhost:3001/getAccountInfo/apiKey/${apiKey}`
    const url = `http://65.21.110.40/:3001/getAccountInfo/apiKey/${apiKey}`
    // alert(`reading data from ${url}`)
    try {

      accountInfo = await(await fetch(url)).json()
      console.log(accountInfo)
    }catch(error) {
      alert(`I could not get any data for api key ${apiKey}`)
    }


	})
</script>

<h1>Hello Friend with APIKey {apiKey}</h1>

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
