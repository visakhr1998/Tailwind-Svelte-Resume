<!-- Header.svelte -->
<script>
    // Add any script logic here
import Button from "./Button.svelte";
  </script>
  
  <style>
    /* Add your styling here */
    .bg-gray-100 {
      background-color: #f8f9fa; /* Change the color as needed */
      padding: 1rem; /* Adjust padding as needed */
    }

    @media (prefers-color-scheme: dark) {
      .bg-gray-100 {
        background-color: #0f1010; /* Change the color as needed for dark mode */
      }
    }
  
    .border-1 {
      border-width: 1px; /* Adjust border width as needed */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      border-radius: 0.375rem; /* Adjust border radius as needed */
    }
  
    .flex {
      display: flex; /* Set display to flex */
    }
  
    .rounded-t-lg {
      border-top-left-radius: 0.375rem; /* Adjust top-left border radius as needed */
      border-top-right-radius: 0.375rem; /* Adjust top-right border radius as needed */
    }
  
    .bg-black {
      background-color: #000; /* Change the background color as needed */
    }
  
    .w-full {
      width: 100%; /* Set width to 100% */
    }
  
    .h-40 {
      height: 10rem; /* Adjust height as needed */
    }
  
    .w-40 {
      width: 10rem; /* Adjust width as needed */
    }
  
    .overflow-hidden {
      overflow: hidden; /* Set overflow to hidden */
    }
  
    .rounded-full {
      border-radius: 9999px; /* Set border-radius to create a circle */
    }
  
    .relative {
      position: relative; /* Set position to relative */
    }
  
    .p-3 {
      padding: 0.75rem; /* Adjust padding as needed */
    }
  
    .top-10 {
      top: 2.5rem; /* Adjust top position as needed */
    }
  
    .left-5 {
      left: 1.25rem; /* Adjust left position as needed */
    }
  
    .w-16 {
      width: 4rem; /* Adjust width as needed */
    }
  
    .h-16 {
      height: 4rem; /* Adjust height as needed */
    }
  
    .text-white {
      color: #fff; /* Set text color to white */
    }
  
    .font-poppins {
      font-family: 'Poppins', sans-serif; /* Set font-family to Poppins or your desired font */
    }
  
    .font-bold {
      font-weight: 700; /* Set font weight to bold */
    }
  
    .text-heading {
      font-size: 2rem; /* Adjust font size as needed */
    }
  
    .sm:text-4xl {
      font-size: 2.25rem; /* Adjust font size for small screens */
    }
  
    .pl-5 {
      padding-left: 1.25rem; /* Adjust padding-left as needed */
    }
  
    .mt-10 {
      margin-top: 2.5rem; /* Adjust margin-top as needed */
    }
  
    .text-start {
      text-align: start; /* Set text-align to start */
    }
  </style>
  
  <div class="bg-gray-100 p-4">
    <div class="border-1 shadow-lg shadow-gray-700 rounded-lg">
      <!-- top content -->
      <div class="flex rounded-t-lg bg-black sm:px-2 w-full">
        <div class="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
          <img src="./1674073603674.jpg" alt="Visakh Radhakrishnan's profile image" class="h-16 w-16 rounded-full">
        </div>
  
        <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
          <p class="text-white font-poppins font-bold text-heading sm:text-4xl text-2xl">
            VISAKH RADHAKRISHNAN
          </p>
          <p class="text-white text-heading">Data Analyst</p>
        </div>
        <!-- Dark mode button -->
      </div>
    </div>

  </div>
  