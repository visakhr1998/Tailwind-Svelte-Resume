<!-- Jobdetails.svelte -->
<script>
      export let jobs;
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

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

</style>

<div class="#bg-gray-100 p-4 {classes}">
  <h2 class="text-2xl text-gray-800 leading-7 font-semibold about-me-heading">Job application status</h2>
  <span class="about-me-underline"></span>
  <div class="border-1 text-gray-800 p-4 mt-6 about-me-box">
    <p class="text-gray-800">
    <table>
      <thead>
        <tr>
          <th>Job Name</th>
          <th>Company</th>
          <th>Date Applied</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {#each jobs as job}
          <tr>
            <td>{job.job_name}</td>
            <td>{job.company}</td>
            <td>{job.date_applied}</td>
            <td>{job.status}</td>
          </tr>
        {/each}
      </tbody>
    </table>    
  </div>
</div>
