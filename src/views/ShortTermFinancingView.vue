<template>
  <v-app>
    <!-- Image with Overlay -->
    <v-img
      src="/stacks-coins-arranged-bar-graph.jpg"
      alt="Your Image"
      height="400"
      cover
    >
    <div class="overlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white; font-size: 24px;">
		<h1 style="font-weight: 900;">Twopercent:</h1>
  <section class="animation">
    <div style="font-weight:bolder"><div>Get Financial Assistance</div></div>
   
  </section>
		</div>       
    </v-img>

    <!-- Main Content -->
    <v-main>
     
<v-container> 
  <br>     
  <div id="featured-3">
    <h2 class="" style="color:black;font-size: 24px;font-weight: 500; text-decoration:none;margin-left: 13px;">We Are Your Best Choice</h2>
    <p style="color:black;font-size: 14px;font-weight: 400;margin-left: 13px;">Outlier Capital Fund makes direct investments in high growth and scalable SMEs and mid-market business We exist to empower SME business through transformative  ownership and funding through provision of finance, mentorship and  markets data driven access insights.</p>

    </div>
  </v-container>
  <v-container class="d-flex flex-column flex-sm-row">

<v-card
  class="mx-auto my-8"
  max-width="344"
  title="Speed and Efficiency
"
  target="_blank"
  rel="noopener"
  width="100%"

></v-card>

<v-card
  class="mx-auto my-8"
  max-width="344"
  title="Flexible Financing Options"
  target="_blank"
  rel="noopener"
  width="100%"
></v-card>

<v-card
  class="mx-auto my-8"
  max-width="344"
  title="Minimal Documentation"
  target="_blank"
  rel="noopener"
  width="100%"

></v-card>

</v-container>


  <v-container>
<div class="container px-4 " id="financial-application">
  <h2 class="" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none">Getting Funded Process</h2>

  <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    <div class="col">
      <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('step-1-image.jpg');">
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <v-icon size="23">mdi-form-select</v-icon>
          <h2 class="mt-5 mb-4  lh-1 fw-bold" style="color:white;font-size: 24px;font-weight: 400; text-decoration:none">Step 1: Fill out the Online Application</h2>
         <p style="color:white;font-size: 14px;font-weight: 500;">Click on start now and complete the online application form. Provide us with essential details about your business, funding requirements, and the purpose of the financing.</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('step-2-image.jpg');">
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <v-icon size="23">mdi-cursor-default-outline</v-icon>
          <h2 class="mt-5 mb-4 display-6 lh-1 fw-bold" style="color:white;font-size: 24px;font-weight: 400; text-decoration:none">Step 2: Initial Assessment</h2>
          <p style="color:white;font-size: 14px;font-weight: 500;">Our team will review your application and conduct an initial assessment of your business's eligibility for funding. We may contact you for additional information or clarification if needed.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('step-2-image.jpg');">
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <v-icon size="23">mdi-file-document-edit-outline</v-icon>
          <h2 class="mt-5 mb-4 display-6 lh-1 fw-bold" style="color:white;font-size: 24px;font-weight: 400; text-decoration:none">Step 3: Funding Proposal</h2>
            <p style="color:white;font-size: 14px;font-weight: 500;">If your application meets our criteria, we will present you with a funding proposal tailored to your specific needs. This proposal will outline the terms, conditions, and repayment structure of the financing.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('step-2-image.jpg');">
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <v-icon size="23">mdi-cash-multiple</v-icon>
          <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style="color:white;font-size: 24px;font-weight: 400; text-decoration:none">Step 4: Funding Disbursement</h2>
          <p style="color:white;font-size: 14px;font-weight: 500;">Upon acceptance of the funding proposal, we will finalize the necessary documentation and disburse the funds to your business account. You can then utilize the funds to address your immediate financial needs.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('step-2-image.jpg');">
        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <v-icon size="23">mdi-lifebuoy</v-icon>
          <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style="color:white;font-size: 24px;font-weight: 400; text-decoration:none">Step 5: Ongoing Support</h2>
          <p style="color:white;font-size: 14px;font-weight: 500;">Throughout the funding period, our team will provide ongoing support and assistance. We are committed to building long-term relationships with our clients and ensuring their continued success.</p>
        </div>
      </div>
    </div>

   
  </div>
</div>

</v-container>

      
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      overlayVisible: false,
    };
  },
  methods: {
    toggleOverlay() {
      this.overlayVisible = !this.overlayVisible;
    },
  },
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
.financial-step-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem; /* Adjust the font size as needed */
    color:gold;
  }
  .card{
    border-radius: 20px;
    
  }
</style>
