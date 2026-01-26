type Food = {
  name: string;
  imageSrc?: string;
  emoji?: string;
  description: string;
};
type Nutrition = {
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
};
type AdviceBlock = {
  title: string;
  description: string;
  items: string[];
};
type Plan = { name: string; nutrition: Nutrition; advice: AdviceBlock[] };
type CardItem = {
  title: string[];
  icon: string;
  bg: string;
  foods?: Food[];
  plans?: Plan[];
  imageSrc?: string;
};

const cards: CardItem[] = [
  {
    title: ["Уураг", "агуулсан", "хүнс"],
    icon: "/protein-icon.png",
    foods: [
      { name: "Тахианы мах", emoji: "🍗", description: "27/100гр" },
      { name: "Үхрийн мах", emoji: "🥩", description: "26/100гр" },
      { name: "Гахайн мах", emoji: "🥓", description: "25/100гр" },
      { name: "Өндөг", emoji: "🥚", description: "13/100гр" },
      { name: "Загасны мах", emoji: "🐟", description: "20/100гр" },
      { name: "Аарц", emoji: "🥛", description: "18/100гр" },
      { name: "Сүү", emoji: "🥛", description: "3/100гр" },
      { name: "Тараг", emoji: "🍶", description: "4/100гр" },
      { name: "Бяслаг", emoji: "🧀", description: "25/100гр" },
      { name: "Хиам", emoji: "🌭", description: "12/100гр" },
    ],
    bg: "from-purple-500 to-pink-500",
  },
  {
    title: ["Өөх тос", "агуулсан", "хүнс"],
    icon: "/fat-icon.png",
    bg: "from-orange-500 to-red-500",
    foods: [
      { name: "Ургамлын тос", emoji: "🛢️", description: "100/100гр" },
      { name: "Цөцгийн тос", emoji: "🧈", description: "81/100гр" },
      { name: "Гахайн өөх", emoji: "🥓", description: "99/100гр" },
      { name: "Майонез", emoji: "🥣", description: "75/100гр" },
      { name: "Бяслаг", emoji: "🧀", description: "33/100гр" },
      { name: "Өндөгний шар", emoji: "🥚", description: "32/100гр" },
      { name: "Самар", emoji: "🥜", description: "50/100гр" },
      { name: "Авокадо", emoji: "🥑", description: "50/100гр" },
      { name: "Цөцгий", emoji: "🧈", description: "20/100гр" },
      { name: "Маргарин", emoji: "🧈", description: "80/100гр" },
    ],
  },
  {
    title: ["Нүүрс ус", "агуулсан", "хүнс"],
    icon: "/carbohydrates-icon.png",
    bg: "from-teal-500 to-cyan-500",
    foods: [
      { name: "Элсэн чихэр", emoji: "🍬", description: "100/100гр" },
      { name: "Будаа (болгосон)", emoji: "🍚", description: "28/100гр" },
      { name: "Гоймон (болгосон)", emoji: "🍜", description: "30/100гр" },
      { name: "Талх", emoji: "🍞", description: "49/100гр" },
      { name: "Төмс", emoji: "🥔", description: "17/100гр" },
      { name: "Гурил", emoji: "🌾", description: "76/100гр" },
      { name: "Эрдэнэ шиш", emoji: "🌽", description: "19/100гр" },
      { name: "Гадил", emoji: "🍌", description: "23/100гр" },
      { name: "Алим", emoji: "🍎", description: "14/100гр" },
      { name: "Зөгийн бал", emoji: "🍯", description: "82/100гр" },
    ],
  },
  {
    title: ["Эрүүл", "жин нэмэх", "төлөвлөгөө"],
    icon: "/carbohydrates-icon.png",
    bg: "from-green-500 to-emerald-500",
    plans: [
      {
        name: "Жингээ нэмж байх үед нэг өдөрт авах шим тэжээл",
        nutrition: {
          calories: "2,400 - 2,600 ккал",
          protein: "1.5 - 2.0 г / кг",
          carbs: "300 - 350 г",
          fat: "70 - 90 г",
        },
        advice: [
          {
            title: "🔺 Жин нэмэх үед — Цэвэр илчлэг",
            description: "Илүүдэл илчлэг + хүчний дасгал",
            items: [
              "Өдөр тутмын хэрэгцээнээс +300–500 ккал",
              "Чипс, колагаар биш — цэвэр хоолоор",
              "Уураг хоол бүрт",
              "Нүүрс уснаас бүү ай",
              "Эрүүл өөх тосоор илчлэг нэм",
              "Өдөрт 4–5 удаа хоолло",
              "Смүүти, сүү, тараг ашигла",
            ],
          },
        ],
      },
    ],
  },
  {
    title: ["Эрүүл", "жингээ барих", "төлөвлөгөө"],
    icon: "/carbohydrates-icon.png",
    bg: "from-blue-500 to-indigo-500",
    plans: [
      {
        name: "Өөрийн жиндээ сэтгэл хангалуун байгаа үед нэг өдөрт авах шим тэжээл",
        nutrition: {
          calories: "1,800 - 1,900 ккал",
          protein: "1 - 1.2 г/кг",
          carbs: "200 - 250 г",
          fat: "50 - 60 г",
        },
        advice: [
          {
            title: "⚖️ Жингээ барих үед — Тэнцвэр",
            description: "Тэнцвэртэй хооллолт + хөдөлгөөн",
            items: [
              "Уураг + нүүрс ус + өөх тос гурвуул хэрэгтэй",
              "Аль нэгийг нь бүр хасахгүй",
              "Өглөөний цайг алгасахгүй",
              "Хоолны цаг тогтмол",
              "Порцоо барих (уураг = алга, нүүрс ус = атга)",
              "Чит хоол 7 хоногт 1–2 удаа",
              "Дасгалтай өдөр нүүрс ус бага зэрэг нэмэх",
            ],
          },
        ],
      },
    ],
  },
  {
    title: ["Эрүүл", "жин хасах", "төлөвлөгөө"],
    icon: "/carbohydrates-icon.png",
    bg: "from-rose-500 to-pink-500",
    plans: [
      {
        name: "Жингээ хасаж байх үед нэг өдөрт авах шим тэжээл",
        nutrition: {
          calories: "1,400 - 1,600 ккал",
          protein: "1.2 - 1.5 г/кг",
          carbs: "120 - 150 г",
          fat: "30 - 45 г",
        },
        advice: [
          {
            title: "🔻 Жингээ хасах үед — Зөв идэх",
            description: "Калори хязгаарлалт + зөв хоол",
            items: [
              "Уураг заавал: тахиа, загас, өндөг, тараг, аарц",
              "Нүүрс усыг сонгож ид: бор будаа, овъёос, киноа",
              "Цагаан гурил, чихэрээс зайлсхий",
              "Ногоо их ид: эслэг их, илчлэг бага",
              "Эрүүл өөх тосыг бага хэмжээгээр хэрэглэ",
              "Өдөрт 3–4 удаа хоолло",
              "Орой хэт орой, их идэхгүй",
              "Өдөрт 2–2.5л ус уух",
            ],
          },
        ],
      },
    ],
  },
];
export default cards;
