export interface Question {
  question: string;
  answer: string;
  displayAnswer: string;
  wordLengths: number[];
}

export const questions: Question[] = [
  { 
    question: 'היישוב המזרחי בארץ',
    answer: 'אלוניהבשן',
    displayAnswer: 'אלוני הבשן',
    wordLengths: [5, 4]
  },
  { 
    question: 'היישוב המערבי בארץ',
    answer: 'כרםשלום',
    displayAnswer: 'כרם שלום',
    wordLengths: [3, 4]
  },
{ 
    question: 'הקיבוץ הראשון בארץ',
    answer: 'דגניה',
    displayAnswer: 'דגניה',
    wordLengths: [5]
  },
  { 
    question: 'יישוב בגוש עציון הקרוי על שם אחד מבני מתתיהו',
    answer: 'אלעזר',
    displayAnswer: 'אלעזר',
    wordLengths: [5]
  },

{
    question: 'בירת הגולן',
    answer: 'קצרין',
    displayAnswer: 'קצרין',
    wordLengths: [5]
  },
  {
    question: 'בירת העמק',
    answer: 'עפולה',
    displayAnswer: 'עפולה',
    wordLengths: [5]
  },
  {
    question: 'השם העברי של אום דרג׳',
    answer: 'מצפהמדרג',
    displayAnswer: 'מצפה מדרג',
    wordLengths: [4, 4]
  },
  {
    question: 'מושב על שם הרב ריינס',
    answer: 'שדהיעקב',
    displayAnswer: 'שדה יעקב',
    wordLengths: [3, 4]
  },
  {
    question: 'מושב הקרוי על שם אחד מצנחני היישוב',
    answer: 'אלוניאבא',
    displayAnswer: 'אלוני אבא',
    wordLengths: [5, 3]
  },
  {
    question: 'יישוב על שמה של צנחנית היישוב',
    answer: 'ידחנה',
    displayAnswer: 'יד חנה',
    wordLengths: [2, 3]
  },
  {
    question: 'קיבוץ על שמו של אחד מצנחני היישוב',
    answer: 'נצרסרני',
    displayAnswer: 'נצר סרני',
    wordLengths: [3, 4]
  },
{
    question: 'יישוב בגולן הקרוי על שמו של נשיא ארה"ב',
    answer: 'רמתטראמפ',
    displayAnswer: 'רמת טראמפ',
    wordLengths: [3, 5]
  },
  {
    question: 'יישוב בהר חברון על שמו של שופט מקראי',
    answer: 'עתניאל',
    displayAnswer: 'עתניאל',
    wordLengths: [6]
  },

  {
    question: 'מושב בעמק יזרעאל הקרוי על שמו של שופט מקראי',
    answer: 'כפרגדעון',
    displayAnswer: 'כפר גדעון',
    wordLengths: [3, 5]
  },
  { 
    question: 'יישוב על שמו של הרב קוק',
    answer: 'כפרהראה',
    displayAnswer: 'כפר הראה',
    wordLengths: [3, 4]
  },
  { 
    question: 'היישוב היהודי הגבוה בארץ',
    answer: 'נמרוד',
    displayAnswer: 'נמרוד',
    wordLengths: [5]
  },
  { 
    question: 'היישוב הנמוך בארץ',
    answer: 'נווהזוהר',
    displayAnswer: 'נווה זוהר',
    wordLengths: [4, 4]
  },
  { 
    question: 'היישוב הצפוני בארץ',
    answer: 'מטולה',
    displayAnswer: 'מטולה',
    wordLengths: [5]
  },
  { 
    question: 'העיר הדרומית בארץ',
    answer: 'אילת',
    displayAnswer: 'אילת',
    wordLengths: [4]
  },
  { 
    question: 'העיר הגדולה בישראל',
    answer: 'ירושלים',
    displayAnswer: 'ירושלים',
    wordLengths: [7]
  },
  { 
    question: 'העיר העברית הראשונה',
    answer: 'תלאביב',
    displayAnswer: 'תל אביב',
    wordLengths: [2, 4]
  },
  { 
    question: 'אם המושבות',
    answer: 'פתחתקווה',
    displayAnswer: 'פתח תקווה',
    wordLengths: [3, 5]
  },
  { 
    question: 'בירת הנגב',
    answer: 'בארשבע',
    displayAnswer: 'באר שבע',
    wordLengths: [3, 3]
  },
  { 
    question: 'סמוכה ל"מפעל הטקסטיל"',
    answer: 'דימונה',
    displayAnswer: 'דימונה',
    wordLengths: [6]
  },
{ 
    question: 'קיבוץ בנגב שבו התגורר דוד בן גוריון',
    answer: 'שדהבוקר',
    displayAnswer: 'שדה בוקר',
    wordLengths: [3, 4]
  },
  { 
    question: 'מושב העובדים הראשון בארץ',
    answer: 'נהלל',
    displayAnswer: 'נהלל',
    wordLengths: [4]
  },
  { 
    question: 'היישוב הראשון בגוש עציון',
    answer: 'כפרעציון',
    displayAnswer: 'כפר עציון',
    wordLengths: [3, 5]
  },
  { 
    question: 'היישוב הראשון בחבל בנימין',
    answer: 'עפרה',
    displayAnswer: 'עפרה',
    wordLengths: [4]
  },
  {
    question: 'מושבה הקרויה על שם אביו של הברון רוטשילד',
    answer: 'זכרוןיעקב',
    displayAnswer: 'זכרון יעקב',
    wordLengths: [5, 4]
  },
  {
    question: 'מושבה על שמו של הנדיב הידוע',
    answer: 'בנימינה',
    displayAnswer: 'בנימינה',
    wordLengths: [7]
  },
  {
    question: 'מושבה הקרויה על שם אמו של הברון רוטשילד',
    answer: 'מזכרתבתיה',
    displayAnswer: 'מזכרת בתיה',
    wordLengths: [5, 4]
  },
  {
    question: 'קיבוץ הנקרא על שם אחת מצנחניות היישוב',
    answer: 'להבותחביבה',
    displayAnswer: 'להבות חביבה',
    wordLengths: [5, 5]
  },
  {
    question: 'קיבוץ בעמק הירדן על שם בנו של הנדיב הידוע',
    answer: 'אשדותיעקב',
    displayAnswer: 'אשדות יעקב',
    wordLengths: [5, 4]
  },
  {
    question: 'עיר בגוש דן על שם הרב אלקלעי',
    answer: 'אוריהודה',
    displayAnswer: 'אור יהודה',
    wordLengths: [3, 5]
  },
  {
    question: 'יישוב בשומרון על שם בנו של אהרן הכהן',
    answer: 'איתמר',
    displayAnswer: 'איתמר',
    wordLengths: [5]
  },
  {
    question: 'מושב בגולן על שמו של אלי כהן',
    answer: 'אליעד',
    displayAnswer: 'אליעד',
    wordLengths: [5]
  },
  {
    question: 'קיבוץ בדרום ירושלים על שמה של אחת מארבע האימהות',
    answer: 'רמתרחל',
    displayAnswer: 'רמת רחל',
    wordLengths: [3, 3]
  },
  {
    question: 'קיבוץ במערב הנגב הקרוי על שם כינויו של ברל כצנלסון',
    answer: 'בארי',
    displayAnswer: 'בארי',
    wordLengths: [4]
  },
  {
    question: 'מושב בעמק חפר הקרוי על שם ריה"ל',
    answer: 'ביתהלוי',
    displayAnswer: 'בית הלוי',
    wordLengths: [3, 4]
  },
  {
    question: 'מושב הקרוי על שמו של הרב הראשי הספרדי הראשון',
    answer: 'ביתעוזיאל',
    displayAnswer: 'בית עוזיאל',
    wordLengths: [3, 6]
  },
  {
    question: 'מושב בשפלה הקרוי על שם אדמו"רי חסידות גור',
    answer: 'בניראם',
    displayAnswer: 'בני ראם',
    wordLengths: [3, 3]
  },
  {
    question: 'מושב מצפון לכינרת הקרוי בשם דג',
    answer: 'אמנון',
    displayAnswer: 'אמנון',
    wordLengths: [5]
  },
  {
    question: 'מושב בשרון הקרוי על שם הנשיא הראשון',
    answer: 'גןחיים',
    displayAnswer: 'גן חיים',
    wordLengths: [2, 4]
  },
  {
    question: 'יישוב הקרוי על שם אביו של השופט המקראי שמואל',
    answer: 'אלקנה',
    displayAnswer: 'אלקנה',
    wordLengths: [5]
  },
  {
    question: 'יישוב בהר חברון על שם שר הצבא של דוד המלך',
    answer: 'הרעמשא',
    displayAnswer: 'הר עמשא',
    wordLengths: [2, 4]
  },
  {
    question: 'יישוב שנקרא על שם מנהיג הלח"י אברהם שטרן',
    answer: 'כוכביאיר',
    displayAnswer: 'כוכב יאיר',
    wordLengths: [4, 4]
  },
  {
    question: 'יישוב באזור בנימין הקרוי על שמו של רבי יעקב אבוחצירא',
    answer: 'כוכביעקב',
    displayAnswer: 'כוכב יעקב',
    wordLengths: [4, 4]
  },
  {
    question: 'מושב בהרי ירושלים הקרוי על שם מפקד האצ"ל',
    answer: 'רמתרזיאל',
    displayAnswer: 'רמת רזיאל',
    wordLengths: [3, 5]
  },
  {
    question: 'מושב הקרוי על שם רבי משה בן מיימון',
    answer: 'ידרמבם',
    displayAnswer: 'יד רמבם',
    wordLengths: [2, 4]
  },
  {
    question: 'קיבוץ באצבע הגליל הקרוי על שמה של מייסדת ארגון "הדסה"',
    answer: 'כפרסאלד',
    displayAnswer: 'כפר סאלד',
    wordLengths: [3, 4]
  },
  {
    question: 'מושב באזור הכרמל הקרוי על שמו של רבי יהודה ליווא בן בצלאל מפראג',
    answer: 'כרםמהרל',
    displayAnswer: 'כרם מהרל',
    wordLengths: [3, 4]
  },
  {
    question: 'מושב הקרוי על שמו של בר הפלוגתא של הלל הזקן',
    answer: 'כפרשמאי',
    displayAnswer: 'כפר שמאי',
    wordLengths: [3, 4]
  },
  { 
    question: 'מושב במישור החוף הקרוי על שם נשיא ארה"ב',
    answer: 'כפרטרומן',
    displayAnswer: 'כפר טרומן',
    wordLengths: [3, 5]
  },
  { 
    question: 'קיבוץ באצבע הגליל הקרוי על שם ראש ממשלת צרפת',
    answer: 'כפרבלום',
    displayAnswer: 'כפר בלום',
    wordLengths: [3, 4]
  },
  { 
    question: 'קיבוץ הקרוי על שמו של הרב קלישר',
    answer: 'טירתצבי',
    displayAnswer: 'טירת צבי',
    wordLengths: [4, 3]
  },
  { 
    question: 'קיבוץ הקרוי על שמו של הרב גוטמכר',
    answer: 'שדהאליהו',
    displayAnswer: 'שדה אליהו',
    wordLengths: [3, 5]
  },
  { 
    question: 'קיבוץ הקרוי על שמו של הרב ברלין',
    answer: 'עיןהנציב',
    displayAnswer: 'עין הנציב',
    wordLengths: [3, 5]
  },
  { 
    question: 'קיבוץ באצבע הגליל הקרוי על שמו של אחד ממנהיגי "השומר"',
    answer: 'כפרגלעדי',
    displayAnswer: 'כפר גלעדי',
    wordLengths: [3, 5]
  },
  { 
    question: 'קיבוץ הקרוי על שמו של אחד ממנהיגי מרד גטו ורשה',
    answer: 'ידמרדכי',
    displayAnswer: 'יד מרדכי',
    wordLengths: [2, 5]
  },
  { 
    question: 'יישוב הקרוי על שמו של יצחק טבנקין',
    answer: 'ייטב',
    displayAnswer: 'ייטב',
    wordLengths: [4]
  },
  { 
    question: 'יישוב הקרוי על שמו של אחד מגיבורי ניל"י',
    answer: 'אבשלום',
    displayAnswer: 'אבשלום',
    wordLengths: [6]
  },
  { 
    question: 'מושב הקרוי על שמו של שר החוץ הבריטי',
    answer: 'בלפוריה',
    displayAnswer: 'בלפוריה',
    wordLengths: [7]
  },
  { 
    question: 'יישוב בגליל הקרוי על שמו של שר ביטחון',
    answer: 'לבון',
    displayAnswer: 'לבון',
    wordLengths: [4]
  },
  {
    question: 'קיבוץ בעמק יזרעאל הקרוי על שם טרומפלדור',
    answer: 'תליוסף',
    displayAnswer: 'תל יוסף',
    wordLengths: [2, 4]
},
{
    question: 'עיר הקרויה על שם המשורר הלאומי',
    answer: 'קרייתביאליק',
    displayAnswer: 'קריית ביאליק',
    wordLengths: [5, 6]
},
{ 
  question: 'קיבוץ בשרון על שם הרב מוהליבר',
  answer: 'גןשמואל',
  displayAnswer: 'גן שמואל',
  wordLengths: [2, 5]
},
{ 
  question: 'יישוב סמוך לירושלים על שמו של ז\'בוטינסקי',
  answer: 'גבעתזאב',
  displayAnswer: 'גבעת זאב',
  wordLengths: [4, 3]
},
{ 
  question: 'מושב על שם השד"ר הרב יעקב ספיר',
  answer: 'אבןספיר',
  displayAnswer: 'אבן ספיר',
  wordLengths: [3, 4]
},
{ 
  question: 'כפר על שם המשורר הלאומי',
  answer: 'כפרביאליק',
  displayAnswer: 'כפר ביאליק',
  wordLengths: [3, 6]
},
{ 
  question: 'מושב על שם המשורר הלאומי',
  answer: 'גבעתחן',
  displayAnswer: 'גבעת חן',
  wordLengths: [4, 2]
},
{ 
  question: 'יישוב בשומרון על שם אשת ראש ממשלה',
  answer: 'עליזהב',
  displayAnswer: 'עלי זהב',
  wordLengths: [3, 3]
},
{ 
  question: 'מושב הקרוי על שם שני אחים שנפלו במלחמת העצמאות',
  answer: 'כפראחים',
  displayAnswer: 'כפר אחים',
  wordLengths: [3, 4]
},
{ 
  question: 'מושב בשרון הקרוי על שם הנשיא המקראי של שבט אפרים',
  answer: 'אלישמע',
  displayAnswer: 'אלישמע',
  wordLengths: [6]
},
{ 
  question: 'מושב בחבל לכיש על שמו של מלך יהודה',
  answer: 'אמציה',
  displayAnswer: 'אמציה',
  wordLengths: [5]
},
{ 
  question: 'מושב הקרוי על שמו של נשיא הסנהדרין ביבנה',
  answer: 'ביתגמליאל',
  displayAnswer: 'בית גמליאל',
  wordLengths: [3, 6]
},
{ 
  question: 'מושב הקרוי על שמו של רבי יצחק אלפסי',
  answer: 'כפרהריף',
  displayAnswer: 'כפר הריף',
  wordLengths: [3, 4]
},
{ 
  question: 'מושב בשרון הקרוי על שמו העברי של פילון האלכסנדרוני',
  answer: 'כפרידידיה',
  displayAnswer: 'כפר ידידיה',
  wordLengths: [3, 6]
},
{ 
  question: 'מושב בשרון הקרוי על שמו של ארלוזורוב',
  answer: 'כפרחיים',
  displayAnswer: 'כפר חיים',
  wordLengths: [3, 4]
},

{ 
  question: 'יישוב הקרוי על שם שלושה בחורי ישיבה שנפלו בחברון',
  answer: 'ביתחגי',
  displayAnswer: 'בית חגי',
  wordLengths: [3, 3]
},
{
    question: 'מושב בהרי ירושלים על שם אחד ממנהיגי המרד ברומאים',
    answer: 'ברגיורא',
    displayAnswer: 'בר גיורא',
    wordLengths: [2, 5]
},

{ 
  question: 'מושב הקרוי על שם הסופר ליליינבלום',
  answer: 'כפרמלל',
  displayAnswer: 'כפר מלל',
  wordLengths: [3, 3]
 },
 {
  question: 'מושב בהרי ירושלים הקרוי על שם אביו של נחשון המקראי',
  answer: 'עמינדב',
  displayAnswer: 'עמינדב', 
  wordLengths: [6]
 },
 {
  question: 'יישוב בשרון הקרוי על שם אליעזר בן יהודה',
  answer: 'אבןיהודה',
  displayAnswer: 'אבן יהודה',
  wordLengths: [3, 5]
 },
 {
  question: 'מושב באצבע הגליל הקרוי על שם ד"ר הלל יפה',
  answer: 'ביתהלל',
  displayAnswer: 'בית הלל',
  wordLengths: [3, 3]
 },
 {
  question: 'מושב בשרון הקרוי על שם המלך החשמונאי אלכסנדר ינאי',
  answer: 'ביתינאי',
  displayAnswer: 'בית ינאי',
  wordLengths: [3, 4]
 },
 {
  question: 'מושב בהרי ירושלים הקרוי על שם הרב בר אילן',
  answer: 'ביתמאיר',
  displayAnswer: 'בית מאיר',
  wordLengths: [3, 4]
 },
 {
  question: 'יישוב בגוש עציון הקרוי על שמו של השר זאבי',
  answer: 'מעלהרחבעם',
  displayAnswer: 'מעלה רחבעם',
  wordLengths: [4, 5]
 },
 {
  question: 'יישוב הקרוי על שמו של האסטרונאוט הישראלי הראשון',
  answer: 'מצפהאילן',
  displayAnswer: 'מצפה אילן',
  wordLengths: [4, 4]
 },
 {
  question: 'מושב על שם שופטת מקראית',
  answer: 'דבורה',
  displayAnswer: 'דבורה',
  wordLengths: [5]
 },


{
    question: 'יישוב הקרוי על שמו של עקיבא יוסף שלזינגר',
    answer: 'בניעיש',
    displayAnswer: 'בני עיש',
    wordLengths: [3, 3]
},
  { 
    question: 'יישוב בהר חברון הקרוי על שמו של מנכ"ל משרד השיכון',
    answer: 'טנא',
    displayAnswer: 'טנא',
    wordLengths: [3]
  }
];
