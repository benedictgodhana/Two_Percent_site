<template>
    <v-app>
      <!-- Image with Overlay -->
      <v-img
        src="/1645(1).jpg"
        alt="Your Image"
        height="400"
        cover
      >
      <div class="overlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white; font-size: 24px;">
  <section>
	<div class="word1">{{ part }}</div>  </section>
		</div> 
        <!-- Overlay Content -->
        
      </v-img>
  
      
      <!-- Main Content -->
      <v-main>
        <div id="app">
    <v-container elevation="0" outlined>
        <!-- Your main content goes here -->
        <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                
                    <h1 class="" style="color:black;font-size: 24px;font-weight: 600; text-decoration:none">Us and Your Business</h1>
                    <p v-if="showFullParagraph" style="color:black;font-size: 15px;font-weight: 500;">
                     Two Percent is scaling-stage firm that provide business and founders with optimal capital, mentorship, networks and strategic advice. Our team of Finance experts and mentors are geared towards helping our community of founders with the support they need to optimize their business at this stage.
                     We are dedicated to helping  founders and businesses seize the opportunities and reach the growth stage of their business
                      </p>

                    <p v-if="!showFullParagraph" style="color:black;font-size: 15px;font-weight: 500;">
                      Our team understands the challenges and opportunities  of growing a business in Africa and is commited to helping African entrepreneurs succeed and make an impact in their communities
                      
                       
                      Our unique Theatre of Scale initiative empowers entrepreneurs with necessary tools and expertise to rapidly expand their companies by an impressive 500% over the course of just 48 months. We utilize our exclusive Accelerated Growth Framework, which emphasizes the four key change drivers of People, Process, Technology, and Data to accomplish this remarkable feat.<br>
                    </p>

                    <button style="color:blue" @click="toggleParagraphs">{{ showFullParagraph ? 'Read Less' : 'Read More' }}</button>

                   
                </div>
                <div class="col-lg-4 offset-lg-1 p-0">
                    <img class="rounded-lg-3" src="/206912.png" alt="" width="100%" height="100%" style="border-radius: 20px;">
                </div>
            </div>
        </div>
    </v-container>
</div>
        
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        words: [
		  "Are you feeling stuck in your small business?",
      "Is the struggle to transition to a professional company overwhelming and stressful?",
      "Don't worry, We've got your back!",

		  
		],
		part: "",
		i: 0,
		offset: 0,
		len: 0,
		forwards: true,
		skipCount: 0,
		skipDelay: 15,
		speed: 70,
        overlayVisible: false,
        showFullParagraph: false,
      };
    },
    methods: {
      toggleOverlay() {
        this.overlayVisible = !this.overlayVisible;
      },
      toggleParagraphs() {
        this.showFullParagraph = !this.showFullParagraph;
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
  
  <style scoped>
  .image-overlay {
    position: relative;
    height: 400px; /* Set the desired height */
    overflow: hidden;
  }
  
  .image-overlay img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  </style>
  