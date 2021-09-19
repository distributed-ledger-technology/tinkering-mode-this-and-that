<script>
  import Home from "@/components/Home.svelte";
  // import { page } from '$app/stores'
  import { fade } from "svelte/transition";

  // const apiKey = $page.query.get('apiKey')

// let apiKey = 123

</script>

<body>
  

  <main transition:fade>
    <Home/>
    <p><br></p>
    
  </main>
</body>

<style>

body {
  overflow: scroll; /* Show scrollbars */
}
  
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
