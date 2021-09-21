<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import DidYouKnow from '../components/DidYouKnow.svelte';
	import Map from '../components/Map.svelte';
</script>

<div id="main">
	<div class="wrapper">
		<div id="header">
			<div><a href="/index.html"><img alt="" class="logo" src="images/logo.png" /></a></div>
			<Nav />
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
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" />
	<link
		href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@100;500;800&family=Encode+Sans:wght@100;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style>
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

	#left_container .about_details {
		float: left;
		width: 530px;
		padding: 62px 0 50px 46px;
	}
</style>
