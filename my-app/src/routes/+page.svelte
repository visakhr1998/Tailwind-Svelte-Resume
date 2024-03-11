<script>
// @ts-nocheck

  import Header from "./Header.svelte";
  import AboutMe from "./AboutMe.svelte";
  import 'tailwindcss/base.css';
  import 'tailwindcss/components.css';
  import 'tailwindcss/utilities.css';
  import Aboutme from "./AboutMe.svelte";
  import Experience from "./Experience.svelte";
  import Languages from "./Languages.svelte";
  import Contact from "./Contact.svelte";
  import Skills from "./Skills.svelte";
  import Interests from "./Interests.svelte";
  import Education from "./Education.svelte";
  import TailwindCss from "$lib/TailwindCSS.svelte";
  import Button from "./Button.svelte";
	import DownloadButton from "./DownloadButton.svelte";
	import Login from "./Login.svelte";
  import { goto } from '$app/navigation';
	import Jobdetails from "./Jobdetails.svelte";
  export let data;
  import {loginStatus} from './loginstatusstore';

</script>

<TailwindCss/>

<Header>
</Header>
<div class="flex items-center">
<Button></Button>
<DownloadButton/>
</div>

{#if $loginStatus}
<div class="parent-container grid">
  <div class="col-span-1 row-span-2">
    <Contact />
    <Skills />
    <Education />
    <Interests />
  </div>
  <div class="col-span-1 row-span-1">
    <Aboutme />
    <Experience />
    <Languages />
    <Jobdetails jobs={data.jobs}/>
  </div>
</div>
{:else}
<div class="parent-container grid">
  <div class="col-span-1 row-span-1">
    <Contact />
    <Skills />
    <Education />
    <Interests />
    <Login/>
  </div>
  <div class="col-span-1 row-span-1">
    <Aboutme />
    <Experience />
    <Languages />
  </div>
</div>
{/if}

<style>
  .parent-container {
    border: 2px rgb(255, 255, 255) solid;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  :global(body) {
		background-color: #ffff;
		color: #0084f6;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #ffffff;
	}
</style>
