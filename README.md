# 🌌 UZAY SİMÜLASYONU (Space Simulation)

<img width="1919" height="1079" alt="Ekran görüntüsü 2025-12-07 171730" src="https://github.com/user-attachments/assets/682f2384-c7e7-4599-b173-1c597ee88dc2" />


## 🌍 Proje Hakkında / About The Project

**[TR]**
Bu proje, modern web teknolojileri (Three.js & WebGL) kullanılarak geliştirilmiş, etkileşimli ve ultra gerçekçi bir Güneş Sistemi simülasyonudur. Kullanıcılara hem görsel bir şölen sunmayı hem de ansiklopedik bilgilerle eğitmeyi amaçlar. Standart bir modellemenin ötesinde; özel shader'lar, atmosferik ışık kırılımları ve dinamik yörünge mekanikleri içerir.

**[EN]**
This project is an interactive and ultra-realistic Solar System simulation developed using modern web technologies (Three.js & WebGL). It aims to provide both a visual feast and educational value with encyclopedic data. Beyond standard modeling, it features custom shaders, atmospheric refractions, and dynamic orbital mechanics.

---

## 🔗 Canlı Demo / Live Demo

Projeyi aşağıdaki bağlantıdan canlı olarak inceleyebilirsiniz:

👉 **Simülasyonu Başlat / Start Simulation:**
**[https://magnusmaximus77.github.io/gunes-sistemi-simulasyonu/](https://magnusmaximus77.github.io/gunes-sistemi-simulasyonu/)**

---

## 🚀 Özellikler / Features

### 🎨 Görsel & Teknik Detaylar (Visual & Technical)
* **Three.js & WebGL Altyapısı:** Yüksek performanslı 3D render motoru.
* **Özel Shader Yazılımları (GLSL):**
    * 🌞 **Güneş:** Hareketli yüzey ve korona (glow) efekti için özel Vertex/Fragment shader'lar.
    * 🌍 **Atmosfer:** Dünya için gerçekçi atmosferik saçılma ve parlama efektleri.
* **Post-Processing:** `UnrealBloomPass` kullanılarak sinematik parlama ve neon efektleri.
* **Yüksek Çözünürlüklü Dokular:** Gezegen yüzeyleri, bulut katmanları ve yıldız haritası.

### 🔭 Simülasyon Mekanikleri (Simulation Mechanics)
* **Gerçekçi Yörünge Fiziği:** Her gezegenin (ve cüce gezegenlerin: Plüton, Ceres, Eris) güneşe uzaklığına göre hesaplanan göreceli dönüş hızları.
* **Ölçeklendirme Modları:**
    * *Artistic Mode:* Gezegenlerin daha rahat görülebildiği sinematik mod.
    * *True Scale Mode (Gerçek Ölçek):* Evrenin devasa boşluğunu hissettiren, gerçek boyut ve mesafe oranları.
* **İnteraktif Kamera Sistemi:** `OrbitControls` ile serbest dolaşım ve gezegenlere otomatik odaklanma (Focus).

### 🎓 Eğitim & Arayüz (Education & UI)
* **Ansiklopedik Veri Tabanı:** Her gök cismi için sıcaklık, çap, yerçekimi, gün uzunluğu ve ilginç bilgiler (Fun Facts).
* **Holografik Karşılaştırma:** Seçilen gezegenin boyutunu Dünya ile yan yana kıyaslayan hologram modu.
* **HUD (Head-Up Display):** Uzay gemisi kokpiti tarzında tasarlanmış, anlık koordinat ve zaman bilgilerini gösteren modern arayüz.
* **Zaman Kontrolü:** Simülasyon hızını artırma, yavaşlatma veya durdurma imkanı.

---

## 🛠️ Kurulum / Installation

Projeyi kendi bilgisayarınızda geliştirmek için:

1.  Bu repoyu klonlayın:
    ```bash
    git clone [https://github.com/MagnusMaximus77/gunes-sistemi-simulasyonu.git](https://github.com/MagnusMaximus77/gunes-sistemi-simulasyonu.git)
    ```
2.  Proje klasörüne gidin:
    ```bash
    cd gunes-sistemi-simulasyonu
    ```
3.  Bir yerel sunucu başlatın (Python örneği):
    ```bash
    python -m http.server
    ```
4.  Tarayıcınızda şu adrese gidin: `http://localhost:8000`

---

## 🎮 Kontroller / Controls

| Eylem / Action | Kontrol / Input |
| :--- | :--- |
| **Döndür / Rotate** | Sol Tık + Sürükle (Left Click + Drag) |
| **Yakınlaş / Zoom** | Fare Tekerleği (Scroll Wheel) |
| **Kaydır / Pan** | Sağ Tık + Sürükle (Right Click + Drag) |
| **Bilgi Al / Info** | Gezegene Sol Tık (Left Click on Planet) |
| **Odaklan / Focus** | Gezegene Orta Tık (Middle Click on Planet) |

---

## 💻 Teknolojiler / Technologies

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat&logo=javascript)
![Three.js](https://img.shields.io/badge/Three.js-3D%20Engine-black?style=flat&logo=three.js)
![HTML5](https://img.shields.io/badge/HTML5-Structure-orange?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?style=flat&logo=css3)

---

### 👤 Yazar / Author

**Barbaros Retro**
* GitHub: [@MagnusMaximus77](https://github.com/MagnusMaximus77)

---
*License: MIT*
