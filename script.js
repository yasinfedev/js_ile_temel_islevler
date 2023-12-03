// Toplama Fonksiyonu

      function toplaminiBul() {
        var ilkSayi = Number(document.getElementById("ilkSayi").value);
        var ikinciSayi = Number(document.getElementById("ikinciSayi").value);
        var sonucToplam = ilkSayi + ikinciSayi;
    
        document.getElementById("sonuc1").value = sonucToplam;
      }

      // Çıkartma Fonksiyonu

      function farkiniBul() {
        var ilkSayi = Number(document.getElementById("ilkSayi").value);
        var ikinciSayi = Number(document.getElementById("ikinciSayi").value);
        var sonucFark = ilkSayi - ikinciSayi;
    
        document.getElementById("sonuc2").value = sonucFark;
      }

      // Çarpma Fonksiyonu

      function carpiminiBul() {
        var ilkSayi = Number(document.getElementById("ilkSayi").value);
        var ikinciSayi = Number(document.getElementById("ikinciSayi").value);
        var sonucCarpim = ilkSayi * ikinciSayi;
    
        document.getElementById("sonuc3").value = sonucCarpim;
      }

      // Bölme Fonksiyonu

      function bolumunuBul() {
        var ilkSayi = Number(document.getElementById("ilkSayi").value);
        var ikinciSayi = Number(document.getElementById("ikinciSayi").value);
        if (ikinciSayi !== 0) {
          var sonucBolum = ilkSayi % ikinciSayi;
          document.getElementById("sonuc4").value = sonucBolum;
        } else {
          alert("Bir sayıyı sıfıra bölemezsiniz. Lütfen ikinci sayıyı değiştirin.");
        }
      }

      // String Birleştirme Fonksiyonu

     function metiniBirlestir() {
        var ilkMetin = document.getElementById("ilkMetin").value;
        var ikinciMetin = document.getElementById("ikinciMetin").value;

        if (typeof ilkMetin === 'string' && typeof ikinciMetin === 'string') {
        var sonucBirlestir = ilkMetin + " " + ikinciMetin;
        document.getElementById("sonuc6").value = sonucBirlestir;
        } else {
        alert("Girilen değerler metin türünde değil. Lütfen metinleri kontrol edin.");
        }
      }



