
// ==========================================
// SHADER TANIMLARI
// ==========================================
export const sunVertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const sunFragmentShader = `
uniform sampler2D globeTexture;
uniform float time;
varying vec2 vUv;
varying vec3 vNormal;
void main() {
    vec4 texColor = texture2D(globeTexture, vUv);
    float intensity = 1.05 - dot(vNormal, vec3(0.0, 0.0, 1.0));
    vec3 glow = vec3(1.0, 0.5, 0.0) * pow(intensity, 3.0);
    gl_FragColor = vec4(texColor.rgb * 1.2 + glow * (0.8 + 0.2*sin(time)), 1.0);
}
`;

export const atmosphereVertexShader = `
varying vec3 vNormal;
void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.05);
}
`;

export const atmosphereFragmentShader = `
varying vec3 vNormal;
void main() {
    float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
    gl_FragColor = vec4(0.2, 0.5, 1.0, 1.0) * intensity;
}
`;

export const starVertexShader = `
uniform float time;
attribute float size;
varying float vOpacity;
void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    // Twinkle effect - çok daha yumuşak (0.92 base + 0.08 variation)
    vOpacity = 0.92 + 0.08 * sin(time * 0.8 + position.x * 0.005);
}
`;

export const starFragmentShader = `
uniform vec3 color;
varying float vOpacity;
void main() {
    if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
    gl_FragColor = vec4(color, vOpacity);
}
`;

// ==========================================
// 1. EĞİTİM VERİTABANI (ANSİKLOPEDİ SEVİYESİ) 📚
// ==========================================
export const planetInfo = {
    "GUNES": {
        type: "Yıldız (G Tipi Anakol)",
        temp: "5.500°C (Yüzey) / 15M°C (Çekirdek)",
        diameter: "1.39 Milyon km (109 x Dünya)",
        day: "27 Dünya Günü (Ekvator)",
        year: "230 Milyon Yıl (Galaktik Tur)",
        gravity: "274 m/s²",
        atmosphere: "%74 Hidrojen, %24 Helyum",
        escapeVelocity: "617.7 km/s",
        discoveryDate: "Tarih öncesi",
        moons: 0,
        life: "İmkansız",
        funFact: "Güneş o kadar büyüktür ki, Güneş Sistemi'ndeki toplam kütlenin %99.86'sını tek başına oluşturur.",
        desc: "Sistemimizin enerji kaynağıdır. Çekirdeğindeki nükleer füzyon sayesinde her saniye 600 milyon ton hidrojeni helyuma dönüştürür."
    },
    "Merkür": {
        type: "Karasal Gezegen",
        temp: "430°C (Gündüz) / -180°C (Gece)",
        diameter: "4.880 km",
        day: "59 Dünya Günü",
        year: "88 Dünya Günü",
        gravity: "3.7 m/s²",
        atmosphere: "Yok (Çok ince Ekzosfer)",
        escapeVelocity: "4.3 km/s",
        discoveryDate: "Tarih öncesi",
        moons: 0,
        life: "Olası Değil",
        funFact: "Merkür'de bir yıl, bir günden daha kısadır.",
        desc: "Güneş'e en yakın ve sistemin en küçük gezegenidir. Atmosferi olmadığı için gece ve gündüz sıcaklık farkı inanılmaz boyuttadır."
    },
    "Venüs": {
        type: "Karasal Gezegen",
        temp: "464°C (Kurşunu eritebilir)",
        diameter: "12.104 km",
        day: "243 Dünya Günü (Ters Yön)",
        year: "225 Dünya Günü",
        gravity: "8.87 m/s²",
        atmosphere: "%96 Karbondioksit (Çok Yoğun)",
        escapeVelocity: "10.4 km/s",
        discoveryDate: "Tarih öncesi",
        moons: 0,
        life: "Zor (Üst atmosferde mikrop ihtimali)",
        funFact: "Venüs, diğer gezegenlerin aksine doğudan batıya (ters) döner.",
        desc: "Gökyüzündeki en parlak gezegen olduğu için 'Çoban Yıldızı' da denir. Korkunç sera etkisi yaratır."
    },
    "Dünya": {
        type: "Karasal Gezegen",
        temp: "15°C (Ortalama)",
        diameter: "12.742 km",
        day: "23 Saat 56 Dakika",
        year: "365.25 Gün",
        gravity: "9.80 m/s² (1G)",
        atmosphere: "%78 Azot, %21 Oksijen",
        escapeVelocity: "11.2 km/s",
        discoveryDate: "—",
        moons: 1,
        life: "VAR (Bilinen tek yer)",
        funFact: "Dünya tam bir küre değil, kutuplardan basık bir 'Geoid' şeklindedir.",
        desc: "Evrende yaşam barındırdığı bilinen tek gök cismidir. Yüzeyinin %70'i okyanuslarla kaplıdır."
    },
    "Ay": {
        type: "Doğal Uydu",
        temp: "-23°C (Ortalama)",
        diameter: "3.474 km",
        day: "27.3 Gün",
        year: "27.3 Gün (Dünya Çevresinde)",
        gravity: "1.62 m/s²",
        atmosphere: "Yok",
        escapeVelocity: "2.4 km/s",
        discoveryDate: "Tarih öncesi",
        moons: 0,
        life: "Yok",
        funFact: "Ay her yıl Dünya'dan yaklaşık 3.8 cm uzaklaşmaktadır.",
        desc: "Dünya'nın tek doğal uydusudur. Okyanuslardaki gelgit olaylarının ana sebebidir."
    },
    "Mars": {
        type: "Karasal Gezegen",
        temp: "-65°C (Ortalama)",
        diameter: "6.779 km",
        day: "24 Saat 37 Dakika",
        year: "687 Dünya Günü",
        gravity: "3.71 m/s²",
        atmosphere: "İnce Karbondioksit",
        escapeVelocity: "5.0 km/s",
        discoveryDate: "Tarih öncesi",
        moons: 2,
        life: "Geçmişte olabilir / Araştırılıyor",
        funFact: "Güneş sisteminin en yüksek dağı olan Olympus Mons (21km) buradadır.",
        desc: "Yüzeyindeki demir oksit nedeniyle 'Kızıl Gezegen' olarak bilinir. Kolonizasyonun bir numaralı hedefidir."
    },
    "Jüpiter": {
        type: "Gaz Devi",
        temp: "-110°C (Bulut Tepesi)",
        diameter: "139.820 km (11 x Dünya)",
        day: "9 Saat 56 Dakika",
        year: "11.86 Yıl",
        gravity: "24.79 m/s²",
        atmosphere: "Hidrojen, Helyum",
        escapeVelocity: "59.5 km/s",
        discoveryDate: "Tarih öncesi",
        moons: 95,
        life: "İmkansız (Uydusu Europa'da olabilir)",
        funFact: "Jüpiter diğer tüm gezegenlerin toplam kütlesinden 2.5 kat daha ağırdır.",
        desc: "Gezegenlerin kralı. 'Büyük Kırmızı Leke' Dünya'dan daha büyük devasa bir fırtınadır."
    },
    "Satürn": {
        type: "Gaz Devi",
        temp: "-140°C",
        diameter: "116.460 km",
        day: "10 Saat 34 Dakika",
        year: "29.45 Yıl",
        gravity: "10.44 m/s²",
        atmosphere: "Hidrojen, Helyum",
        escapeVelocity: "35.5 km/s",
        discoveryDate: "Tarih öncesi",
        moons: 146,
        life: "İmkansız (Uydusu Enceladus'ta olabilir)",
        funFact: "Satürn'ün yoğunluğu sudan düşüktür. Yeterince büyük okyanusta yüzerdi.",
        desc: "Muazzam halka sistemiyle tanınır. Halkalar milyarlarca buz, toz ve kaya parçasından oluşur."
    },
    "Uranüs": {
        type: "Buz Devi",
        temp: "-195°C",
        diameter: "50.724 km",
        day: "17 Saat 14 Dakika",
        year: "84 Yıl",
        gravity: "8.69 m/s²",
        atmosphere: "Hidrojen, Helyum, Metan",
        escapeVelocity: "21.3 km/s",
        discoveryDate: "1781 (William Herschel)",
        moons: 28,
        life: "İmkansız",
        funFact: "Uranüs, yörüngesinde 'yuvarlanarak' ilerler. Ekseni 98 derece yatıktır.",
        desc: "Sistemin en soğuk gezegenidir. Metan nedeniyle turkuaz renge sahiptir."
    },
    "Neptün": {
        type: "Buz Devi",
        temp: "-200°C",
        diameter: "49.244 km",
        day: "16 Saat 6 Dakika",
        year: "165 Yıl",
        gravity: "11.15 m/s²",
        atmosphere: "Hidrojen, Helyum, Metan",
        escapeVelocity: "23.5 km/s",
        discoveryDate: "1846 (Johann Galle)",
        moons: 16,
        life: "İmkansız",
        funFact: "Neptün'de rüzgar hızları saatte 2100 km'ye ulaşabilir. Ses hızından daha hızlı.",
        desc: "Güneş'e en uzak ana gezegendir. Matematiksel hesaplamalarla yeri tahmin edilerek bulundu."
    },
    "Ceres": {
        type: "Cüce Gezegen",
        temp: "-105°C",
        diameter: "946 km",
        day: "9 Saat",
        year: "4.6 Yıl",
        gravity: "0.27 m/s²",
        atmosphere: "Yok (Su buharı izleri)",
        escapeVelocity: "0.51 km/s",
        discoveryDate: "1801 (Giuseppe Piazzi)",
        moons: 0,
        life: "Bilinmiyor",
        funFact: "Asteroit kuşağındaki toplam kütlenin üçte birini tek başına oluşturur.",
        desc: "Asteroit Kuşağı'ndaki en büyük cisimdir. Küresel şekil alabilmiş tek asteroittir."
    },
    "Plüton": {
        type: "Cüce Gezegen",
        temp: "-229°C",
        diameter: "2.376 km",
        day: "6.4 Gün",
        year: "248 Yıl",
        gravity: "0.62 m/s²",
        atmosphere: "İnce Azot, Metan",
        escapeVelocity: "1.2 km/s",
        discoveryDate: "1930 (Clyde Tombaugh)",
        moons: 5,
        life: "İmkansız",
        funFact: "Plüton'un yüzey alanı, Rusya'nın yüzölçümünden biraz daha küçüktür.",
        desc: "2006'ya kadar 9. gezegen olarak kabul ediliyordu. Kalp şeklinde nitrojen buzulu bulunur."
    },
    "Eris": {
        type: "Cüce Gezegen",
        temp: "-243°C",
        diameter: "2.326 km",
        day: "25.9 Saat",
        year: "557 Yıl",
        gravity: "0.82 m/s²",
        atmosphere: "Donmuş Metan",
        escapeVelocity: "1.4 km/s",
        discoveryDate: "2005 (Mike Brown)",
        moons: 1,
        life: "İmkansız",
        funFact: "Eris o kadar uzaktır ki, oradan bakıldığında Güneş sadece parlak bir yıldız gibi görünür.",
        desc: "Keşfi, 'gezegen' tanımının değişmesine ve Plüton'un cüce gezegen sınıfına düşmesine neden olmuştur."
    },
    "Halley": {
        type: "Kuyruklu Yıldız (Comet)",
        temp: "Güneş'e yaklaştıkça artar",
        diameter: "11 km (Çekirdek)",
        day: "2.2 Gün (Dönüş)",
        year: "76 Yıl (Yörünge)",
        gravity: "Çok Düşük",
        atmosphere: "Gaz ve Toz (Koma)",
        escapeVelocity: "~0.002 km/s",
        discoveryDate: "1705 (Edmond Halley tahmin)",
        moons: 0,
        life: "İmkansız",
        funFact: "Mark Twain, Halley'in geçtiği yıl doğmuş ve bir sonraki geçişinde hayatını kaybetmiştir.",
        desc: "Tarihin en ünlü kuyruklu yıldızıdır. İnsan ömründe çıplak gözle iki kez görülebilir."
    }
};

