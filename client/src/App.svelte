<script>
  import Home from "@/components/Home.svelte";
  // import Metamask from "@/components/Metamask.svelte";
  import { fade } from "svelte/transition";
  import CurrentChallenges from "./components/CurrentChallenges.svelte";
  // import Metamask from "./components/Metamask.svelte";
  import DistributedIntro from "./components/DistributedIntro.svelte";
  import Metamask from "./components/Metamask.svelte";
  import PoolOverview from "./components/PoolOverview.svelte";
</script>

<body>
  <main transition:fade>
    <Home />
    <p><br /></p>

    <!-- <Metamask /> -->
    <!-- <DistributedIntro /> -->
    <DistributedIntro />
    <p />
    <br />
    <p />
    <Metamask />
    <p />
    <br />
    <p />
    <PoolOverview />
    <p />
    <br />
    <p />
    <CurrentChallenges />
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
