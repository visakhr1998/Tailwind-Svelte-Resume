<script>
  import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";
  import { writable } from 'svelte/store';
  import { loginStatus } from './loginstatusstore';
  import { goto } from '$app/navigation';
  
  const form = useForm();

  const handleLogin = () => {
    // Replace 'test@gmail.com' and 'test' with your actual login credentials
    if ($form.values.email === 'test@gmail.com' && $form.values.password === 'test') {
      loginStatus.set(true);
      // goto('/jobdetails'); // Navigate to the jobdetails route
      alert('True');
    } else {
      // Handle unsuccessful login
      alert('Invalid credentials. Please try again.');
    }
  };
</script>

<style>
  /* Add your styling here */
  :global(.touched:invalid) {
    border-color: red;
    outline-color: red;
  }

  form {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  h1 {
    text-align: center;
  }

  label {
    display: block;
    margin: 10px 0;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
</style>

{#if $loginStatus}
  <p>Logged In</p>
{:else}
  <form use:form>
    <h1>Login</h1>

    <label>
      Email:
      <input type="email" name="email" use:validators={[required, email]} />
    </label>
    <HintGroup for="email">
      <Hint on="required">This is a mandatory field</Hint>
      <Hint on="email" hideWhenRequired>Email is not valid</Hint>
    </HintGroup>

    <label>
      Password:
      <input type="password" name="password" use:validators={[required]} />
    </label>
    <Hint for="password" on="required">This is a mandatory field</Hint>

    <button disabled={!$form.valid} on:click={handleLogin}>Login</button>
  </form>
{/if}
