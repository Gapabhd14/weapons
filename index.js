// alert weapon
let alertTitleWeapon = "בטרם פעולה כלשהי, נקוט את אמצעי הבטיחות המפורטים להלן :";
let alertTextWeapon1 = `1) טרם הבדיקה הטכנית נדרש לבצע בדיקת פריקה לכלי הנשק עפ"י הוראות מבק"א <br> 2) אסורה הימצאות תחמושת למעט תחמושת תרגול (כדורי תרגול) באזור התיקון והטיפול בכלי הנשק. <br>
3) מחסן כלי הנשק חייב להיות מאוורר בעת העבודה. <br> 4) ניקוי כלי הנשק יבוצע בתערובת 9345 בלבד. <br>`;
let alertTextWeapon2 = ` 5) במחסן הנשק או במקום תיקון הנשק ניתן לפרוק כלי נשק אישיים ואקדחים לתוך ארגז חול ים.
מידות הארגז (אורך x רוחב או קוטר) יהיו לפחות 40 ס"מ וגובה שכבת החול יהיה לפחות 40 ס"מ. החול יהיה יבש וללא גושים. את הארגז יש לצבוע בצבע בולט (אדום, צהוב) ולשלט אותו בשלט עמיד מעץ או ממתכת - "עמדת פריקה, אין להשליך פסולת". <br>
6) אסור לטבול את המחסנית בתערובת ניקוי ואסור לשמנה כשהיא טעונה כדורים. <br> 7) לאחר סיום הבדיקות הטכניות נצור את כלי הנשק בהתאם להוראות מבק"א`;
// arr subject
var arrSubjectWeapon = ["טיפול יומי", "טיפול מעמיק (שבועי)", "טיפול ובדיקה בעת זיכוי"];
// arr execution
var arrExecutionWeapon = [`א) פרק את כלי הנשק פירוק ראשוני מותר למפעיל כאמור בהו"ק נק"ל/א-2000 והקפד על הפרדת מכללי כלי הנשק מכלי נשק אחרים. <br> ב) נקה את כלי הנשק באמצעות אבזרים ייעודים ותקינים. <br> ג) נקה פיח, חול, אבק ושמן ישן באמצעות מגבוני שימון. אם כלי הנשק מלוכלך מאוד, נקה אותו בתערובת ניקוי 9345, המורכבת מ- 90% ספירט לבן ו- 10% שמן מונע חלודה. <br> ד) נקה את קדח הקנה באחת מהשיטות האלה : <br> <span class="bold">1) באמצעות שרביט ניקוי</span> <br> א) הכנס את השרביט ללא פלנלית לתוך הקנה מצד הלוע עד ליציאת השרביט מבית הבליעה <br> ב) הכנס פלנלית ברוחב המתאים (מלבן אחד לנשק 5.56 מ"מ ושני מלבנים לנשק 7.62 מ"מ) ומשוך השרביט לאחר לניקוי הקנה. <br> `,
`<span class="bold">א) לכלי נשק ואבזרים ברשות המפעיל</span> <br> 1) בצע טיפול מפעיל. <br> 2) פרק את כלי הנשק פירוק משני כאמור בהו"ק נק"ל/א-2000, הפרד את מכללי כלי הנשק מכלי נשק אחרים ובדוק כמפורט להלן : <br> 3) ודא שלימות החלקים <br> 4) ודא שקדח הקנה פנוי ואין בו פגמים כגון משקעים, נפיחות ואיכול. <br> 5) בדוק התאמה של המספרים הטבועים. <br> 6) בדוק חזותית נקיון המחסנית והתחמושת בתוכה מחול, שמן וכו'. <br> 7) ודא ניקיון ושלימות של הכדורים העליונים במחסנית וקפיציות הכדורים בלחיצה ע"ג הכדורים במחסנית. <br> 8) ברוס"ר וברוס"ק M16 ובגליל הסר את המתפסים, נקה אותם ונקה את הקנה חיצונית. <br> 9) הרכב את הכלי ובצע בדיקת תפעול ידנית. <br>`,
`א) לאחר הטיפול המעמיק, ייבדק כלי הנשק כשהוא מפורק, נקי ויבש ע"י המפקד הישיר של החייל, כלהלן: <br> 1) מצב הטיפול בכלי הנשק, נקיונו ושלימות חלקיו. <br> 2) וידוא שלא הוחלפו חלקים או מכללים בעלי מספר טבוע. <br> ב) בתום הביקורת, שמן את החלקים והרכב את כלי הנשק.`];
var arrSubjectNegev = ["פירוק", "הרכבה", "טיפול מונע (יומי)", "טיפול שבועי"];
var arrExecutionNegev = ["פרק את הנגב פירוק חייל, לפי הסדר הבא: <br> פתח מכסה גוף, פרק קנה, הוצא קת, קפיץ מחזיר ומחלק.",
    "הרכב את הנגב, לפי הסדר הבא: <br> הכנס קנה, הכנס מחלק, קפיץ מחזיר ובסוף נכניס את הקת.",
    "אחזקה מונעת נכונה מתחילה בהקפדה על הטיפול היומי. הטיפול חייב להתבצע יום יום גם אם אין כלי הנשק נמצא בשימוש שוטף. <br> 1) בצע פירוק המותר למפעיל. <br> 2) נקה את כל חלקי המערכת הנעה בפלנלית ספוגה בשמן 9105. <br> 3) העבר פלנלית ספוגה בשמן מונע חלודה דרך קדח הקנה. חזור על פעולה זו, עד שהפלנלית תישאר ללא סימני פיח או לכלוך. <br> 4) נקה היטב את שאר חלקי המקלע, לרבות הדורגלים, מכסה גוף, צילינדר הגזים ובית ווסת הגזים, באמצעות פלנלית ספוגה בשמן מונע חלודה. <br> 5) השתמש במפתח כל-בו לניקוי הפיח מטבעות בוכנת הגזים, מווסת הגזים ובית וסת הגזים. ",
    `הטיפול השבועי במקלע האחיד יבוצע כמו הטיפול היומי, ובתוספת פעולות אלה: <br> 1) בדוק בראייה את פני-הסדן וודא שנקב-המקור עגול ואינו פגום. <br> 2) את המקלע יש לפרק בהתאם לפירוק המותר לחייל ולבצע בו את הטיפול הדרוש, כמפורט להלן. <br> 3) נקה את קדח-הקנה, בעזרת שרבים או משחלת עם פלנלית. <br> 4) נקה את קדח הקנה על-ידי העברת פלנלית ספוגת שמן מונע- חלודה מס' 9105 <br> 5) נקה את בית-הבליעה באמצעות חומר ניקוי ופלנלית ספוגת שמן <br> הערה: לאחר ירייה יש לנקות את הקנה שלושה ימים בזה אחר זה לפחות, בעזרת שמן  <br> 6) נקה את וסת-הגזים, את בית-וסת-הגזים ואת ראש הבוכנה משיירי-פיח שנצטברו עליהם, בעזרת המגרדות המתאימות.`];

var arrSubjectMag = ["פירוק", "הרכבה", "טיפול יומי", "טיפול שבועי"];
var arrExecutionMag = ["פרק את המאג פירוק חייל, לפי הסדר הבא: <br> פרק קנה, הוצא קת, קפיץ מחזיר ומחלק.",
    "הרכב את המאג, לפי הסדר הבא: <br> הכנס קנה, הכנס מחלק, קפיץ מחזיר ובסוף נכניס את הקת.",
    "1) נגב את כל החלקים המפורקים - משמן, מאבק או מכל זוהמה אחרת - במטלית (או בפלנלית)  <br> 2) נקה את קדח-הקנה <br> 3) נקה את בית-הבליעה <br> 4)  נגב את כל חלקי-מערכת-הגזים ובדוק",
    `הטיפול השבועי במקלע האחיד יבוצע כמו הטיפול היומי, ובתוספת פעולות אלה: <br> 1) בדוק בראייה את פני-הסדן וודא שנקב-המקור עגול ואינו פגום. <br> 2) את המקלע יש לפרק בהתאם לפירוק המותר לחייל ולבצע בו את הטיפול הדרוש, כמפורט להלן. <br> 3) נקה את קדח-הקנה, בעזרת שרבים או משחלת עם פלנלית. <br> 4) נקה את קדח הקנה על-ידי העברת פלנלית ספוגת שמן מונע- חלודה מס' 9105 <br> 5) נקה את בית-הבליעה באמצעות חומר ניקוי ופלנלית ספוגת שמן <br> הערה: לאחר ירייה יש לנקות את הקנה שלושה ימים בזה אחר זה לפחות, בעזרת שמן  <br> 6) נקה את וסת-הגזים, את בית-וסת-הגזים ואת ראש הבוכנה משיירי-פיח שנצטברו עליהם, בעזרת המגרדות המתאימות.`];

let executionWeaponCommander = `א) לאחר הטיפול המעמיק, ייבדק כלי הנשק כשהוא מפורק, נקי ויבש ע"י המפקד הישיר של החייל, כלהלן: <br> 1) מצב הטיפול בכלי הנשק, נקיונו ושלימות חלקיו. <br> 2) וידוא שלא הוחלפו חלקים או מכללים בעלי מספר טבוע. <br> ב) בתום הביקורת, שמן את החלקים והרכב את כלי הנשק.`;
let arrExecutaionLong = [`2) <span class="bold">באמצעות משחולת</span> <br> א) הכנס פלנלית ברוחב המתאים (מלבן אחד ל5.56 מ"מ ו- 2 מלבנים ל- 7.62 מ"מ) ללולאה הקרובה למשקולת. <br> ב) השחל המשקולת לקנה מצד בית הבליעה ומשוך החבל מצד הלוע בקו ישר עם כיוון הקנה. <br> ג) אם הפלנלית נתקעה בבית הבליעה, היעזר בלולאה שבקצה החבל ומשוך המשחולת לאחור. <br> ד) נקה את בית הבליעה באמצעות מברשת פליז ייעודית.`,
    `<br> ה) נקה את מערכת הגזים באמצעות האבזרים הייעודים. <br> ו) סוך את קדח הקנה באמצעות פיסת פלנלית, שרוחבה שליש מהדרוש לניקוי קדח הקנה והיא רוויה בשמן 9105. <br> ז) ודא תנועה חופשית של הנוקר ע"י הנעת הבריח ידנית. <br> ח) שמן את מכללי הנשק המתכתיים בשכבה דקה במגבוני שימון או בפלנלית שהוטבלה בשמן. <br> ט) הרכב את כלי הנשק תוך הקפדה שלא להחליף את מכלליו במכללים של כלי נשק אחרים. <br> י) בצע בדיקת תפעול תוך נקיטת אמצעי הזהירות המתאימים.`,
    ` <span class="bold">ב) לכלי נשק בנשקייה</span> <br> 1) ודא חזותית היעדר חלודה בכלי נשק, בדגש על הקנה. אם קיימת, הסר אותה בעזרת פלנלית ספוגה בשמן או בתערובת ניקוי 9345 ושמן את אזורי החלודה בשכבה דקה. <br> 2) ודא היעדר לכלוך, פיח וחלודה בזווד, בערכות הנשק ובתיקי הכל-בו. אם יש ליקויים, בצע טיפול מתאים ושמן בשכבה דקה. <br> <br> <b>בקש מהמפקד שיבצע בדיקה ויחתום בעמוד הבא</b>`,
    `א) ודא שהחייל ביצע פירוק משני כאמור בהו"ק נק"ל/א-2000, תוך הקפדה על הפרדת מכללי הנשק מכלי נשק אחרים, וודא חזותית : <br> 1) הועבר חוטר <br> 2) היעדר פיח בכלי הנשק, לרבות בבריח והבוכנה. <br> 3) היעדר חלודה <br> 4) הנשק נקי ומשומן כראוי. <br> 5) היעדר לכלוך, פיח וחלודה בזווד, בערכות הנשק ובתיקי הכל-בו. <br> ב) בתום הטיפול יש לבצע בדיקת תקינות כאמור בסעיף 5) להלן ע"י טכנאי נק"ל.`];

let chosen;
let isAlert = false;
let isExecutaionLong = false;
let saveJ;

window.addEventListener("load", () => {
    document.getElementById("sheerClear").addEventListener("touchmove", openAlert);
    document.getElementById("ultraBack").style.visibility = "hidden";
});

// choose a weapon
const start2 = (event) => {
    // hidden
    document.getElementById("explantionPage").style.visibility = "hidden";
    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("startPage").style.visibility = "hidden";
    document.getElementById("aSide").style.display = "none";
    // visible
    document.getElementById("startPage2").style.visibility = "visible";

    isAlert = false;
    document.getElementById("titlePuma").innerText = "בחר סוג נשק";
    document.getElementById("titlePuma").classList.remove("titlePuma1");
    document.getElementById("titlePuma").classList.add("ExTitlePuma");
    document.getElementById("Mag").addEventListener("click", start);
    document.getElementById("Weapon").addEventListener("click", start);
    document.getElementById("Negev").addEventListener("click", start);
}

// explanation page
const start = (event) => {
    // hidden
    document.getElementById("back").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("treatmentpage").style.visibility = "hidden";
    document.getElementById("startPage2").style.visibility = "hidden";
    // visible
    document.getElementById("ultraBack").style.visibility = "visible";

    document.getElementById("ultraBack").addEventListener("click", start2);
    if (!isAlert) {
        chosen = event.currentTarget.id;
    }

    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("titlePuma").innerText = "נשקים";
    document.getElementById("startPage2").style.visibility = "hidden";
    document.getElementById("sheerClear").removeEventListener("touchmove", start);
    document.getElementById("startPage").style.visibility = "hidden";
    document.getElementById("explantionPage").style.visibility = "visible";
    if (chosen === "Weapon") {
        document.getElementById("explantionTextLink").style.visibility = "visible";
        document.getElementById("explantionText").style.visibility = "hidden";
    } else {
        document.getElementById("explantionTextLink").style.visibility = "hidden";
        document.getElementById("explantionText").style.visibility = "visible";
    }
    document.getElementById("titlePuma").classList.remove("titlePuma1");
    document.getElementById("titlePuma").classList.add("ExTitlePuma");
    document.getElementById("startBut").addEventListener("click", tretmentPage);
}

// alert weapon
const openAlert = (event) => {
    // hidden
    document.getElementById("explantionPage").style.visibility = "hidden";
    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("startPage").style.visibility = "hidden";
    document.getElementById("aSide").style.display = "none";
    // visible 
    document.getElementById("alert").style.visibility = "visible";

    document.getElementById("titlePuma").classList.remove("titlePuma1");
    document.getElementById("titlePuma").classList.add("ExTitlePuma");
    isAlert = true;
    document.getElementById("titlePuma").innerText = "אמצעי בטיחות";

    document.getElementById("startButAlert").addEventListener("click", procedure);
}

// exam procedure
const procedure = (event) => {
    document.getElementById("titlePuma").innerText = "נהלי בחינה";

    document.getElementById("startButAlert").removeEventListener("click", procedure);
    document.getElementById("startButAlert").addEventListener("click", start2);
}

// treatment page
const tretmentPage = (event) => {
    // hidden
    document.getElementById("explantionPage").style.display = "none";
    // visible
    document.getElementById("ultraBack").style.visibility = "visible";
    document.getElementById("treatmentpage").style.visibility = "visible";

    document.getElementById("ultraBack").addEventListener("click", start);
    document.getElementById("titlePuma").innerText = "שלבי טיפול";

    // list of treatment stages
    for (let i = 0; i < window[`arrSubject${chosen}`].length; i++) {
        document.getElementById("itemList").innerHTML += `<div class="conteinerCheckBox" id="conteinerCheckBox"><span id="${i}" class="containerText">${window[`arrSubject${chosen}`][i]}</span>
        <span class="checkmark" id="check-${i}">
            <div id="vi${i}"></div>
        </span>
      </div>`;
    }

    // add event listener to treatment stages
    for (let j = 0; j < window[`arrSubject${chosen}`].length; j++) {
        // add vi when the square is clicked
        document.getElementById(`check-${j}`).addEventListener("click", () => {
            document.getElementById(`check-${j}`).classList.add("checkmark1");
            document.getElementById(`vi${j}`).classList.add("vi");
        });
        // go to explanation page
        document.getElementById(j).addEventListener("click", () => {
            document.getElementById("ultraBack").style.visibility = "hidden";
            document.getElementById("treatmentpage").style.visibility = "hidden";
            document.getElementById("treatmentpageEx").style.visibility = "visible";
            document.getElementById("treatmentpageEx").innerHTML = `${window[`arrExecution${chosen}`][j]}`;
            document.getElementById("commanderBut").style.visibility = "hidden";
            document.getElementById("exBut").style.visibility = "visible";
            document.getElementById("playBtn").style.visibility = "visible";
            document.getElementById("play").style.visibility = "visible";
            document.getElementById("closeBut").addEventListener("click", () => {
                document.getElementById("play").style.visibility = "hidden";
                document.getElementById("exBut").addEventListener("click", goBack);
            });
            isExecutaionLong = false;
            // long explanation text
            if ((j === 0 || j === 1) && chosen === "Weapon") {
                if (j === 1) {
                    document.getElementById("next").style.visibility = "visible";
                    document.getElementById("next").addEventListener("click", () => {
                        document.getElementById("treatmentpageEx").innerHTML = arrExecutaionLong[2];
                        document.getElementById("next").style.visibility = "hidden";
                        document.getElementById("back").style.right = "15vw";
                        document.getElementById("back").style.visibility = "visible";
                        document.getElementById("exBut").style.visibility = "hidden";
                        document.getElementById("commanderBut").style.visibility = "visible";
                        document.getElementById("commanderBut").addEventListener("click", commanderAproval);
                        saveJ = j;
                        document.getElementById("back").addEventListener("click", backArrow);
                    });
                } else {
                    document.getElementById("next").style.visibility = "visible";
                    document.getElementById("next").addEventListener("click", () => {
                        if (!isExecutaionLong) { // to page 2
                            isExecutaionLong = true;
                            document.getElementById("treatmentpageEx").innerHTML = arrExecutaionLong[0];
                            document.getElementById("next").style.visibility = "visible";
                            document.getElementById("back").style.right = "15vw";
                        } else { // to page 3
                            isExecutaionLong = false;
                            document.getElementById("treatmentpageEx").innerHTML = arrExecutaionLong[1];
                            document.getElementById("next").style.visibility = "hidden";
                        }
                        document.getElementById("back").style.visibility = "visible";
                        saveJ = j;
                        document.getElementById("back").addEventListener("click", backArrow);
                    });
                }
            }
            // event click button
            document.getElementById("playBtn").addEventListener("click", () => {
                document.getElementById("play").style.visibility = "visible";
            });
        });
    }
}

const commanderAproval = () => {
    document.getElementById("treatmentpageEx").innerHTML = arrExecutaionLong[3];
    document.getElementById("back").style.visibility = "hidden";
    document.getElementById("exBut").style.visibility = "visible";
    document.getElementById("commanderBut").style.visibility = "hidden";
}

const backArrow = () => {
    console.log(saveJ);
    if (saveJ === 1) {
        document.getElementById("exBut").style.visibility = "visible";
        document.getElementById("commanderBut").style.visibility = "hidden";
        document.getElementById("treatmentpageEx").innerHTML = `${arrExecutionWeapon[1]}`;
        document.getElementById("back").style.visibility = "hidden";
        document.getElementById("back").removeEventListener("click", backArrow);
    } else {
        if (isExecutaionLong) { // to page 1
            isExecutaionLong = false;
            document.getElementById("treatmentpageEx").innerHTML = `${arrExecutionWeapon[0]}`;
            document.getElementById("back").style.visibility = "hidden";
            document.getElementById("back").removeEventListener("click", backArrow);
        } else { // to page 2
            isExecutaionLong = true;
            document.getElementById("treatmentpageEx").innerHTML = `${arrExecutaionLong[0]}`;
            document.getElementById("back").style.visibility = "visible";
            document.getElementById("back").addEventListener("click", backArrow);
        }
    }
    document.getElementById("next").style.visibility = "visible";
}



const goBack = () => {
    // hidden
    document.getElementById("back").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    // document.getElementById("treatmentpageExTitle").style.visibility = "hidden";
    document.getElementById("treatmentpageEx").style.visibility = "hidden";
    document.getElementById("exBut").style.visibility = "hidden";
    document.getElementById("playBtn").style.visibility = "hidden";
    // visible
    document.getElementById("treatmentpage").style.visibility = "visible";

    document.getElementById("titlePuma").innerText = "שלבי טיפול";
    // document.getElementById("treatmentpageExTitle").classList.remove("treatmentpageExTitleLong");
    document.getElementById("treatmentpageEx").classList.remove("treatmentpageEx2");
    document.getElementById("treatmentpageEx").classList.add("treatmentpageEx");
}
