import { MenuItem, Review } from './types';

import logoImg from './assets/images/ruo_tea_user_logo_1784271261587.jpg';
import zenInteriorImg from './assets/images/zen_interior_1784270804547.jpg';
import mushroomClaypotImg from './assets/images/mushroom_claypot_1784270815027.jpg';
import teaBrewingImg from './assets/images/tea_brewing_1784270829389.jpg';
import tofuClaypotImg from './assets/images/tofu_claypot_1784270840947.jpg';
import bitterGourdStewImg from './assets/images/bitter_gourd_stew_1784270852549.jpg';
import fishFinDumplingImg from './assets/images/fish_fin_dumpling_1784270866638.jpg';

export const ASSETS = {
  logo: "https://images.ruotea.com/logo.jpg",
  zenInterior: "https://images.ruotea.com/hero.jpg",
  mushroomClaypot: "https://pub-a7d7969a41874c7da365d5593a753245.r2.dev/%E6%9C%AC%E8%8D%89%E8%97%A5%E8%86%B3%E9%A4%8A%E7%94%9F%E7%85%B2.jpg",
  teaBrewing: "https://assets.cdn.filesafe.space/OK2rLg2tuSDhGNOYu3tk/media/6a794c6d8880872019c7b43b.jpg",
  tofuClaypot: "https://assets.cdn.filesafe.space/OK2rLg2tuSDhGNOYu3tk/media/6a794a275a64f2b5678ee381.jpg",
  bitterGourdStew: bitterGourdStewImg,
  fishFinDumpling: fishFinDumplingImg
};

export const BRAND_NAME_ZH = "RUO TEA 植物茶間";
export const BRAND_NAME_EN = "Ruo Tea Plant-Based House";
export const BRAND_TAGLINE_ZH = "上善若水，以茶待你。";
export const BRAND_TAGLINE_EN = "A Serene Sanctuary of Plant-Based Gastronomy & Fine Tea Art";

export const RESTAURANT_INFO = {
  phone: "012-672 5469",
  address: "檳城喬治市 80, Persiaran Midlands, George Town, Malaysia, 10250",
  englishAddress: "80, Persiaran Midlands, George Town, Malaysia, 10250",
  email: "ruoteaenterprise@gmail.com",
  instagram: "https://www.instagram.com/ruo_tea",
  facebook: "https://www.facebook.com/ruotea80",
  hours: [
    { day: "週一 至 週二 (Mon - Tue)", time: "11:00 - 21:00 (全天)" },
    { day: "週三 (Wednesday)", time: "公休 (Closed)" },
    { day: "週四 至 週日 (Thu - Sun)", time: "11:00 - 21:00 (全天)" }
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "claypot-1",
    name: "本草藥膳養生煲",
    englishName: "Revitalising Herbal Mushroom Hotpot",
    description: "精選羊肚菌、姬松茸、茶樹菇與蟲草花，慢火燉煮極致滋補的天然植物高湯。可選八珍、天麻或素菇茶湯底。",
    englishDescription: "A nourishing natural plant-based broth slow-simmered with Morel, Blazei, Agrocybe, and Cordyceps flowers. Choice of Ba Zhen, Tian Ma, or Herbal Mushroom soup base.",
    price: 38.9,
    category: "claypot",
    image: "https://images.ruotea.com/menufood1.jpg",
    tags: ["羊肚菌", "茶樹菇", "姬松茸", "花菇", "猴頭菇"]
  },
  {
    id: "claypot-2",
    name: "松露石鍋拌飯",
    englishName: "Truffle Stone Pot Rice",
    description: "特選珍珠小米飯，佐以義大利黑松露醬與特級松露油，高溫石鍋逼出濃郁蕈菇焦香，附菇蕈清湯。",
    englishDescription: "Special pearl millet rice served with Italian black truffle paste and extra virgin truffle oil. High-temperature stone pot brings out rich roasted mushroom aroma, served with mushroom soup.",
    price: 34.9,
    category: "claypot",
    image: "https://images.ruotea.com/menufood2.jpg",
    tags: ["珍珠小米飯", "黑松露醬", "特級松露油", "花菇", "甜玉米"]
  },
  {
    id: "claypot-3",
    name: "滷味刈包",
    englishName: "Taiwanese Braised Gua Bao",
    description: "蓬鬆綿軟的白嫩割包，夾入慢火燉煮的厚切植物滷肉、鹹香酸菜、花菇與香濃花生粉，一口咬下鹹甜交織、爆汁滿溢，展現古早台式風情。",
    englishDescription: "Fluffy steamed buns filled with slow-braised plant-based meat, savory pickled mustard greens, shiitake mushrooms, and rich peanut powder for an authentic Taiwanese classic taste.",
    price: 19.9,
    category: "claypot",
    image: "https://images.ruotea.com/menufood3.jpg",
    tags: ["手作割包", "秘製植物滷肉", "道地酸菜", "香濃花生粉", "花菇"]
  },
  {
    id: "dimsum-1",
    name: "余翅手工水餃",
    englishName: "Artisanal Fish Fin Dumplings",
    description: "精緻手工薄皮，包覆鮮筍絲、極品蕈菇與特選高麗菜內餡。呈盤於小火熬製之金黃金針高湯中，綴以杞子，入口湯汁溢滿，皮Q餡豐，極富層次感。",
    englishDescription: "Exquisite hand-folded thin-skinned dumplings stuffed with crispy bamboo shoot shreds, premium chopped mushrooms, and sweet cabbage. Served steaming hot in a golden dried lily broth topped with premium goji berries.",
    price: 28,
    category: "dimsum",
    image: fishFinDumplingImg,
    tags: ["人氣必點", "鮮美飽滿", "手作薄皮", "皮Q肉嫩"]
  },
  {
    id: "tea-1",
    name: "雙壺老陶手沏茶 (青茶與老普洱)",
    englishName: "Ancient Clay Pot Tea Pairing",
    description: "以傳統老陶壺手沏，提供兩種頂級茶品：高山清香烏龍與陳年熟普洱。茶葉在特製陶壺中完整舒展，帶有淡淡松木與溫潤陳香，回甘無限，是解膩安神的絕佳選擇。",
    englishDescription: "Brewed in traditional clay pots. Experience two premium tea varieties: high-mountain floral Oolong and smooth aged vintage Pu-erh. The clay pots preserve the delicate pine-wood notes and rich earthy depth, offering an endless sweet aftertaste.",
    price: 22,
    category: "tea",
    image: teaBrewingImg,
    tags: ["原片手採", "老陶慢沏", "雙茶饗宴", "無限回甘"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "惠欣Wei Sin",
    badge: "Local Guide",
    rating: 5,
    text: "環境寧靜放鬆，是品茶解壓的好地方。雖然是素食，但出乎意料地美味！如果你想找個安靜的地方喝茶或享用午餐，這裡絕對是極佳選擇。建議提前預訂席位以防向隅，因為席位有限。",
    englishText: "The environment is peaceful and relaxing, making it a wonderful place to enjoy tea and unwind. Although the food is vegetarian, it is surprisingly delicious. If you're looking for a quiet place to have tea or lunch, this is an excellent choice. It's best to make a reservation in advance to avoid disappointment, as seating may be limited.",
    date: "a month ago",
    dateZh: "1 個月前"
  },
  {
    id: "rev-2",
    author: "Han Ni",
    badge: "Local Guide",
    rating: 5,
    text: "餐點非常棒，我超級喜歡前菜！服務非常好！環境非常 Zen（充滿禪意），在這裡用餐感到非常舒適。還可以品嚐他們的茶。聽說店裡的書法是老闆娘親手寫的，我很喜歡她的書法。強烈推薦大家來體驗！",
    englishText: "The food is very nice, I love the appetizers so much! the service is super nice! I love the environment, it is sooo Zen. You feel so comfortable to dine in. Can taste their tea too. I heard the lady boss who is the one writing the calligraphy, I love the calligraphy. Strongly recommend for everyone to come here and experience it.",
    date: "6 months ago",
    dateZh: "6 個月前"
  },
  {
    id: "rev-3",
    author: "Jasmine Ker",
    badge: "Local Guide",
    rating: 5,
    text: "對這裡的餐點感到無比驚艷！每一道菜都使用天然原型的植萃食材，完全沒有任何人工素肉，讓原汁原味充分展現。每一口都能品嚐到真材實料。特別令人驚喜的是多款養生煲湯——每一款都有獨特的風味且濃郁飽滿。喜愛真材實料原型素食的人絕對不能錯過！",
    englishText: "Absolutely impressed with the food here! Every dish is made using original, plant-based ingredients without any meat alternatives, which really allows the natural flavors to shine through. You can truly taste the authenticity in every bite. I was especially amazed by the variety of soups—each one had its own unique flavor profile and was incredibly rich and satisfying. A must-try for anyone who appreciates real, wholesome vegan cuisine!",
    date: "a year ago",
    dateZh: "1 年前"
  }
];
