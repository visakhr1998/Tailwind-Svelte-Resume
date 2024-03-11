<!-- AboutMe.svelte -->
<script>
  // Add any script logic here
  export let classes = ""
</script>

<style>
  /* Add your styling here */
  .bg-gray-100 {
    background-color: #fff; /* Change the color as needed */
    padding:1rem; /* Adjust padding as needed */
  }

  :global(.col-span-4) {
    grid-column: span 4;
  }

  :global(.row-span-2) {
    grid-row: span 2;
  }

  .border-1 {
    border-width: 1px; /* Adjust border width as needed */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.375rem; /* Adjust border radius as needed */
  }

  .p-4 {
    padding: 1rem; /* Adjust padding as needed */
  }

  .text-2xl {
    font-size: 1.1rem; /* Adjust font size as needed */
  }

  .text-gray-800 {
    color: #2d3748; /* Set text color to gray-800 */
  }

  .leading-7 {
    line-height: 1.75; /* Adjust line height as needed */
  }

  .mt-6 {
    margin-top: 1.5rem; /* Adjust margin-top as needed */
  }

  .font-semibold {
    font-weight: 700; /* Set font weight to semibold */
  }

  .text-indigo-500 {
    color: #991b1b; /* Set text color to indigo-500 */
  }

  .hover:text-indigo-600:hover {
    color: #5a67d8; /* Set text color to indigo-600 on hover */
  }

  /* Additional styling for the heading and underline */
  .about-me-heading {
    color: #991b1b; /* Set heading color to indigo-500 */
    cursor: pointer;
  }

  .about-me-heading:hover {
    color: #374151; /* Set heading color to indigo-500 */
    cursor: pointer;
  }

  .about-me-underline {
    background-color: #e5e7eb; /* Set underline color to indigo-500 */
    height: 3px; /* Adjust underline height as needed */
    width: 7rem; /* Adjust underline width as needed */
    display: block;
    margin-top: 0rem; /* Adjust margin-top as needed */
    cursor: pointer;
  }
  /* Additional styling for the right box placement */
  .about-me-box {
    width: 80%; /* Adjust width as needed */
    max-width: 80rem; /* Adjust max-width as needed */
  }

  .about-me-box:hover {
    background-color: #f8f8f8;
  }
</style>

<div class="#bg-gray-100 p-4 {classes}">
  <h2 class="text-2xl text-gray-800 leading-7 font-semibold about-me-heading">Contact</h2>
  <span class="about-me-underline"></span>

  <div class="border-1 p-4 mt-6 about-me-box">
    <div class="flex items-center mb-4">
      <a class="w-6 text-gray-700 hover:text-orange-600 cursor-pointer" href="mailto:visakh.radhakrishnan@essec.edu">
        <svg width="28" height="28" viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg" class="h-4">
          <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"></path>
        </svg>
      </a>
      <a class="ml-2 text-gray-700 hover:text-blue-600 cursor-pointer" href="mailto:visakh.radhakrishnan@essec.edu">visakh.radhakrishnan@essec.edu</a>
  </div>
  

    <div class="flex items-center mb-4">
      <a class="w-6 text-gray-700" aria-label="Phone number" href="tel:0755442925" target="_blank">
        <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="h-4">
          <path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.639.855-2.313 2.666-2.289 4.916.075 6.948 6.809 18.071 12.309 18.045.541-.003 1.07-.113 1.58-.346.121-.055 2.102-1.029 2.11-1.033zm-2.5-13.621c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"></path>
        </svg>
      </a>
      <div class="ml-2 text-gray-700 truncate hover:text-blue-600 cursor-pointer">0755442925</div>
    </div>

    <div class="flex items-center">
      <a class="w-6 text-gray-700 hover:text-orange-600" aria-label="LinkedIn" href="https://www.linkedin.com/in/visakhr1998/" target="_blank">
        <!-- Replace "your-linkedin-profile" with your actual LinkedIn profile link -->
        <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4">
          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      </a>
      <div class="ml-2 text-gray-700 truncate hover:text-blue-600 cursor-pointer">Linkedin Profile</div>
    </div>

  </div>

</div>


