export interface TeamMember {
  slug: string;
  email: string;
  titleHe: string;
  titleEn: string;
  nameHe: string;
  nameEn: string;
  bioHe: string[];
  bioEn: string[];
  educationHe: string[];
  educationEn: string[];
  admissionHe: string[];
  admissionEn: string[];
  photo: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "oren-shenkar",
    email: "Oren@shenkarlaw.co.il",
    titleHe: "שותף מייסד",
    titleEn: "Founding Partner",
    nameHe: "עו״ד אורן שנקר",
    nameEn: "Adv. Oren Shenkar",
    bioHe: [
      "עו״ד אורן שנקר מלווה תאגידים מובילים ואישים בכירים בעסקאות מורכבות במגוון תחומים, הן בישראל והן מחוצה לה, בדגש על עסקאות מיזוגים ורכישות.",
      "בנוסף לייעוץ בדיני תאגידים ושוק ההון וכן ייצוגן של קרנות הון סיכון וחברות הזנק בעסקאות השקעה וגיוס הון, אורן נחשב כחלוץ וכעו״ד מוביל בתחום הקנאביס הרפואי בישראל ונטל חלק פעיל בייסוד מיזמים משותפים במספר מדינות ברחבי העולם בהן אושרה הפעילות בתחום זה.",
      "בין השנים 1999–2003 עבד אורן בפירמת Sullivan & Cromwell בניו יורק, המדורגת כאחת משלוש פירמות עורכי הדין היוקרתיות ביותר בארה״ב, שם היה מעורב בליווי עסקאות מיזוגים ורכישות בשווי מיליארדי דולרים.",
    ],
    bioEn: [
      "Adv. Oren Shenkar advises leading corporations and senior executives on complex transactions across a range of fields, both in Israel and abroad, with an emphasis on mergers and acquisitions.",
      "In addition to advising on corporate and capital markets law and representing venture capital funds and startups in investment and fundraising transactions, Oren is regarded as a pioneer and a leading attorney in Israel's medical cannabis sector, and has taken an active part in establishing joint ventures in several countries where activity in this field has been approved.",
      "Between 1999 and 2003, Oren worked at Sullivan & Cromwell in New York — ranked among the three most prestigious law firms in the United States — where he was involved in mergers and acquisitions worth billions of dollars.",
    ],
    educationHe: [
      "תואר ראשון במשפטים (LL.B.), האוניברסיטה העברית, 1995 (בהצטיינות).",
      "תואר שני במשפטים (LL.M.), אוניברסיטת קולומביה, 1999 (בהצטיינות יתרה) — זוכה פרס ע״ש וולטר גלהורן, המוענק לסטודנט שמסיים את התואר הראשון במחזור.",
    ],
    educationEn: [
      "LL.B., The Hebrew University, 1995 (cum laude).",
      "LL.M., Columbia University, 1999 (with highest honors) — recipient of the Walter Gellhorn Prize, awarded to the top graduating student of the class.",
    ],
    admissionHe: [
      "לשכת עורכי הדין בישראל, 1996",
      "לשכת עורכי הדין של מדינת ניו יורק, 2000",
    ],
    admissionEn: ["Israel Bar Association, 1996", "New York State Bar, 2000"],
    photo: "/images/team1/oren.png",
  },
  {
    slug: "sara-david",
    email: "Sara@shenkarlaw.co.il",
    titleHe: "שותפה",
    titleEn: "Partner",
    nameHe: "עו״ד שרה דויד",
    nameEn: "Adv. Sara David",
    bioHe: [
      "עו״ד שרה דויד מלווה תאגידים ממגוון סקטורים עסקיים, בדגש על גיוסי הון, מיזוגים ורכישות ועסקאות מסחריות. בנוסף, שרה מעניקה ייעוץ שוטף ליזמים, משקיעים פרטיים ולתאגידים במגוון ההיבטים המשפטיים של פעילותם המקומית והבינלאומית, לרבות בהיבטי ממשל תאגידי, מימון ונושאים מסחריים אחרים.",
      "שרה הצטרפה למשרדנו לאחר שהתמחתה במחלקה למשפט בין-לאומי בייעוץ וחקיקה תחת המשנה ליועץ המשפטי לממשלה.",
    ],
    bioEn: [
      "Adv. Sara David advises corporations across a variety of business sectors, with an emphasis on fundraising, mergers and acquisitions, and commercial transactions. Sara also provides ongoing counsel to entrepreneurs, private investors and corporations on the full range of legal aspects of their domestic and international activity, including corporate governance, financing and other commercial matters.",
      "Sara joined our firm after interning in the International Law Department of the Counseling and Legislation Division, under the Deputy Attorney General.",
    ],
    educationHe: ["תואר ראשון במשפטים (LL.B), אוניברסיטת בר-אילן, 2019"],
    educationEn: ["LL.B., Bar-Ilan University, 2019"],
    admissionHe: ["לשכת עורכי הדין בישראל, 2020"],
    admissionEn: ["Israel Bar Association, 2020"],
    photo: "/images/team1/sarah.png",
  },
  {
    slug: "yair-turgeman",
    email: "Yair@shenkarlaw.co.il",
    titleHe: "שותף",
    titleEn: "Partner",
    nameHe: "עו״ד יאיר תורגמן",
    nameEn: "Adv. Yair Turgeman",
    bioHe: [
      "עו״ד יאיר תורגמן מלווה עסקאות רכישות ומיזוגים, השקעות הון סיכון ומיזמים בינלאומיים. בנוסף, יאיר מעניק ייעוץ שוטף לתאגידים במגוון ההיבטים המשפטיים של פעילותם, לרבות בהיבטי ממשל תאגידי, מימון ונושאים מסחריים אחרים.",
      "יאיר הצטרף למשרדנו לאחר מספר שנים בהם עסק בליטיגציה אזרחית וייצג את המדינה וגופים מוסדיים מובילים במשק.",
    ],
    bioEn: [
      "Adv. Yair Turgeman advises on acquisitions and mergers, venture capital investments and international ventures. Yair also provides ongoing counsel to corporations on the full range of legal aspects of their activity, including corporate governance, financing and other commercial matters.",
      "Yair joined our firm after several years practicing civil litigation, during which he represented the State and leading institutional entities in the economy.",
    ],
    educationHe: [
      "תואר ראשון במשפטים (LL.B), הקריה האקדמית אונו, 2015",
      "תואר שני במשפטים (LL.M), אוניברסיטת תל אביב, 2020",
    ],
    educationEn: [
      "LL.B., Ono Academic College, 2015",
      "LL.M., Tel Aviv University, 2020",
    ],
    admissionHe: ["לשכת עורכי הדין בישראל, 2019"],
    admissionEn: ["Israel Bar Association, 2019"],
    photo: "/images/team1/yair.png",
  },
  {
    slug: "rebecca-salomon",
    email: "Rebecca@sl-adv.co.il",
    titleHe: "עורכת דין",
    titleEn: "Attorney",
    nameHe: "עו״ד רבקה סלומון",
    nameEn: "Adv. Rebecca Salomon",
    bioHe: [
      "עו״ד רבקה סלומון השלימה את לימודי המשפטים בברזיל ועלתה לישראל לאחר שהשתתפה בתוכנית ״מסע״ של חילופי סטודנטים. רבקה דוברת פורטוגזית ואנגלית ומתמחה בעיקר בפעילות בינלאומית בתחום המשפט המסחרי ובעסקאות הון סיכון.",
    ],
    bioEn: [
      "Adv. Rebecca Salomon completed her legal studies in Brazil and immigrated to Israel after participating in the Masa student exchange program. Rebecca speaks Portuguese and English, and focuses primarily on international activity in the fields of commercial law and venture capital transactions.",
    ],
    educationHe: [
      "תואר ראשון במשפטים (LL.B), אוניברסיטת פורטלזה, 2010.",
      "תואר שני במדע המדינה (M.A), אוניברסיטת תל אביב, 2014.",
    ],
    educationEn: [
      "LL.B., University of Fortaleza, 2010.",
      "M.A. in Political Science, Tel Aviv University, 2014.",
    ],
    admissionHe: ["לשכת עורכי הדין בישראל, 2019"],
    admissionEn: ["Israel Bar Association, 2019"],
    photo: "/images/team1/rebecca.png",
  },
  {
    slug: "dana-lev-ran",
    email: "Dana@sl-adv.co.il",
    titleHe: "עורכת דין",
    titleEn: "Attorney",
    nameHe: "עו״ד דנה לב-רן",
    nameEn: "Adv. Dana Lev-Ran",
    bioHe: [
      "עו״ד דנה לב-רן עוסקת במשפט מסחרי, דיני תאגידים, מיזוגים ורכישות ועסקאות בינלאומיות. דנה הצטרפה אלינו לאחר התמחות במשרד בוטיק מוביל בתחום הליטיגציה.",
    ],
    bioEn: [
      "Adv. Dana Lev-Ran practices commercial law, corporate law, mergers and acquisitions, and international transactions. Dana joined us after completing her internship at a leading boutique litigation firm.",
    ],
    educationHe: [
      "תואר ראשון במשפטים (LL.B), המכללה למינהל, 2023 (בהצטיינות).",
    ],
    educationEn: [
      "LL.B., The College of Management Academic Studies, 2023 (with honors).",
    ],
    admissionHe: ["לשכת עורכי הדין בישראל, 2024"],
    admissionEn: ["Israel Bar Association, 2024"],
    photo: "/images/team1/dana.png",
  },
  {
    slug: "don-emil-rantisi",
    email: "Don@shenkarlaw.co.il",
    titleHe: "עורך דין",
    titleEn: "Attorney",
    nameHe: "עו״ד דון אמיל רנתיסי",
    nameEn: "Adv. Don Emil Rantisi",
    bioHe: [
      "עו״ד דון אמיל רנתיסי עוסק במשפט מסחרי ובדיני חברות, עם התמקדות בעסקאות מיזוגים ורכישות. דון מעניק ליווי וייעוץ מקיף ללקוחות פרטיים ותאגידים, תוך התייחסות למכלול ההיבטים המשפטיים הנוגעים לפעילותם.",
      "דון הצטרף לצוות עורכי הדין לאחר השלמת התמחות במשרדנו ומעבר מבחני הלשכה בהצלחה.",
    ],
    bioEn: [
      "Adv. Don Emil Rantisi practices commercial and corporate law, with a focus on mergers and acquisitions. Don provides comprehensive guidance and counsel to private clients and corporations, addressing the full range of legal aspects relating to their activity.",
      "Don joined the firm's team of attorneys after completing his internship at our firm and successfully passing the bar examinations.",
    ],
    educationHe: ["תואר ראשון במשפטים (LL.B), המרכז האקדמי רמת גן, 2023"],
    educationEn: ["LL.B., Ramat Gan Academic Center, 2023"],
    admissionHe: ["לשכת עורכי הדין בישראל, 2024"],
    admissionEn: ["Israel Bar Association, 2024"],
    photo: "/images/team1/don.png",
  },
  {
    slug: "tomer-lax",
    email: "Tomer@shenkarlaw.co.il",
    titleHe: "עורך דין",
    titleEn: "Attorney",
    nameHe: "עו״ד תומר לקס",
    nameEn: "Adv. Tomer Lax",
    bioHe: [
      "עו״ד תומר לקס מתמחה במשפט מסחרי, דיני תאגידים, מיזוגים ורכישות ועסקאות בינלאומיות. תומר החל את דרכו המשפטית כמתמחה במשרדנו ושב למשרד כעורך דין עם הסמכתו.",
    ],
    bioEn: [
      "Adv. Tomer Lax specializes in commercial law, corporate law, mergers and acquisitions, and international transactions. Tomer began his legal career as an intern at our firm and returned as an attorney upon his admission to the bar.",
    ],
    educationHe: [
      "תואר ראשון במשפטים (LL.B), אוניברסיטת תל אביב, 2020",
      "תואר מוסמך במנהל עסקים (MBA), אוניברסיטת בר-אילן, 2009",
      "תואר ראשון בהנדסת תעשייה וניהול (B.Sc), הטכניון, 2000",
    ],
    educationEn: [
      "LL.B., Tel Aviv University, 2020",
      "MBA, Bar-Ilan University, 2009",
      "B.Sc. in Industrial Engineering and Management, Technion, 2000",
    ],
    admissionHe: ["לשכת עורכי הדין בישראל, 2022"],
    admissionEn: ["Israel Bar Association, 2022"],
    photo: "/images/team1/tomer.png",
  },
];