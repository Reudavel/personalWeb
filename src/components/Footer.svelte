<script>
    let styles = {darkMode : false}
  
    function toggleDarkMode(){
      styles.darkMode = !styles.darkMode;
      window.document.body.classList.toggle("dark-mode");
    }
</script>

<style>
    .Footer-container {
      text-align: center;
    }
</style>

<div class="Footer">
    <div class="Footer-container">
        <button on:click={toggleDarkMode}>
            DarkMode {styles.darkMode ? '🌘' : '🌞'}
        </button> <br>
        Reudavel 2020
    </div>
</div>