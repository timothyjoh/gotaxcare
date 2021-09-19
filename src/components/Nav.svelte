<script>
  export let segment
</script>

<nav>
  <ul id="nav">
    <li id="nav-01"><a href="/">Home</a></li>
    <li id="nav-02"><a href="/about_us">About Us</a></li>
    <li id="nav-03"><a href="/special_offers">Special Offers</a></li>
    <li id="nav-04"><a href="/individual_services">Individual Services</a></li>
    <li id="nav-05"><a href="/business_services">Business Services</a></li>
    <li id="nav-06"><a href="/refund_options">Refund Options</a></li>
    <li id="nav-07"><a href="/contact_us">Contact Us</a></li>
  </ul>
</nav>

<style>
  #header .menu {
    float: left;
    width: 769px;
    margin: 26px 0 0 43px;
  }
  #header .menu ul {
    float: left;
    width: 100%;
    list-style: none;
    height: 29px;
  }
  #header .menu ul li {
    float: left;
    width: auto;
    padding: 8px 2px 8px 0;
    background: url(../images/menu_divider.gif) no-repeat right 0;
  }
  #header .menu ul li.divider {
    background: url(../images/home_divider.gif) no-repeat right 0;
  }
  #header .menu ul li a {
    float: left;
    width: auto;
    height: 29px;
    text-indent: -9999px;
  }
  #header .menu ul li.home a {
    float: left;
    width: 63px;
    height: 29px;
    background: url(../images/home.gif) no-repeat 0 0;
  }
  #header .menu ul li.about a {
    float: left;
    width: 81px;
    height: 29px;
    background: url(../images/about.gif) no-repeat 0 0;
  }
  #header .menu ul li.special a {
    float: left;
    width: 116px;
    height: 29px;
    background: url(../images/special.gif) no-repeat 0 0;
  }
  #header .menu ul li.individual a {
    float: left;
    width: 151px;
    height: 29px;
    background: url(../images/individual.gif) no-repeat 0 0;
  }
  #header .menu ul li.business a {
    float: left;
    width: 145px;
    height: 29px;
    background: url(../images/business.gif) no-repeat 0 0;
  }
  #header .menu ul li.testimonials a {
    float: left;
    width: 105px;
    height: 29px;
    background: url(../images/testimonials.gif) no-repeat 0 0;
  }
  #header .menu ul li.contact a {
    float: left;
    width: 96px;
    height: 29px;
    background: url(../images/contact.gif) no-repeat 0 0;
  }
  #header .menu ul li a:hover {
    background-position: 0 -29px;
  }
  #header .menu ul li.last {
    background: none;
    padding-right: 0;
  }

  #nav {
    background: url('/images/nav_bg.gif') no-repeat;
    width: 750px;
    height: 27px;
    padding: 0;
    float: right;
    display: inline;
    margin: 26px 0 0 43px;
  }

  #nav span {
    display: none;
  }

  #nav li,
  #nav a {
    height: 27px;
    display: block;
    text-indent: -9999px;
  }

  #nav li {
    float: left;
    list-style: none;
    display: inline;
  }

  #nav-01 {
    width: 62px;
  }
  #nav-02 {
    width: 78px;
  }
  #nav-03 {
    width: 114px;
  }
  #nav-04 {
    width: 145px;
  }
  #nav-05 {
    width: 140px;
  }
  #nav-06 {
    width: 121px;
  }
  #nav-07 {
    width: 90px;
  }

  #nav-01 a:hover {
    background: url('/images/nav_bg.gif') 0px -27px no-repeat;
  }
  #nav-02 a:hover {
    background: url('/images/nav_bg.gif') -62px -27px no-repeat;
  }
  #nav-03 a:hover {
    background: url('/images/nav_bg.gif') -140px -27px no-repeat;
  }
  #nav-04 a:hover {
    background: url('/images/nav_bg.gif') -254px -27px no-repeat;
  }
  #nav-05 a:hover {
    background: url('/images/nav_bg.gif') -399px -27px no-repeat;
  }
  #nav-06 a:hover {
    background: url('/images/nav_bg.gif') -539px -27px no-repeat;
  }
  #nav-07 a:hover {
    background: url('/images/nav_bg.gif') -660px -27px no-repeat;
  }
</style>
