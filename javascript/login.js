// Sayfa yüklendikten sonra scroll olayını dinle
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // İlgili elemanları seç
        var loginContainer = document.querySelector(".login-container");

        // Login kısmının görünür olması için belirlenen scroll yüksekliği (örneğin, 300 piksel)
        var scrollHeightToShowLogin = 300;

        // Sayfa scroll yüksekliğini kontrol et
        if (window.scrollY > scrollHeightToShowLogin) {
            // Gerekli scroll yüksekliğine ulaşıldığında login-container'ı görünür yap
            loginContainer.classList.add("show-login");
        } else {
            // Scroll yüksekliği yeterli değilse login-container'ı gizle
            loginContainer.classList.remove("show-login");
        }
    });
});
