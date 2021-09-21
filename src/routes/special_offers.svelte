<script>
  var pwin

  function printImg() {
    pwin = window.open(document.getElementById('coupon').src, '_blank')
    setTimeout(() => {
      pwin.print()
    }, 2000)
  }
</script>

<svelte:head>
  <title>Refund Options</title>
</svelte:head>

<h1>Special Offers</h1>
<p>
  Here's an easy way to save <strong>$10</strong> with Tax Care - just print and bring this coupon with
  you when you come to the office!
</p>
<br style="clear: left;" />
<br />
<img alt="" src="/images/coupon.gif" id="coupon" /> <br />
<br />

<style>
  h1 {
    color: #1a8d14;
    font-weight: 500;
    font-family: 'Encode Sans Condensed';
  }
</style>
