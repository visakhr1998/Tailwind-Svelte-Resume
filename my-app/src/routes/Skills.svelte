
<!-- AboutMe.svelte -->
<script>
  // Add any script logic here
  export let classes = ""
    // Add more skills as needed
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
  <h2 class="text-2xl text-gray-800 leading-7 font-semibold about-me-heading">Skills</h2>
  <span class="about-me-underline"></span>
  <div class="border-1 p-4 mt-6 about-me-box">
    <div class="flex items-center">
      <a class="w-6 text-gray-700 hover:text-orange-600">
        <svg  width = "28" height = "28" fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
          <title>Power BI icon</title>
          <path d="M14.064 12.537c-.725 0-1.313.545-1.313 1.217v5.353c0 .672.589 1.217 1.314 1.217.726 0 1.314-.545 1.314-1.218v-5.352c0-.672-.589-1.217-1.315-1.217zm4.132-4.888c-.726 0-1.314.545-1.314 1.218V19.07c0 .672.59 1.217 1.314 1.217.726 0 1.314-.545 1.314-1.217V8.867c0-.673-.588-1.218-1.314-1.218zm-8.262 3.035c-.725 0-1.313.545-1.313 1.218v7.205c0 .672.589 1.217 1.315 1.217.725 0 1.313-.545 1.313-1.218v-7.205c0-.672-.589-1.217-1.315-1.217zm-4.13 4.398h-.001c-.726 0-1.314.546-1.314 1.218l.001 2.807c0 .672.588 1.217 1.314 1.217.726 0 1.314-.545 1.313-1.218V16.3c0-.673-.588-1.218-1.314-1.218zM24 6.3v9.163c0 1.447-1.27 2.624-2.831 2.624h-.484v-.897h.484c1.027 0 1.863-.775 1.863-1.727V6.3c0-.952-.836-1.726-1.863-1.726H2.831C1.804 4.574.968 5.348.968 6.3v9.163c0 .952.836 1.727 1.863 1.727h.484v.897H2.83C1.27 18.086 0 16.909 0 15.462V6.3c0-1.446 1.27-2.623 2.83-2.623h18.34C22.73 3.676 24 4.853 24 6.3Z"></path>
        </svg>
      </a>
      <div class="ml-2 truncate hover:text-blue-600 cursor-pointer">PowerBI</div>
      </div>
      <div class="flex items-center">
      <a class="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="" target="_blank">
        <svg width ="28" height = "28" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>python</title>
          <path d="M19.212 26.447l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.412 0.412 0.287 0.512 0.1 0.512-0.1 0.412-0.287 0.287-0.412 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.287-0.512-0.1-0.512 0.1zM27.297 8.64l0.35 0.075 0.4 0.15 0.437 0.225 0.45 0.337 0.45 0.437 0.437 0.587 0.4 0.737 0.35 0.912 0.262 1.1 0.175 1.3 0.062 1.537-0.075 1.537-0.2 1.3-0.3 1.075-0.4 0.887-0.45 0.712-0.5 0.562-0.525 0.412-0.525 0.3-0.5 0.2-0.45 0.112-0.4 0.062-0.3 0.025-0.2-0.012h-10.272v1.025h7.298l0.012 3.449 0.025 0.45-0.062 0.425-0.137 0.387-0.212 0.362-0.312 0.312-0.387 0.3-0.475 0.25-0.55 0.212-0.637 0.187-0.725 0.162-0.8 0.112-0.887 0.087-0.962 0.050-1.050 0.012-1.587-0.050-1.337-0.175-1.125-0.25-0.912-0.312-0.737-0.375-0.562-0.412-0.425-0.425-0.312-0.425-0.2-0.412-0.125-0.375-0.050-0.312-0.025-0.25 0.012-0.162v-6.673l0.063-0.8 0.162-0.675 0.262-0.575 0.325-0.475 0.375-0.4 0.412-0.3 0.437-0.25 0.437-0.175 0.412-0.125 0.375-0.075 0.325-0.050 0.262-0.025 0.162-0.012h7.298l0.862-0.062 0.737-0.175 0.625-0.262 0.512-0.35 0.412-0.4 0.337-0.437 0.25-0.45 0.187-0.45 0.125-0.437 0.087-0.4 0.050-0.35 0.025-0.262v-3.824h2.612l0.175 0.012zM10.939 3.704l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.425 0.412 0.275 0.512 0.112 0.512-0.113 0.412-0.275 0.287-0.425 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.275-0.512-0.112-0.512 0.112zM18.812 1.229l1.125 0.25 0.912 0.325 0.737 0.375 0.562 0.4 0.425 0.425 0.312 0.425 0.2 0.412 0.125 0.375 0.050 0.325 0.025 0.25-0.012 0.162v6.673l-0.062 0.787-0.162 0.687-0.262 0.575-0.325 0.475-0.375 0.387-0.412 0.312-0.437 0.237-0.437 0.175-0.412 0.125-0.375 0.087-0.325 0.050-0.263 0.025h-7.46l-0.862 0.062-0.737 0.175-0.625 0.275-0.512 0.337-0.412 0.4-0.337 0.437-0.25 0.45-0.187 0.462-0.125 0.437-0.087 0.4-0.050 0.337-0.025 0.262v3.824h-2.787l-0.262-0.037-0.35-0.087-0.4-0.15-0.437-0.225-0.45-0.325-0.45-0.45-0.437-0.575-0.4-0.737-0.35-0.912-0.262-1.1-0.175-1.312-0.062-1.537 0.075-1.524 0.2-1.3 0.3-1.087 0.4-0.887 0.45-0.712 0.5-0.55 0.525-0.412 0.525-0.3 0.5-0.2 0.45-0.125 0.4-0.062 0.3-0.012h0.2l0.075 0.012h10.197v-1.037h-7.298l-0.012-3.436-0.025-0.462 0.062-0.425 0.137-0.387 0.212-0.35 0.312-0.325 0.387-0.287 0.475-0.25 0.55-0.225 0.637-0.187 0.725-0.15 0.8-0.125 0.887-0.075 0.962-0.050 1.050-0.025 1.587 0.063z"></path>
          </svg>
    </a>
     <div class="ml-2 truncate hover:text-blue-600 cursor-pointer">Python</div>
     </div>
     <div class="flex items-center">
     <a class="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href="" target="_blank">
      <svg width ="28" height = "28"  fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.536 0.235v2.937h-2.624v0.771h2.624v2.937h0.933v-2.937h2.624v-0.771h-2.624v-2.937zM23.579 3.251v4.328h-3.943v1.233h3.943v4.251h1.391l0.009-2.109 0.032-2.099 1.953-0.032 1.943-0.011v-1.233h-3.937v-4.328zM7.036 3.328v4.256h-3.984v1.228h3.984v4.256h1.313v-4.256h4.015v-1.233h-4.015v-4.251zM15.151 10.355v4.791h-4.405v1.584h4.405v4.797h1.709v-4.797h4.411v-1.584h-4.411v-4.791zM28.115 12.421v2.959h-2.688v1.084h2.688v3.015h1.183v-3.015h2.703v-1.084h-2.703v-2.959zM2.631 12.593v2.901h-2.631v0.828h2.631v2.928h0.891v-2.928h2.667v-0.828h-2.709v-2.901zM23.579 18.62v4.339h-4.027v1.235h4.027v4.285h1.427v-4.285h3.979v-1.235h-3.979v-4.339zM6.959 18.631v4.328h-3.943v1.235h3.943v4.255h1.468v-4.255h3.937v-1.235h-3.937v-4.333h-0.733zM15.38 24.735v2.937h-2.625v1.077h2.625v3.016h1.24l0.016-1.489 0.020-1.527h2.631v-1.077h-2.667v-2.937z"></path>
      </svg>
  </a>
      <div class="ml-2 truncate hover:text-blue-600 cursor-pointer">Tableau</div>
  </div>
  </div>
</div>
