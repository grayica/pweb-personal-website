
document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelector('a[href="#contact"]').addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });

    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Mode Putih";
    }

    darkModeToggle.addEventListener("click", function (event) {
        event.preventDefault(); 
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "Mode Putih";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "Mode Hitam";
        }
    });
});

const heroes = {
    "Allain": {
        video: "Aset Rahasia/Allain.mp4",
        desc: "Allain adalah hero Fighter/Assassin di Honor of Kings yang mengandalkan serangan pedang cepat dan damage tinggi. Ia memiliki mobilitas tinggi serta kemampuan lifesteal yang membuatnya bisa bertahan lebih lama di pertempuran. Allain juga unik karena dapat menahan serangannya untuk mengisi energi, lalu melepaskannya dalam serangan beruntun yang mematikan. Hero ini cocok untuk pemain yang suka gaya bermain agresif dan solo laning."
    },
    "Donghuang": {
        video: "Aset Rahasia/Donghuang.mp4",
        desc: "Donghuang Taiyi adalah hero Tank/Support di Honor of Kings yang memiliki kemampuan crowd control kuat. Ia dikenal dengan ultimate-nya, yang bisa menahan dan mengunci pergerakan musuh, membuatnya sangat efektif dalam team fight. Selain itu, Donghuang juga memiliki mekanisme lifesteal berbasis damage yang diterima, menjadikannya hero yang sulit untuk ditumbangkan. Hero ini cocok untuk pemain yang suka mengontrol pertarungan dan melindungi rekan satu tim."
    },
    "Erin": {
        video: "Aset Rahasia/Erin.mp4",
        desc: "Erin adalah hero Marksman di Honor of Kings yang mengandalkan serangan jarak jauh dengan damage tinggi. Ia memiliki mobilitas yang baik dan serangan yang semakin kuat seiring waktu, menjadikannya sangat berbahaya di late game. Erin juga memiliki skill yang memungkinkan serangan area dan burst damage, membuatnya efektif dalam team fight. Hero ini cocok untuk pemain yang suka bermain sebagai damage dealer utama dan menjaga posisi dalam pertempuran."
    },
    "Lady Sun": {
        video: "Aset Rahasia/Lady Sun.mp4",
        desc: "Lady Sun (juga dikenal sebagai Sun Shangxiang) adalah hero Marksman di Honor of Kings yang memiliki mobilitas tinggi dan burst damage yang kuat. Ia mengandalkan serangan kritikal dan kecepatan serangan untuk menghabisi musuh dengan cepat. Skill-nya memungkinkan ia untuk menggulingkan diri (dash) guna menghindari serangan musuh sekaligus memperkuat serangan berikutnya. Hero ini sangat cocok untuk pemain yang suka bermain agresif, menyerang dari kejauhan, dan terus bergerak untuk menghindari bahaya. Di late game, Lady Sun bisa menjadi ancaman besar dengan damage yang luar biasa! 🚀🔥"
    },
    "Lam": {
        video: "Aset Rahasia/Lam.mp4",
        desc: "Lam adalah hero Assassin/Fighter di Honor of Kings yang mengandalkan mobilitas tinggi dan burst damage untuk menghabisi musuh dengan cepat. Ia memiliki kemampuan untuk berpindah posisi dengan cepat, membuatnya sulit ditangkap oleh lawan. Selain itu, Lam juga memiliki skill yang memungkinkannya menyerang secara beruntun dan memberikan efek crowd control pada musuh. Hero ini cocok untuk pemain yang suka gaya bermain agresif, melakukan gank, dan mengeliminasi hero musuh dengan cepat sebelum melarikan diri dari pertempuran. 🔥⚡"
    },
    "Li xin": {
        video: "Aset Rahasia/Li Xin.mp4",
        desc: "Li Xin adalah hero Fighter di Honor of Kings yang memiliki dua stance berbeda: Bright Stance dan Dark Stance, yang memungkinkan fleksibilitas dalam bertarung. a. Bright Stance memberikan ketahanan lebih tinggi, cocok untuk bertahan di garis depan. b. Dark Stance meningkatkan damage dan mobilitas, memungkinkan Li Xin untuk memberikan serangan yang lebih agresif. Keunikan Li Xin terletak pada kemampuannya untuk berpindah stance dengan mulus, memberikan kontrol yang baik dalam pertarungan. Hero ini cocok untuk pemain yang suka kombinasi serangan kuat dan fleksibilitas dalam duel. ⚔🔥"
    },
    "Mai": {
        video: "Aset Rahasia/Mai Shiranui.mp4",
        desc: "Mai Shiranui adalah hero Assassin/Mage di Honor of Kings yang mengandalkan mobilitas tinggi dan burst damage. Ia memiliki serangan jarak menengah menggunakan kipas api, serta skill yang memungkinkan dash cepat untuk menghindari serangan atau mengejar musuh. Mai juga dapat memberikan damage area yang berkelanjutan, menjadikannya ancaman dalam team fight. Hero ini cocok untuk pemain yang suka gaya bermain lincah dan agresif, menyerang musuh dari jarak aman lalu melarikan diri sebelum tertangkap."
    },
    "Marcopolo": {
        video: "Aset Rahasia/Marcopolo.mp4",
        desc: "Marco Polo adalah hero Marksman di Honor of Kings yang mengandalkan kecepatan serangan tinggi dan mobilitas lincah. Ia memiliki serangan berbasis skill yang dapat menembakkan peluru secara beruntun, memberikan damage tinggi dalam waktu singkat. Marco Polo juga bisa berpindah posisi dengan cepat, membuatnya sulit ditangkap oleh musuh. Hero ini cocok untuk pemain yang suka gaya bermain agresif dan gesit, menyerang dari kejauhan sambil terus bergerak untuk menghindari serangan lawan. 🔫⚡"
    },
};

function openModal(heroName) {
    const modal = document.getElementById("heroModal");
    const title = document.getElementById("modalTitle");
    const video = document.getElementById("modalVideo");
    const description = document.getElementById("modalDescription");

  
    title.textContent = heroName;
    video.src = heroes[heroName].video; 
    description.textContent = heroes[heroName].desc;

    modal.style.display = "flex";
}


function closeModal() {
    const modal = document.getElementById("heroModal");
    const video = document.getElementById("modalVideo");

    modal.style.display = "none";
    video.src = "";
}

window.onclick = function(event) {
    const modal = document.getElementById("heroModal");
    if (event.target === modal) {
        closeModal();
    }
};

function sendToWhatsApp() {
    var phoneNumber = "+6285748435663"; 
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Harap isi semua bidang!");
        return;
    }

    var whatsappMessage = "Halo, saya ingin menghubungi Anda!%0A%0A" +
                          "*Nama:* " + name + "%0A" +
                          "*Pesan:* " + message;

    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
}
