<script>
  import Header from "../components/Header.svelte";
  import Main from "../components/Main.svelte";
  import Content from "../components/Content.svelte";
  import Footer from "../components/Footer.svelte";
</script> 

<style>
  :global(body) {
    background-color: #fafafa;
    font-family: "Lato", sans-serif;
    margin: 0;
    padding: 0;
  }

  :global(body.dark-mode){
    background-color: #1d3040;
    color: #bfc2cf
  }
</style>
  
<Header />
<Main>
  <Content />
</Main>
<Footer />