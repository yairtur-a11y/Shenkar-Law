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
      "Adv. Oren Shenkar advises leading corporations and senior executives on complex transactions across a wide range of sectors, in Israel and internationally, with a particular focus on mergers and acquisitions.",
      "In addition to advising on corporate and capital markets matters and representing venture capital funds and startups in investment and fundraising transactions, Oren is regarded as a pioneer and leading attorney in Israel’s medical cannabis sector, and has played an active role in establishing joint ventures in several countries where activity in this field has been approved.",
      "Between 1999 and 2003, Oren worked at Sullivan & Cromwell in New York, one of the most prestigious law firms in the United States, where he was involved in mergers and acquisitions worth billions of dollars.",
    ],
    educationHe: [
      "תואר ראשון במשפטים (LL.B.), האוניברסיטה העברית, 1995 (בהצטיינות).",
      "תואר שני במשפטים (LL.M.), אוניברסיטת קולומביה, 1999 (בהצטיינות יתרה) - זוכה פרס ע״ש וולטר גלהורן, המוענק לסטודנט שמסיים את התואר הראשון במחזור.",
    ],
    educationEn: [
      "LL.B., The Hebrew University of Jerusalem, 1995 (cum laude).",
      "LL.M., Columbia University, 1999 (with highest honors) - recipient of the Walter Gellhorn Prize, awarded to the top graduating student of the class.",
    ],
    admissionHe: [
      "לשכת עורכי הדין בישראל, 1996",
      "לשכת עורכי הדין של מדינת ניו יורק, 2000",
    ],
    admissionEn: ["Israel Bar Association, 1996", "New York State Bar, 2000"],
    photo: "/images/team1/oren.jpg",
  },
  {
    slug: "sarah-david",
    email: "Sarah@shenkarlaw.co.il",
    titleHe: "שותפה",
    titleEn: "Partner",
    nameHe: "עו״ד שרה דויד",
    nameEn: "Adv. Sarah David",
    bioHe: [
      "עו״ד שרה דויד מלווה תאגידים ממגוון סקטורים עסקיים, בדגש על גיוסי הון, מיזוגים ורכישות ועסקאות מסחריות. בנוסף, שרה מעניקה ייעוץ שוטף ליזמים, משקיעים פרטיים ולתאגידים במגוון ההיבטים המשפטיים של פעילותם המקומית והבינלאומית, לרבות בהיבטי ממשל תאגידי, מימון ונושאים מסחריים אחרים.",
      "שרה הצטרפה למשרדנו לאחר שהתמחתה במחלקה למשפט בין-לאומי בייעוץ וחקיקה תחת המשנה ליועץ המשפטי לממשלה.",
    ],
    bioEn: [
      "Adv. Sarah David advises corporations across a variety of business sectors, with an emphasis on fundraising, mergers and acquisitions, and commercial transactions. Sarah also provides ongoing counsel to entrepreneurs, private investors and corporations on a broad range of legal matters relating to their domestic and international activity, including corporate governance, financing and other commercial matters.",
      "Sarah joined our firm after completing her internship in the International Law Department of the Counseling and Legislation Division, under the Deputy Attorney General.",
    ],
    educationHe: ["תואר ראשון במשפטים (LL.B), אוניברסיטת בר-אילן, 2019"],
    educationEn: ["LL.B., Bar-Ilan University, 2019"],
    admissionHe: ["לשכת עורכי הדין בישראל, 2020"],
    admissionEn: ["Israel Bar Association, 2020"],
    photo: "/images/team1/sarah.jpg",
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
      "Adv. Yair Turgeman advises on mergers and acquisitions, venture capital investments and international ventures. Yair also provides ongoing counsel to corporations on a broad range of legal matters relating to their activity, including corporate governance, financing and other commercial matters.",
      "Yair joined our firm after several years of practice in civil litigation, during which he represented the State of Israel and leading institutional clients.",
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
    photo: "/images/team1/yair-photo.jpg",
  },
  {
    slug: "tomer-laks",
    email: "Tomer@shenkarlaw.co.il",
    titleHe: "עורך דין",
    titleEn: "Attorney",
    nameHe: "עו״ד תומר לקס",
    nameEn: "Adv. Tomer Laks",
    bioHe: [
      "עו״ד תומר לקס מתמחה במשפט מסחרי, דיני תאגידים, מיזוגים ורכישות ועסקאות בינלאומיות. תומר החל את דרכו המשפטית כמתמחה במשרדנו ושב למשרד כעורך דין עם הסמכתו.",
    ],
    bioEn: [
      "Adv. Tomer Laks specializes in commercial law, corporate law, mergers and acquisitions, and international transactions. Tomer began his legal career as an intern at our firm and returned as an attorney upon his admission to the bar.",
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
    photo: "/images/team1/tomer.jpg",
  },
  {
    slug: "don-emil-rantissi",
    email: "Don@shenkarlaw.co.il",
    titleHe: "עורך דין",
    titleEn: "Attorney",
    nameHe: "עו״ד דון אמיל רנתיסי",
    nameEn: "Adv. Don Emil Rantissi",
    bioHe: [
      "עו״ד דון אמיל רנתיסי עוסק במשפט מסחרי ובדיני חברות, עם התמקדות בעסקאות מיזוגים ורכישות. דון מעניק ליווי וייעוץ מקיף ללקוחות פרטיים ותאגידים, תוך התייחסות למכלול ההיבטים המשפטיים הנוגעים לפעילותם.",
      "דון הצטרף לצוות עורכי הדין לאחר השלמת התמחות במשרדנו ומעבר מבחני הלשכה בהצלחה.",
    ],
    bioEn: [
      "Adv. Don Emil Rantissi practices commercial and corporate law, with a focus on mergers and acquisitions. Don provides comprehensive guidance and counsel to private clients and corporations, addressing the full range of legal aspects relating to their activity.",
      "Don joined the firm’s team of attorneys after completing his internship at our firm and successfully passing the bar examinations.",
    ],
    educationHe: ["תואר ראשון במשפטים (LL.B), המרכז האקדמי רמת גן, 2023"],
    educationEn: ["LL.B., Ramat Gan Academic Center, 2023"],
    admissionHe: ["לשכת עורכי הדין בישראל, 2024"],
    admissionEn: ["Israel Bar Association, 2024"],
    photo: "/images/team1/don.jpg",
  },
  {
    slug: "dana-lev-ran",
    email: "Dana@shenkarlaw.co.il",
    titleHe: "עורכת דין",
    titleEn: "Attorney",
    nameHe: "עו״ד דנה לב-רן",
    nameEn: "Adv. Dana Lev-Ran",
    bioHe: [
      "עו״ד דנה לב-רן עוסקת במשפט מסחרי, דיני תאגידים, מיזוגים ורכישות ועסקאות בינלאומיות. דנה הצטרפה אלינו לאחר התמחות במשרד בוטיק מוביל בתחום הליטיגציה.",
    ],
    bioEn: [
      "Adv. Dana Lev-Ran practices commercial law, corporate law, mergers and acquisitions, and international transactions. Dana joined our firm after completing her internship at a leading boutique litigation firm.",
    ],
    educationHe: [
      "תואר ראשון במשפטים (LL.B), המכללה למינהל, 2023 (בהצטיינות).",
    ],
    educationEn: [
      "LL.B., The College of Management Academic Studies, 2023 (with honors).",
    ],
    admissionHe: ["לשכת עורכי הדין בישראל, 2024"],
    admissionEn: ["Israel Bar Association, 2024"],
    photo: "/images/team1/dana.jpg",
  },
];