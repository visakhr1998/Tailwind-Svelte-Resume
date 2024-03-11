<script>
  import { goto } from '$app/navigation';
  import Login from './Login.svelte';
  const navigateToLogin = () => {
    goto('./Login');
  };

  // Rest of your code...

</script>
<button on:click={navigateToLogin}>
  Go to Login
</button>
  
  <style>
    /* Add styling for the button if needed */
    button {
      padding: 8px 16px;
      background-color: #a5af4c;
      color: #fff;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      transition: background-color 0.3s, transform 0.3s;
    }
  
    button:hover {
      background-color: #45a149;
      transform: translateY(-2px);
    }
  </style>