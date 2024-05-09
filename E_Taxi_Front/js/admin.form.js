function validateLogin() {
    var username = document.getElementById('yourUsername').value;
    var password = document.getElementById('yourPassword').value;

    if (username === 'grandcruiseadmin' && password === 'grandcruiseadmin') {
      goTo();
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }

  function goTo() {
    window.location.href = "./drivers.html";
  }