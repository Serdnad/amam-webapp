import { lang } from "$lib/stores/lang"

const translations = {
    "amam": {
        "en": "amam",
        "ar": "أمام"
    },
    "Market": {
        "en": "Market",
        "ar": "السوق"
    },
    "Learn": {
        "en": "Learn",
        "ar": "تعلم"
    },
    "Company": {
        "en": "Company",
        "ar": "الشركة"
    },
    "Search": {
        "en": "Search",
        "ar": "ابحث"
    },
    "sign in": {
        "en": "Sign in",
        "ar": "تسجيل الدخول"
    },
    "heading1": {
        "en": "The future starts here.",
        "ar": "يبدأ مستقبلنا هنا"
    },
    "sub-heading1": {
        "en": "The easiest way to buy and sell crypto in the Middle East and North Africa.",
        "ar": "أسهل طريقة لشراء وبيع العمالت المشفرة في الشرق األوسط وشمال أفريقيا"
    },
    "free courses": {
        "en": "Free courses",
        "ar": "دورات مجانية"
    },
    "get started investing": {
        "en": "Get started investing",
        "ar": "ابدأ باالستثمار"
    },
    "bitcoin": {
        "en": "Bitcoin (BTC)",
        "ar": "(BTC) بتكوين"
    },
    "ethereum": {
        "en": "Ethereum (ETH)",
        "ar": "(ETH) ايثيريوم"
    },
    "cardano": {
        "en": "Cardano (ADA)",
        "ar": "(ADA) كاردانو"
    },
    "solana": {
        "en": "Solana (SOL)",
        "ar": "(SOL) سوالنا"
    },
    "learn how to invest": {
        "en": "Learn how to invest",
        "ar": "تعلم كيفية االستثمار"
    },
    "heading (free courses)": {
        "en": "Free courses offered online and in-person",
        "ar": " شخصيا في مكتبندورات مجانية عبر اإلنترنت أو "
    },
    "sub-heading (free courses)": {
        "en": "What is crypto?",
        "ar": "ما هي العمالت المشفرة"
    },
    "sub-heading 2 (free courses)": {
        "en": "What is Blockchain and how does it work?",
        "ar": "ما هي سلسلة الكتل وكيف تعمل التكنولوجيا؟"
    },
    "Learn and earn": {
        "en": "Learn and earn",
        "ar": "تعلم واربح"
    },
    "Invite a friend heading": {
        "en": "Invite a friend to earn 5 JOD in BTC",
        "ar": "ادع صديقا وإربح ٥ دنانير من البتكوين"
    },
    "Invite": {
        "en": "Invite",
        "ar": "يَدْعُو إلى"
    },
    "Get started": {
        "en": "Get started",
        "ar": "ابدأ"
    },
    "Forward heading": {
        "en": "Forward… into the future",
        "ar": "أمام... إلى المستقبل"
    },
    "Forward sub-heading": {
        "en": "Tailored for the Middle East and North Africa to better the region and create a better world.",
        "ar": "مصممة لمنطقة الشرق األوسط وشمال أفريقيا لتحسين وضع المنطقة وخلق عالم أفضل للجميع"
    },
    "jordan": {
        "en": "Jordan",
        "ar": "األردن"
    },
    "lebanon": {
        "en": "Lebanon",
        "ar": "لبنان"
    },
    "saudi arabia": {
        "en": "Saudi Arabia",
        "ar": "السعودية"
    },
    "egypt": {
        "en": "Egypt",
        "ar": "مصر"
    },
    "syria": {
        "en": "Syria",
        "ar": "سوريا"
    },
    "tunisia": {
        "en": "Tunisia",
        "ar": "تونس"
    },
    "heading - last section": {
        "en": "Kickstart your future and begin your journey in crypto",
        "ar": "انطلق نحو المستقبل وابدا رحلتك في عالم العمالت المشفرة"
    },
    "sub-heading - last section": {
        "en": "Start planning for tomorrow’s world.",
        "ar": "ابدأ بالتخطيط لعالم الغد"
    },
    "last section first button": {
        "en": "What is crypto?",
        "ar": "ما هي العمالت المشفرة"
    },
    "last section second button": {
        "en": "Get started investing",
        "ar": "ابدا باالستثمار"
    },
    "Blog": {
        "en": "Blog",
        "ar": "مدونة إلكترونية"
    },
    "Facebook": {
        "en": "Facebook",
        "ar": "فيسبوك"
    },
    "Twitter": {
        "en": "Twitter",
        "ar": "تويتر"
    },
    "Instagram": {
        "en": "Instagram",
        "ar": "انستغرام"
    },
}

export function t(key: string, lang: string) {
    const a = translations[key][lang]
    console.log(a)
    return a
}