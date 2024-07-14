let handler = m => m;

handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];
    let responses;

    if (/^جيت$/i.test(m.text)) {
        responses = [
            '*نورت ياعم 😹🔪*'
        ];
    } else if (/^يروحي$/i.test(m.text)) {
        responses = [
            '*قلب روحك😹💕*'
        ];
    } else if (/^صلي علي النبي|صلي ع النبي$/i.test(m.text)) {
        responses = [
            '*عليه افضل الصلاة والسلام🧚‍♂️🩵*',
            '*عليه الصلاة والسلام💜🧚‍♂️*',
            '*عليه الصلاة والسلام💜🦋*',
            '*عليه افضل الصلاة والسلام🕊🤍*'
        ];
    } else if (/^بحب سفروت$/i.test(m.text)) {
        responses = [
            '*ونا كمان بحبني😹💕*'
        ];
    } else if (/^يارب ديما$/i.test(m.text)) {
        responses = [
            '*ليا وليك يسطا😹💜*'
        ];
    } else if (/^عامل اي|ازيك$/i.test(m.text)) {
        responses = [
            '*تمام الحمد لله🧸💜*',
            '*احسن منك🧸💜*',
            '*زي الفل😹💜*'
        ];
    } else if (/^انا مخنوق|انا زعلان$/i.test(m.text)) {
        responses = [
            '*ليه كده يسطا😹*'
        ];
    } else if (/^.بموت فيك/i.test(m.text)) {
        responses = [
            '*بعشقكك😹💕*'
        ];
    } else if (/^فين البوت$/i.test(m.text)) {
        responses = [
            '*مافيش بوتات هنا😈*'
        ];
    } else if (/^ازاي$/i.test(m.text)) {
        responses = [
            '*زي السكر في الشاي😹🔪*'
        ];
    } else if (/^خخخ|خخخخ|خخخخخ|خخخخخخخ|خخ$/i.test(m.text)) {
        responses = [
            'خوخ ومنجا وسوق العبور🦦🥂'
        ];
    } else if (/^سلام$/i.test(m.text)) {
        responses = [
            '*باي😹*'
        ];
    } else if (/^سفروت عايز اجوز$/i.test(m.text)) {
        responses = [
            '*احا ونا مالي😒*'
        ];
    } else if (/^كسمكو يولاد المتناكه|كسم الي هنا$/i.test(m.text)) {
        responses = [
            '*كسم امك المتناكه الشرموطه الي جبتك🔥*',
            '*كسمين امك يابن البوه يا ديوث يا عرص🔥*',
            '*كسم امك العاهره يااض🔥*',
            '*كسم امك يابن الزانيه🔥*'
        ];
    } else if (/^اسكت$/i.test(m.text)) {
        responses = [
            '*مين انت علشان تسكتني🦦*',
            '*اسكت انت🧸*'
        ];
    } else if (/^مين طلع سفروت|مين خرج سفروت$/i.test(m.text)) {
        responses = [
            'انا موجود اهو😹💜'
        ];
    } else if (/^عايز اعيط|عيزه اعيط$/i.test(m.text)) {
        responses = [
            '*ليه كده😹*'
        ];
    } else if (/^انا جعان$/i.test(m.text)) {
        responses = [
            '*طب ونا مالي😹🧸*'
        ];
    } else if (/^سفروت عايز عروسه$/i.test(m.text)) {
        responses = [
            '*احا ونا مالي😒*',
            '*ونا مالي يعم😒*'
        ];
    } else if (/^سفروت شغل$/i.test(m.text)) {
        responses = [
            '*حط قنطه معا الامر لوحدو*'
        ];
    } else if (/^اخبارك ايه$/i.test(m.text)) {
        responses = [
            '*كلو تمام وانت؟*',
            '*ماشي الحال*'
        ];
    } else if (/^فينك$/i.test(m.text)) {
        responses = [
            '*هنا اهو*',
            '*فين ايه؟*'
        ];
    } else if (/^كسم البصات$/i.test(m.text)) {
        responses = [
            '*مافيش غيرك هنا بضان😹🦦*',
            '*انت البضان نفسهاا😹🦦*'
        ];
    } else if (/^كسمك يا سفروت$/i.test(m.text)) {
        responses = [
            '*كسمين امك المتناكه الي جبتك🫵🏻*',
            '*سفروت نايك امك وانت معرص🫵🏻*'
        ];
    } else if (/^تصبح على خير$/i.test(m.text)) {
        responses = [
            '*وانت من اهله*',
            '*وانت طيب*'
        ];
    } else if (/^مين ضفني|مين الي جبني هنا$/i.test(m.text)) {
        responses = [
            '*ضور عليه بقا😹🦦*',
            '*معرفش🧸*'
        ];
    } else if (/^ربنا معاك$/i.test(m.text)) {
        responses = [
            '*ومعاك يحب😹*',
            '*تثلم يحب😹*'
        ];
    } else if (/^مبسوط؟$/i.test(m.text)) {
        responses = [
            '*💜الحمد لله*',
            '*ايوه وانت؟*'
        ];
    } else if (/^وحشني$/i.test(m.text)) {
        responses = [
            '*وانت اكتر*',
            '*وحشني طلتك😹*'
        ];
    } else if (/^ايه الاخبار؟$/i.test(m.text)) {
        responses = [
            '*كلو تمام الحمد لله*',
            '*ماشي الحال وانت؟*'
        ];
    } else if (/^عايز اروح السينما$/i.test(m.text)) {
        responses = [
            '*فكرة حلوة، انا كمان عايز اروح*',
            '*ايه الفيلم اللي نفسك تشوفه؟*'
        ];
    } else if (/^ايه رايك في الجو$/i.test(m.text)) {
        responses = [
            '*الجو حلو النهاردة*',
            '*الجو وحش بصراحة*'
        ];
    } else if (/^اخبار الدراسة ايه؟$/i.test(m.text)) {
        responses = [
            '*كويسة الحمد لله*',
            '*محتاج اذاكر اكتر*'
        ];
    } else if (/^شوفت الماتش؟$/i.test(m.text)) {
        responses = [
            '*اه، كان ماتش جامد*',
            '*لأ، ما شفتوش*'
        ];
    } else if (/^فين الناس؟$/i.test(m.text)) {
        responses = [
            '*مش عارف والله*',
            '*يمكن نايمين*'
        ];
    } else if (/^تفتكر هنكسب؟$/i.test(m.text)) {
        responses = [
            '*اكيد هنكسب*',
            '*عندي امل كبير*'
        ];
    } else if (/^اشتريت ايه النهاردة؟$/i.test(m.text)) {
        responses = [
            '*اشتريت شوية حاجات للبيت*',
            '*ما اشتريتش حاجة*'
        ];
    }

    if (responses) {
        let randomIndex = Math.floor(Math.random() * responses.length);
        conn.reply(m.chat, responses[randomIndex], m);
    }
    return !0;
};

export default handler;
