<template>
	
	<v-app>
		
	  <!-- Video container with relative positioning -->
	  <div style="position: relative;">
		<!-- Video using HTML video element -->
		<v-carousel hide-delimiters  cycle :show-arrows="false" class="image" width="100%" height="400">
			<v-carousel-item
				src="aerial-view-suzhou-overpass(1).jpg"
				cover
			></v-carousel-item>
			</v-carousel>

			<div class="overlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white; font-size: 24px;">
		<h1 class="word">Twopercent:</h1>
  <section>
	<div class="word1">{{ part }}</div>  </section>
		</div> 
	  </div>
			
		

	  
<v-container>
			<div class="" with="100%">
  <div class="row  pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h2 class="" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none"></h2>
      <p style="color:black;font-size: 14px;font-weight: 500;">We invests in high-growth businesses in Sub Saharan Africa, with 60% of its portifolio focused on female-led and female-owned enterprises that have exonomically sustainable  models. Our belief  in the power of entrepreneurship to unlock sustainable economic growth and development drives our commitment to supporting visionary entrepreneurs as they build world-class businesses.</p>
      
    </div>
    <div class="col-lg-4  p-0  ">
        <img class="rounded-lg-3 excel-image" src="/POR-QUE-EXISTIMOS-GRIS-min.png" alt="" >
    </div>
	<div>
		<v-btn class="invest-btn" style="	background: gold;border-radius: 0 20px;" to="/Outlier_  Capital">Investing with Us</v-btn>
		<v-btn style="margin-left: 5px;	background: gold;border-radius: 20px 0;"       @click="openModal">Apply For Funding</v-btn>

		<v-dialog v-model="dialog" max-width="600px">
      <v-card style="border-radius: 10px;">
        <v-card-title style="background: gold;" class="headline text-center">Funding Application Form</v-card-title>
        <v-card-text>
          <!-- Your form content goes here -->
          <!-- For example, you can use v-form and v-text-field components -->
          <v-form>
			<v-row>
              <v-col>
                <v-text-field label="Full Name" v-model="fullName" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Email" v-model="email" required></v-text-field>
              </v-col>
            </v-row>
			<v-text-field label="Business/Organization Name" v-model="businessName"></v-text-field>

			<!-- Purpose of Funding -->
			<v-textarea label="Purpose of Funding" v-model="purpose" required></v-textarea>

			<!-- Funding Amount Requested -->
			<v-text-field label="Funding Amount Requested" v-model="amountRequested" required></v-text-field>

			<!-- Budget -->
			<v-textarea label="Message" v-model="budget" required></v-textarea>

			<!-- Financial Information -->
			

            <!-- Terms and Conditions -->
            <v-checkbox v-model="agreeTerms" label="I agree to the terms and conditions" required></v-checkbox>

			<v-btn @click="submitForm" color="success" class="mr-4">Submit</v-btn>
			<v-btn @click="closeModal" color="primary" class="mr-4">Close</v-btn>

          </v-form>
        </v-card-text>

		
      </v-card>
    </v-dialog>
	</div>
  </div>
</div>
</v-container>
<v-container>
	<div class="" width="100%">
  <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
    <!-- Image column on the left -->
    <div class="col-lg-4">
      <img class="rounded-lg-3 excel-image" src="/download.jpeg" alt=""  >
    </div>

	
    <!-- Text content column on the right -->
    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 class="" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none">Our Ethos</h1>
      <p style="color:black;font-size: 14px;font-weight: 500;">At Two Percent, we have a strong understanding of the African business environment, and we are dedicated to formalizing African businesses and integrating them into the mainstream economy. We offer lending and equity alternatives to entrepreneurs seeking to scale their businesses, with a focus on growth-stage capital.</p>
      <p style="color:black;font-size: 14px;font-weight: 500;">We are committed to promoting economic growth in Africa by investing in businesses that are innovative, scalable, and sustainable. Our portfolio consists of businesses in a wide range of sectors, including technology, healthcare, education, financial services, FMCGs, and retail.</p>
    </div>

    </div>
</div>
<div>
	
</div>
</v-container>
<v-container>
<div width="100%">
  <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 class="" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none">Vision</h1>
    <p style="color:black;font-size: 14px;font-weight: 500;">To bridge the gap between opportunity and capital by presenting the investment market with high-performance business prospects in the region.</p>

    </div>
    <div class="col-lg-4  p-0  ">
        <img class="rounded-lg-3 excel-image" src="/images.png" alt="" >
    </div>
	
  </div>
</div>
</v-container>
<v-container>

<div class="" width="100%">
  <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
	<div class="col-lg-4">
      <img class="rounded-lg-3 excel-image" src="/download.png" alt=""  >
    </div>

	
    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 class="" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none">The House of Thinkers and Visionaries</h1>
    <p style="color:black;font-size: 14px;font-weight: 500;">Our team consists of long-term investment, operating, mentorship, and business development experts backed by nurturing expertise. We understand the challenges and opportunities of growing a business in Africa and are passionate about helping entrepreneurs achieve their full potential. Let us leverage our knowledge, network, and resources to support the growth of your business.</p>

	
    </div>

	<v-btn style="background:black; color:white; font-weight: bolder;" @click="showTeamModal"><v-icon class="mr-4">mdi-account-group</v-icon>Our Team</v-btn>
	

	<v-card style="border-radius: 20px;" elevation="0">
	  <v-card-text>
		<!-- Team members and their positions -->
		<v-row>
		  <v-col v-for="teamMember in teamMembers" :key="teamMember.id" cols="12" md="4">
			<v-img :src="teamMember.image" alt="Team Member" aspect-ratio="1" style="border-radius: 50%;">
			  <v-row class="fill-height align-end">
				<v-col>
				  <div class="white--text text-center" style="color:black;font-weight: bold;background: rgba(255, 255, 255, 0.7)">{{ teamMember.name }}</div>
				  <div class="white--text text-center" style="color:white;font-weight: bold;">{{ teamMember.position }}</div>
				</v-col>
			  </v-row>
			</v-img>
		  </v-col>
		</v-row>
	  </v-card-text>
	 
	</v-card>
   
	
  </div>
</div>
</v-container>
<v-container>

<div class="" width="100%">
  <div class="row  pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 class="" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none">The Law Of Navigation</h1>
    <p style="color:black;font-size: 14px;font-weight: 500;">We invite skilled professionals, retired and current executives, and successful business venture founders to partner with us to mentor SME's with brilliant ideas and provide them with direction.</p>
    <v-btn style="background:gold; color:black; font-weight:400;border-radius: 10px 0;" to="/Theatre_of_scale"><v-icon class="mr-4">mdi-handshake</v-icon>Partner With Us</v-btn>

    </div>
    <div class="col-lg-4  p-0  ">
        <img class="rounded-lg-3 excel-image" src="/download (3).png" alt="" >
    </div>
	
  </div>
</div>
</v-container>
<v-container>

<div class="" width="100%">
  <div class="row  pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 ">
	
    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 class="" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none">Our Strategies</h1>
	  <hr style="width: 50%; border-width: 2px;border-style: solid;border-color: black;">
      <p style="color:black;font-size: 14px;font-weight: 500;"><span style="font-weight: bolder;">Strategic Investments:</span> We identify high-potential, scaling-stage businesses and provide strategic investments to fuel their growth. Our focus is on economically sustainable models that contribute to the long-term success of the businesses we support.</p>
      <p style="color:black;font-size: 14px;font-weight: 500;"><strong>Mentorship and Guidance:</strong> We go beyond financial support, offering mentorship and guidance to entrepreneurs. Our experienced team collaborates with business leaders, sharing insights and expertise to help them navigate challenges and seize opportunities.</p>
	  <p style="color:black;font-size: 14px;font-weight: 500;">    <strong>Commitment to Diversity:</strong> Two Percent is dedicated to promoting diversity and inclusion. We prioritize investments in female-led and female-owned enterprises, recognizing the immense value and innovation that diverse perspectives bring to the business landscape.</p>
		<p style="color:black;font-size: 14px;font-weight: 500;">    Our strategy is not just about investing; it's about creating a positive and lasting impact on the businesses we partner with, contributing to the economic development of the region.</p>
    </div>
	<div class="col-lg-4  p-0  ">
        <img class="rounded-lg-3 excel-image" src="/2362166.png" alt="" >
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
		dialog: false,
      field1: '',
      field2: '',
		words: [
		  "Leading Partners At Investing In High scaling Businesses",
		  
		],
		part: "",
		i: 0,
		offset: 0,
		len: 0,
		forwards: true,
		skipCount: 0,
		skipDelay: 15,
		speed: 70,
      teamModal: false,
      teamMembers: [
        { id: 1, name: 'Kenneth', position: 'CEO', image: '/kenneth.jpg' },
        { id: 2, name: 'Mercy', position: 'CTO', image: '/mercy.jpg' },
		{ id: 2, name: 'Mike', position: 'CTO', image: '/mike.jpg' },
		

        // Add more team members as needed
      ],
    };
  },
  methods: {
    showTeamModal() {
      this.teamModal = true;
    },
    closeTeamModal() {
      this.teamModal = false;
    },
	openModal() {
      this.dialog = true;
    },
    closeModal() {
      this.dialog = false;
    },
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
	margin-right: 10px;
	width:100%;
	height: 400px;
	transform-style: preserve-3d;
	transition: transform 0.5s ease;
	transform-origin: center center;
	border-radius: 10px;
	border: solid 1px #f2f2f2;
	margin-right: 2%;
	margin-left: 2%;
	border-radius: 0 30px;
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
	border-radius: 30px 0;
	

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
	.overlay {	border-radius: 10px;

		display: none;
	}
	
	.invest-btn{
	margin-left:-10px;
	margin: 5px;
}
.excel-image{
	height: 100%;
	widows: 100%;
	max-width:360px;
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
}
		</style>
  