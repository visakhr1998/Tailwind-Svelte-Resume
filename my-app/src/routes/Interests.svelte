
<!-- AboutMe.svelte -->
<script>
  // Add any script logic here
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  export let classes = "";
  let showBox = false;

  onMount(() => {
    // Set showBox to true on component mount for fade-in effect
    showBox = true;
  });
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
    opacity: 0; /* Set initial opacity to 0 */
    transition: opacity 0.5s ease-in-out; /* Add transition effect */
  }
  .about-me-box:hover {
    background-color: #f8f8f8;
  }
  .about-me-box.visible {
    opacity: 1; /* Set opacity to 1 when the box is visible */
  }
  .fade-transition {
    transition: opacity 0.5s;
  }
  .fade-in {
    opacity: 1;
  }
  .fade-out {
    opacity: 0;
  }
</style>
<div class="#bg-gray-100 p-4 {classes}">
  <h2 class="text-2xl text-gray-800 leading-7 font-semibold about-me-heading">Interests</h2>
  <span class="about-me-underline"></span>
  <div
  class:fade-in="{showBox}"
  class:fade-out="{!showBox}"
  class:visible="{showBox}"
  class="border-1 p-4 mt-6 about-me-box"
>
    <p class="text-gray-800">
      <li>Music</li>
      <li>Movies</li>
      <li>Memes</li>
      <li>Music</li>
    </p>
  </div>
</div>
