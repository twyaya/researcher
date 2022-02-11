
$(document).ready(function(){
    $('.carousel').carousel();
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
});

const Home = {
	template: `<div>
	  
	<div class="carousel">
	    <a class="carousel-item" href="#"><img src="images/judge1.jpg"></a>
		<a class="carousel-item" href="#"><img src="images/person-holding-a-burning-news-paper-close-up-photography-2538122.jpg"></a>
		<a class="carousel-item" href="#"><img src="images/article-5d19dbd222a8b.jpg"></a>
		<a class="carousel-item" href="#"><img src="images/8500991120_25b93df38b_b.jpg"></a>
	</div>
      
	<div class="section section-1">
	  <div class="container">
		  <div class="row">
			  <div class="col m6 s12">
				<img class="small-img responsive-img" src="images/judge1.jpg">
			  </div>
			  <div class="col m6 s12">
					<article>
						<h3>網路公審與霸凌</h3>
						<p>在網路世界中的司法體制，其背後潛藏著什麼樣的人性?</p>
					</article>			
					<div class="chip chip-one">
					  法律
					</div>
					<div class="chip chip-one">
					  網路
					</div>
					<br><br><br><br><br><br>
					<div class="right-align">
						<a class="waves-effect waves-light btn-large brown" href="Bully.html">閱讀內容</a>
					</div>	
			  </div>
		  </div>
		</div>
	</div>

	<div class="section section-2">
	  <div class="container">
		  <div class="row">
			  <div class="col m6 s12">
					<article>
						<h3>言論自由之下的亂象</h3>
						<p>假訊息?假新聞?當言論成為破壞社會秩序的武器?我們應該如何應對?</p>
						
					</article>
					<div class="chip chip-two">
					  法律
					</div>
					<div class="chip chip-two">
					  人權
					</div>
					<br><br><br><br><br><br>
					<div class="right-align">
						<a class="waves-effect waves-light btn-large brown" href="Fakenews.html">閱讀內容</a>
					</div>
			  </div>
			  <div class="col m6 s12">
				<img class="small-img responsive-img" src="images/person-holding-a-burning-news-paper-close-up-photography-2538122.jpg">
			  </div>
		  </div>
		</div>
	</div>

	<div class="section section-1">
	  <div class="container">
		  <div class="row">
			  <div class="col  m6 s12">
				<img class="small-img responsive-img" src="./images/article-5d19dbd222a8b.jpg">
			  </div>
			  <div class="col  m6 s12">
					<article>
						<h3>居住正義的辯駁</h3>
						<p>無殼蝸牛運動三十年後，居住正義是否得以伸張?</p>
					</article>
					<div class="chip chip-one">
					  法律
					</div>
					<div class="chip chip-one">
					  經濟
					</div>
					<br><br><br><br><br><br>
					<div class="right-align">
						<a class="waves-effect waves-light btn-large brown" href="Auto.html">閱讀內容</a>
					</div>
			  </div>
		  </div>
		</div>
	</div>

	<div class="section section-2">
	  <div class="container">
		  <div class="row">
			  <div class="col m6 s12">
					<article>
						<h3>隱藏在自動駕駛車下的風暴</h3>
						<p>自駕車事故頻頻發生，背後隱藏著什麼樣的危機?</p>
					</article>	
					<div class="chip chip-two">
					  法律
					</div>
					<div class="chip chip-two">
					  科技
					</div>
					<br><br><br><br><br><br>
					<div class="right-align">
						<a class="waves-effect waves-light btn-large brown" href="Auto.html">閱讀內容</a>
					</div>		
			  </div>
			  <div class="col  m6 s12">
				<img class="small-img responsive-img" src="images/8500991120_25b93df38b_b.jpg">
			  </div>
		  </div>
		</div>
	</div>

	<div class="parallax-container valign-wrapper">
		<div class="section no-pad-bot">
			<div class="container">
				<div class="row center">
				  <h3 class="header col s12 light">透過普通高中生的眼睛觀察這個世界</h3>
				</div>
			  </div>
			</div>
		<div class="parallax"><img  src="images/administration-ancient-architecture-art-208603.jpg" alt="Unsplashed background img 2"></div>
	</div>

	</div>`
}

const About = {
	template: `<div>
		<div class="container">
			<h2 class="center">關於研究者</h2>
			<div class="center">
				<img src="images/logo.jpg">
				<p>透過高中生的眼睛觀察這個世界</p>
			</div>
			<h3>我們是兩個高中生組成的團，對社會議題很關心的我們決定將對議題的看法發表於網路上，我們會將近期研究成果放於此網站上。</h3>
		</div>
		<br><br><br><br><br>
	</div>
	`
}



const Reference = {
	template: '<h1>待補</h1>'
}


const Article = {
	template: '<h1></h1>'
}

const routes = [
	{
		path:'/',component:Home
	},
	{
		path:'/about',component:About
	},
	{
		path:'/reference',component:Reference
	},
	{
		path:'/articles',component:Article
	}
]

const router = new VueRouter({
	routes
})

    new Vue({
        el: '#app',
        router,
        data: {
            Home: '首頁',
            Features: '特色',
            Pricing: '價格',
            Disabled: '停用'
        }
    })
