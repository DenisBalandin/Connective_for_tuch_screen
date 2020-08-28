<template>
	<footer class="content dark">
		<div class='contain'>
			<div class='navs flex_start'>
				<nav class='flex_col_left'>
					<p>Information</p>
						<router-link to='/content/Order-Tracking'>Order Tracking</router-link>
						<router-link to='/content/International-Shipping'>International Shipping</router-link>
						<router-link to='/content/Customer-Reviews'>Customer Reviews</router-link>
						<router-link to='/content/Special-Offers'>Special Offers</router-link>
						<router-link to='/content/Sitemap'>Sitemap</router-link>
						<router-link to='/content/Blog'>Blog</router-link>
				</nav>
				<nav
					v-for='c in footerCategories' 
					class='flex_col_left'>
					<p>{{c.name}}</p>
					<template v-for='page in pages'>
						<router-link 
							v-if='page.category == c.name'
							:to="'/page/'+page.slug">{{page.title}}
						</router-link>
					</template>
				</nav>
				<!-- <nav class='flex_col_left'>
					<p>Customer Service</p>
						<router-link to='/content/About-Us'>About Us</router-link>
						<router-link to='/content/Contact-us'>Contact us</router-link>
						<router-link to='/content/Privacy-Policy'>Privacy Policy</router-link>
						<router-link to='/content/Terms-of-Use'>Terms of Use</router-link>
						<router-link to='/content/Affiliate-Program'>Affiliate Program</router-link>
						<router-link to='/content/Areas-of-Service'>Areas of Service</router-link>
				</nav>
				<nav class='flex_col_left'>
					<p>Help</p>
						<router-link to='/content/FAQs'>FAQs</router-link>
						<router-link to='/content/Return-Policy'>Return Policy</router-link>
						<router-link to='/content/Free-Design-Proofs'>Free Design Proofs</router-link>
						<router-link to='/content/Shipping'>Shipping</router-link>
						<router-link to='/content/Sample-Kit'>Sample Kit</router-link>
				</nav> -->
				<nav class='flex_col_left'>
					<img class='rating' src="../assets/img/rating.png">
					<p class='phone'>1.888.883.7414</p>
				</nav>
			</div>
		</div>
	</footer>
</template>
<style type="text/css">
	@import '../../public/css/footer.css';
</style>

<script type="text/javascript">
const fb = require('../firebaseConfig.js');
const db = fb.default.db;

export default {
	data() {
	    return {
	    	footerCategories: [],
	    	pages: []
	    }
	},
	firestore () {
	    return {
	      footerCategories: db.collection('footer_category'),
	      pages: db.collection('pages')
	    }
	},
	methods: {

	}
}
</script>
