<template>
    <section class="hebrew">
        <div class='landing heb'>
            <img src="https://res.cloudinary.com/dollaguij/image/upload/v1700480190/landing1_u0pdxj.png" alt="" />
            <h1>התכלת בימי המשנה והגמרא</h1>
        </div>
        <div class="top-card" id="card0">
            <h2>הרקע לתקופה</h2>
            <p>התכלת הייתה חלק מחיי עם ישראל גם בתקופת המשנה והתלמוד, וחכמינו ז"ל מרחיבים בתיאור החילזון שהיה מקור
                התכלת, דרכי צידתו, דרכי הפקת התכלת, אופן הצביעה בתכלת, כללי קשירת הציצית בפתילי תכלת ולבן, כיצד להבחין
                בין צבע תכלת מקורי לצבע מזויף שמקורו מן הצומח, ועוד. ממצאים וטקסטים בני התקופה מלמדים עוד על התכלת בעולם
                היהודי, וגם על גורלה של התכלת בימים שלאחר חורבן בית המקדש וגלות ישראל.</p>
        </div>
        <DownScroll cardId="#card1" />
        <div class="main-content">
            <SideBar />
            <div class="card-container">
                <div class="card first-card" id="card1">
                    <div class="img-container">
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%A8%D7%99%D7%92-%D7%9E%D7%A6%D7%93%D7%94-1.webp"
                            alt="" />
                        <div className="side-title heb">
                            אריג מצדה
                        </div>
                        <div className="date-title heb">
                            ג' תת"י (50)
                        </div>
                    </div>
                    <p>אריג זה ממצא ארכיאולוגי ממצדה, מתוארך 2,000 שנה אחורה.
                        נראה שהאריג הוא חלק מגלימה או שמלה שלבש אחד מבני משפחת המלוכה ההרודיאנית.
                        ניתוח כימי מראה שהצבע הגיע מחילזון ארגמון קהה קוצים.
                    </p>
                </div>
                <DownScrollMain cardId="#card2" />
                <div class="card" id="card2">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/2-%D7%A0%D7%99%D7%A8%D7%95%D7%9F-%D7%A7%D7%99%D7%A1%D7%A8-AI-1024x631.webp"
                            alt="" />
                        <div className='side-title heb'>
                            נירון קיסר
                        </div>
                        <div className="date-title heb">
                            ג' תת"כ (60)
                        </div>
                    </div>
                    <p>הקיסר נירון היה אובססיבי לצבע מהחילזון!
                        הוא אסר על מכירת הצבע הנחשק ואפילו ביצע מבצע "עוקץ",
                        כששלח סוכנים לנסות ולרכוש צבע, וכשהצליחו – סגר את השוק.
                        כשראה מטרונית לובשת שמלה סגולה, הוא התרגז כל כך
                        עד ששלח את שומריו להפשיט אותה – מבגדיה ומכל רכושה!
                    </p>
                </div>
                <DownScrollMain cardId="#card3" />
                <div class="card" id="card3">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%97%D7%95%D7%A8%D7%91%D7%9F-%D7%91%D7%99%D7%AA-%D7%A9%D7%A0%D7%99-AI-1024x633.webp"
                            alt="" />
                        <div className='side-title heb'>
                            חורבן בית שני
                        </div>
                        <div className="date-title heb">
                            ג' תת"ל (70)
                        </div>
                    </div>
                    <p>
                        בשנת ג'תת"ל (70) נפלה עטרת ראשנו ונחרב בית מקדשנו בידי הרומאים.
                        המקדש – עם פרוכותיו, כיסויי הקירות והכלים, ובגדי הכוהנים ששירתו בו בעבודת ה' –
                        היה ה'לקוח' הגדול ביותר של שוק התכלת.
                        בשל החורבן תעשיית התכלת נכנסה למשבר עמוק
                        שפגע בציידי החילזון, בצובעים ובכל שרשרת האספקה.
                        למרות המשבר יהודים המשיכו לדבוק במצוות הטלת פתיל התכלת בציציותיהם.
                    </p>
                </div>
                <DownScrollMain cardId="#card4" />
                <div class="card" id="card4">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/AI-%D7%9E%D7%A8%D7%93-%D7%94%D7%AA%D7%A4%D7%95%D7%A6%D7%95%D7%AA-1024x683.webp"
                            alt="" />
                        <div className='side-title heb'>
                            מרד התפוצות
                        </div>
                        <div className="date-title heb">
                            ג׳ תתע״ה (115)
                        </div>
                    </div>
                    <p>
                        לאחר החורבן המשיכו יהודים במרד נגד השלטון הרומאי.
                        המהומות התפשטו לקהילות יהודיות בכל רחבי הים התיכון.
                        במאורעות שקוראים להם חז"ל <span className='bold'> "פולמוס קיטוס" –</span>
                        הגנרל הרומי לוסיוס קווייטוס נשלח לדכא את המרד ועשה זאת ביד קשה וחסרת רחמים.
                        הוא הוציא מחוץ לחוק כל אספקט של זהות וגאווה לאומית יהודית,
                        ובכלל זה את לבישת התכלת.
                    </p>
                </div>
                <DownScrollMain cardId="#card5" />
                <div class="card" id="card5">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%A8-%D7%99%D7%95%D7%A1%D7%99-%D7%94%D7%92%D7%9C%D7%99%D7%9C%D7%99-%D7%A7%D7%A6%D7%95%D7%95%D7%AA-%D7%9B%D7%94%D7%94%D7%99%D7%9D.webp"
                            alt="" />
                        <div className='side-title heb'>
                            ר' יוסי גלילי
                        </div>
                        <div className="date-title heb">
                            ג׳ תת״פ (120)
                        </div>
                    </div>
                    <p>
                        בסערת שנות הלחימה ברומאים, חייהם של יהודי ארץ ישראל היו קשים, מדוכאים ומרוששים.
                        וכשהם מתמודדים עם מציאות רוחנית חדשה של יהדות ללא מקדש
                        מצאו היהודים את עצמם במצבים חדשים שדרשו תגובות הלכתיות נועזות.
                        לראשונה אנו שומעים את דברי ר' יוסי הגלילי, שמציג את המסורת שקיבל מרבו, ר' יוחנן בן נורי,
                        לפיה כאשר לא ניתן להשיג תכלת, יש להמשיך וללבוש ציצית עם חוטי לבן בלבד.
                    </p>
                </div>
                <DownScrollMain cardId="#card6" />
                <div class="card" id="card6">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%A8%D7%99%D7%92-%D7%95%D7%90%D7%93%D7%99-%D7%9E%D7%A8%D7%95%D7%91%D7%A2%D7%AA.webp"
                            alt="" />
                        <div className='side-title heb'>
                            אריג ואדי מרובעת
                        </div>
                        <div className="date-title heb">
                            ג׳ תתצ״ה (135)
                        </div>
                    </div>
                    <p>
                        במהלך מרד בר כוכבא, חיילים יהודים ובני משפחותיהם הסתתרו במערות שבצוקי מדבר יהודה.

                        החפצים שהם הותירו אחריהם התגלו על ידי ארכיאולוגים ומספרים את סיפורם, 2,000 שנה מאוחר יותר.
                        פיסת בד קטנה זו, שנצבעה בכחול שמיים, צבע שהגיע מחילזון ארגמון קהה קוצים,
                        מוכיחה שהטכנולוגיה לצביעה בכחול באמצעות חלזונות הייתה קיימת בארץ ישראל בתקופת המשנה.

                    </p>
                </div>
                <DownScrollMain cardId="#card7" />
                <div class="card" id="card7">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%93%D7%A8%D7%99%D7%90%D7%A0%D7%95%D7%A1-AI-%D7%9B%D7%97%D7%95%D7%9C.webp"
                            alt="" />
                        <div className='side-title heb'>
                            גזירות אדריאנוס - דורו של שמד
                        </div>
                        <div className="date-title heb">
                            ג׳ תתק״ה (145)
                        </div>
                    </div>
                    <p>
                        לאחר תבוסתו של בר כוכבא, סבלו היהודים תחת גזרותיו הרעות של אדריאנוס
                        שקבע כי קיום מצוות או לימוד תורה הם פשע שהעונש עליו הוא הוצאה להורג.

                        בתקופה זו היה מסוכן מאוד לאסוף חלזונות ולייצר תכלת.

                        ר' יוסי מספר שפגש דייג שהזהיר אותו שהחלזונות מוקפים ביצורים מפלצתיים רעילים…

                        (מדובר, כמובן, ברמז לרומאים וגזרותיהם המרושעות).

                    </p>
                </div>
                <DownScrollMain cardId="#card8" />
                <div class="card" id="card8">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/AI-%D7%A8-%D7%9E%D7%90%D7%99%D7%A8.webp"
                            alt="" />
                        <div className='side-title heb'>
                            ר' מאיר
                        </div>
                        <div className="date-title heb">
                            ג׳ תתק״מ (180)
                        </div>
                    </div>
                    <p>
                        "תַּנְיָא הָיָה רבִּי מֵאִיר אוֹמֵר:

                        מַה נִּשְׁתַּנָּה תְּכֵלֶת מִכָּל מִינֵי צִבְעוֹנִין מִפְּנֵי שֶׁהַתְּכֵלֶת דּוֹמֶה לַיָּם וְיָם
                        דּוֹמֶה לָרָקִיעַ
                        וְרָקִיעַ לְכִסֵּא הַכָּבוֹד"

                    </p>
                </div>
                <DownScrollMain cardId="#card9" />
                <div class="card" id="card9">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%A0%D7%98%D7%95%D7%A0%D7%99%D7%A0%D7%95%D7%A1.webp"
                            alt="" />
                        <div className='side-title heb'>
                            אנטונינוס (קרקלה)
                        </div>
                        <div className="date-title heb">
                            ג׳ תתק״ס (200)
                        </div>
                    </div>
                    <p>
                        הקיסר מרקוס אורליוס אנטונינוס, המכונה קרקלה, היה חבר אמת של העם היהודי, וחברו של רבי יהודה
                        הנשיא.

                        הגמרא מספרת סיפורים רבים על הקשר בין רבי ואנטונינוס.

                        מטבע זה שבתמונה הוטבע בצור, ממש מצפון לארץ ישראל, מציג את קרקלה בצד אחד
                        ובצד השני את הנשר (סמל לרומא) שומר על המוצר היקר ביותר באימפריה:

                        חילזון הארגמון, שממנו הופק הצבע לתכלת וארגמן.
                    </p>
                </div>
                <DownScrollMain cardId="#card10" />
                <div class="card" id="card10">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%91%D7%99%D7%AA-%D7%A9%D7%A2%D7%A8%D7%99%D7%9D-%D7%A8-%D7%99%D7%94%D7%95%D7%93%D7%94-%D7%94%D7%A0%D7%A9%D7%99%D7%90-1024x633.webp"
                            alt="" />
                        <div className='side-title heb'>
                            ר' יהודה הנשיא
                        </div>
                        <div className="date-title heb">
                            ג׳ תתק״פ (220)
                        </div>
                    </div>
                    <p>
                        תקופתו של רבי סימנה את שיא החיים היהודיים בארץ ישראל לאחר החורבן.

                        רבי עצמו היה המנהיג האידיאלי: "תורה וגדולה במקום אחד".

                        במהלך חייו הרומאים לא הטילו הגבלות על ייצור תכלת ומחירה לא היה מופקע.

                        רבי הרגיש שאין תירוץ שלא לקיים את מצוות הציצית בצורה המושלמת, עם חוטים לבנים וחוטי תכלת כאחד.

                        הוא פסק שבלי תכלת אין ללבוש ציצית כלל.

                        "מעכבין זה את זה – דברי רבי".
                    </p>
                </div>
                <DownScrollMain cardId="#card11" />
                <div class="card" id="card11">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%A4%D7%A8%D7%92%D7%9E%D7%98%D7%99%D7%94.webp"
                            alt="" />
                        <div className='side-title heb'>
                            "פרגמטיא" בעיר צור
                        </div>
                        <div className="date-title heb">
                            ג׳ תתק״צ (230)
                        </div>
                    </div>
                    <p>
                        העיר צור הייתה ידועה כמרכז תעשיית צבעי הארגמון עוד מימי שלמה המלך.

                        חירם מלך צור שלח בעלי מלאכה לסייע בבניית המקדש, וביניהם היו גם מומחים לתכלת.

                        בתקופת המשנה והתלמוד הייתה צור מוקד מסחר, והסחורה החשובה ביותר שלה הייתה בדים צבועים בחילזון.

                        ניתן לראות זאת על המטבע המתאר את המיתוס המכונן של צור – כלבו של הרקולס מגלה את הארגמון.

                        המסחר אינו יודע גבולות, ואנשי עסקים נסעו לעיתים קרובות מארץ ישראל לצור,
                        ולמדו ממקור ראשון על תעשיית הצבעים שם.

                        המדרש אף מספר על ר' חייא ור' שמעון (בנו של רבי) שנסעו לצור לסחור באריגים.

                    </p>
                </div>
                <DownScrollMain cardId="#card12" />
                <div class="card" id="card12">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%91%D7%99%D7%99-AI-1024x631.webp"
                            alt="" />
                        <div className='side-title heb'>
                            אביי
                        </div>
                        <div className="date-title heb">
                            ד׳ צ' (330)
                        </div>
                    </div>
                    <p>
                        אביי שגר בבבל הרחק מחלזונות התכלת בים התיכון, חקר את ר' שמואל בר יהודה בבואו מארץ ישראל:

                        "תכלת, איך אתם צובעים את זה?"

                        התשובה הייתה לקונית משהו – לוקחים תמצית חילזון, מוסיפים כימיקלים, מחממים… כך בהקשר לצביעה.

                        אך היו שיקולים הלכתיים נוספים, סיפר ר' שמואל,

                        דהיינו שיש להיזהר בקפידה רבה שלא לקלקל את יורה הצבע בעשיית פעולות שאינן קשורות ישירות לצביעה של
                        מצווה.

                        מכאן אנו לומדים את חשיבות הכוונה הראויה בכל שלב של הצביעה – לשם מצוות ציצית.

                    </p>
                </div>
                <DownScrollMain cardId="#card13" />
                <div class="card" id="card13">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%AA%D7%A7%D7%95%D7%A4%D7%AA-%D7%A8%D7%91%D7%90.webp"
                            alt="" />
                        <div className='side-title heb'>
                            רבא
                        </div>
                        <div className="date-title heb">
                            ד׳ ק״י (350)
                        </div>
                    </div>
                    <p>
                        הגמרא מספרת על שני יהודים מארץ ישראל שהביאו תכלת לרבא, גדול אמוראי בבל,

                        אך נתפשו בדרכם על ידי "נשר".

                        לסיפור היה סוף טוב, ו"בזכות הרחמים ובזכותם יצאו בשלום".

                        למרות גזרות הרומאים (שסמלם היה נשר) שאסרו על השימוש בתכלת ובארגמן,

                        בכל זאת יהודים סיכנו את חייהם כדי לקיים מצוות ציצית בשלמותה עם פתיל התכלת.

                        הם גם היו מוכנים להבריח תכלת מארץ ישראל לאחיהם שבבבל על אף הסכנות הכרוכות בזה.

                    </p>
                </div>
                <DownScrollMain cardId="#card14" />
                <div class="card" id="card14">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%97%D7%90%D7%99%D7%99-AI.webp"
                            alt="" />
                        <div className='side-title heb'>
                            רב אחאי
                        </div>
                        <div className="date-title heb">
                            ד׳ רס״ו (506)
                        </div>
                    </div>
                    <p>
                        התלמוד מספר על הבדיקות שערך רב אחאי כדי לקבוע אם חוטים כחולים הם תכלת אותנטית

                        או קלא אילן – צבע מזויף ממקור צמחי. גמרא זו מלמדת אותנו כמה דברים חשובים:

                        • המראה של קלא אילן (אינדיגו) זהה לחלוטין לזה של התכלת.

                        • יש רק שתי אפשרויות לצבוע בתכלת – עם תכלת מהחילזון או עם קלא אילן, ואין אפשרות שלישית.

                        • והכי חשוב, התכלת הייתה זמינה עד ימיו של רב אחאי, אבל זה התיעוד האחרון לשימוש בו.
                    </p>
                </div>
                <DownScrollMain cardId="#card15" />
                <div class="card" id="card15">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%A1%D7%A4%D7%A8-%D7%A9%D7%9C-%D7%99%D7%95%D7%A1%D7%98%D7%90%D7%A0%D7%95%D7%A1.webp"
                            alt="" />
                        <div className='side-title heb'>
                            יוסטיניאנוס
                        </div>
                        <div className="date-title heb">
                            ד׳ ש״כ (560)
                        </div>
                    </div>
                    <p>
                        דברים האסורים למכירה, ואנשים שאסור להם למכור או לקנות אותם

                        לשום אזרח פרטי אין זכות לצבוע בדים בארגמן או למכור אותם, לא משי ולא צמר,
                        ולא בצבעים הנקראים בלאטה, אוקסיבלאטה והיקינטינה.*
                        המוכר צמר צבוע בצבעים אלה, ידע שהוא מסתכן באובדן רכושו וחייו.

                        <br />
                        <span className='small italic'>*אלו הצבעים המופקים מחלזונות-ים – סגול וכחול.
                            יקינטינה היא התרגום ללטינית של 'תכלת'.</span>
                    </p>
                </div>
                <DownScrollMain cardId="#card16" />
                <div class="card" id="card16">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/1%D7%A2%D7%A8%D7%99%D7%9B%D7%AA-%D7%94%D7%91%D7%91%D7%9C%D7%99.webp"
                            alt="" />
                        <div className='side-title heb'>
                            עריכת הבבלי
                        </div>
                        <div className="date-title heb">
                            ד׳ ש״ל (570)
                        </div>
                    </div>
                    <p>
                        “ניתן לטעון בבטחה, כי בזמן חתימת התלמוד (שנת 570 לערך) מצוות התכלת בציצית עדיין התקיימה בפועל,
                        שהרי אין בתלמוד בשום מקום רמיזה קלה להפסקת המצווה "

                        כך כותב הרב יצחק הלוי הרצוג בעבודה המונומנטלית שלו בנושא התכלת.

                        על אף הקושי להשיג תכלת, למרות המחיר המופקע, ומול הסכנות הגדולות שהציבו הרומאים,

                        יהודים המשיכו ללבוש תכלת, עד שזה נהיה בלתי אפשרי…

                    </p>
                </div>
                <DownScrollMain cardId="#card17" />
                <div class="card" id="card17">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%9E%D7%9C%D7%97%D7%9E%D7%AA-%D7%94%D7%A4%D7%A8%D7%A1%D7%99%D7%9D-%D7%95%D7%94%D7%91%D7%99%D7%96%D7%A0%D7%98%D7%99%D7%9D-AI.webp"
                            alt="" />
                        <div className='side-title heb'>
                            מלחמות הפרסים והביזנטיים
                        </div>
                        <div className="date-title heb">
                            ד׳ שצ״ט (639)
                        </div>
                    </div>
                    <p>
                        המאה השביעית פגשה את חורבן היישוב היהודי בארץ ישראל.

                        הביזנטיים, ששלטו שם במשך מאות שנים, נדחקו החוצה על ידי הפרסים.

                        כעבור שנים אחדות שוב נכבשה הארץ על ידי הביזנטיים, כיבוש שהביא למותם של עשרות אלפי יהודים.

                        זמן קצר לאחר מכן, הצבאות הערביים בראשות הח'ליף עומר הביסו את הביזנטיים ואת הפרסים,

                        והשתלטו על כל חופי הים התיכון.

                        כשבתי הצביעה נהרסו, אבדו גם סודות מלאכת הצביעה והידע על זהות החילזון,

                        ותהליכי הייצור כוסו בערפילי ההיסטוריה ונשכחו.
                    </p>
                </div>
                <DownScrollMain cardId="#card18" />
                <div class="card last-card" id="card18">
                    <div className='img-container'>
                        <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%9E%D7%93%D7%A8%D7%A9-%D7%AA%D7%A0%D7%97%D7%95%D7%9E%D7%90-%D7%A7%D7%A6%D7%95%D7%95%D7%AA-%D7%9B%D7%94%D7%99%D7%9D-1024x632.webp"
                            alt="" />
                        <div className='side-title heb'>
                            מדרש תנחומא
                        </div>
                        <div className="date-title heb">
                            ד׳ תק״י (750)
                        </div>
                    </div>
                    <p>
                        <span className='bold'>"ועכשיו אין לנו אלא לבן, שהתכלת נגנז"</span> (תנחומא, פרשת שלח, טו)

                        בפעם הראשונה אנו שומעים שהתכלת אבדה לחלוטין.

                        לאחר מכן, אין זכר למי שלובש ציצית עם תכלת.

                        יהודים המשיכו ללבוש ציצית עם חוטים לבנים,

                        אך תמיד חלמו על היום שבו יוכלו לקיים את מצוות הציצית בשלמותה.
                    </p>
                    <br />
                    <p>
                        <span className='bold'>"ורחם עלינו ובנה עירך במהרה בימינו, והביאנו לשלום לארץ הקדושה.
                            וזכנו שיחזור ויתגלה החילזון, ונזכה לקיים מצוות תכלת"</span>(תפילת רבי נחמן מברסלב)
                    </p>
                    <DownScrollLast cardId="top" isLast="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import DownScroll from '../cmps/DownScroll.vue';
import DownScrollLast from '../cmps/DownScrollLast.vue';
import DownScrollMain from '../cmps/DownScrollMain.vue';
import SideBar from '../cmps/SideBar.vue';

export default {
    components: {
        SideBar,
        DownScroll,
        DownScrollMain,
        DownScrollLast
    },
    data() {
        return {
            intervalId: 0,
            elementId: null
        }
    },
    mounted() {
        const html = document.querySelector('html')
        this.autoScroll(html)
    },
    unmounted() {
        clearInterval(this.intervalId)
    },
    methods: {
        autoScroll() {
            const card0 = document.getElementById('card0')
            const card1 = document.getElementById('card1')
            const card2 = document.getElementById('card2')
            const card3 = document.getElementById('card3')
            const card4 = document.getElementById('card4')
            const card5 = document.getElementById('card5')
            const card6 = document.getElementById('card6')
            const card7 = document.getElementById('card7')
            const card8 = document.getElementById('card8')
            const card9 = document.getElementById('card9')
            const card10 = document.getElementById('card10')
            const card11 = document.getElementById('card11')
            const card12 = document.getElementById('card12')
            const card13 = document.getElementById('card13')
            const card14 = document.getElementById('card14')
            const card15 = document.getElementById('card15')
            const card16 = document.getElementById('card16')
            const card17 = document.getElementById('card17')
            const card18 = document.getElementById('card18')

            this.intervalId = setInterval(() => {
                if (window.scrollY < card1.offsetTop - 100) {
                    this.elementId = null
                } else if (window.scrollY < card2.offsetTop - 100) {
                    this.elementId = 1
                } else if (window.scrollY < card3.offsetTop - 100) {
                    this.elementId = 2
                } else if (window.scrollY < card4.offsetTop - 100) {
                    this.elementId = 3
                } else if (window.scrollY < card5.offsetTop - 100) {
                    this.elementId = 4
                } else if (window.scrollY < card6.offsetTop - 100) {
                    this.elementId = 5
                } else if (window.scrollY < card7.offsetTop - 100) {
                    this.elementId = 6
                } else if (window.scrollY < card8.offsetTop - 100) {
                    this.elementId = 7
                } else if (window.scrollY < card9.offsetTop - 100) {
                    this.elementId = 8
                } else if (window.scrollY < card10.offsetTop - 100) {
                    this.elementId = 9
                } else if (window.scrollY < card11.offsetTop - 100) {
                    this.elementId = 10
                } else if (window.scrollY < card12.offsetTop - 100) {
                    this.elementId = 11
                } else if (window.scrollY < card13.offsetTop - 100) {
                    this.elementId = 12
                } else if (window.scrollY < card14.offsetTop - 100) {
                    this.elementId = 13
                } else if (window.scrollY < card15.offsetTop - 100) {
                    this.elementId = 14
                } else if (window.scrollY < card16.offsetTop - 100) {
                    this.elementId = 15
                } else if (window.scrollY < card17.offsetTop - 100) {
                    this.elementId = 16
                } else if (window.scrollY < card18.offsetTop - 100) {
                    this.elementId = 17
                }
                else {
                    this.elementId = 18
                }
                if (!this.elementId && this.elementId !== 0) this.elementId = 1
                else this.elementId += 1
                var el = document.getElementById(`card${this.elementId}`)
                if (this.elementId > 18) {
                    window.scrollTo(0, 0)
                    this.elementId = null
                    return
                }
                window.scrollTo(0, el.offsetTop - 50)
            }, 20000)
        }
    }
}
</script>

<style lang="scss">
.hebrew {
    direction: rtl;
    font-family: 'Days';
    letter-spacing: 3px;

    .landing {
        img {
            opacity: .9;
            filter: brightness(.6);
        }
    }

    h1 {
        width: max-content;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .top-card {

        h2 {
            color: #4fa8e0;
            margin: 1rem;
        }

        p {
            text-align: justify;
            font-size: 32px;
            line-height: 38px;
            color: #134869;
            margin-top: .5rem;
            width: 990px;
        }

        @media (max-width: 500px) {
            p {
                width: 320px;
                font-size: 1rem;
                line-height: 1.5rem;
            }
        }
    }

    img {
        width: 100%;
    }

    .card {
        img {
            border-radius: 1rem;
            transition: 400ms;
            margin-block: 3rem;

            &:hover {
                transform: translateY(-5px);
            }

            @media (min-width: 1120px) {
                width: 70%;
            }
        }

        .side-title {
            box-shadow: -10px 10px 20px 0px rgba(6.999999999999995, 40.00000000000005, 61, 0.30196078431372547);
        }

        .date-title {
            font-size: 24px;
            min-width: 200px;
            padding: 1rem;
            padding-inline-start: 3rem;
            position: absolute;
            bottom: -1rem;
            right: 0;
            color: #134869c5;
        }
    }

    .last-card {
        margin-bottom: 1100px;
    }
}
</style>