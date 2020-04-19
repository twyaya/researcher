var active = false;
$(document).ready(
function(){
    $('.carousel').carousel();
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
	$("#more").click(function(){
	  $("#in").toggle();
					
					if (!active) {
						anime({
						  targets: '#more',
						  rotate: {
							value: 180,
							duration: 200,
							easing: 'easeInOutSine'
						  },
						});
						active = true;
					}
					else{
						anime({
						  targets: '#more',
						  rotate: {
							value: 360,
							duration: 200,
							easing: 'easeInOutSine'
						  },
						});
						active = false
					}
					
});
$("#in").hide();

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
					<a class="waves-effect waves-light btn-large" href"AUTO.html">閱讀內容</a>
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
	template: `<div>			 <div class="row">
				 
			    <div class="col s12 m9 l10">
			      <div id="introduction" class="section scrollspy">
			        <h3>自動駕駛車引發法律風暴——探討我國對自動駕駛車的法規規範</h3>
			        <p>人工智慧在近年蓬勃發展，也逐漸進入現代人的日常生活中，有越來越多的人開始對於此技術的發展感到好奇，但大部分的人並未因此去研究關於這項技術發展下所造成的社會問題，例如：特斯拉電動休旅車的自動輔助駕駛技術、Google自動駕駛車的自動駕駛技術在使用過程中造成意外事故的案件，這兩起事故引起了我們對於自動駕駛技術所適用法規及各個國家因應制度的好奇。
			        </p>
					
			      </div>
				  <section style="background-color: #a67a44;margin-top: 4.2rem;">
				  	<div class="container" data-aos="fade-up">	
				  				<article id="Introduction">
				  					<h5>你對自駕車了解多少<span data-aos="fade-down" data-aos-delay="1500">?</span></h5>
				  					<p>人工智慧在近年蓬勃發展，也逐漸進入現代人的日常生活中，有越來越多的人開始對於此技術的發展感到好奇，
				  					但大部分的人並未因此去研究關於這項技術發展下所造成的社會問題，
				  					例如：特斯拉電動休旅車的自動輔助駕駛技術、Google自動駕駛車的自動駕駛技術在使用過程中造成意外事故的案件<img id="more" class="responsive-img" src="https://img.icons8.com/material/18/000000/give-way--v1.png">，
				  					這兩起事故引起了我們對於自動駕駛技術所適用法規及各個國家因應制度的好奇。
				  					
				  					</p>
				  					<div id="in">
				  						<p style="font-size: 1.25rem;margin-top: 0rem;">詳細內容請參考</p>
				  						<a class="link" href="https://www.reuters.com/article/us-tesla-crash/tesla-autopilot-engaged-in-2018-california-crash-drivers-hands-off-wheel-ntsb-idUSKCN1VO22E?feedType=RSS&feedName=technologyNews&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+reuters%2FtechnologyNews+%28Reuters+Technology+News%29">Tesla Autopilot engaged in 2018 California crash; driver's hands off wheel: NTSB</a>
				  						
				  					</div>
				  					
				  					
				  					<p>此網站由小論文衍生出，目的在於互動性地展現出資料以吸引大眾對自駕車的注意。</p>
				  				</article>
				  	</div>
				  </section>
			
			
			      <div id="R1" class="section scrollspy">
			        <p>在西元2018年3月13日發生特斯拉 Model X自撞事故，關於事故原因眾說紛紜，這裡的分析已車輛在ACC失靈的狀態下又未使用手動煞車而造成自撞車禍的情況撰寫。這起車禍相關的法律問題是大重點，先從車禍中駕駛的責任談起。
					</p>
					<h5>（一）、駕駛違反交通法則</h5>
					<p>假設上述事件發生在我國且駕駛有能力做出煞車動作，由於報告顯示車輛沒有要煞車跡象而且事故發生前駕駛雙手並未放在方向盤上，依據道路交通管理處罰條例第４３條第１項</p>
				  </div>
			
			      <div id="R2" class="section scrollspy">
			        <h5>（二）、車輛廠商、系統開發、維護相關者等可能構成過失致死罪 </h5>
			        <p>關於這起事件是否有相關者構成過失致死罪的條件是討論的重點，應該先知道責任歸屬，車輛的部分功能異常或設計不良是開發者的責任，但檢查ACC的自動煞車是否是駕駛的責任，根據交通安全規則第八十九條可以知道手動煞車是駕駛應檢查項目，但沒詳細規定ACC系統的自動煞車，且駕駛也沒能力對車輛內部電子系統檢查，所以對於ACC的異常或設計不良很明顯特斯拉公司要負部分責任，研究者認為根據過失的定義，車輛廠商、系統開發、維護相關者等一定需要負起相關責任，但無人駕駛技術的快速發展，可想而知不可能要求系統研發者等人，為全球的上市車輛都負起擔保責任，比較好的辦法是透過駕駛執照考試的制度，要求駕駛對於此技術有一定的理解，另外如果發生事故，即是能透過鑑定的方式試圖找出車禍發生原因，我國是否具備相當的鑑識技術也待觀察，將駕駛工作交給無人化科技，在交通安全方面富含不確定性。</p>
			        <p>不論是全自動駕駛、自適應巡航(自動輔助駕駛)，都要完全理解其應用上的危險，現今法律規範並不週全，或者說漏洞百出，尤其台灣現今的政治體系不太受到人民的信賴，自駕車的市場與未來相關的法律規範制定，很可能困難重重。</p>
			      </div>
				  

			      <div id="R3" class="section scrollspy">
			        <h5>（三）、應修正的相關法條</h5>
			        <p>道路交通管理處罰條例所定義的汽車駕駛人駕駛汽車肇事並不明確，如果是自動輔助駕駛系統故障直接或間接導致影響當事人駕駛汽車，是否可將責任歸咎於駕駛，駕駛和車商應該承擔的責任又有多少?</p>
			        <p> 也要因應現行的公路法修改車輛安全檢測基準，制定新的檢驗標準和項目，建議制定相關知識的筆試測驗。</p>
			      </div>
				  
				  <div id="R4" class="section scrollspy">
			        <h5>（四）自動駕駛車輛與資訊安全</h5>
					<p>自駕車除了交通問題外還有許多阻礙，例如如何防止遠端控制的自駕車遭受駭客入侵，所以聯合國在2016年底通過汽車自動駕駛安全標準，草案中會制訂網路安全協定、安全行車技術標準等，一般來說使用藍芽技術進行通訊的裝置，容易形成許多漏洞，使用者沒有設定密碼或密碼過於簡單，連接上藍芽的裝置與其他電子通訊設備過於接近，使通訊資料外洩，另外在使用WI-FI的情況下，也可能會有同樣的情形發生，如何防止系統漏洞或使用者容易疏失造成意外是自駕車發展的大難題。</p>
			        <p>不論是全自動駕駛、自適應巡航(自動輔助駕駛)，都要完全理解其應用上的危險，現今法律規範並不週全，或者說漏洞百出，尤其台灣現今的政治體系不太受到人民的信賴，自駕車的市場與未來相關的法律規範制定，很可能困難重重。</p>
				  </div>
				  
				  <div id="R5" class="section scrollspy">
				    <h5>結論</h5>
					<p>目前的法律規範無法因應無人駕駛技術發展所帶來的問題，法律與技術發展應該要並行，建議在自動駕駛及輔助駕駛技術成熟的國家中參考現有法律和未來的立法方向，成立相關小組執行跨部會運作來達到良好的政策推進效果，對於許多無法跟上自駕車與輔助駕駛車風潮的民眾也應該進行教學與宣導，不只是為了讓他們有科學知識上的增長也要提升自己身為國家公民的法律素養。</p>
					<p>經過綜合比較及討論後，作者對於台灣未來將實施的自駕車實驗條例與相關法規提供的建議如下：</p>
				　　<p>一、自動駕駛技術和相關法條尚未成熟，就將自動駕駛車輛投入市場不是明智之舉。</p>
				　  <p>二、要建立妥善的測試及檢驗規則並加強對於自動駕駛技術與交通安全的知識宣導。</p>
				　  <p>三、建立無人車輛及輔助駕駛車輛意外事故調查相關機構。</p>
					<p>四、國家應培育法律、電子工程和資安等相關技術人才投入開發、協助修法。</p>
					<p>五、建立無人駕駛車輛駕駛技術考試。</p>
				  </div>
				  
			    </div>
				
				
			    <div class="col hide-on-small-only m3 l2">
			      <ul class="section table-of-contents">
			        <li><a href="#R1">摘要</a></li>
			        <li><a href="#R2">駕駛違反交通法則</a></li>
					<li><a href="#R3">責任</a></li>
					<li><a href="#R4">應修正的相關法條</a></li>
					<li><a href="#R5">自動駕駛車輛與資訊安全</a></li>
			        <li><a href="#R6">結論與引註資料</a></li>
			      </ul>
			    </div>
			  </div></div>`
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

vm =  new Vue({
            el: '#app',
            router,
            data: {
                Home: '首頁',
                Features: '特色',
                Pricing: '價格',
                Disabled: '停用'
            },
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