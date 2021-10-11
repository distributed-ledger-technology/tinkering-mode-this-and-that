<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  export let showMode;
  function showDifferentAccounts() {
    showMode = !showMode;
  }
</script>

<button on:click={showDifferentAccounts}> Show Different Accounts </button>

<style>
</style>
