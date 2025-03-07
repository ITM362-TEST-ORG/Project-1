<input type="password" id="password" placeholder="Enter Password">
<button type="button" onclick="togglePassword()">Show</button>

<script>
  function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
</script>
