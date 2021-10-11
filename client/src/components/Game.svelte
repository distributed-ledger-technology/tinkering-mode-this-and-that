<!-- http://localhost:3001/getAccountInfo/apiKey/GCNuPXHiTsX5FTEDhV -->
<script>
  export let apiKey;

  let process = "";
  let apiSecret = "";
  let amount = 0.001;

  async function addToLongPosition() {
    process = "long";
  }

  async function addToShortPosition() {
    process = "short";
  }

  async function reduceLongPosition() {
    process = "reducelong";
  }

  async function reduceShortPosition() {
    process = "reduceshort";
  }

  async function reset() {
    process = "reset";
  }

  function getOptions() {
    let body = {
      apiKey,
      apiSecret,
      amount,
      action: process,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };

    return options;
  }

  async function add() {
    const addurl =
      window.location == "http://localhost:3027/"
        ? `http://localhost:3001/addToPosition`
        : `https://openforce.de/addToPosition`;

    console.log(`calling ${addurl}`);

    fetch(addurl, getOptions());

    alert(
      `add to position triggered - shall be visible here in about 8 seconds`
    );
  }

  async function reduce() {
    const addurl =
      window.location == "http://localhost:3027/"
        ? `http://localhost:3001/reducePosition`
        : `https://openforce.de/reducePosition`;

    console.log(`calling ${addurl}`);

    fetch(addurl, getOptions());

    alert(
      `reduce position triggered - shall be visible here in about 8 seconds`
    );
  }

  async function resetNow() {
    const addurl =
      window.location == "http://localhost:3027/"
        ? `http://localhost:3001/reset`
        : `https://openforce.de/reset`;

    console.log(`calling ${addurl}`);

    fetch(addurl, getOptions());

    alert(`reset triggered - shall be visible here in about 8 seconds`);
  }
</script>

<p><br /></p>
<h2>Manual Intervention Options</h2>

<button on:click={addToLongPosition}> Add To Long Position </button>

<button on:click={addToShortPosition}> Add To Short Position </button>
<p />
<button on:click={reduceLongPosition}> Reduce Long Position </button>

<button on:click={reduceShortPosition}> Reduce Short Position </button>

<p />

<button on:click={reset}> Reset after equity tranfer </button>

<p><br /></p>

{#if process === "long" || process === "short"}
  <input
    type="text"
    name=""
    id="apiSecret"
    bind:value={apiSecret}
    placeholder="Enter Your API Secret..."
  />
  <br />

  <input
    type="number"
    name=""
    id="amount"
    bind:value={amount}
    placeholder="Enter Your API Secret..."
    step="0.001"
  />
  <br />

  <button on:click={add}>
    Add {amount} to BTC {process} now
  </button>
{/if}

{#if process === "reducelong" || process === "reduceshort"}
  <input
    type="text"
    name=""
    id="apiSecret"
    bind:value={apiSecret}
    placeholder="Enter Your API Secret..."
  />
  <br />

  <input
    type="number"
    name=""
    id="amount"
    bind:value={amount}
    placeholder="Enter Your API Secret..."
    step="0.001"
  />
  <br />

  <button on:click={reduce}>
    {process} by {amount} now
  </button>
{/if}

{#if process === "reset"}
  <input
    type="text"
    name=""
    id="apiSecret"
    bind:value={apiSecret}
    placeholder="Enter Your API Secret..."
  />
  <br />

  <button on:click={resetNow}>
    {process} now
  </button>
{/if}

<style>
</style>
