# 🎂 Secrets Cakes — سيكرتس كيكز

موقع فاخر ثنائي اللغة (عربي/إنجليزي) لأتيليه كيك المناسبات — تصميم ملكي داكن بهوية لافندر × برونزي ذهبي.

> Luxury bilingual (AR/EN) website for a custom cakes atelier — dark royal theme with a Lavender × Bronze × Gold identity.

---

## ✨ المميزات | Features

| | |
|---|---|
| 🌐 **ثنائي اللغة** | عربي (RTL) / إنجليزي (LTR) بضغطة زر مع حفظ الاختيار |
| 🧁 **مصمم الكيك التفاعلي** | 6 خطوات: المناسبة، الحجم، الطبقات، النكهة، التغطية، التفاصيل — مع معاينة SVG حية للكيكة وحاسبة سعر فورية |
| 💬 **طلب عبر واتساب** | رسالة طلب منسّقة تُبنى تلقائياً من اختيارات الزبون |
| 🖼️ **معرض + Lightbox** | معرض أعمال بفتح صور كامل وتنقل بلوحة المفاتيح |
| ⭐ **آراء العملاء** | سلايدر تلقائي |
| 📱 **متوافق مع الجوال** | تصميم متجاوب بالكامل + قائمة جوال |

## 🎨 الهوية البصرية | Brand Palette

`#cdb4da` `#a784ae` `#cba58e` `#ac7d53` `#815823` `#fed3a9` — على خلفية داكنة `#171220`

## 📁 البنية | Structure

```
index.html            الصفحة الرئيسية (كل الأقسام)
assets/css/style.css  التصميم الكامل
assets/js/i18n.js     الترجمات + بيانات المنتجات والمصمم والآراء
assets/js/main.js     المنطق + مصمم الكيك + حاسبة السعر
assets/img/           صور الأتيليه والمنتجات
```

## ⚙️ تعديل معلومات المتجر | Edit Shop Info

افتح `assets/js/main.js` — في أعلى الملف تجد:

```js
const CONFIG = {
  whatsapp: "96176000000",   // ← ضع رقم الواتساب الحقيقي هنا
  phoneDisplay: "+961 76 000 000",
  address: { ar: "بعبدا — جبل لبنان، لبنان", en: "Baabda — Mount Lebanon, Lebanon" },
  instagram: "https://instagram.com/secretscakes",
  facebook: "https://facebook.com/secretscakes",
  tiktok: "https://tiktok.com/@secretscakes",
};
```

- **الأسعار والنكهات والإضافات**: عدّل مصفوفات `BUILDER` في `assets/js/i18n.js`
- **المنتجات**: مصفوفة `PRODUCTS` | **الآراء**: مصفوفة `REVIEWS` | **صور المعرض**: `GALLERY`
- **النصوص**: قاموس `I18N` (عربي + إنجليزي)

## 🚀 التشغيل | Run

موقع ثابت — لا يحتاج أي تثبيت:

```bash
python3 -m http.server 8000
# أو أي خادم ملفات ثابت / ارفعه مباشرة على Netlify, Vercel, GitHub Pages
```

---

صُنع بحبّ في لبنان 🇱🇧
