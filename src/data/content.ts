export type Lang = "he" | "en";

export const SITE = {
  domain: "https://shenkar-law.co.il",
  email: "Office@shenkarlaw.co.il",
  phone: "03-7408000",
  addressHe: "דרך מנחם בגין 11, רמת גן, מגדל רוגובין תדהר, קומה 12",
  addressEn: "11 Menachem Begin Road, Rogovin Tidhar Tower, 12th Floor, Ramat Gan",
};

export const UI = {
  he: {
    lang: "he",
    dir: "rtl",
    switchLabel: "EN",
    switchHref: "/en",
    firm: "שנקר ושות׳",
    descriptor: "משרד עורכי דין",
    nav: [
      { label: "תחומי עיסוק", href: "/practice-areas" },
      { label: "צוות", href: "/team" },
      { label: "אודות", href: "/about" },
      { label: "צור קשר", href: "/contact" },
    ],
    accessibility: "הצהרת נגישות",
    rights: "כל הזכויות שמורות",
    disclaimer: "המידע באתר הוא כללי בלבד ואינו מהווה ייעוץ משפטי.",
    contactLabel: "יצירת קשר",
    navigate: "ניווט",
  },
  en: {
    lang: "en",
    dir: "ltr",
    switchLabel: "HE",
    switchHref: "/",
    firm: "Shenkar & Co.",
    descriptor: "Law Offices",
    nav: [
      { label: "Practice Areas", href: "/en/practice-areas" },
      { label: "Team", href: "/en/team" },
      { label: "About", href: "/en/about" },
      { label: "Contact", href: "/en/contact" },
    ],
    accessibility: "Accessibility Statement",
    rights: "All rights reserved",
    disclaimer: "The information on this site is general and does not constitute legal advice.",
    contactLabel: "Get in Touch",
    navigate: "Navigate",
  },
} as const;

export const HOME = {
  he: {
    location: "תל אביב · ישראל",
    introHeading: "שנקר ושות׳ - משרד עו״ד בוטיק",
    introBody: [
      "שנקר ושות' הוא משרד בוטיק מוביל המתמחה בדיני תאגידים ובמשפט עסקי בינלאומי. המשרד מספק ללקוחותיו שירות ברמה המקצועית הגבוהה ביותר, עם מעורבות אישית, מסירות ויחסי אנוש מצוינים. המשרד מייצג את הלקוחות המובילים והגדולים ביותר במשק (קרנות השקעה, חברות הי-טק, משקיעי הון סיכון) ופועל מול משרדי עורכי הדין הגדולים והבולטים בישראל. המשרד מדורג מדי שנה בדירוג Dun’s 100 כאחד המשרדים הבולטים בישראל בתחומי המיזוגים והרכישות, קרנות השקעה, הייטק ומסחרי בינלאומי. משרד שנקר ושות׳ בעלי ניסיון משמעותי בליווי עסקאות מגוונות בארץ ובעולם, לרבות עסקאות M&A, סבבי השקעה, מימון, מיזמים משותפים ועסקאות מורכבות נוספות.",
    ],
  },
  en: {
    location: "Tel Aviv · Israel",
    introHeading: "Shenkar & Co. - Boutique Law Firm",
    introBody: [
      "Shenkar & Co. is a leading boutique firm specializing in corporate law and international business law. The firm provides its clients with the highest level of professional service, marked by personal involvement, dedication and excellent client relationships. The firm represents leading and major clients in the market, including investment funds, high-tech companies and venture capital investors, and works opposite Israel’s largest and most prominent law firms. The firm is ranked annually by Dun’s 100 as one of Israel’s prominent firms in the fields of mergers and acquisitions, investment funds, high-tech and international commercial law. Shenkar & Co. has significant experience advising on a wide range of transactions in Israel and abroad, including M&A transactions, investment rounds, financing, joint ventures and other complex transactions.",
    ],
  },
} as const;

export const PRACTICE_AREAS = {
  he: {
    label: "התמחויות",
    title: "תחומי עיסוק",
    items: [
      {
        num: "01",
        slug: "mergers-acquisitions",
        name: "מיזוגים ורכישות",
        desc: "תחום המיזוגים והרכישות (M&A) עוסק בליווי משפטי מקיף של עסקאות מורכבות, שבהן חברות נרכשות, נמכרות או מתמזגות. צוות המשרד מוביל את הלקוחות בכל שלבי העסקה - מבדיקת נאותות מעמיקה, דרך תכנון מבנה העסקה וניהול משא ומתן, ועד לעריכת כלל ההסכמים והטיפול באישורים רגולטוריים. אנו פועלים לצד מנהלים, יזמים ומשקיעים כדי לבנות עסקאות בטוחות, יעילות ויצירתיות, וללוות את החברות גם לאחר השלמת העסקה. עבודה בתחום מאפשרת חשיפה לעסקאות משמעותיות במשק, חשיבה אסטרטגית ויישום משפט מסחרי ברמה הגבוהה ביותר.",
      },
      {
        num: "02",
        slug: "high-tech-venture-capital",
        name: "הייטק והון סיכון",
        desc: "תחום ההייטק והון הסיכון במשרדנו מתמקד בליווי חברות טכנולוגיה, יזמים ומשקיעים לאורך כל מחזור החיים של החברה – משלבי ההקמה הראשוניים, דרך סבבי גיוס הון, ועד עסקאות אסטרטגיות ומכירות. אנו מובילים תהליכי השקעה מורכבים, מנסחים ומנהלים הסכמי השקעה, הסכמי מייסדים, חוזי שירותים, הקצאות אופציות ועוד, תוך שילוב הבנה עסקית עמוקה עם מיומנות משפטית גבוהה.",
      },
      {
        num: "03",
        slug: "international-transactions",
        name: "עסקאות בינלאומיות",
        desc: "תחום העסקאות הבינלאומיות במשרדנו מתמקד בליווי לקוחות בפעילות חוצת־גבולות, הכוללת עסקאות מורכבות מול גורמים זרים, רגולציה בינלאומית, והשקעות בחו\"ל ובישראל. אנו מייצגים חברות, קרנות השקעה, יזמים ומשקיעים בעסקאות מסחריות בינלאומיות, חוזי שיתוף פעולה, הפצה, רכישות ומכירות בשוק הגלובלי, תוך עבודה שוטפת מול משרדי עורכי דין זרים וגורמים מוסדיים בינלאומיים. עבודתנו משלבת הבנה עסקית של שווקים שונים יחד עם ידע משפטי רחב בתחומי דיני חוזים, תאגידים ורגולציה בינלאומית.",
      },
      {
        num: "04",
        slug: "commercial-ongoing-counsel",
        name: "מסחרי וליווי שוטף",
        desc: "תחום זה עוסק במתן ייעוץ משפטי שוטף לחברות, תוך ליווי פעיל של כל ההיבטים העסקיים והחוזיים של פעילותן. אנו מסייעים לחברות בניהול חוזים, הסכמי ספקים ולקוחות, ניהול סיכונים, עסקאות מסחריות, רגולציה ותפעול שוטף, וכן בהכוונה אסטרטגית בנושאי מבנה התאגיד וממשל תאגידי.",
      },
      {
        num: "05",
        slug: "foreign-embassies",
        name: "שגרירויות זרות",
        desc: "ייצוג שגרירויות זרות בפעילותן בישראל.",
      },
      {
        num: "06",
        slug: "real-estate",
        name: "נדל״ן",
        desc: "משרדנו מעניק ליווי משפטי מקיף בעסקאות רכישת ומכירת נדל\"ן, ובכלל זה ייצוג בעסקאות למגורים, לעסקים וכן ליווי וייצוג יזמים וקבלנים בעסקאות נדל\"ן מורכבות בישראל. למשרדנו ניסיון עשיר בליווי פרויקטים שונים בתחום הנדל\"ן ביניהם, ייזום השבחה ופיתוח, נדל\"ן מניב, התחדשות עירונית, מימון עסקאות נדל\"ן.",
      },
    ],
  },
  en: {
    label: "Expertise",
    title: "Areas of Practice",
    items: [
      {
        num: "01",
        slug: "mergers-acquisitions",
        name: "Mergers & Acquisitions",
        desc: "The mergers and acquisitions (M&A) practice provides comprehensive legal support for complex transactions in which companies are acquired, sold or merged. The firm’s team leads clients through every stage of the transaction - from in-depth due diligence, through transaction structuring and negotiations, to drafting all agreements and handling regulatory approvals. We work alongside executives, entrepreneurs and investors to build secure, efficient and creative transactions, and continue advising companies after closing. The practice provides exposure to significant market transactions, strategic thinking and commercial law at the highest level.",
      },
      {
        num: "02",
        slug: "high-tech-venture-capital",
        name: "High-Tech & Venture Capital",
        desc: "The firm’s high-tech and venture capital practice focuses on advising technology companies, entrepreneurs and investors throughout the company’s entire life cycle - from early formation stages, through fundraising rounds, to strategic transactions and exits. We lead complex investment processes, draft and manage investment agreements, founders’ agreements, service contracts, option grants and more, combining deep business understanding with high-level legal expertise.",
      },
      {
        num: "03",
        slug: "international-transactions",
        name: "International Transactions",
        desc: "The firm’s international transactions practice focuses on advising clients on cross-border activity, including complex transactions with foreign parties, international regulation, and investments abroad and in Israel. We represent companies, investment funds, entrepreneurs and investors in international commercial transactions, cooperation agreements, distribution arrangements, acquisitions and sales in the global market, while working regularly with foreign law firms and international institutional bodies. Our work combines business understanding of different markets with broad legal knowledge in contracts, corporate law and international regulation.",
      },
      {
        num: "04",
        slug: "commercial-ongoing-counsel",
        name: "Commercial & Ongoing Counsel",
        desc: "This practice provides ongoing legal counsel to companies, actively advising on all business and contractual aspects of their operations. We assist companies with contract management, supplier and customer agreements, risk management, commercial transactions, regulation and day-to-day operations, as well as strategic guidance on corporate structure and corporate governance.",
      },
      {
        num: "05",
        slug: "foreign-embassies",
        name: "Foreign Embassies",
        desc: "Representation of foreign embassies in their activity in Israel.",
      },
      {
        num: "06",
        slug: "real-estate",
        name: "Real Estate",
        desc: "Our firm provides comprehensive legal support in real estate purchase and sale transactions, including representation in residential and commercial deals, as well as advising and representing developers and contractors in complex real estate transactions in Israel. The firm has extensive experience advising on various real estate projects, including initiation, betterment and development, income-producing real estate, urban renewal and real estate financing.",
      },
    ],
  },
} as const;

export const ABOUT = {
  he: {
    label: "אודות",
    title: "המשרד",
    body: [
      "שנקר ושות׳ הוא משרד עורכי דין בוטיק המתמחה בעסקאות מסחריות מורכבות, מיזוגים ורכישות, ומימון סיכון. המשרד מלווה חברות ישראליות ובינלאומיות, משקיעים מוסדיים ויזמים בפרויקטים בעלי היקפים משמעותיים.",
      "עם ניסיון של עשרות שנים ועומק מקצועי רב, הצוות שלנו מספק שירות אישי ומדויק - מהשלב הראשון ועד סגירת העסקה.",
    ],
  },
  en: {
    label: "About",
    title: "The Firm",
    body: [
      "Shenkar & Co. is a boutique law firm specializing in complex commercial transactions, mergers and acquisitions, and venture capital. The firm advises Israeli and international companies, institutional investors and entrepreneurs on high-value projects.",
      "With decades of experience and deep professional expertise, our team delivers precise, personal service - from inception through closing.",
    ],
  },
} as const;

export const TICKER = {
  he: [
    "ליווי עסקת מיזוג ורכישה בתחום הטכנולוגיה",
    "ייצוג קרן השקעות בעסקת רכישה אסטרטגית",
    "ליווי סבב השקעה לחברת היי־טק ישראלית",
    "ייעוץ משפטי בעסקת נדל״ן מסחרי",
    "ייצוג חברה בינלאומית בפעילותה בישראל",
    "ליווי מיזם משותף חוצה־גבולות",
    "ייעוץ שוטף לחברות בצמיחה",
    "ליווי עסקת מימון והשקעה מורכבת",
  ],
  en: [
    "Advising on a technology M&A transaction",
    "Representing an investment fund in a strategic acquisition",
    "Counseling an Israeli high-tech company on a financing round",
    "Legal support for a commercial real estate transaction",
    "Representing an international company in Israel",
    "Advising on a cross-border joint venture",
    "Ongoing counsel to growth companies",
    "Supporting a complex financing and investment transaction",
  ],
} as const;

export const ACCESSIBILITY = {
  he: {
    label: "נגישות",
    title: "הצהרת נגישות",
    intro: "משרד שנקר ושות׳ רואה חשיבות רבה במתן שירות שוויוני לכלל הגולשים, ופועל להנגשת האתר בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות ולתקן הישראלי ת״י 5568 המבוסס על הנחיות WCAG 2.0 ברמת AA.",
    sections: [
      { heading: "רמת הנגישות באתר", body: "האתר תוכנן לעמוד ברמת נגישות AA, לרבות מבנה כותרות סמנטי, טקסט חלופי לתמונות, ניגודיות צבעים מותאמת ותמיכה בסיסית בניווט מקלדת." },
      { heading: "החרגות ומגבלות ידועות", body: "ייתכן שחלקים מסוימים באתר טרם הונגשו במלואם או נמצאים בתהליך שיפור. אנו ממשיכים לפעול לשיפור הנגישות באופן שוטף." },
      { heading: "פנייה בנושא נגישות", body: "נתקלתם בבעיית נגישות? נשמח לקבל פנייה ונפעל לתקנה בהקדם. ניתן ליצור קשר עם רכז/ת הנגישות של המשרד: [פרטים למילוי]." },
    ],
    updated: "תאריך עדכון ההצהרה: [תאריך עדכון]",
  },
  en: {
    label: "Accessibility",
    title: "Accessibility Statement",
    intro: "Shenkar & Co. is committed to providing equal access to all visitors and works to make this website accessible in accordance with applicable Israeli accessibility requirements and WCAG 2.0 Level AA guidelines.",
    sections: [
      { heading: "Accessibility Level", body: "The site was designed to meet Level AA accessibility, including semantic headings, alternative text for images, adjusted color contrast and basic keyboard navigation support." },
      { heading: "Known Limitations", body: "Some parts of the site may not yet be fully accessible or may be in the process of improvement. We continue to improve accessibility on an ongoing basis." },
      { heading: "Accessibility Requests", body: "Encountered an accessibility issue? We would be glad to hear from you and will address it as soon as possible. Accessibility coordinator details: [to be completed]." },
    ],
    updated: "Statement last updated: [update date]",
  },
} as const;
