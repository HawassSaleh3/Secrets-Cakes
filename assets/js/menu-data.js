/* ============================================================
   SECRETS CAKES — Full Menu Data (real shop catalog)
   Structure: MENU = [{ id, icon, ar, en, items:[{n, d, da, v:[[label,price],...]}] }]
   Prices in USD. Labels in English (brand names) — shown in both languages.
   ============================================================ */

const MENU = [
{
  id: "birthday", icon: "🎂", ar: "كيك أعياد الميلاد", en: "Birthday Cakes",
  items: [
    { n: "Happy Cake Box Pink — 4 Persons", d: "Layers of chocolate sponge filled with chocolate cream.", da: "طبقات سبونج شوكولاتة محشوة بكريمة الشوكولاتة.", v: [[null, 26]] },
    { n: "Happy Cake Box Blue — 4 Persons", d: "Layers of chocolate sponge filled with chocolate cream.", da: "طبقات سبونج شوكولاتة محشوة بكريمة الشوكولاتة.", v: [[null, 26]] },
    { n: "Happy Cake Box Red — 4 Persons", d: "Layers of chocolate sponge filled with chocolate cream.", da: "طبقات سبونج شوكولاتة محشوة بكريمة الشوكولاتة.", v: [[null, 26]] },
    { n: "Happy Cake Box Gray — 4 Persons", d: "Layers of chocolate sponge filled with chocolate cream.", da: "طبقات سبونج شوكولاتة محشوة بكريمة الشوكولاتة.", v: [[null, 26]] },
    { n: "Lunch Box Regular — 2 Persons", d: "Sponge chocolate filled with cream chocolate. 10 cm diameter.", da: "سبونج شوكولاتة بكريمة الشوكولاتة. قطر 10 سم.", v: [[null, 13]] },
    { n: "Lunch Box Special Flavor — 2 Persons", d: "Layers of red sponge cake and cream cheese frosting. 10 cm.", da: "سبونج أحمر وكريمة الجبن. قطر 10 سم.", v: [[null, 14]] },
    { n: "Lunch Box Standard (Birthday) — 2 Persons", d: "Sponge chocolate filled with cream chocolate. 10 cm.", da: "سبونج شوكولاتة بكريمة الشوكولاتة. قطر 10 سم.", v: [[null, 16]] },
    { n: "Carnaval Yellow — 8 Persons", d: "Chocolate sponge filled with chocolate cream.", da: "سبونج شوكولاتة بكريمة الشوكولاتة.", v: [[null, 38]] },
    { n: "Carnaval Pink — 8 Persons", d: "Layers of chocolate sponge and chocolate cream.", da: "طبقات سبونج شوكولاتة وكريمة الشوكولاتة.", v: [[null, 38]] },
    { n: "Carnaval With Chapeau — 8 Persons", d: "Chocolate sponge filled with chocolate cream.", da: "سبونج شوكولاتة بكريمة الشوكولاتة.", v: [[null, 40]] },
    { n: "Carnaval With Candle — 8 Persons", d: "Chocolate sponge filled with chocolate cream.", da: "سبونج شوكولاتة بكريمة الشوكولاتة.", v: [[null, 40]] },
    { n: "Carnaval Confetti — 8 Persons", d: "Chocolate sponge filled with chocolate cream.", da: "سبونج شوكولاتة بكريمة الشوكولاتة.", v: [[null, 40]] },
    { n: "Sprinkles Cake — Vanilla", d: "Layers of white sponge and whipped cream. 15 & 20 Pers available rectangular.", da: "طبقات سبونج أبيض وكريمة مخفوقة. الأحجام الكبيرة مستطيلة.", v: [["8 Pers", 29], ["10 Pers", 36], ["15 Pers", 54], ["20 Pers", 72]] },
    { n: "Sprinkles Cake — Chocolate", d: "Layers of chocolate sponge and chocolate whipped cream. 15 & 20 rectangular.", da: "طبقات سبونج شوكولاتة وكريمة شوكولاتة مخفوقة. الكبيرة مستطيلة.", v: [["8 Pers", 29], ["10 Pers", 36], ["15 Pers", 54], ["20 Pers", 72]] },
    { n: "Happy Birthday Cake — Chocolate", d: "Layers of chocolate sponge and whipped cream. Rectangular on 15 & 20.", da: "طبقات سبونج شوكولاتة وكريمة مخفوقة. الكبيرة مستطيلة.", v: [["10 Pers", 36], ["15 Pers", 54], ["20 Pers", 72]] },
    { n: "Happy Birthday Cake — Vanilla", d: "Layers of white sponge and whipped cream. Rectangular on 15 & 20.", da: "طبقات سبونج أبيض وكريمة مخفوقة. الكبيرة مستطيلة.", v: [["10 Pers", 36], ["15 Pers", 54], ["20 Pers", 72]] },
    { n: "Cone Cake", d: "Chocolate sponge & chocolate cream (8). White sponge, choc or vanilla cream (10/15).", da: "سبونج شوكولاتة أو أبيض حسب الحجم مع كريمة فاخرة.", v: [["8 Pers", 35], ["10 Pers", 44], ["15 Pers", 65]] },
  ]
},
{
  id: "bahamas", icon: "🍌", ar: "كيك الباهاماس", en: "Bahamas Cakes",
  items: [
    { n: "Bahamas", d: "Layers of white sponge cake with banana cream and fresh bananas. 20 & 25 rectangular.", da: "طبقات سبونج أبيض بكريمة الموز والموز الطازج. الأحجام الكبيرة مستطيلة.", v: [["8 Pers", 36], ["10 Pers", 45], ["15 Pers", 68], ["20 Pers", 90], ["25 Pers", 112]] },
  ]
},
{
  id: "barrel", icon: "🍫", ar: "كيك البرميل", en: "Barrel Cakes",
  items: [
    { n: "Barrel Candies", d: "Chocolate sponge & chocolate cream, KitKat bars, smarties on top. 20 & 25 rectangular.", da: "سبونج شوكولاتة وكريمة شوكولاتة، أصابع كيت كات وسمارتيز. الكبيرة مستطيلة.", v: [["8 Pers", 45], ["10 Pers", 60], ["15 Pers", 90], ["20 Pers", 120], ["25 Pers", 150]] },
  ]
},
{
  id: "cortina", icon: "🍰", ar: "كيك الكورتينا", en: "Cortina Cakes",
  items: [
    { n: "Cortina Chocolate", d: "Chocolate sponge & chocolate cream, topped with profiteroles. Round or rectangular.", da: "سبونج شوكولاتة وكريمة شوكولاتة تعلوها بروفيترول. دائري أو مستطيل.", v: [["8 Pers", 31], ["10 Pers", 40], ["15 Pers", 60], ["20 Pers", 80], ["25 Pers", 100], ["30 Pers", 120]] },
    { n: "Cortina Praline", d: "White sponge & praline cream, topped with profiteroles. Round or rectangular.", da: "سبونج أبيض وكريمة البرالين تعلوها بروفيترول. دائري أو مستطيل.", v: [["8 Pers", 31], ["10 Pers", 40], ["15 Pers", 60], ["20 Pers", 80], ["25 Pers", 100], ["30 Pers", 120]] },
  ]
},
{
  id: "cheesecake", icon: "🧀", ar: "التشيز كيك", en: "Cheesecakes",
  items: [
    { n: "Cheesecake Blueberry", d: "Digestive biscuit, whipped cheesecake cream, blueberry topping.", da: "بسكويت دايجستف وكريمة تشيز كيك مخفوقة وتغطية التوت الأزرق.", v: [["8 Pers", 33], ["10 Pers", 42], ["15 Pers", 62]] },
    { n: "Cheesecake Strawberry", d: "Digestive biscuit, whipped cheesecake cream, strawberry topping.", da: "بسكويت دايجستف وكريمة تشيز كيك مخفوقة وتغطية الفراولة.", v: [["8 Pers", 33], ["10 Pers", 42], ["15 Pers", 62]] },
    { n: "Baked Cheesecake — 3 Days Advance", d: "Baked cheesecake, fudge cake, Oreo or Lotus cream.", da: "تشيز كيك مخبوز مع فادج وكريمة أوريو أو لوتس. يُطلب قبل 3 أيام.", v: [["8 Pers · 18cm", 40], ["10 Pers · 22cm", 48], ["15 Pers · 26cm", 75]] },
    { n: "New York Cheesecake — 10 Pers", d: "Half-baked cheese cream, digestive biscuit, mixed berries & strawberry jam.", da: "كريمة جبن نصف مخبوزة، دايجستف، توت مشكّل ومربى الفراولة.", v: [[null, 46]] },
    { n: "San Sebastian", d: "Burnt Basque cheesecake with fruits. Caramel or chocolate sauce.", da: "تشيز كيك الباسك المحروق مع الفواكه وصلصة الكراميل أو الشوكولاتة.", v: [["8–10 Pers · 22cm", 40], ["12–15 Pers · 26cm", 55]] },
  ]
},
{
  id: "carrot", icon: "🥕", ar: "الجزر والعسل", en: "Carrot & Honey Cake",
  items: [
    { n: "Carrot Cake", d: "Classic spiced carrot cake with cream frosting.", da: "كيك الجزر الكلاسيكي بالبهارات وكريمة التغطية.", v: [["8 Pers", 35], ["10 Pers", 44]] },
    { n: "Honey Cake — 8 Persons", d: "Honey layers with dulce de leche cream.", da: "طبقات العسل مع كريمة الدلسي دي ليتشي.", v: [[null, 33]] },
  ]
},
{
  id: "praline", icon: "🌰", ar: "البرالين والفستق", en: "Praline & Pistachio",
  items: [
    { n: "Chocolate Praline Cake — 10 Persons", d: "Chocolate sponge filled with chocolate praline cream.", da: "سبونج شوكولاتة محشو بكريمة برالين الشوكولاتة.", v: [[null, 40]] },
    { n: "Chocolate Pistachio Kunafa — 10 Persons", d: "Chocolate sponge, chocolate mousse and kunafa pistachio.", da: "سبونج شوكولاتة وموس الشوكولاتة وكنافة الفستق.", v: [[null, 40]] },
  ]
},
{
  id: "ferrero", icon: "🍬", ar: "الفيريرو روشيه", en: "Ferrero Rocher",
  items: [
    { n: "Ferrero Rocher", d: "Chocolate & vanilla sponge with Ferrero cream and wafer. Round or rectangular.", da: "سبونج شوكولاتة وفانيلا بكريمة الفيريرو والويفر. دائري أو مستطيل.", v: [["8 Pers", 32], ["10 Pers", 40], ["15 Pers", 60], ["20 Pers", 80], ["25 Pers", 100], ["30 Pers", 120]] },
  ]
},
{
  id: "fruit", icon: "🍓", ar: "كيك الفواكه", en: "Fruit Cakes",
  items: [
    { n: "Royal Strawberry Long — 10–15 Pers", d: "Vanilla sponge, cream chantilly & strawberry pieces.", da: "سبونج فانيلا وكريمة شانتيي وقطع الفراولة.", v: [[null, 50]] },
    { n: "Forêt Mango", d: "White sponge & whipped cream with fresh mango pieces.", da: "سبونج أبيض وكريمة مخفوقة مع قطع المانجو الطازجة.", v: [["8 Pers", 40], ["10 Pers", 50]] },
    { n: "Forêt Blanc Fraise", d: "White sponge & whipped cream with fresh strawberries & strawberry sauce.", da: "سبونج أبيض وكريمة مخفوقة مع الفراولة الطازجة وصلصتها.", v: [["8 Pers", 35], ["10 Pers", 44], ["15 Pers", 66], ["20 Pers", 88]] },
    { n: "Forêt Blanc", d: "White sponge with whipped cream and mixed fruits.", da: "سبونج أبيض وكريمة مخفوقة وفواكه مشكّلة.", v: [["8 Pers", 32], ["10 Pers", 40], ["15 Pers", 60], ["20 Pers", 80], ["25 Pers", 100]] },
    { n: "Forêt Noir", d: "Chocolate sponge with whipped cream and mixed fruits.", da: "سبونج شوكولاتة وكريمة مخفوقة وفواكه مشكّلة.", v: [["8 Pers", 32], ["10 Pers", 40], ["15 Pers", 60], ["20 Pers", 80], ["25 Pers", 100]] },
    { n: "Coppa Cabana — 10 Pers", d: "Sponge cake, mango tropical twist, raspberry and white chocolate cream.", da: "سبونج، مانجو استوائي، توت وكريمة الشوكولاتة البيضاء.", v: [[null, 39]] },
    { n: "Langue De Chat Fraisier — 8 Pers", d: "Vanilla sponge, crème légère & strawberries, langue de chat biscuits.", da: "سبونج فانيلا وكريمة ليجير وفراولة وبسكويت لانغ دو شا.", v: [[null, 33]] },
    { n: "Fraisier", d: "White sponge with whipped cream & fresh strawberries.", da: "سبونج أبيض وكريمة مخفوقة وفراولة طازجة.", v: [["10 Pers", 37], ["15 Pers", 56]] },
  ]
},
{
  id: "fondant", icon: "🎩", ar: "الفوندان والموس", en: "Fondant & Mousse",
  items: [
    { n: "Fondant", d: "Thin layers of chocolate sponge and mousse chocolate.", da: "طبقات رقيقة من سبونج الشوكولاتة وموس الشوكولاتة.", v: [["10 Pers", 42], ["15 Pers", 64], ["20 Pers", 84], ["25 Pers", 105], ["30 Pers", 126]] },
    { n: "Fondant Éclair — 6 Pers", d: "Thin chocolate sponge & mousse, topped with medium éclairs.", da: "طبقات شوكولاتة وموس تعلوها إكليرات متوسطة.", v: [[null, 30]] },
    { n: "Raspberry Mousse Mystery", d: "Mousse chocolate, crème brûlée & raspberry jam.", da: "موس الشوكولاتة وكريم بروليه ومربى التوت.", v: [[null, 28]] },
    { n: "Galactic Illusion — 6–8 Pers", d: "Semi-dark mousse, vanilla crème brûlée insert, crunchy feuilletine.", da: "موس شبه داكن وكريم بروليه الفانيلا وقرمشة الفويتين.", v: [[null, 28]] },
  ]
},
{
  id: "millefeuille", icon: "🥐", ar: "الميل فوي", en: "Mille Feuille",
  items: [
    { n: "Mille Feuille Square With Fruits — 8 Pers", d: "Mille feuille topped with fresh fruits.", da: "ميل فوي يعلوه فواكه طازجة.", v: [[null, 30]] },
    { n: "Paris Beirut With Fruits", d: "Mille feuille, crème pâtissière, caramelized profiteroles & red fruits.", da: "ميل فوي وكريم باتيسيير وبروفيترول مكرمل وفواكه حمراء.", v: [[null, 28]] },
    { n: "Paris Beirut Caramel", d: "Mille feuille, crème pâtissière, caramelized profiteroles.", da: "ميل فوي وكريم باتيسيير وبروفيترول مكرمل.", v: [[null, 28]] },
    { n: "Mille Feuille Regular", d: "Mille feuille & crème pâtissière with caramel sauce.", da: "ميل فوي وكريم باتيسيير مع صلصة الكراميل.", v: [["10 Pers", 36], ["15 Pers", 54], ["20 Pers", 72]] },
    { n: "Mille Feuille Profiteroles", d: "Mille feuille & crème pâtissière topped with profiteroles.", da: "ميل فوي وكريم باتيسيير تعلوها بروفيترول.", v: [["10 Pers", 40], ["15 Pers", 60], ["20 Pers", 80], ["25 Pers", 100]] },
    { n: "Mille Feuille Fraise", d: "Mille feuille with fresh strawberries.", da: "ميل فوي مع الفراولة الطازجة.", v: [["10 Pers", 37], ["15 Pers", 55], ["20 Pers", 74]] },
    { n: "Mille Feuille Caramel", d: "Mille feuille & crème pâtissière, caramel sauce topping.", da: "ميل فوي وكريم باتيسيير مع صلصة الكراميل.", v: [["10 Pers", 37], ["15 Pers", 55], ["20 Pers", 74]] },
  ]
},
{
  id: "fudge", icon: "🍫", ar: "كيك الفادج", en: "Fudge Cake",
  items: [
    { n: "Fudge", d: "Dark chocolate sponge with chocolate ganache.", da: "سبونج شوكولاتة داكنة مع غاناش الشوكولاتة.", v: [["8 Pers", 36], ["10 Pers", 45], ["15 Pers", 68], ["20 Pers", 90], ["25 Pers", 112], ["30 Pers", 135]] },
  ]
},
{
  id: "nutella", icon: "🌰", ar: "النوتيلا", en: "Nutella Cakes",
  items: [
    { n: "Nutellito", d: "Chocolate sponge with Nutella and wafer.", da: "سبونج شوكولاتة مع النوتيلا والويفر.", v: [["8 Pers", 36], ["10 Pers", 47], ["15 Pers", 70]] },
  ]
},
{
  id: "tartes", icon: "🥧", ar: "التارت", en: "Tartes",
  items: [
    { n: "Multi Flavor Tart — 10 Pers", d: "10 pieces of mixed flavor tartes.", da: "10 قطع تارت بنكهات مشكّلة.", v: [[null, 34]] },
    { n: "Tarte Magic Cubed Mango / Strawberry", d: "Crème pâtissière, fresh mango & strawberries, side strawberry sauce.", da: "كريم باتيسيير ومانجو وفراولة طازجة مع صلصة الفراولة.", v: [[null, 38]] },
    { n: "Tarte Exotic Round — 6 Pers", d: "Crème pâtissière topped with fresh exotic fruits.", da: "كريم باتيسيير تعلوها فواكه استوائية طازجة.", v: [[null, 25]] },
    { n: "Tarte Exotic", d: "Crème pâtissière topped with fresh exotic fruits.", da: "كريم باتيسيير تعلوها فواكه استوائية طازجة.", v: [["10 Pers", 37], ["15 Pers", 54], ["20 Pers", 72]] },
    { n: "Small Seasonal Tart — 6 Pers", d: "Crème pâtissière and fresh seasonal fruits.", da: "كريم باتيسيير وفواكه موسمية طازجة.", v: [[null, 26]] },
    { n: "Square Seasonal Fruits Tart — 10 Pers", d: "Crème pâtissière and fresh seasonal fruits.", da: "كريم باتيسيير وفواكه موسمية طازجة.", v: [[null, 36]] },
    { n: "Tarte Magic Fraise", d: "Crème pâtissière & fresh strawberries, side strawberry sauce.", da: "كريم باتيسيير وفراولة طازجة مع صلصة الفراولة.", v: [[null, 35]] },
    { n: "Tarte Fraise Small — 6–8 Pers", d: "Cookie crust, vanilla pastry cream, fresh strawberries.", da: "عجينة البسكويت وكريمة الفانيلا والفراولة الطازجة.", v: [[null, 25]] },
    { n: "Tarte Fraise Round or Square — 10 Pers", d: "Cookie crust, vanilla pastry cream, fresh strawberry.", da: "عجينة البسكويت وكريمة الفانيلا والفراولة الطازجة.", v: [[null, 37]] },
    { n: "Tarte Fraise", d: "Cookie crust, vanilla pastry cream, fresh strawberry.", da: "عجينة البسكويت وكريمة الفانيلا والفراولة الطازجة.", v: [["15 Pers", 58], ["20 Pers", 76]] },
  ]
},
{
  id: "trois", icon: "🍫", ar: "الشوكولاتة الثلاثية", en: "Trois Chocolats",
  items: [
    { n: "Trois Chocolats — 10 Pers", d: "Chocolate sponge with white, brown & dark chocolate mousse.", da: "سبونج شوكولاتة مع موس الشوكولاتة البيضاء والحليب والداكنة.", v: [[null, 37]] },
  ]
},
{
  id: "kinder", icon: "🥚", ar: "كيك الكيندر", en: "Kinder Cakes",
  items: [
    { n: "Kinder Cake", d: "Layers of chocolate sponge and kinder cream.", da: "طبقات سبونج شوكولاتة وكريمة الكيندر.", v: [["8 Pers · 1 Egg", 35], ["10 Pers · 2 Eggs", 45], ["15 Pers", 68], ["20 Pers", 90]] },
  ]
},
{
  id: "tall", icon: "🎂", ar: "الكيك العالي", en: "Tall Cakes",
  items: [
    { n: "Lemon Macaron Cake", d: "Layers of white sponge cake with cream cheese.", da: "طبقات سبونج أبيض مع كريمة الجبن.", v: [["8 Pers", 33], ["10 Pers", 42], ["15 Pers", 64], ["20 Pers", 82]] },
    { n: "Tall Cake Pop", d: "Chocolate sponge & chocolate cream topped with brownie stick.", da: "سبونج شوكولاتة وكريمة شوكولاتة تعلوها أصابع البراوني.", v: [["8 Pers", 35], ["10 Pers", 44], ["15 Pers", 66], ["20 Pers", 88]] },
  ]
},
{
  id: "tiramisu", icon: "☕", ar: "التيراميسو", en: "Tiramisu",
  items: [
    { n: "Tiramisu — 6–8 Pers", d: "Layered coffee sponge with mascarpone crème.", da: "طبقات سبونج القهوة مع كريمة الماسكاربوني.", v: [[null, 30]] },
    { n: "La Joconde (Croquant Café) — 10 Pers", d: "Joconde cake with coffee crunch and mascarpone.", da: "كيك الجوكوند مع قرمشة القهوة والماسكاربوني.", v: [[null, 40]] },
    { n: "Langue De Chat Tiramisu — 8 Pers", d: "Layers of coffee sponge with mascarpone cream.", da: "طبقات سبونج القهوة مع كريمة الماسكاربوني.", v: [[null, 33]] },
  ]
},
{
  id: "velvet", icon: "❤️", ar: "الريد فيلفيت", en: "Velvet Cakes",
  items: [
    { n: "Red Velvet", d: "Layers of red sponge cake and cream cheese frosting.", da: "طبقات السبونج الأحمر وكريمة الجبن.", v: [["8 Pers", 34], ["10 Pers", 42], ["15 Pers", 63], ["20 Pers", 84], ["25 Pers", 105]] },
    { n: "Half Velvet / Half Fudge — 8 Pers", d: "Fudge cake and red velvet topped with fresh strawberries.", da: "نصف فادج ونصف ريد فيلفيت تعلوها فراولة طازجة.", v: [[null, 36]] },
  ]
},
{
  id: "cookies", icon: "🍪", ar: "الكوكيز", en: "Cookies",
  items: [
    { n: "Chocolate Caramel Cookie — Tin Box 800g", d: "Buttery cookies with chocolate & caramel.", da: "كوكيز بالزبدة مع الشوكولاتة والكراميل. علبة معدنية 800غ.", v: [[null, 22]] },
    { n: "Cookie in a Tin — 800g", d: "Assorted butter cookies in a gift tin.", da: "كوكيز مشكّل بالزبدة في علبة هدايا 800غ.", v: [[null, 22]] },
  ]
},
{
  id: "pieces", icon: "🧁", ar: "قطع الكاونتر", en: "Counter Pieces",
  items: [
    { n: "Viral London Cake Piece + Chocolate Sauce", d: "Our viral signature piece with chocolate sauce.", da: "قطعتنا الشهيرة مع صلصة الشوكولاتة.", v: [["Piece", 4.5]] },
    { n: "Cookie Choco-Chip Piece", d: "Chewy choco-chip cookie.", da: "كوكيز طري بقطع الشوكولاتة.", v: [["Piece", 5]] },
    { n: "Chocolate Caramel Cookie Piece", d: "Cookie with chocolate & caramel.", da: "كوكيز بالشوكولاتة والكراميل.", v: [["Piece", 5]] },
    { n: "Éclair Nutella Piece", d: "Éclair filled with Nutella cream.", da: "إكلير محشو بكريمة النوتيلا.", v: [["Piece", 4]] },
    { n: "Éclair Chocolate 14cm Piece", d: "Éclair filled with chocolate pastry cream.", da: "إكلير محشو بكريمة الشوكولاتة.", v: [["Piece", 4]] },
    { n: "Éclair Vanilla 14cm Piece", d: "Éclair filled with vanilla pastry cream.", da: "إكلير محشو بكريمة الفانيلا.", v: [["Piece", 4]] },
    { n: "Éclair XL 21cm Piece", d: "Extra-large éclair, chocolate pastry cream.", da: "إكلير كبير جداً بكريمة الشوكولاتة.", v: [["Piece", 5]] },
    { n: "Trompe L'Oeil Popcorn Cake", d: "Joconde, caramel mousse & praline with caramel popcorn.", da: "جوكوند وموس الكراميل والبرالين مع بوب كورن الكراميل.", v: [["Piece", 5.5]] },
    { n: "Trompe L'Oeil Cocoa Creolo", d: "Joconde, chocolate mousse, ganache, dulce caramel, dacquoise.", da: "جوكوند وموس الشوكولاتة والغاناش والدلسي.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Citronette", d: "Zesty lemon trompe l'oeil.", da: "تحفة الليمون المنعشة.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Clementine", d: "Chocolate mousse, brownies & orange pieces.", da: "موس الشوكولاتة والبراوني وقطع البرتقال.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Le Maamoul", d: "White chocolate mousse, rose water & pistachio cream.", da: "موس الشوكولاتة البيضاء وماء الورد وكريمة الفستق.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Coffee Bean", d: "Joconde, coffee macaron cream, soft caramel center.", da: "جوكوند وكريمة قهوة الماكارون وقلب كراميل.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Peanut (Snickers)", d: "Peanut butter cream, ganache, caramelized peanuts.", da: "كريمة زبدة الفول السوداني والغاناش والفول المكرمل.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Pecan", d: "Pecan cream, caramelized pecans, salted caramel, dacquoise.", da: "كريمة البيكان والبيكان المكرمل والكراميل المملّح.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Roasted Almond", d: "Roasted almond cream, praline, feuilletine, dacquoise.", da: "كريمة اللوز المحمّص والبرالين والفويتين.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Lemon Blueberry", d: "Lemon cheese cream filled with blueberry jam.", da: "كريمة جبن الليمون محشوة بمربى التوت.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Very Berry Raspberry", d: "Joconde with vanilla cream and raspberry jam.", da: "جوكوند وكريمة الفانيلا ومربى التوت.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Mystery Raspberry Mousse", d: "Chocolate mousse, crème brûlée, raspberry jam.", da: "موس الشوكولاتة وكريم بروليه ومربى التوت.", v: [["Piece", 4.75]] },
    { n: "Trompe L'Oeil Coffee Cup Brownies", d: "Brownie base, feuilletine, chantilly café, ganache.", da: "قاعدة براوني وفويتين وشانتيي القهوة وغاناش.", v: [["Piece", 5.5]] },
    { n: "Trompe L'Oeil Mango Tango", d: "Vanilla & mango cream with mango pieces & jam.", da: "كريمة الفانيلا والمانجو مع قطع المانجو والمربى.", v: [["Piece", 4.75]] },
    { n: "Fraisier Piece", d: "Vanilla sponge, whipped cream, fresh strawberries.", da: "سبونج فانيلا وكريمة مخفوقة وفراولة طازجة.", v: [["Piece", 4.75]] },
    { n: "Cheesecake Raspberry Box", d: "Cream cheese & raspberry jam, white chocolate praline.", da: "جبن كريمي ومربى التوت وبرالين الشوكولاتة البيضاء.", v: [["Piece", 4.75]] },
    { n: "Cheesecake New York Piece", d: "Half-baked cream cheese, digestive, berries jam.", da: "جبن نصف مخبوز ودايجستف ومربى التوت.", v: [["Piece", 4.75]] },
    { n: "Cheesecake Blueberry Piece", d: "Cheesecake with blueberry topping.", da: "تشيز كيك بتغطية التوت الأزرق.", v: [["Piece", 4.75]] },
    { n: "Cheesecake Strawberry Piece", d: "Cheesecake with strawberry jam.", da: "تشيز كيك بمربى الفراولة.", v: [["Piece", 4.75]] },
    { n: "Cheesecake San Sebastian Piece", d: "Burnt Basque, caramel or chocolate sauce.", da: "باسك محروق مع صلصة الكراميل أو الشوكولاتة.", v: [["Piece", 4.75]] },
    { n: "Cheesecake Baked Oreo Piece", d: "Baked cheesecake, fudge & Oreo cream.", da: "تشيز كيك مخبوز وفادج وكريمة الأوريو.", v: [["Piece", 4.75]] },
    { n: "Cheesecake Baked Lotus Piece", d: "Baked cheesecake, fudge & Biscoff.", da: "تشيز كيك مخبوز وفادج واللوتس.", v: [["Piece", 4.75]] },
    { n: "Forêt Noir Piece", d: "Chocolate sponge, whipped cream, mixed fruits.", da: "سبونج شوكولاتة وكريمة مخفوقة وفواكه.", v: [["Piece", 4.25]] },
    { n: "Forêt Blanc Piece", d: "Vanilla sponge, whipped cream, mixed fruits.", da: "سبونج فانيلا وكريمة مخفوقة وفواكه.", v: [["Piece", 4.25]] },
    { n: "Coppa Cabana Piece", d: "Almond cake, passion fruit, coconut, mango & red fruits.", da: "كيك اللوز والباشن فروت وجوز الهند والمانجو.", v: [["Piece", 4.75]] },
    { n: "Red Velvet Piece", d: "Red sponge & cream cheese frosting.", da: "سبونج أحمر وكريمة الجبن.", v: [["Piece", 4.75]] },
    { n: "Honey Cake Piece", d: "Honey cake with dulce de leche cream.", da: "كيك العسل مع كريمة الدلسي.", v: [["Piece", 5.5]] },
    { n: "Longo Mille Feuille Fruit Rouge", d: "Puff pastry, crème légère, raspberry jam, red fruits.", da: "باف بيستري وكريم ليجير ومربى التوت وفواكه حمراء.", v: [["Piece", 5.5]] },
    { n: "Longo Mille Feuille Caramel", d: "Puff pastry, crème légère, caramel sauce.", da: "باف بيستري وكريم ليجير وصلصة الكراميل.", v: [["Piece", 5.5]] },
    { n: "5 Soirée Pieces Box", d: "Selection of our soirée pieces.", da: "تشكيلة مختارة من قطع السهرة.", v: [["Box", 6]] },
    { n: "Délichoux Piece", d: "Choux, crème pâtissière, crème légère, caramel & praline.", da: "شو بكريمة الباتيسيير والليجير والكراميل والبرالين.", v: [["Piece", 5]] },
    { n: "Tiramisu Piece", d: "Coffee sponge with mascarpone crème.", da: "سبونج القهوة مع كريمة الماسكاربوني.", v: [["Piece", 4.25]] },
    { n: "Galactic Illusion Piece", d: "Dark mousse & vanilla crème brûlée.", da: "موس داكن وكريم بروليه الفانيلا.", v: [["Piece", 4.75]] },
    { n: "Chocolate Praline Piece", d: "Chocolate sponge, praline cream, feuilletine.", da: "سبونج شوكولاتة وكريمة برالين وفويتين.", v: [["Piece", 4.75]] },
    { n: "Chocolate Pistachio Kunafa Piece", d: "Chocolate sponge, chocolate cream, kunafa pistachio.", da: "سبونج شوكولاتة وكنافة الفستق.", v: [["Piece", 4.75]] },
    { n: "Fudge Cake Piece", d: "Dark chocolate sponge & ganache.", da: "سبونج شوكولاتة داكنة وغاناش.", v: [["Piece", 4.25]] },
    { n: "Lotus Cake Piece", d: "Chocolate sponge, Lotus cream & crumble.", da: "سبونج شوكولاتة وكريمة اللوتس والكرامبل.", v: [["Piece", 4.25]] },
    { n: "Bahamas Piece", d: "White sponge, banana cream & fresh bananas.", da: "سبونج أبيض وكريمة الموز والموز الطازج.", v: [["Piece", 4.25]] },
    { n: "Fondant Carré Chocolat Piece", d: "Thin chocolate sponge & mousse chocolate.", da: "طبقات شوكولاتة رقيقة وموس الشوكولاتة.", v: [["Piece", 4.25]] },
    { n: "Trois Chocolats Piece", d: "Triple chocolate mousse & chocolate sponge.", da: "موس الشوكولاتة الثلاثية وسبونج الشوكولاتة.", v: [["Piece", 4.75]] },
    { n: "Lazy Cake Piece", d: "Mixed chocolate and biscuits.", da: "شوكولاتة وبسكويت.", v: [["Piece", 4.25]] },
    { n: "Cortina Chocolate Piece", d: "Chocolate sponge & cream, profiteroles.", da: "سبونج شوكولاتة وكريمة وبروفيترول.", v: [["Piece", 4.25]] },
    { n: "Cortina Praline Piece", d: "Vanilla sponge & praline cream, profiteroles.", da: "سبونج فانيلا وكريمة برالين وبروفيترول.", v: [["Piece", 4.25]] },
    { n: "Ferrero Rocher Piece", d: "Chocolate & vanilla sponge, Ferrero cream & wafer.", da: "سبونج شوكولاتة وفانيلا وكريمة الفيريرو والويفر.", v: [["Piece", 4.25]] },
    { n: "Mille Feuille Piece", d: "Puff layers & crème pâtissière.", da: "طبقات الباف وكريم باتيسيير.", v: [["Piece", 4.25]] },
    { n: "Nutellito Piece", d: "Chocolate sponge with Nutella & wafer.", da: "سبونج شوكولاتة مع النوتيلا والويفر.", v: [["Piece", 4.75]] },
    { n: "Tarte Fraise Piece", d: "Cookie crust, vanilla cream, fresh strawberries.", da: "عجينة بسكويت وكريمة فانيلا وفراولة.", v: [["Piece", 4.75]] },
    { n: "Tarte Fruit Rouge Piece", d: "Cookie crust, vanilla cream, berries.", da: "عجينة بسكويت وكريمة فانيلا وتوت.", v: [["Piece", 4.75]] },
    { n: "Tarte Citron Piece", d: "Tart filled with lemon cream.", da: "تارت محشو بكريمة الليمون.", v: [["Piece", 4.25]] },
    { n: "ChocoKrunch Jar", d: "Fudge cake, chocolate, white cream, ganache, choco crisp.", da: "فادج وشوكولاتة وكريمة بيضاء وغاناش وكرانش.", v: [["Jar", 3.75]] },
  ]
},
{
  id: "chocolates", icon: "🎁", ar: "الشوكولاتة والهدايا", en: "Boxes & Chocolates",
  items: [
    { n: "Sablés Dipped Box", d: "Chocolate-dipped butter sablés.", da: "سابليه بالزبدة مغطّس بالشوكولاتة.", v: [["125g", 7], ["300g", 13]] },
    { n: "Macaron Box", d: "Assorted French macarons.", da: "ماكارون فرنسي مشكّل.", v: [[null, 16]] },
    { n: "Petit Four Sablé Box", d: "Delicate butter petit fours.", da: "بيتي فور بالزبدة.", v: [[null, 15]] },
    { n: "Petit Four Mixed Box", d: "Mixed petit fours.", da: "بيتي فور مشكّل.", v: [[null, 15]] },
    { n: "Petit Four Gift Box", d: "Premium gift selection.", da: "تشكيلة هدايا فاخرة.", v: [[null, 27]] },
    { n: "The Velvet Bar", d: "Red velvet, cream cheese & red fruits, milk chocolate.", da: "ريد فيلفيت وكريمة جبن وفواكه حمراء وشوكولاتة حليب.", v: [[null, 12]] },
    { n: "The Oriental Bar — Pistachio Kunafa", d: "Signature oriental chocolate bar.", da: "لوح شوكولاتة شرقي مميز.", v: [[null, 8]] },
    { n: "The Movie Bar — Popcorn Caramel", d: "Popcorn & caramel chocolate bar.", da: "لوح شوكولاتة بالبوب كورن والكراميل.", v: [[null, 8]] },
    { n: "The Hokus Bar — Lotus Crumble", d: "Lotus crumble chocolate bar.", da: "لوح شوكولاتة بكرامبل اللوتس.", v: [[null, 8]] },
    { n: "The Italian Bar — Ferrero & Wafer", d: "Ferrero & wafer chocolate bar.", da: "لوح شوكولاتة بالفيريرو والويفر.", v: [[null, 8]] },
    { n: "Mini Chocolate Bars Box", d: "Assorted mini bars.", da: "ألواح صغيرة مشكّلة.", v: [[null, 25]] },
    { n: "The Gold Chocolate Box — 500g", d: "Premium gold chocolate selection.", da: "تشكيلة شوكولاتة ذهبية فاخرة 500غ.", v: [[null, 35]] },
    { n: "Chocolate Palet Pistachio — 100g", d: "Pistachio chocolate palet.", da: "باليه شوكولاتة بالفستق 100غ.", v: [[null, 6]] },
    { n: "Grissini Variety Box — 200g", d: "Assorted grissini.", da: "غريسيني مشكّل 200غ.", v: [[null, 4.5]] },
    { n: "Nougat Chocolate Bar", d: "Classic nougat bar.", da: "لوح نوغا كلاسيكي.", v: [[null, 1.5]] },
    { n: "Pretzels Dipped in Chocolate — 85g", d: "Crunchy pretzels, chocolate coating.", da: "بريتزل مقرمش مغطّس بالشوكولاتة.", v: [[null, 5.5]] },
    { n: "Chocolate With Nuts", d: "Chocolate with roasted nuts.", da: "شوكولاتة بالمكسرات المحمّصة.", v: [[null, 2.8]] },
    { n: "Chocolate Raha Jar", d: "Chocolate raha spread jar.", da: "مرطبان شوكولاتة الراحة.", v: [[null, 6]] },
    { n: "Chocolate Eggs Box", d: "Festive chocolate eggs.", da: "بيض شوكولاتة للمناسبات.", v: [["500g", 23], ["200g", 9.5]] },
    { n: "Gavotte Crêpe Milk Chocolate — 100g", d: "Crispy gavotte in milk chocolate.", da: "غافوت مقرمش بشوكولاتة الحليب.", v: [[null, 7]] },
    { n: "Chocolate Hearts With Nuts Box", d: "Hearts with roasted nuts.", da: "قلوب شوكولاتة بالمكسرات.", v: [[null, 18]] },
    { n: "Biscotti Box — 400g", d: "Crunchy Italian biscotti.", da: "بيسكوتي إيطالي مقرمش 400غ.", v: [[null, 13.5]] },
    { n: "Dipped Candied Orange — 140g", d: "Candied orange, dark chocolate.", da: "برتقال مسكّر بشوكولاتة داكنة.", v: [[null, 8]] },
    { n: "FRIMBLES Chocolate Bar", d: "Signature FRIMBLES bar.", da: "لوح فريمبلز المميز.", v: [[null, 11]] },
    { n: "Almond Nougat Jar — 100g", d: "Soft almond nougat.", da: "نوغا اللوز الطرية 100غ.", v: [[null, 6]] },
    { n: "Teddy Mallow Box — 125g", d: "Mallow treats.", da: "حلويات المارشمالو.", v: [[null, 12]] },
    { n: "Mendiant Dark Chocolate Box — 140g", d: "Dark mendiants with nuts & fruits.", da: "مانديان داكن بالمكسرات والفواكه.", v: [[null, 7]] },
    { n: "Salty Salaison Box — 100g", d: "Sweet & salty bites.", da: "قضمات حلوة ومالحة.", v: [[null, 5]] },
    { n: "Chocolate Trail Mix — 300g", d: "Chocolate with mixed nuts.", da: "شوكولاتة بمكسرات مشكّلة.", v: [["Classic", 23], ["Sugar Free", 23]] },
    { n: "Makhlouta Chocolate Jar — 130g", d: "Nuts dipped in chocolate.", da: "مكسرات مغطّسة بالشوكولاتة.", v: [[null, 6.5]] },
  ]
},
{
  id: "bread", icon: "🍞", ar: "المخبز", en: "Bread",
  items: [
    { n: "Mini Burger Buns Bag", d: "Soft mini buns.", da: "خبز برجر صغير طري.", v: [["Plain", 1.75], ["Sesame", 1.75], ["Multi Grains", 1.75]] },
    { n: "Burger Buns Bag", d: "Soft burger buns.", da: "خبز برجر طري.", v: [["Plain", 2.5], ["Sesame", 2.5], ["Multi Grains", 2.5]] },
    { n: "Rustic Fig, Walnuts Multi Grain — 850g", d: "Rustic loaf, figs & walnuts.", da: "رغيف ريفي بالتين والجوز.", v: [[null, 9.5]] },
    { n: "Ruby Cranberry, Pistachio Multi Grain — 850g", d: "Ruby loaf, cranberry & pistachio.", da: "رغيف بالتوت البري والفستق.", v: [[null, 9.5]] },
    { n: "Golden Apricot, Sesame Multi Grain — 850g", d: "Golden loaf, apricot & sesame.", da: "رغيف بالمشمش والسمسم.", v: [[null, 9.5]] },
    { n: "Authentic Sourdough", d: "Slow-fermented sourdough, 650g.", da: "ساوردو أصيل بالتخمير البطيء 650غ.", v: [["Extra Brown", 8], ["Multi Cereal", 8], ["Sesame & Baraka", 6.75], ["Olives", 6.75], ["Multi Grains", 6.75], ["Plain", 6.75]] },
  ]
},
{
  id: "croissant", icon: "🥐", ar: "الكرواسون", en: "Croissant",
  items: [
    { n: "Croissant Au Beurre", d: "Classic French butter croissant.", da: "كرواسون الزبدة الفرنسي الكلاسيكي.", v: [[null, 1.5]] },
    { n: "Croissant Au Fromage", d: "Cheese croissant.", da: "كرواسون بالجبن.", v: [[null, 2]] },
    { n: "Croissant Zaatar", d: "Zaatar croissant.", da: "كرواسون بالزعتر.", v: [[null, 1.75]] },
    { n: "Pain Au Chocolat", d: "Chocolate-filled viennoiserie.", da: "بان أو شوكولا.", v: [[null, 2]] },
    { n: "Flat Croissant", d: "Trendy flattened croissant.", da: "كرواسون مسطّح عصري.", v: [[null, 2.25]] },
  ]
},
{
  id: "glace", icon: "🍨", ar: "المثلجات (غلاس)", en: "Glace & Ice Cream",
  items: [
    { n: "Glace Trompe L'Oeil Peanut (Snickers)", d: "Joconde with Snickers & chocolate ice cream, white chocolate.", da: "جوكوند مع آيس كريم السنيكرز والشوكولاتة.", v: [[null, 26]] },
    { n: "Glace Trompe L'Oeil Citron (Citron/Fraise)", d: "Strawberry & citron ice cream, citron chocolate.", da: "آيس كريم الفراولة والليمون بشوكولاتة الليمون.", v: [[null, 26]] },
    { n: "Glace Trompe L'Oeil Cocoa (Choc/Vanilla)", d: "Vanilla & chocolate ice cream, chocolate coating.", da: "آيس كريم الفانيلا والشوكولاتة بتغطية الشوكولاتة.", v: [[null, 26]] },
    { n: "Glace Trompe L'Oeil Pistachio (Pistachio/Choc)", d: "Pistachio & chocolate ice cream, white chocolate.", da: "آيس كريم الفستق والشوكولاتة بالشوكولاتة البيضاء.", v: [[null, 26]] },
    { n: "Hazelnut Chocolate Ice Cream Bar — 800g", d: "Creamy hazelnut & chocolate bar.", da: "لوح آيس كريم البندق والشوكولاتة 800غ.", v: [[null, 27]] },
    { n: "Mini Fruity Ice Cream Bites — 1 Doz", d: "Bite-size fruity ice creams.", da: "قضمات آيس كريم بالفواكه (دزينة).", v: [[null, 26]] },
    { n: "Glace Long — 8 Pers", d: "2 ice cream flavors, thin vanilla sponge.", da: "نكهتا آيس كريم وطبقة سبونج فانيلا رقيقة.", v: [["Oreo Choc", 34], ["Strawberry Choc", 34], ["Lotus Choc", 34], ["Ferrero Choc", 34], ["Cookies Choc", 34], ["Nutella Strawberry", 34], ["Strawberry Mango", 34], ["Snickers Choc", 34]] },
    { n: "Glace Rouleau — 8 Pers", d: "Vanilla sponge & ice cream rolled cake.", da: "رول سبونج الفانيلا والآيس كريم.", v: [["Oreo Choc", 37], ["Strawberry Mango", 37]] },
    { n: "Glace Round — 10 Pers", d: "2 ice cream flavors, brownie chocolate base.", da: "نكهتا آيس كريم وقاعدة براوني.", v: [["Oreo Choc", 40], ["Strawberry Choc", 40], ["Lotus Choc", 40], ["Ferrero Choc", 40], ["Cookies Choc", 40], ["Nutella Strawberry", 40], ["Strawberry Mango", 40], ["Snickers Choc", 40]] },
    { n: "Sundae Glace — 8 Pers", d: "Vanilla, chocolate & strawberry with brownie base.", da: "فانيلا وشوكولاتة وفراولة مع قاعدة براوني.", v: [[null, 27]] },
    { n: "Tart Glace Boule — 10 Pers", d: "Ice cream tart spheres.", da: "تارت آيس كريم كروي.", v: [[null, 40]] },
    { n: "Glace Multi Cake — 10 Pers", d: "Multi-flavor ice cream cake.", da: "كيك آيس كريم متعدد النكهات.", v: [[null, 39]] },
    { n: "Glace Sticks", d: "Gourmet Italian-style ice cream sticks.", da: "أصابع آيس كريم فاخرة بنكهات متعددة.", v: [["Cherry Italian Torte", 4], ["Apricot Ricotta Crumble", 4], ["White Chocolate", 4], ["Kashta Pistachio", 4], ["Blueberry", 4], ["Toffee Coffee", 4], ["Yuzu Calamansi", 4], ["Hazelnut Chocolate", 4], ["Boston Strawberry", 4], ["Pistachio", 4], ["Vanille", 4], ["Cookies & Cream", 4], ["Ferrero Rocher", 4], ["Caramel Popcorn", 4], ["Snickers", 4], ["Chocolate", 4], ["Strawberry", 4], ["Caramel", 4], ["Biscoff", 4], ["Mango", 4], ["Cassata", 4]] },
    { n: "Bonbon Glace", d: "Bite-size chocolate-coated ice cream.", da: "بونبون آيس كريم مغطّس بالشوكولاتة.", v: [["Piece", 1], ["Per Kg", 50]] },
    { n: "Fondant Mous", d: "Signature chocolate fondant mousse.", da: "موس الفوندان المميز.", v: [["Single", 4.5], ["+ Scoop", 6], ["Box of 3", 13], ["Box of 6", 22.5], ["Mini Pack", 15]] },
    { n: "Fondant Mous Cookies", d: "Fondant mousse with cookies.", da: "موس الفوندان بالكوكيز.", v: [["Single", 4.5], ["Box of 3", 13], ["Box of 6", 22.5]] },
    { n: "Scoop Glace (Freezer)", d: "Single scoop to go.", da: "سكوب واحد.", v: [[null, 1.75]] },
    { n: "Raspberry Chocolate Freezie Bites — 160g", d: "Frozen raspberry & chocolate bites.", da: "قضمات التوت والشوكولاتة المجمّدة 160غ.", v: [[null, 9.5]] },
  ]
},
];

/* ---------- Branches (real shop data) ---------- */
const BRANCHES = [
  { ar: "سن الفيل — الطريق العام، بيروت", en: "Sanayeh — Main Road, Beirut", phone: "01 343 422", tel: "9611343422" },
  { ar: "الشويفات", en: "Choueifat", phone: "05 802 203", tel: "9615802203" },
  { ar: "جل الديب", en: "Jal El Dib", phone: "70 032 323", tel: "96170032323" },
  { ar: "صيدا", en: "Saida", phone: "07 754 254", tel: "9617754254" },
];
const WHATSAPP_MAIN = "96170448544";
const WHATSAPP_DISPLAY = "+961 70 448 544";
const SOCIALS = {
  instagram: "https://www.instagram.com/secretscakeslb/",
  facebook: "https://www.facebook.com/secretscakeslb",
  tiktok: "https://www.tiktok.com/@secretscakeslb",
};
