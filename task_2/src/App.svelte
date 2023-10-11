<script lang="ts">
  let amountFrom = 1;
  let amountTo = 0;
  let conversionRate = 2;

  function updateAmountTo() {
    amountTo = amountFrom * conversionRate;
  }


  function updateAmountFrom() {
    amountFrom = amountTo / conversionRate;
  }
</script>

<main>
  <div>
    <label for="amountFrom">From:</label>
    <input type="number" bind:value="{amountFrom}" on:input="{updateAmountTo}" id="amountFrom" />
  </div>
  <div>
    <label for="amountTo">To:</label>
    <input type="number" bind:value="{amountTo}" on:input="{updateAmountFrom}" id="amountTo" />
  </div>

</main>

<style>

</style>
