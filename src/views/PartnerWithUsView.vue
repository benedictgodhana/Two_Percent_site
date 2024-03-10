<template>
    <v-app>
      <!-- Image with Overlay -->
      <v-img src="/image-0041.png" alt="Your Image" height="400" cover>
        <!-- Overlay Content -->
        <v-overlay :value="overlayVisible" @input="toggleOverlay">
          <v-container class="text-center">
            <h1 class="text-white" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none">Partner With Us</h1>
          </v-container>
        </v-overlay>
      </v-img>
  
      <!-- Main Content -->
      <v-main>
<v-container></v-container>
        <div class="container py-4">
   
    <div class="p-5 mb-4 " style="margin-top:-40px">
      <div class="container-fluid py-5">
        <h1 class="" style="color:black;font-size: 24px;font-weight: 500; text-decoration:none;">Partner With Us</h1>
        <p style="color:black;font-size: 15px;font-weight: 500;">Join our community of skilled professionals, retired and current executives, and successful business venture founders who are committed to making a difference in Sub-Saharan Africa. At Two Percent Venture Firm, we believe in the power of mentorship and collaboration to drive the growth of high-potential businesses.</p>
        <v-btn @click="openModal" style="background: gold; border-radius: 0 20px;"><v-icon class="mr-4">mdi-email</v-icon>Contact Us</v-btn>


    <v-dialog v-model="modalVisible" max-width="600">
      <v-card>
        <v-card-title class="text-center" style="background: gold;">Contact Form</v-card-title>
        <v-card-text>
          <v-form action="https://formspree.io/f/mkndgbdv" method="POST">
            <!-- Add your form fields here -->
            <v-text-field v-model="name" label="Name" name="name" required></v-text-field>
            <v-text-field v-model="email" label="Email" name="email" required></v-text-field>
            <v-text-field v-model="contact" label="Contact" name="contact" required></v-text-field>
            <v-textarea v-model="message" label="Message" name="message" required></v-textarea>

            <v-card-actions>
          <v-btn type="submit" color="black" style="background: gold; border-radius: 0 20px;">
            <v-icon left>mdi-check</v-icon>
            Submit
          </v-btn>
          <v-btn @click="closeModal" color="white" style="background: darkblue; border-radius: 20px 0;">
            <v-icon>mdi-close</v-icon>
            Cancel
          </v-btn>
        </v-card-actions>

          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    </div>
<v-container>
    <h2 class=" text-center" style="color:black;font-size: 24px;font-weight: 400; text-decoration:none;">Why Partner With Us?</h2>

    <div class="row align-items-md-stretch" style="margin-top: 20px;">

     
      
      <div class="col-md-6">
        <div >
          <v-expansion-panels>
  <v-expansion-panel
    title="Mentorship Opportunities"
    text="Partner with Two Percent Venture Firm to mentor SMEs, providing valuable guidance for their business scaling challenges. Your expertise is key to their success."
  >
  </v-expansion-panel>
</v-expansion-panels>
        </div>
      </div>

      <div class="col-md-6">
        <div>

          <v-expansion-panels>
  <v-expansion-panel
    title="Impactful Contribution"
    text="Partner with us for sustainable development in Sub-Saharan Africa, bridging opportunity and capital to support high-performance businesses and innovative entrepreneurs."
  >
  </v-expansion-panel>
</v-expansion-panels>
          </div>
      </div>
    </div>

  

    <div class="row align-items-md-stretch py-5">
      
      <div class="col-md-6">
        <div>
          <v-expansion-panels>
  <v-expansion-panel
    title="Access to a Network of Experts"
    text="Join our community of experts passionate about supporting African entrepreneurship, leveraging collective knowledge and resources for meaningful impact."
  >
  </v-expansion-panel>
</v-expansion-panels>
          </div>
      </div>

    
      <div class="col-md-6">
        <div>
          <v-expansion-panels>
  <v-expansion-panel
    title="Be a Change Agent"
    text="Partner with Two Percent Venture Firm to drive positive change in African businesses, promoting economic growth and sustainability."
  >
  </v-expansion-panel>
</v-expansion-panels>
          </div>
      </div>
    </div>
   
    
    
    <br><br>
  </v-container>
</div>
</div>

             </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        overlayVisible: false,
         modalVisible: false,
      name: '',
      email: '',
      message: '',
      };
    },
    methods: {
      toggleOverlay() {
        this.overlayVisible = !this.overlayVisible;
      },
       openModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    submitForm() {
      // Handle form submission logic here
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);

      // You can add further logic, such as making an API request to handle the form data
      // After submission, you may want to close the modal
      this.closeModal();
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
  
  /* Add any additional styles for the cards as needed */
  v-card {
    margin-bottom: 20px;
  }
  </style>
  