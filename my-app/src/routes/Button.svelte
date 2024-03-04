<script>
    let darkMode = false;
    
    const toggleDarkMode = () => {
      darkMode = !darkMode;
      document.body.classList.toggle('dark-mode', darkMode);
      localStorage.setItem('darkMode', darkMode.toString());
    };
  
    import { onMount } from 'svelte';
    let showBox = false;
  
    onMount(() => {
      // Set showBox to true on component mount for fade-in effect
      showBox = true;
    });
  </script>
    
  <button on:click={toggleDarkMode}>
    Toggle Dark Mode
  </button>
    
  <style>
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
  