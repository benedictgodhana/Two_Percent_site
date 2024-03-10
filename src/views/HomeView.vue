<template>
	
	<v-app>
		
	  <!-- Video container with relative positioning -->
	  <div style="position: relative;">
		<!-- Video using HTML video element -->
		<v-carousel hide-delimiters  cycle :show-arrows="false" class="image" width="100%" height="500">
			<v-carousel-item
				src="1645(1).jpg"
				cover
			></v-carousel-item>
			<v-carousel-item
				src="young-leopard-portrait.jpg"
				cover
			></v-carousel-item>

			</v-carousel>

			
			
		<!-- Overlay text with absolute positioning -->
		 <div class="overlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white; font-size: 24px;">
		<h1 class="word">Twopercent:</h1>
  <section>
	<div class="word1">{{ part }}</div>  </section>
		</div> 
	  </div>
	  <v-container>
	  <div class="flip-card-container">
          <!-- Flip Card 1 -->
          <div class="flip-card elevation-4" style="background:url('1645(1).jpg')">
            <div class="flip-card-front">
              <div class="flip-card-content">
                <h3 style="	color:white;font-size: 15px;font-weight: 700;"><v-icon >mdi-theater</v-icon> Theatre of Scale</h3>
              </div>
            </div>
            <div class="flip-card-back">
              <div class="flip-card-content">
				<h3>Theatre of Scale</h3>
				<p style="	color:black;font-size: 15px;font-weight: 300;">Our Theatre of Scale program equips founders with skills and abilities to exponentially grow their businesses 5X within 48 months, utilizing our exclusive accelerated Growth Framework that focuses on four essential Change drivers: People, Process, Technology and date.</p>
				<v-btn style="background: gold;border-radius: 0 20px 0;" to="/Theatre_of_scale">Read More</v-btn>
              </div>
            </div>
          </div>

          <!-- Flip Card 2 -->
          <div class="flip-card elevation-4" style="background:url('young-leopard-portrait.jpg')">
            <div class="flip-card-front">
              <div class="flip-card-content">
                <h3 style="	color:white;font-size: 15px;font-weight: 700;"><v-icon>mdi-chart-bar</v-icon> Outlier Capital</h3>
              </div>
            </div>
            <div class="flip-card-back">
              <div class="flip-card-content">
				<h3>Outlier Capital</h3>
				<p style="	color:black;font-size: 15px;font-weight: 500;">Outlier Capital Fund makes direct investments in high growth and scalable SMEs businesses. We exist to empower SME businesses through transformative ownership and funding through provision of finance, mentorship and markets data driven access insi </p>
				<v-btn style="background: gold;border-radius: 0 20px 0;" to="/Outlier_  Capital">Read More</v-btn>

			</div>
            </div>
          </div>

          <!-- Flip Card 3 -->
          <div class="flip-card elevation-4" style="background:url('aerial-view-suzhou-overpass(1).jpg');">
            <div class="flip-card-front" >
              <div class="flip-card-content">
                <h3 style="	color:white;font-size: 15px;font-weight: 700;"><v-icon>mdi-cash</v-icon> Short Term Financing</h3>
              </div>
            </div>
            <div class="flip-card-back">
              <div class="flip-card-content">
				<h3>Short Term Financing</h3>
				<p style="	color:black;font-size: 15px;font-weight: 500;">Our partneship offers short-term lending options, including salary advances and inventory financing, supported by a rigorous due diligence process including but not limited to an ID verification and digital KYC compliance solution to reduce the risk default</p>
				<v-btn style="background: gold;border-radius: 0 20px 0;" to="/ShortTermFinancing">Read More</v-btn>

              </div>
            </div>
          </div>

          <!-- Flip Card 4 -->
          <div class="flip-card elevation-4" style="background:url('27409(1).jpg');" >
            <div class="flip-card-front" >
              <div class="flip-card-content">
                <h3 style="	color:white;font-size: 15px;font-weight: 700;"><v-icon>mdi-handshake</v-icon>Business Advisory</h3>
              </div>
            </div>
            <div class="flip-card-back">
              <div class="flip-card-content">
				<h3>Business Advisory</h3>
				<p style="color:black;font-size: 15px;font-weight: 500;" >Our advisory services provide comprehensive corporate finance services, research an market entry strategies to help businesses take advantage of opportunities and avoid costly mistakes</p>
				<v-btn style="background: gold;border-radius: 0 20px 0;">Read More</v-btn>
              </div>
            </div>
			</div>
			</div>
		</v-container>

		<v-container>
			<div class="" width="100%">
  <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 class="fw-bold lh-1" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none">Leading Partner At Investing In High scaling Businesses</h1>
	  <hr style="width: 50%; border-width: 2px;border-style: solid;border-color: black;">
      <p style="	color:black;font-size: 15px;font-weight: 500;">Two Percent is a debt Venture Firm that invests in high-growth businesses in Sub Saharan Africa. Our focus is on scaling-stage businesses that have economically sustainable models, with a special emphasis on female-led and female-owned enterprises.</p>
      
    </div>
    <div class="col-lg-4  p-0  ">
        <img class="rounded-lg-3 excel-image" src="/interaction_9727390 (2).png" alt="" >
    </div>
	<div>
		<v-btn class="invest-btn" style="	background: gold;border-radius: 0 20px;" to="/Outlier_  Capital">Investing with Us</v-btn>
		<v-btn style="margin-left: 5px;	background: gold;border-radius: 20px 0;" to="/ShortTermFinancing">Apply For Funding</v-btn>

		 
	</div>
  </div>
</div>
</v-container>
<v-container>
<div class="" width="100%">
  <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 class=" fw-bold lh-1" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none">Company Theme</h1>
	  <hr style="width: 50%; border-width: 2px;border-style: solid;border-color: black;">
      <p style="color:black;font-size: 15px;font-weight: 500;">At Two Percent, we belive in creating a sustainable future for Africa by supporting entrepreneurs who are passionate about creating positive change. We arre proud to b a part of the solution and are  committed to transforming the economy of Sub-Saharan Africa through entrepreneurship.</p>
     </div>
    <div class="col-lg-4  p-0  ">
        <img class="rounded-lg-3 excel-image" src="/depositphotos_98443252-stock-illustration-tutorial-theme-icon.jpg" alt="" width="100%" >
    </div>
	
  </div>
</div>
	  </v-container>
		
	</v-app>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		words: [
		  "Investing in high growth and scalable businesses across Africa",
		  
		],
		part: "",
		i: 0,
		offset: 0,
		len: 0,
		forwards: true,
		skipCount: 0,
		skipDelay: 15,
		speed: 70
	  };
	},
	methods: {
	  wordFlick() {
		setInterval(() => {
		  if (this.forwards) {
			if (this.offset >= this.words[this.i].length) {
			  ++this.skipCount;
			  if (this.skipCount === this.skipDelay) {
				this.forwards = false;
				this.skipCount = 0;
			  }
			}
		  } else {
			if (this.offset === 0) {
			  this.forwards = true;
			  this.i++;
			  this.offset = 0;
			  if (this.i >= this.len) {
				this.i = 0;
			  }
			}
		  }
		  this.part = this.words[this.i].substr(0, this.offset);
		  if (this.skipCount === 0) {
			if (this.forwards) {
			  this.offset++;
			} else {
			  this.offset--;
			}
		  }
		}, this.speed);
	  }
	},
	mounted() {
	  this.len = this.words.length;
	  this.wordFlick();
	}
  };
  </script>
  
  <style>

.word {
  margin: auto;
  color: white;
  font: 700 normal 2.5em 'tahoma';
  text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;
}
.word1 {
  margin: auto;
  color: white;
  font: 700 normal 1.5em 'tahoma';
  text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;

}
  .link-btn{
	width: 290px;
	height:100%;
  /* Initial styles for the non-hover state */
	background-color: #fff;
	color: #000;
  

    }
  .link-btn:hover {
  /* Styles for the hover state */
  background-color:gold;
  color:black;
}
.excel-image{
	height: 100%;
	widows: 100%;
	max-width: 420px;
	border-radius: 20px;
	margin-left: -20px;
}
.invest-btn{
	margin-left: 30px;
	
}
p {
	text-decoration: none;
}


.animation {
  height:50px;
  overflow:hidden;
  margin-left: 1rem;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height:2.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

.first div {
  background-color:#20a7d8;
}
.second div {
  background-color:#CD921E;
}
.third div {
  background-color:#c10528;
}

@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -5.62rem;}
  30% {margin-top: -5.62rem;}
  40% {margin-top: -11.24rem;}
  60% {margin-top: -11.24rem;}
  70% {margin-top: -5.62rem;}
  80% {margin-top: -5.62rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}

  .image{
	opacity:0.8


}

	.title {
	  font-size: 34px;
	}
  
	.paragraph {
	  font-size: 24px;
	}
  
	.services {
	  background-color: #f5f5f5;
	  padding: 50px 0;
	}
  
	.service-item {
	  background-color: #fff;
	  border-radius: 0 25px 0 25px;
	  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	  margin-bottom: 30px;
	  overflow: hidden;
	}
  
	.service-item .icon {
	  text-align: center;
	  padding: 20px 0;
	}
  
	.service-item .icon img {
	  max-width: 100%;
	  height: auto;
	}
  
	.service-item .main-content {
	  padding: 20px;
	}
  
	.service-item h4 {
	  font-size: 20px;
	  margin-bottom: 10px;
	}
  
	.service-item p {
	  color: #777;
	  font-size: 14px;
	  margin-bottom: 20px;
	}
  
	.main-button a {
	  display: inline-block;
	  padding: 10px 20px;
	  background-color: gold;
	  color: black;
	  text-decoration: none;
	  border-radius: 5px;
	}

	.flip-card-container {
	display: flex;
	perspective: 1000px;
	justify-content: center;
	padding-top: 3%;
	padding-bottom: 3%;

}

.flip-card {
	position: relative;
	margin-right: -5px;
	width:100%;
	height: 350px;
	transform-style: preserve-3d;
	transition: transform 0.5s ease;
	transform-origin: center center;
	border-radius: 10px;
	border: solid 1px #f2f2f2;
	margin-left: 2%;
	border-radius: 0 10px;
	background-color: #313437;
}

.flip-card:hover {
	transition-delay: 0.1s;
	transform: rotateX(180deg);
}

.flip-card-front,
.flip-card-back {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	border-radius: 10px 0;
	

}

.flip-card-front {
	z-index: 2;
	transform: rotateX(0);
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	opacity: 1;
}

.flip-card-back {
	transform: rotateX(180deg);
	background-color: #f2f2f2;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.flip-card-content {
	transition: opacity 0.3s;
	opacity: 1;
}

.flip-card-content h3 {
	margin: 10;
	color: #000;
	text-decoration: none;
	font-size: 20px;
	font-weight:bolder;
}

.flip-card-content a {
	margin: 0;
	color: #007bff;
	text-decoration: none;
}

.flip-card:not(:first-child) .flip-card-content {
	transition-delay: 0.3s;
}
@media (max-width: 880px) {
	.overlay {	
		font-size: 14px;

	
	}

	
	.flip-card-container {
      flex-direction: column;
	  width:100%;
	  height:100%;
    }

    .flip-card {
      margin-bottom: 20px;
	  height: 300px;
	  margin-left: -10px;
	  width:100%;

    }
	.invest-btn{
	margin-left:-10px;
	margin: 5px;
}
.excel-image{
	height: 100%;
	widows: 100%;
	max-width:360px;
	margin-left: 20px;
	margin: 8px;
}
.link-btn{
	width:100%;
	height:100%;
	margin: 8px;
  }
  .link-btn:hover {
  /* Styles for the hover state */
  background-color:gold;
  color:black;
}
.animation {
  height:50px;
  overflow:hidden;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height:1.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
  font-size: 12px;
}

.animation div:first-child {
  animation: text-animation 12s infinite;
}

.first div {
  background-color:#20a7d8;
}
.second div {
  background-color:#CD921E;
}
.third div {
  background-color:#c10528;
}

@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -5.62rem;}
  30% {margin-top: -5.62rem;}
  40% {margin-top: -11.24rem;}
  60% {margin-top: -11.24rem;}
  70% {margin-top: -5.62rem;}
  80% {margin-top: -5.62rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}
h3{
	font-size: 19px;
}


}
		</style>
  