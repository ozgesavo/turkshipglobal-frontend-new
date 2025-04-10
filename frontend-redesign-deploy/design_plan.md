# TurkShipGlobal Frontend Yeniden Tasarım Planı

## Genel Tasarım Prensipleri

### Renk Şeması
- **Ana Renk:** Türk bayrağı kırmızısı (#E30A17)
- **Arka Plan:** Siyah (#121212) - Göz yorgunluğunu azaltmak için tam siyah yerine koyu gri tonları
- **Metin Renkleri:** 
  - Başlıklar: Beyaz (#FFFFFF)
  - Normal metin: Açık gri (#E0E0E0)
  - Vurgular: Kırmızı (#E30A17)
- **Aksanlar:** 
  - Butonlar: Kırmızı (#E30A17)
  - Hover durumları: Açık kırmızı (#FF4D4D)
  - Aktif durumlar: Koyu kırmızı (#B30000)

### Tipografi
- **Başlıklar:** Roboto veya Montserrat (Sans-serif)
- **İçerik:** Open Sans veya Lato (Okunabilirlik için)
- **Font Boyutları:**
  - H1: 32px
  - H2: 24px
  - H3: 20px
  - Normal metin: 16px
  - Küçük metin: 14px
- **Font Ağırlıkları:**
  - Başlıklar: Bold (700)
  - Normal metin: Regular (400)
  - Vurgular: Semi-bold (600)

### Kullanıcı Arayüzü Bileşenleri
- **Butonlar:** Yuvarlak köşeli, belirgin hover efektleri
- **Kartlar:** Hafif yuvarlak köşeli, ince kenarlıklar
- **Formlar:** Temiz, minimal, hata mesajları belirgin
- **İkonlar:** Modern, tutarlı set (Material Design veya Font Awesome)
- **Animasyonlar:** Hafif, akıcı geçişler (göz yorgunluğunu artırmayacak şekilde)

## Sayfa Yapıları

### Ortak Bileşenler
- **Header:**
  - Logo (sol üst)
  - Ana navigasyon menüsü (yatay, merkez)
  - Kullanıcı menüsü (sağ üst)
  - Mobil için hamburger menü
- **Footer:**
  - Telif hakkı bilgisi
  - Hızlı linkler
  - İletişim bilgileri
  - Sosyal medya ikonları
- **Sidebar (isteğe bağlı):**
  - Kategori filtreleri
  - Hızlı erişim linkleri

### Ana Sayfa
- **Hero Bölümü:**
  - Dikkat çekici başlık ve alt başlık
  - Kısa platform tanıtımı
  - Çağrı-to-action butonu
- **Özellikler Bölümü:**
  - 3-4 ana özellik kartı
  - İkon, başlık ve kısa açıklama
- **Popüler Ürünler:**
  - Öne çıkan ürünlerin grid görünümü
  - Hızlı görüntüleme seçeneği
- **Tedarikçiler Vitrini:**
  - Öne çıkan tedarikçilerin listesi
  - Logo ve kısa bilgi
- **İstatistikler Bölümü:**
  - Platform istatistikleri (ürün sayısı, tedarikçi sayısı vb.)
- **Hakkımızda Bölümü:**
  - Platform hakkında kısa bilgi
  - Vizyon ve misyon

### Ürünler Sayfası
- **Filtreler:**
  - Kategori filtreleri
  - Fiyat aralığı
  - Tedarikçi filtreleri
  - Sıralama seçenekleri
- **Ürün Listesi:**
  - Grid görünümü (masaüstü için 3-4 sütun, tablet için 2 sütun, mobil için 1 sütun)
  - Her ürün kartında:
    - Ürün görseli
    - Ürün adı
    - Fiyat
    - Tedarikçi bilgisi
    - Hızlı görüntüleme/sepete ekle butonları
- **Sayfalama:**
  - Sayfa numaraları
  - Önceki/Sonraki butonları

### Ürün Detay Sayfası
- **Ürün Görselleri:**
  - Ana görsel (büyük)
  - Küçük resimler galerisi
  - Zoom özelliği
- **Ürün Bilgileri:**
  - Ürün adı
  - Fiyat
  - Stok durumu
  - Tedarikçi bilgisi
  - Kısa açıklama
- **Ürün Açıklaması:**
  - Detaylı açıklama
  - Özellikler tablosu
- **İlgili Ürünler:**
  - Benzer ürünlerin yatay kaydırılabilir listesi

### Tedarikçiler Sayfası
- **Filtreler:**
  - Kategori filtreleri
  - Konum filtreleri
  - Sıralama seçenekleri
- **Tedarikçi Listesi:**
  - Grid görünümü
  - Her tedarikçi kartında:
    - Logo
    - İsim
    - Konum
    - Ürün kategorileri
    - Kısa açıklama
- **Sayfalama**

### Tedarikçi Detay Sayfası
- **Tedarikçi Profili:**
  - Logo
  - İsim
  - Konum
  - İletişim bilgileri
  - Hakkında bilgi
- **Ürün Kategorileri:**
  - Kategori listesi
- **Tedarikçinin Ürünleri:**
  - Grid görünümü
  - Filtreleme seçenekleri

### Siparişler Sayfası
- **Sipariş Filtreleri:**
  - Tarih aralığı
  - Durum filtreleri
  - Tedarikçi filtreleri
- **Sipariş Listesi:**
  - Tablo görünümü
  - Her sipariş satırında:
    - Sipariş numarası
    - Tarih
    - Toplam tutar
    - Durum
    - Tedarikçi
    - Detay butonu
- **Sayfalama**

### Sipariş Detay Sayfası
- **Sipariş Özeti:**
  - Sipariş numarası
  - Tarih
  - Durum
  - Toplam tutar
- **Ürün Listesi:**
  - Tablo görünümü
  - Her ürün satırında:
    - Ürün görseli
    - Ürün adı
    - Birim fiyat
    - Miktar
    - Toplam fiyat
- **Tedarikçi Bilgileri**
- **Kargo Bilgileri**
- **Ödeme Bilgileri**

## Responsive Tasarım Stratejisi

### Ekran Boyutları
- **Büyük Masaüstü:** 1200px ve üzeri
- **Masaüstü:** 992px - 1199px
- **Tablet:** 768px - 991px
- **Büyük Mobil:** 576px - 767px
- **Mobil:** 575px ve altı

### Mobil Optimizasyonu
- **Navigasyon:** Hamburger menü
- **İçerik:** Tek sütun düzeni
- **Butonlar:** Daha büyük dokunma alanları
- **Yazı Boyutları:** Okunabilirlik için ayarlanmış
- **Görüntüler:** Otomatik boyutlandırma

### Tablet Optimizasyonu
- **Navigasyon:** Daraltılmış menü
- **İçerik:** 2 sütunlu grid
- **Sidebar:** Gerektiğinde gizlenebilir

## Performans Optimizasyonu

### Görsel Optimizasyonu
- WebP formatı kullanımı
- Lazy loading
- Responsive görseller

### Kod Optimizasyonu
- CSS ve JavaScript minifikasyonu
- Tree shaking
- Code splitting

### Sayfa Yükleme Stratejisi
- Kritik CSS inline
- Asenkron kaynak yükleme
- Önbelleğe alma stratejileri

## Erişilebilirlik

### Renk Kontrastı
- WCAG 2.1 AA standartlarına uygun kontrast oranları
- Renk körü dostu tasarım

### Klavye Navigasyonu
- Tüm etkileşimli öğeler için klavye erişimi
- Görünür fokus durumları

### Ekran Okuyucu Uyumluluğu
- Semantik HTML yapısı
- ARIA etiketleri
- Alt metinleri

## Uygulama Teknolojileri

### Frontend Framework
- React.js (mevcut yapıyı koruyarak)

### CSS Yaklaşımı
- CSS-in-JS (Styled Components veya Emotion)
- veya CSS Modules

### UI Kütüphanesi
- Material-UI veya Chakra UI (koyu tema desteği için)

### İkon Kütüphanesi
- React Icons veya Font Awesome

### Animasyon Kütüphanesi
- Framer Motion veya React Spring

## Uygulama Zaman Çizelgesi

### Aşama 1: Temel Tasarım Sistemi (3-5 gün)
- Renk paleti oluşturma
- Tipografi sistemi
- Temel UI bileşenleri

### Aşama 2: Sayfa Şablonları (5-7 gün)
- Header ve footer
- Ana sayfa
- Ürünler sayfası
- Tedarikçiler sayfası
- Siparişler sayfası

### Aşama 3: Detay Sayfaları (3-5 gün)
- Ürün detay sayfası
- Tedarikçi detay sayfası
- Sipariş detay sayfası

### Aşama 4: Responsive Optimizasyon (3-4 gün)
- Mobil görünüm
- Tablet görünüm
- Masaüstü görünüm

### Aşama 5: Test ve İyileştirme (2-3 gün)
- Tarayıcı uyumluluğu
- Performans optimizasyonu
- Erişilebilirlik kontrolleri

### Aşama 6: Deployment (1-2 gün)
- Vercel'e deploy
- Son kontroller
