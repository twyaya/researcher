
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
				<div class="right-align">
					<a class="waves-effect waves-light btn-large">閱讀內容</a>
				</div>
				
				<div class="chip chip-one">
				  法律
				</div>
				<div class="chip chip-one">
				  網路
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
				<div class="right-align">
					<a class="waves-effect waves-light btn-large">閱讀內容</a>
				</div>
			
			    <div class="chip chip-two">
			      法律
			    </div>
				<div class="chip chip-two">
				  人權
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
				<div class="right-align">
					<a class="waves-effect waves-light btn-large">閱讀內容</a>
				</div>
				<div class="chip chip-one">
				  法律
				</div>
				<div class="chip chip-one">
				  經濟
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
				<div class="right-align">
					<a class="waves-effect waves-light btn-large" >閱讀內容</a>
				</div>
				
				<div class="chip chip-two">
				  法律
				</div>
				<div class="chip chip-two">
				  科技
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
          <h5 class="header col s12 light">透過普通高中生的眼睛觀察這個世界</h5>
        </div>
      </div>
    </div>
    <div class="parallax"><img  src="images/administration-ancient-architecture-art-208603.jpg" alt="Unsplashed background img 2"></div>
  </div>

</div>`
}

const About = {
	template: '<h1>價格</h1>'
}



const Reference = {
	template: '<h1>價格</h1>'
}


const Questionnaire_content = {
	template: '<h1>價格</h1>'
}

const Article = {
	template: '<h1>自動駕駛車引發法律風暴——探討我國對自動駕駛車的法規規範</h1>'
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
		path:'/questionnaire_content',component:Questionnaire_content
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

	var options = {
	  strings: ['我們是兩個高中生組成的團隊。'],
	  typeSpeed: 70
	};
	
	var typed = new Typed('#type-text', options);
	typed.stop();
	
	
	var wow2 = new WOW(
	  {
		boxClass:     'wow2',
	    callback:     function(box) {
			typed.start();
	    },
	    scrollContainer: null 
	  }
	);
	
	wow2.init();