const kataList = [

    ];

    function generateKata() {
      const kataContainer = document.getElementById("kataContainer");
      kataContainer.value = "";

      // Mengacak urutan kata
      const shuffledKata = shuffleArray(kataList);

      // Menggabungkan 12 kata menjadi kalimat
      const kalimat = shuffledKata.slice(0, 12).join(" ");

      kataContainer.value = kalimat;
    }

    function shuffleArray(array) {
      // Algoritma Durstenfeld shuffle (Fisher-Yates shuffle modern)
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function copyToClipboard() {
      const kataContainer = document.getElementById("kataContainer");
      kataContainer.select();
      document.execCommand("copy");
    }

    function clearTextarea() {
      const kataContainer = document.getElementById("kataContainer");
      kataContainer.value = "";
    }
