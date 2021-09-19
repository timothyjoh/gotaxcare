<script>
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte'
  import DidYouKnow from '../components/DidYouKnow.svelte'
  import Map from '../components/Map.svelte'

  export let segment
</script>

<div id="main">
  <div class="wrapper">
    <div id="header">
      <div><a href="/index.html"><img alt="" class="logo" src="images/logo.png" /></a></div>
      <Nav {segment} />
    </div>
    <div id="body_container" class="minus_posi">
      <div id="left_container">
        <div class="about_details">
          <slot />
        </div>
      </div>
      <div id="right_container">
        <DidYouKnow />
        <Map />
      </div>
    </div>
  </div>

  <Footer />
</div>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@100;500;800&family=Encode+Sans:wght@100;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<style>
  body,
  div,
  ul,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  p {
    padding: 0;
    margin: 0;
    font-weight: normal;
  }
  body {
    color: #797979;
    background: url(../images/body_bg.gif) repeat-x 0 0;
  }

  a:focus {
    outline: none;
  }

  a {
    color: #1a8d14;
    text-decoration: none;
  }
  a:hover {
    color: #57c251;
  }

  #main {
    float: left;
    width: 100%;
    background: url(../images/main_bg.jpg) no-repeat center 0;
  }
  .wrapper {
    width: 976px;
    margin: 0 auto;
  }

  #header {
    float: left;
    width: 976px;
    padding: 10px 0px 20px 0px;
  }
  #header .logo {
    float: left;
    width: 150px;
  }
  #header .logo img {
    float: left;
  }

  #body_container {
    float: left;
    width: 976px;
    background: url(../images/body_container_bg1.jpg) no-repeat 0 0;
    padding-bottom: 15px;
  }
  #body_container.minus_posi {
    margin-top: -17px;
  }

  #left_container {
    float: left;
    width: 653px;
    position: relative;
  }
  #banner {
    float: left;
    width: 645px;
    border: 8px solid #007a00;
    border-right: none;
  }
  #banner img {
    float: left;
  }
  #left_container .done_right_details {
    float: left;
    width: 565px;
    padding: 39px 0 40px 31px;
  }
  #left_container .done_right_details h1 {
    float: left;
    width: 442px;
  }
  #left_container .done_right_details h1 img {
    float: left;
    width: 100%;
  }
  #left_container .done_right_details p {
    float: left;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    color: #202020;
    padding-top: 25px;
  }

  #left_container .about_details {
    float: left;
    width: 530px;
    padding: 62px 0 50px 46px;
  }
  #left_container .about_details h1 {
    float: left;
    width: 100%;
    height: 38px;
    background: no-repeat;
    text-indent: -9999px;
  }
  #left_container .about_details p {
    float: left;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    color: #202020;
    padding-top: 25px;
  }
  #left_container .about_details ul {
    float: left;
    width: 513px;
    padding: 25px 0 0 17px;
    list-style: none;
  }
  #left_container .about_details ul li {
    float: left;
    width: 513px;
    padding: 0 0 13px 16px;
    font-size: 14px;
    line-height: 16px;
    color: #202020;
    background: url(../images/about_arrow.gif) no-repeat 0 4px;
  }
  #left_container .sub_details {
    float: left;
    width: 530px;
    padding-top: 37px;
  }
  #left_container .sub_details.space {
    padding-top: 20px;
  }
  #left_container .sub_details h3 {
    float: left;
    width: 100%;
    font-size: 26px;
    line-height: 28px;
    color: #289228;
    padding-bottom: 16px;
  }
  #left_container .sub_details p {
    float: none;
    font-size: 14px;
    line-height: 24px;
    color: #202020;
    padding-top: 5px;
  }
  #left_container .sub_details p.space1 {
    padding-bottom: 15px;
  }
  #left_container .sub_details .photo_details {
    float: left;
    width: 215px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;
    margin-right: 25px;
    display: inline;
  }
  #left_container .sub_details .photo_details .photo {
    float: left;
    width: 190px;
    border: 10px solid #dedede;
    margin-bottom: 6px;
  }
  #left_container .sub_details .photo_details .photo img {
    float: left;
  }
  #left_container .sub_details .photo_details p {
    float: none;
    font-size: 13px;
    line-height: 24px;
    color: #797979;
    font-style: italic;
  }
  #left_container .sub_details .photo_second {
    float: left;
    width: 256px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;
    margin: 20px 15px 0 0;
    display: inline;
  }
  #left_container .sub_details .photo_second .photo {
    float: left;
    width: 231px;
    border: 10px solid #dedede;
    margin-bottom: 6px;
  }
  #left_container .sub_details .photo_second .photo img {
    float: left;
  }
  #left_container .sub_details .photo_second p {
    float: none;
    font-size: 13px;
    line-height: 24px;
    color: #797979;
    font-style: italic;
  }
  #left_container .consectetur {
    float: left;
    width: 485px;
    background: url(/images/quotebox_bg.gif);
    padding: 9px;
    margin: 30px 0 25px;
    display: inline;
    clear: left;
  }
  #left_container .consectetur p {
    float: left;
    width: 452px;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    font-style: italic;
    padding: 16px;
    margin: 0px;
    border: solid #c6c6c6 1px;
  }

  #right_container {
    float: right;
    width: 323px;
  }
  #right_container .psst_details {
    float: left;
    width: 323px;
    background: url(../images/psst_bg.jpg) no-repeat 0 0;
    padding-bottom: 50px;
    margin-top: -32px;
    position: relative;
  }
  #right_container .psst_details .psst {
    float: left;
    width: 243px;
    padding: 50px 0 0 33px;
  }
  #right_container .psst_details .psst img {
    float: left;
  }
  #right_container .psst_details .click {
    float: left;
    width: 161px;
    margin: 0 0 0 82px;
    display: inline;
  }
  #right_container .psst_details .click img {
    float: left;
  }

  #right_container .right_menu {
    float: left;
    width: 265px;
    border: 1px solid #b0b0b0;
    margin: 0px 0 0 21px;
    display: inline;
  }
  #right_container .right_menu ul {
    float: left;
    width: 265px;
    list-style: none;
  }
  #right_container .right_menu ul li {
    float: left;
    width: 265px;
    font-size: 14px;
    line-height: 16px;
    color: #4e4e4e;
    background: url(../images/right_menu_bg.gif) repeat-x 0 0;
    border-bottom: 1px solid #b0b0b0;
  }
  #right_container .right_menu ul li a {
    float: left;
    width: 214px;
    color: #4e4e4e;
    padding: 14px 10px 18px 41px;
    text-decoration: none;
    background: url(../images/right_menu.gif) no-repeat 16px 18px;
  }
  #right_container .right_menu ul li a:hover {
    color: #005b00;
  }
  #right_container .right_menu ul li.active a {
    color: #005b00;
    font-style: italic;
  }
  #right_container .right_menu ul li.last {
    border: none;
  }

  #right_container .our_word {
    float: left;
    width: 275px;
    padding: 20px 0 0 21px;
  }
  #right_container .our_word .photo {
    float: left;
    width: 132px;
  }
  #right_container .our_word .photo img {
    float: left;
  }
  #right_container .our_word .content {
    float: left;
    width: 135px;
    padding-top: 45px;
    margin-left: -4px;
    position: relative;
  }
  #right_container .our_word .content h3 {
    float: left;
    width: 135px;
  }
  #right_container .our_word .content h3 img {
    float: left;
  }
  #right_container .our_word .content p {
    float: left;
    width: 115px;
    font-size: 12px;
    line-height: 20px;
    color: #565656;
    padding: 5px 0 0 20px;
  }
  #right_container .our_word .content p a {
    color: #005b00;
    text-decoration: none;
  }
  #right_container .our_word .content p a:hover {
    text-decoration: underline;
  }

  #right_container .photo_details {
    float: left;
    width: 238px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;
    margin: 104px 0 0 35px;
    display: inline;
  }
  #right_container .photo_details .photo {
    float: left;
    width: 213px;
    border: 12px solid #dedede;
  }
  #right_container .photo_details .photo img {
    float: left;
  }
  #right_container .photo_details p {
    float: left;
    width: 100%;
    font-size: 13px;
    line-height: 20px;
    color: #797979;
    font-style: italic;
    padding-top: 10px;
  }
</style>
