import { UI, type Lang } from "@/data/content";

const CONTENT = {
  he: {
    label: "נגישות",
    title: "הצהרת נגישות",
    intro:
      "משרד שנקר ושות׳, משרד עורכי דין, רואה חשיבות רבה במתן שירות שוויוני, מכבד, מקצועי ונגיש לכלל לקוחותיו, לרבות אנשים עם מוגבלות. אנו פועלים על מנת לאפשר לכל אדם לקבל מידע על המשרד, ליצור עמנו קשר ולעשות שימוש באתר האינטרנט באופן נוח, ברור ונגיש ככל הניתן.",
    sections: [
      {
        heading: "נגישות אתר האינטרנט",
        body: [
          "אתר זה נבנה במטרה לאפשר שימוש נגיש, פשוט וברור למגוון רחב של משתמשים, לרבות משתמשים הנעזרים בטכנולוגיות מסייעות. במסגרת זו בוצעו באתר התאמות נגישות בהתאם לעקרונות המקובלים לנגישות תכנים באינטרנט, ככל שהדבר ניתן ורלוונטי לאופי האתר.",
          "בין היתר, האתר כולל מבנה עמודים ברור ועקבי, אפשרות ניווט נוחה, שימוש בכותרות ובהיררכיית תוכן מסודרת, התאמות צבעים וניגודיות לשיפור הקריאות, תצוגה מותאמת למסכים בגדלים שונים ותמיכה בדפדפנים נפוצים.",
        ],
      },
      {
        heading: "מאמצים לשיפור הנגישות",
        body: [
          "אנו עושים מאמצים מתמשכים לשפר את נגישות האתר והשירותים הניתנים באמצעותו. עם זאת, ייתכן כי בחלקים מסוימים באתר יימצאו רכיבים שטרם הונגשו באופן מלא או שנדרשות בהם התאמות נוספות.",
          "אם נתקלתם בקושי בגלישה באתר, במידע שאינו נגיש או בתקלה הקשורה לנגישות, נשמח לקבל את פנייתכם ולפעול לתיקון העניין בהקדם האפשרי.",
        ],
      },
      {
        heading: "פנייה בנושא נגישות",
        body: [
          "ניתן לפנות אלינו בכל בקשה, שאלה, הערה או הצעה בנושא נגישות. בפנייה מומלץ לציין את מהות הבעיה, כתובת העמוד שבו נתקלתם בקושי, סוג הדפדפן והמכשיר שבו נעשה שימוש, וכן פרטי קשר לחזרה.",
          "דוא״ל: Office@shenkarlaw.co.il",
          "טלפון: 03-7408000",
          "כתובת המשרד: דרך מנחם בגין 11, רמת גן",
        ],
      },
      {
        heading: "הסדרי נגישות במשרד",
        body: [
          "משרדנו פועל להענקת שירות נגיש גם בפגישות המתקיימות במשרד. ככל שנדרשת התאמת נגישות לצורך הגעה לפגישה, קבלת שירות, השתתפות בפגישה או קבלת מידע בדרך חלופית, ניתן לפנות אלינו מראש ואנו נעשה מאמץ סביר לספק מענה מתאים.",
          "פגישות במשרד מתקיימות בתיאום מראש. ככל שנדרשת התאמת נגישות לצורך הגעה למשרד או קבלת השירות, ניתן לפנות אלינו מראש באמצעות פרטי הקשר המפורטים לעיל.",
        ],
      },
    ],
    updated: "הצהרת נגישות זו עודכנה לאחרונה ביום 1.6.2026.",
  },
  en: {
    label: "Accessibility",
    title: "Accessibility Statement",
    intro:
      "Shenkar & Co. Law Firm is committed to providing equal, respectful, professional and accessible service to all clients, including persons with disabilities. We strive to enable every person to obtain information about the firm, contact us and use this website in a clear, convenient and accessible manner.",
    sections: [
      {
        heading: "Website Accessibility",
        body: [
          "This website was designed to provide a clear, simple and accessible user experience for a broad range of users, including users who rely on assistive technologies. Accessibility adjustments have been implemented in accordance with commonly accepted principles for accessible web content, to the extent applicable and relevant to the nature of the website.",
          "Among other things, the website includes a clear and consistent page structure, convenient navigation, use of headings and organized content hierarchy, color and contrast adjustments to improve readability, responsive display for different screen sizes and support for commonly used browsers.",
        ],
      },
      {
        heading: "Ongoing Accessibility Efforts",
        body: [
          "We make ongoing efforts to improve the accessibility of the website and the services provided through it. Nevertheless, certain parts of the website may not yet be fully accessible or may require further adjustments.",
          "If you encounter any difficulty using the website, inaccessible content or any accessibility-related issue, we would be pleased to receive your feedback and will make reasonable efforts to address the matter promptly.",
        ],
      },
      {
        heading: "Accessibility Contact",
        body: [
          "You may contact us with any request, question, comment or suggestion regarding accessibility. When contacting us, please include a description of the issue, the relevant page address, the browser and device used, and your contact details.",
          "Email: Office@shenkarlaw.co.il",
          "Phone: 03-7408000",
          "Office address: 11 Menachem Begin Road, Ramat Gan",
        ],
      },
      {
        heading: "Office Accessibility Arrangements",
        body: [
          "The firm also strives to provide accessible service in meetings held at our offices. If an accessibility accommodation is required for arrival at a meeting, receiving service, participating in a meeting or obtaining information in an alternative format, please contact us in advance and we will make reasonable efforts to provide an appropriate solution.",
          "Meetings at the office are held by prior appointment. If an accessibility accommodation is required for arriving at the office or receiving service, please contact us in advance using the contact details above.",
        ],
      },
    ],
    updated: "This accessibility statement was last updated on June 1, 2026.",
  },
};

export default function AccessibilityPage({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const content = CONTENT[lang];

  return (
    <section className="bg-navy py-32" dir={ui.dir}>
      <div className="narrow">
        <p className="eyebrow">{content.label}</p>
        <h1 className="display-title">{content.title}</h1>
        <div className="gold-rule mb-12 mt-6" />

        <p
          className="body-text text-base"
          style={{
            textAlign: "justify",
            textAlignLast: lang === "he" ? "right" : "left",
          }}
        >
          {content.intro}
        </p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 mt-0 font-display text-3xl font-normal text-ivory">
                {section.heading}
              </h2>

              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="body-text m-0 text-base"
                    style={{
                      textAlign: "justify",
                      textAlignLast: lang === "he" ? "right" : "left",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-rule pt-8 text-sm text-stone">
          {content.updated}
        </p>
      </div>
    </section>
  );
}