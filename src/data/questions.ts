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
    question: 'המושב הראשון בארץ',
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
    question: 'מושב הקרוי על שם נשיא ארה"ב',
    answer: 'כפרטרומן',
    displayAnswer: 'כפר טרומן',
    wordLengths: [3, 5]
  },
  { 
    question: 'קיבוץ הקרוי על שם ראש ממשלת צרפת',
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
    question: 'קיבוץ הקרוי על שמו של אחד ממנהיגי "השומר"',
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
    question: 'יישוב בהר חברון הקרוי על שמו של מנכ"ל משרד השיכון',
    answer: 'טנא',
    displayAnswer: 'טנא',
    wordLengths: [3]
  }
];
