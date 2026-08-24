export interface FullMenuItem {
  id: string;
  category: 'hotpot' | 'setrice' | 'vermicelli' | 'tea' | 'kungfutea' | 'snacks' | 'desserts' | 'addons';
  nameZh: string;
  nameEn: string;
  setPrice?: number;
  singlePrice: number;
  badge?: string;
  descZh?: string;
  descEn?: string;
  soupOptions?: string[];
  grainOptions?: string[];
  servedWith?: string[];
  sauceOptions?: string[];
  tags: string[];
}

export interface FullMenuCategory {
  id: 'all' | 'hotpot' | 'setrice' | 'vermicelli' | 'tea' | 'kungfutea' | 'snacks' | 'desserts' | 'addons';
  nameZh: string;
  nameEn: string;
  iconName: string;
}

export const FULL_MENU_CATEGORIES: FullMenuCategory[] = [
  { id: 'all', nameZh: '全部菜單', nameEn: 'All', iconName: 'Utensils' },
  { id: 'hotpot', nameZh: '御膳湯品煲類', nameEn: 'Hotpot', iconName: 'Flame' },
  { id: 'setrice', nameZh: '主食套飯', nameEn: 'Set Rice', iconName: 'UtensilsCrossed' },
  { id: 'vermicelli', nameZh: '麵線系列', nameEn: 'Vermicelli', iconName: 'Soup' },
  { id: 'tea', nameZh: '特調茶飲', nameEn: 'Tea', iconName: 'CupSoda' },
  { id: 'kungfutea', nameZh: '特級茗茶', nameEn: 'Kung Fu Tea', iconName: 'Coffee' },
  { id: 'snacks', nameZh: '點心與小點', nameEn: 'Snacks', iconName: 'Sparkles' },
  { id: 'desserts', nameZh: '甜點', nameEn: 'Desserts', iconName: 'Cookie' },
  { id: 'addons', nameZh: '加點系列', nameEn: 'Add-ons', iconName: 'PlusCircle' },
];

export const FULL_MENU_ITEMS: FullMenuItem[] = [
  // --- 1. 御膳湯品煲類 Hotpot Series ---
  {
    id: 'hp-1',
    category: 'hotpot',
    nameZh: '本草藥膳養生煲',
    nameEn: 'Revitalising Herbal Mushroom Hotpot',
    setPrice: 48.90,
    singlePrice: 38.90,
    descZh: '精選羊肚菌、姬松茸、茶樹菇與蟲草花，慢火燉煮極致滋補的天然植物高湯。可選八珍、天麻或素菇茶湯底。',
    descEn: 'A nourishing natural plant-based broth slow-simmered with Morel, Blazei, Agrocybe, and Cordyceps flowers.',
    soupOptions: ['素菇茶 Bah Kut Teh', '八珍 Bazhen (+RM5)', '天麻 Tianma (+RM5)'],
    grainOptions: ['珍珠小米飯 Pearl Rice with Millet', '麻油麵線 Sesame Oil Vermicelli'],
    tags: ['羊肚菌', '茶樹菇', '姬松茸', '花菇', '猴頭菇', '蟲草花', '黑木耳', '腐竹', '青菜', '枸杞']
  },
  {
    id: 'hp-2',
    category: 'hotpot',
    nameZh: '原味七彩菇蕈煲',
    nameEn: 'Nourishing Mushrooms Hotpot',
    setPrice: 44.90,
    singlePrice: 34.90,
    descZh: '嚴選多種珍稀菇蕈慢燉出原汁原味的醇厚菌香清甜湯底，滋養身心。',
    descEn: 'A rich and aromatic natural mushroom broth cooked with premium assorted wild mushrooms.',
    grainOptions: ['珍珠小米飯 Pearl Rice with Millet', '麻油麵線 Sesame Oil Vermicelli'],
    tags: ['羊肚菌', '茶樹菇', '姬松茸', '花菇', '猴頭菇', '杏鮑菇', '金針菇', '蟲草花', '黑木耳', '腐竹', '青菜', '枸杞']
  },
  {
    id: 'hp-3',
    category: 'hotpot',
    nameZh: '四川麻辣菇蕈煲',
    nameEn: 'Spicy Mala Mushroom Hotpot',
    setPrice: 48.90,
    singlePrice: 38.90,
    descZh: '正宗川味香料與醇厚菌湯完美結合，麻香撲鼻、溫潤微辣而不燥，喚醒味蕾。',
    descEn: 'Authentic Sichuan spices infused into wholesome mushroom broth with a fragrant, tingling kick.',
    grainOptions: ['珍珠小米飯 Pearl Rice with Millet', '麻油麵線 Sesame Oil Vermicelli'],
    tags: ['羊肚菌', '茶樹菇', '姬松茸', '花菇', '猴頭菇', '杏鮑菇', '金針菇', '蟲草花', '黑木耳', '腐竹', '青菜']
  },
  {
    id: 'hp-4',
    category: 'hotpot',
    nameZh: '麻油蟲草白菜煲',
    nameEn: 'Sesame Oil Cordyceps Cabbage Pot',
    setPrice: 43.90,
    singlePrice: 33.90,
    descZh: '古法純正黑麻油爆炒老薑絲，搭配清甜大白菜與養生蟲草花燉煮，暖胃驅寒。',
    descEn: 'Traditional sesame oil and fried ginger shreds simmered with fresh cabbage and Cordyceps flowers.',
    grainOptions: ['珍珠小米飯 Pearl Rice with Millet', '麻油麵線 Sesame Oil Vermicelli'],
    servedWith: ['燙西蘭花 Blanched Broccoli'],
    tags: ['蟲草花', '大白菜', '花菇', '猴頭菇', '日本豆泡', '腐竹', '紅棗', '枸杞', '炸薑絲', '麻油']
  },
  {
    id: 'hp-5',
    category: 'hotpot',
    nameZh: '韓式泡菜石鍋飯',
    nameEn: 'Korean Kimchi Hotpot Rice',
    setPrice: 46.90,
    singlePrice: 36.90,
    descZh: '手工自製純素泡菜與多種菌菇，高溫石鍋逼出底部焦香鍋巴，香辣開胃。',
    descEn: 'Homemade vegan kimchi, assorted mushrooms, and seaweed served in a sizzling stone pot.',
    servedWith: ['鮮味炸腐竹 Crispy Stuffed Yuba', '燙西蘭花 Blanched Broccoli'],
    tags: ['猴頭菇', '杏鮑菇', '金針菇', '黑木耳', '日本豆泡', '鈴鈴卷', '海帶芽', '玉米', '自製泡菜']
  },

  // --- 2. 主食套飯系列 Set Rice Series ---
  {
    id: 'sr-1',
    category: 'setrice',
    nameZh: '松露石鍋拌飯',
    nameEn: 'Truffle Stone Pot Rice',
    setPrice: 44.90,
    singlePrice: 34.90,
    descZh: '特選珍珠小米飯，佐以義大利黑松露醬與特級松露油，高溫石鍋逼出濃郁蕈菇焦香，附菇蕈清湯。',
    descEn: 'Special pearl millet rice served with Italian black truffle paste and extra virgin truffle oil. High-temperature stone pot brings out rich roasted mushroom aroma.',
    servedWith: ['菇蕈清湯 Clear Mushroom Soup'],
    tags: ['珍珠小米飯', '黑松露醬', '特級松露油', '花菇', '甜玉米', '青菜', '枸杞']
  },
  {
    id: 'sr-2',
    category: 'setrice',
    nameZh: '有機紅糖薑醋煲',
    nameEn: 'Organic Molasses Ginger Vinegar Stew',
    setPrice: 48.90,
    singlePrice: 38.90,
    descZh: '嚴選有機紅糖與添丁甜醋，搭配老薑、黑豆與白背木耳慢火慢熬，酸甜香醇、極致暖身。',
    descEn: 'Traditional sweet vinegar and organic molasses simmered with old ginger, black beans, and mushrooms.',
    servedWith: ['鮮味炸腐竹 Crispy Stuffed Yuba', '燙西蘭花 Blanched Broccoli'],
    tags: ['珍珠小米飯', '老薑', '花菇', '猴頭菇', '白背木耳', '黑豆', '滷豆乾', '炸薑絲', '添丁甜醋']
  },
  {
    id: 'sr-3',
    category: 'setrice',
    nameZh: '古早滷味飯',
    nameEn: 'Authentic Taiwanese Braised Rice',
    setPrice: 42.90,
    singlePrice: 32.90,
    descZh: '經典台式秘製純素肉燥，搭配特製酸菜與滷豆乾，香濃入味，充滿道地古早家鄉味。',
    descEn: 'Authentic Taiwanese slow-braised plant-based minced meat with pickled mustard greens and braised tofu.',
    servedWith: ['鮮味炸腐竹 Crispy Stuffed Yuba', '滷味什錦湯 Braised Soup'],
    tags: ['珍珠小米飯', '素滷肉', '花菇', '滷豆乾', '古早酸菜', '青菜', '香芝麻']
  },
  {
    id: 'sr-4',
    category: 'setrice',
    nameZh: '苦瓜烏龍釀豆腐',
    nameEn: 'Bitter Gourd Oolong Yong Tau Foo',
    setPrice: 46.90,
    singlePrice: 36.90,
    badge: '初一，十五和週末限定',
    descZh: '主廚手作手工釀苦瓜、茄子與豆卜，佐以高山烏龍茶湯底浸煮，甘醇清爽不油膩。',
    descEn: 'Handmade plant-based stuffed bitter gourd, eggplant, and tofu puffs simmered in fragrant high-mountain oolong tea broth.',
    grainOptions: ['珍珠小米飯 Pearl Rice with Millet', '冬粉 Glass Noodles'],
    servedWith: ['鮮味炸腐竹 Crispy Stuffed Yuba'],
    sauceOptions: ['甜麵醬 Sweet Bean Sauce', '辣椒醬 Chilli Sauce'],
    tags: ['手作獅子頭', '釀苦瓜', '釀茄子', '釀辣椒', '釀豆卜', '烏龍茶湯', '鈴鈴卷']
  },

  // --- 3. 麵線系列 Vermicelli Series ---
  {
    id: 'vm-1',
    category: 'vermicelli',
    nameZh: '滷味普洱麵線',
    nameEn: 'Taiwanese Lu Wei Pu-Er Vermicelli',
    setPrice: 39.90,
    singlePrice: 29.90,
    descZh: '以雲南熟普洱茶與中藥材入味滷製的鮮香湯頭，搭配細滑手工麵線與多種滷料。',
    descEn: 'Silky vermicelli served in an aromatic broth infused with Yunnan aged Pu-erh tea and braised delicacies.',
    tags: ['滷豆乾', '花菇', '猴頭菇', '杏鮑菇', '金針菇', '黑木耳', '腐竹', '普洱茶湯', '芫荽']
  },
  {
    id: 'vm-2',
    category: 'vermicelli',
    nameZh: '茶油麵線',
    nameEn: 'Camellia Oil Vermicelli',
    setPrice: 36.90,
    singlePrice: 26.90,
    descZh: '嚴選頂級冷壓苦茶油與酥脆炸薑絲、枸杞拌入手工細麵線，香氣清雅、溫潤養胃。',
    descEn: 'Handcrafted vermicelli tossed with premium cold-pressed camellia oil, crispy ginger shreds, and goji berries.',
    servedWith: ['燙西蘭花 Blanched Broccoli', '菇蕈清湯 Clear Mushroom Soup'],
    tags: ['頂級苦茶油', '手工麵線', '枸杞', '金黃炸薑絲', '芹菜']
  },
  {
    id: 'vm-3',
    category: 'vermicelli',
    nameZh: '韓式泡菜麵線',
    nameEn: 'Korean Kimchi Vermicelli',
    setPrice: 39.90,
    singlePrice: 29.90,
    descZh: '酸辣爽口的韓式純素泡菜搭配特選菌菇與滑順麵線，開胃順口。',
    descEn: 'Tangy and spicy Korean homemade vegan kimchi paired with tender mushrooms and silky vermicelli.',
    tags: ['猴頭菇', '杏鮑菇', '金針菇', '日本豆泡', '自製泡菜', '海帶芽', '青菜']
  },

  // --- 4. 特調茶飲 Tea ---
  {
    id: 'tea-1',
    category: 'tea',
    nameZh: '蜜桃烏龍奶茶',
    nameEn: 'Peach Oolong Milk Tea',
    singlePrice: 16.90,
    descZh: '清甜白桃香氣融入炭焙高山烏龍與純淨燕麥乳，絲滑細膩，回味無窮。',
    descEn: 'Delicate peach fragrance blended with charcoal-roasted oolong tea and silky plant-based milk.',
    tags: ['蜜桃果香', '高山烏龍', '植物奶', '冷飲特調']
  },
  {
    id: 'tea-2',
    category: 'tea',
    nameZh: '玫瑰烏龍奶茶',
    nameEn: 'Rose Oolong Milk Tea',
    singlePrice: 16.90,
    descZh: '天然重瓣玫瑰花瓣與高山烏龍茶葉共同窨製，茶香與花香在口中優雅交織。',
    descEn: 'Aromatic red rose petals scented with high-mountain oolong, rich floral and creamy notes.',
    tags: ['天然玫瑰', '清香烏龍', '絲滑奶香', '招牌推薦']
  },
  {
    id: 'tea-3',
    category: 'tea',
    nameZh: '桂花烏龍奶茶',
    nameEn: 'Osmanthus Oolong Milk Tea',
    singlePrice: 16.90,
    descZh: '金秋金桂的金黃花香與甘醇烏龍底韻相遇，清雅甜潤，餘韻悠長。',
    descEn: 'Golden osmanthus blossoms harmonized with mellow oolong tea and smooth creaminess.',
    tags: ['金桂花香', '回甘烏龍', '香氣怡人']
  },
  {
    id: 'tea-4',
    category: 'tea',
    nameZh: '話梅青檸綠茶',
    nameEn: 'Salted Plum Lime Green Tea',
    singlePrice: 16.90,
    descZh: '陳年生津話梅與鮮榨青檸汁，搭配清冽雲南高山綠茶，酸甜生津、解膩消暑。',
    descEn: 'Aged salted plum and fresh zesty lime juice infused with crisp Yunnan high-mountain green tea.',
    tags: ['古法話梅', '鮮檸檬', '高山綠茶', '酸甜解膩']
  },
  {
    id: 'tea-5',
    category: 'tea',
    nameZh: '西湖龍井 冷萃茶',
    nameEn: 'West Lake Longjing Cold Brew',
    singlePrice: 13.90,
    descZh: '低溫慢速冷萃 12 小時，完整萃取龍井特有的豆香與清冽甘甜，零澀感。',
    descEn: 'Slow cold-brewed for 12 hours to extract pure roasted chestnut sweetness without bitterness.',
    tags: ['12hr冷萃', '豆香甘冽', '原葉茶']
  },
  {
    id: 'tea-6',
    category: 'tea',
    nameZh: '頂級鐵觀音 冷萃茶',
    nameEn: 'Tie Guan Yin Cold Brew',
    singlePrice: 13.90,
    descZh: '醇厚焙火香氣與獨特「觀音韻」，冷泡風味更加清冽甘甜，回甘持久。',
    descEn: 'Artisanal roasted Tie Guan Yin cold steeped for deep orchid aroma and long-lasting finish.',
    tags: ['觀音韻', '重焙香', '天然回甘']
  },
  {
    id: 'tea-7',
    category: 'tea',
    nameZh: '祁門紅茶 冷萃茶',
    nameEn: 'Qi Men Black Tea Cold Brew',
    singlePrice: 13.90,
    descZh: '世界三大高香紅茶之一，帶有特有蜜糖香與果香，口感溫和柔滑。',
    descEn: 'World-renowned Keemun black tea with natural honey and fruit undertones in a refreshing cold bottle.',
    tags: ['世界名茶', '蜜香果韻', '清爽順口']
  },

  // --- 5. 功夫茶 & 單人特級茗茶 Kung Fu & Single Tea ---
  {
    id: 'kt-1',
    category: 'kungfutea',
    nameZh: '小青柑 功夫茶 (2-4人)',
    nameEn: 'Green Tangerine Pu\'er Kung Fu Tea',
    singlePrice: 58.90,
    descZh: '新會核心產區青柑皮填入陳年熟普洱，果香濃郁、茶湯紅濃透亮，附送精緻茶點。',
    descEn: 'Aged Pu\'er stuffed inside whole green tangerine peel, intensely citrusy and rich. Served with tea snacks.',
    tags: ['新會青柑', '陳年熟普', '2-4人份', '附茶點']
  },
  {
    id: 'kt-2',
    category: 'kungfutea',
    nameZh: '半岩水仙 功夫茶 (2-4人)',
    nameEn: 'Banyan Narcissus Kung Fu Tea',
    singlePrice: 49.90,
    descZh: '武夷山半岩名種，蘭花香幽長、岩韻醇厚，茶湯橙黃明亮。附送精緻茶點。',
    descEn: 'Wuyi rock tea with lingering orchid fragrance and mineral richness. Served with tea refreshments.',
    tags: ['武夷岩茶', '蘭花幽香', '2-4人份', '附茶點']
  },
  {
    id: 'kt-3',
    category: 'kungfutea',
    nameZh: '壽眉白茶 功夫茶 (2-4人)',
    nameEn: 'Shou Mei White Tea Kung Fu Tea',
    singlePrice: 45.90,
    descZh: '陳年老白茶，滋味醇厚帶有棗香與藥香，越陳越香，溫和養胃。附送精緻茶點。',
    descEn: 'Aged white tea with mellow jujube aroma and sweet woody taste. Served with tea refreshments.',
    tags: ['老白茶', '棗香醇和', '2-4人份', '附茶點']
  },
  {
    id: 'kt-4',
    category: 'kungfutea',
    nameZh: '人參烏龍 功夫茶 (2-4人)',
    nameEn: 'Ginseng Oolong Kung Fu Tea',
    singlePrice: 44.90,
    descZh: '優質高山烏龍與吉林人參精緻調配，入口清香生津，喉韻甘甜持久。附送精緻茶點。',
    descEn: 'High-mountain oolong blended with fine ginseng powder for an immediate, long-lasting sweet finish.',
    tags: ['人參精華', '回甘持久', '2-4人份', '附茶點']
  },
  {
    id: 'kt-5',
    category: 'kungfutea',
    nameZh: '西湖龍井 功夫茶 (2-4人)',
    nameEn: 'West Lake Longjing Kung Fu Tea',
    singlePrice: 42.90,
    descZh: '色翠、香鬱、味醇、形美，扁平光滑，清香高爽。附送精緻茶點。',
    descEn: 'Classic premium Longjing green tea with chestnut aroma and flat jade leaves.',
    tags: ['綠茶之冠', '豆香清幽', '2-4人份', '附茶點']
  },
  {
    id: 'kt-6',
    category: 'kungfutea',
    nameZh: '福鼎白茶 (單人品)',
    nameEn: 'Fu Ding White Tea (Single)',
    singlePrice: 24.90,
    descZh: '微發酵工藝，芽葉嫩綠，滋味清甜甘涼，具清熱降火之效。附送精緻茶點（冷/熱皆可）。',
    descEn: 'Sun-withered white tea with delicate sweet aroma. Includes delicate tea snacks (Cold/Hot).',
    tags: ['單人品茗', '清甜甘涼', '附茶點']
  },
  {
    id: 'kt-7',
    category: 'kungfutea',
    nameZh: '雲南普洱 (單人品)',
    nameEn: 'Yunnan Pu\'er (Single)',
    singlePrice: 18.90,
    descZh: '古樹熟普洱，湯色紅濃明亮，口感醇滑黏稠、陳香四溢。附送精緻茶點（冷/熱皆可）。',
    descEn: 'Classic Yunnan fermented Pu\'er tea with smooth woody character. Includes tea snacks.',
    tags: ['古樹熟普', '暖胃消食', '附茶點']
  },
  {
    id: 'kt-8',
    category: 'kungfutea',
    nameZh: '自備茶開爐費',
    nameEn: 'Opening Fee for Bringing Your Own Tea',
    singlePrice: 25.00,
    descZh: '提供若茶全套老陶功夫茶具、純淨山泉水與文火燒水爐具，自由享受泡茶之樂。',
    descEn: 'Full traditional tea set service including premium spring water and ceramic stove setup.',
    tags: ['功夫茶具', '山泉水煮', '開爐服務']
  },

  // --- 6. 點心與特色小點 Snacks & Dim Sum ---
  {
    id: 'sn-1',
    category: 'snacks',
    nameZh: '滷味刈包',
    nameEn: 'Taiwanese Braised Gua Bao',
    singlePrice: 19.90,
    descZh: '鬆軟手作刈包夾入慢燉秘製植物肉、鹹香酸菜、花菇與香濃花生粉，道地台式經典。',
    descEn: 'Fluffy steamed buns filled with slow-braised plant-based meat, savory pickled mustard greens, and rich peanut powder.',
    tags: ['手作刈包', '秘製滷肉', '道地酸菜', '香濃花生粉']
  },
  {
    id: 'sn-2',
    category: 'snacks',
    nameZh: '冰花煎餃 (5pcs)',
    nameEn: 'Snowflake Crispy Dumplings (5pcs)',
    singlePrice: 21.90,
    descZh: '煎出如蕾絲般薄脆金黃冰花脆皮，內餡飽滿多汁，外脆內嫩。',
    descEn: 'Crispy snowflake lattice crusted dumplings filled with juicy seasonal vegetables and mushrooms.',
    tags: ['蕾絲冰花', '金黃酥脆', '爆汁餡料']
  },
  {
    id: 'sn-3',
    category: 'snacks',
    nameZh: '鮮蔬湯手作獅子頭',
    nameEn: 'Homemade Lion\'s Head Meatball (Soup)',
    singlePrice: 29.90,
    descZh: '純手工捏製植物獅子頭，於清甜時蔬高湯中慢火煨煮，口感綿密鬆軟、鮮味十足。',
    descEn: 'Handmade plant-based lion\'s head meatballs gently simmered in a clear sweet vegetable broth.',
    tags: ['手捏獅子頭', '鮮甜蔬菜湯', '溫潤清爽']
  },
  {
    id: 'sn-4',
    category: 'snacks',
    nameZh: '香炸手作獅子頭',
    nameEn: 'Homemade Lion\'s Head Meatball (Fried)',
    singlePrice: 24.90,
    descZh: '外皮金黃酥脆、內裡鮮嫩扎實，搭配特製沾醬，香氣誘人。',
    descEn: 'Crispy golden fried handmade vegan meatballs served with signature dipping condiment.',
    tags: ['金黃香酥', '扎實多汁', '主廚特製']
  },
  {
    id: 'sn-5',
    category: 'snacks',
    nameZh: '黃金泡菜腐乳豆乾',
    nameEn: 'Golden Kimchi Crispy Beancurd',
    singlePrice: 15.90,
    descZh: '外脆內嫩的炸豆乾裹上主廚特調黃金泡菜豆腐乳醬，酸甜濃郁。',
    descEn: 'Crispy fried bean curd tossed in luscious golden fermented tofu and kimchi sauce.',
    tags: ['黃金泡菜', '腐乳特調', '酥脆豆乾']
  },
  {
    id: 'sn-6',
    category: 'snacks',
    nameZh: '紅油抄手 (5pcs)',
    nameEn: 'Chilli Oil Wonton (5pcs)',
    singlePrice: 13.90,
    descZh: '皮薄餡嫩的手工素餛飩，淋上自製香辣紅油與花椒香醋醬，麻辣爽口。',
    descEn: 'Handcrafted vegan wontons in house-made aromatic Sichuan chili oil, vinegar, and crushed peanuts.',
    tags: ['秘製紅油', '皮薄餡美', '香麻開胃']
  },
  {
    id: 'sn-7',
    category: 'snacks',
    nameZh: '芝麻煎包 (2pcs)',
    nameEn: 'Pan Fried Sesame V-Pork Bun (2pcs)',
    singlePrice: 12.90,
    descZh: '底部煎至金黃焦脆，頂部撒滿香濃黑白芝麻，咬開滿口植物肉湯汁。',
    descEn: 'Pan-fried buns with a crispy golden bottom and fragrant toasted sesame coating.',
    tags: ['焦脆底皮', '芝麻香濃', '手作麵點']
  },
  {
    id: 'sn-8',
    category: 'snacks',
    nameZh: '三色小籠包',
    nameEn: 'Steamed Tricolour Mini Sweet Buns',
    singlePrice: 9.90,
    descZh: '天然蔬果汁調色麵皮，內裹不同風味甜餡，造型小巧討喜。',
    descEn: 'Steamed delicate mini sweet buns crafted with natural vegetable extracts.',
    tags: ['天然果蔬', '精緻蒸點', '甜香可口']
  },
  {
    id: 'sn-9',
    category: 'snacks',
    nameZh: '鮮味炸腐竹 (2pcs)',
    nameEn: 'Crispy Stuffed Yuba (2pcs)',
    singlePrice: 6.90,
    descZh: '精選非基改鮮腐竹包裹特製素餡料，酥炸至金黃酥脆。',
    descEn: 'Golden crispy bean curd skin rolls filled with savory seasoned vegetable fillings.',
    tags: ['非基改腐竹', '現炸金黃', '酥脆香甜']
  },
  {
    id: 'sn-10',
    category: 'snacks',
    nameZh: '登堂 前菜 (選三)',
    nameEn: 'Appetizer Trio (Choose 3)',
    singlePrice: 11.90,
    descZh: '可自選三款特色前菜：烏梅西紅柿、桂花山藥、蜜漬黑豆、涼拌木耳、椒麻毛豆、百香青木瓜。',
    descEn: 'Choose 3: Smoked Plum Tomatoes, Osmanthus Yam, Sweet Kuromame, Wood Ear Salad, Edamame, or Passion Fruit Papaya.',
    tags: ['烏梅西紅柿', '桂花山藥', '蜜漬黑豆', '涼拌木耳', '椒麻毛豆', '百香青木瓜']
  },

  // --- 7. 甜點 Desserts ---
  {
    id: 'ds-1',
    category: 'desserts',
    nameZh: '桃膠雪耳糖水',
    nameEn: 'Peach Gum Snow Fungus Dessert',
    singlePrice: 13.90,
    descZh: '珍貴野生桃膠與天然銀耳慢熬成天然植物膠原，搭配紅棗枸杞，滋陰潤燥。',
    descEn: 'Nourishing wild peach resin and snow fungus sweet soup rich in natural plant collagen.',
    tags: ['野生桃膠', '天然銀耳', '紅棗枸杞', '滋潤養顏']
  },
  {
    id: 'ds-2',
    category: 'desserts',
    nameZh: '高山茶凍',
    nameEn: 'Crystal Konyaku Tea Jelly',
    singlePrice: 6.90,
    descZh: '以若茶招牌冷萃茶湯凝萃而成，晶瑩剔透，微甘爽口，茶香悠長。',
    descEn: 'Crystal clear jelly infused with cold-brewed high-mountain tea, lightly sweet and refreshing.',
    tags: ['原茶凝粹', '清爽晶瑩', '解膩甜點']
  },
  {
    id: 'ds-3',
    category: 'desserts',
    nameZh: '堅果布朗尼',
    nameEn: 'Nutty Brownie',
    singlePrice: 4.90,
    descZh: '濃郁純可可與香脆綜合堅果烘烤，口感扎實濕潤，微甜不膩。',
    descEn: 'Fudgy cocoa brownie studded with crunchy assorted nuts, perfectly balanced sweetness.',
    tags: ['濃純可可', '綜合堅果', '手作甜點']
  },

  // --- 8. 加點系列 Add-on ---
  {
    id: 'ao-1',
    category: 'addons',
    nameZh: '珍珠小米飯',
    nameEn: 'Pearl Rice with Millet',
    singlePrice: 3.90,
    descZh: '精選珍珠米與優質黃小米同煮，香軟彈牙。',
    descEn: 'Steamed premium pearl rice cooked with nutritious golden millet.',
    tags: ['黃金小米', '香Q米飯']
  },
  {
    id: 'ao-2',
    category: 'addons',
    nameZh: '麻油麵線',
    nameEn: 'Sesame Oil Vermicelli',
    singlePrice: 3.90,
    descZh: '純黑麻油與枸杞拌手工細麵線。',
    descEn: 'Handmade thin vermicelli tossed with pure sesame oil and goji berries.',
    tags: ['純正麻油', '手工麵線']
  },
  {
    id: 'ao-3',
    category: 'addons',
    nameZh: '鮮味炸腐竹 (1pc)',
    nameEn: 'Crispy Stuffed Yuba (1pc)',
    singlePrice: 2.90,
    descZh: '酥脆金黃手工腐竹卷。',
    descEn: 'Single piece of freshly fried golden stuffed bean curd roll.',
    tags: ['手工腐竹', '酥脆加點']
  },
  {
    id: 'ao-4',
    category: 'addons',
    nameZh: '燙西蘭花',
    nameEn: 'Blanched Broccoli',
    singlePrice: 3.90,
    descZh: '清脆鮮綠西蘭花佐輕鹽調味。',
    descEn: 'Freshly blanched vibrant green broccoli.',
    tags: ['高纖鮮蔬', '健康加點']
  }
];
