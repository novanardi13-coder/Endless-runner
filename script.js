// Password yang benar
const correctPassword = "13579"; 

// Ambil elemen
const loginDiv = document.getElementById("login");
const secretDiv = document.getElementById("secret");
const errorText = document.getElementById("error");
const fakeText = document.getElementById("fakeText");

// Fungsi cek password
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if(input === correctPassword) {
    loginDiv.style.display = "none";
    secretDiv.style.display = "block";
  } else {
    errorText.textContent = "Password salah!";
  }
}

// Tombol rahasia menuju link
fakeText.addEventListener("click", () => {
  window.location.href = "https://contoh-link-rahasia.com"; // ganti dengan link rahasia
});