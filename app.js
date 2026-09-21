(() => {
  const moodData = {
    Difficult: { value: 20, title: 'A hard moment', note: 'You do not have to carry this alone.', counselor: { score: 85, status: 'Review now', tone: 'review', signal: 'A lower check-in may benefit from a timely, human-led review.', preview: '“Today feels especially difficult. I could use some support.”', trend: 'M2 18 C30 18,38 48,68 42 S112 20,142 37 S185 61,218 57' } },
    Low: { value: 40, title: 'A gentle day', note: 'Small, caring steps are enough today.', counselor: { score: 72, status: 'Check in', tone: 'review', signal: 'A gentle follow-up may be helpful today.', preview: '“I’m feeling low today and would appreciate a little support.”', trend: 'M2 28 C28 27,37 43,67 39 S111 25,142 37 S185 48,218 42' } },
    Okay: { value: 62, title: 'Steady today', note: 'It’s okay to be exactly where you are.', counselor: { score: 62, status: 'Steady', tone: 'stable', signal: 'Monitoring signal, not a clinical diagnosis.', preview: '“I’m feeling okay today. I’m taking things one moment at a time.”', trend: 'M2 45 C25 40,33 58,55 45 S86 13,107 27 S139 48,157 32 S190 25,218 13' } },
    Good: { value: 78, title: 'A positive moment', note: 'Notice what is helping you feel this way.', counselor: { score: 40, status: 'Improving', tone: 'stable', signal: 'A positive check-in suggests steadier support needs.', preview: '“I’m feeling good today. A few things have been helping.”', trend: 'M2 52 C28 54,39 40,69 42 S111 28,143 32 S187 18,218 15' } },
    Bright: { value: 92, title: 'Feeling bright', note: 'Let this good moment be yours to enjoy.', counselor: { score: 18, status: 'Bright', tone: 'stable', signal: 'A positive check-in suggests lower current support needs.', preview: '“I’m feeling bright today and wanted to share that.”', trend: 'M2 58 C28 55,40 45,68 40 S110 29,142 25 S182 13,218 8' } }
  };

  const translations = {
    English: { space: 'My space', counselor: 'Counselor view', checkin: "TODAY'S CHECK-IN", howFeel: 'How are you feeling?', wellness: 'WELLNESS PULSE', selected: 'Selected', see: 'See what this means', priority: 'PRIORITY QUEUE', people: 'People to review', workspace: 'COUNSELOR WORKSPACE · DEMO DATA', active: 'Active support plans', review: 'Review suggested today', completion: 'Check-in completion', difficult: 'Difficult', low: 'Low', okay: 'Okay', good: 'Good', bright: 'Bright', aiAck: 'Thank you for sharing. Your check-in has been reflected in your support summary.' },
    'हिन्दी': { space: 'मेरा स्थान', counselor: 'काउंसलर दृश्य', checkin: 'आज का चेक-इन', howFeel: 'आप कैसा महसूस कर रहे हैं?', wellness: 'स्वास्थ्य स्थिति', selected: 'चुना गया', see: 'इसका मतलब देखें', priority: 'प्राथमिक सूची', people: 'समीक्षा के लोग', workspace: 'काउंसलर कार्यक्षेत्र · डेमो डेटा', active: 'सक्रिय सहायता योजनाएँ', review: 'आज समीक्षा सुझाई गई', completion: 'चेक-इन पूरा होना', difficult: 'कठिन', low: 'कम', okay: 'ठीक', good: 'अच्छा', bright: 'बहुत अच्छा', aiAck: 'साझा करने के लिए धन्यवाद। आपका चेक-इन सहायता सारांश में दर्ज कर दिया गया है।' },
    'தமிழ்': { space: 'என் இடம்', counselor: 'ஆலோசகர் பார்வை', checkin: 'இன்றைய பதிவு', howFeel: 'நீங்கள் எப்படி உணர்கிறீர்கள்?', wellness: 'நலன் நிலை', selected: 'தேர்ந்தெடுத்தது', see: 'இதன் பொருளைப் பார்க்கவும்', priority: 'முன்னுரிமைப் பட்டியல்', people: 'மதிப்பாய்வு செய்ய வேண்டியவர்கள்', workspace: 'ஆலோசகர் பணியிடம் · டெமோ தரவு', active: 'செயலில் உள்ள உதவித் திட்டங்கள்', review: 'இன்று மதிப்பாய்வு பரிந்துரை', completion: 'பதிவு நிறைவு', difficult: 'கடினம்', low: 'குறைவு', okay: 'சரி', good: 'நன்று', bright: 'மிக நன்று', aiAck: 'பகிர்ந்ததற்கு நன்றி. உங்கள் பதிவு உதவிச் சுருக்கத்தில் சேர்க்கப்பட்டது.' },
    'తెలుగు': { space: 'నా స్థలం', counselor: 'కౌన్సిలర్ వీక్షణ', checkin: 'నేటి చెక్-ఇన్', howFeel: 'మీరు ఎలా ఉన్నారు?', wellness: 'సంక్షేమ స్థితి', selected: 'ఎంచుకున్నది', see: 'దీని అర్థం చూడండి', priority: 'ప్రాధాన్య జాబితా', people: 'సమీక్షించాల్సిన వారు', workspace: 'కౌన్సిలర్ కార్యస్థలం · డెమో డేటా', active: 'క్రియాశీల సహాయ ప్రణాళికలు', review: 'ఈ రోజు సమీక్ష సూచన', completion: 'చెక్-ఇన్ పూర్తి', difficult: 'కష్టం', low: 'తక్కువ', okay: 'సరే', good: 'మంచిది', bright: 'చాలా బాగుంది', aiAck: 'పంచుకున్నందుకు ధన్యవాదాలు. మీ చెక్-ఇన్ సహాయ సారాంశంలో చేర్చబడింది.' },
    'ಕನ್ನಡ': { space: 'ನನ್ನ ಸ್ಥಳ', counselor: 'ಸಲಹೆಗಾರರ ನೋಟ', checkin: 'ಇಂದಿನ ಚೆಕ್-ಇನ್', howFeel: 'ನೀವು ಹೇಗೆ ಭಾವಿಸುತ್ತಿದ್ದೀರಿ?', wellness: 'ಕ್ಷೇಮ ಸ್ಥಿತಿ', selected: 'ಆಯ್ಕೆಮಾಡಿದ್ದು', see: 'ಇದರ ಅರ್ಥ ನೋಡಿ', priority: 'ಆದ್ಯತಾ ಪಟ್ಟಿ', people: 'ಪರಿಶೀಲಿಸಬೇಕಾದವರು', workspace: 'ಸಲಹೆಗಾರರ ಕಾರ್ಯಸ್ಥಳ · ಡೆಮೋ ಡೇಟಾ', active: 'ಸಕ್ರಿಯ ಬೆಂಬಲ ಯೋಜನೆಗಳು', review: 'ಇಂದು ಪರಿಶೀಲನೆ ಸೂಚಿಸಲಾಗಿದೆ', completion: 'ಚೆಕ್-ಇನ್ ಪೂರ್ಣತೆ', difficult: 'ಕಷ್ಟ', low: 'ಕಡಿಮೆ', okay: 'ಸರಿ', good: 'ಒಳ್ಳೆಯದು', bright: 'ಬಹಳ ಚೆನ್ನಾಗಿದೆ', aiAck: 'ಹಂಚಿಕೊಂಡಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಚೆಕ್-ಇನ್ ಬೆಂಬಲ ಸಾರಾಂಶದಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ.' },
    'മലയാളം': { space: 'എന്റെ സ്ഥലം', counselor: 'കൗൺസിലർ കാഴ്ച', checkin: 'ഇന്നത്തെ ചെക്ക്-ഇൻ', howFeel: 'നിങ്ങൾക്ക് എങ്ങനെ തോന്നുന്നു?', wellness: 'ക്ഷേമ നില', selected: 'തിരഞ്ഞെടുത്തത്', see: 'ഇതിന്റെ അർത്ഥം കാണുക', priority: 'മുൻഗണനാ പട്ടിക', people: 'പരിശോധിക്കേണ്ടവർ', workspace: 'കൗൺസിലർ പ്രവർത്തനസ്ഥലം · ഡെമോ ഡാറ്റ', active: 'സജീവ പിന്തുണാ പദ്ധതികൾ', review: 'ഇന്ന് അവലോകനം നിർദ്ദേശിച്ചു', completion: 'ചെക്ക്-ഇൻ പൂർത്തീകരണം', difficult: 'പ്രയാസം', low: 'കുറവ്', okay: 'ശരി', good: 'നല്ലത്', bright: 'മികച്ചത്', aiAck: 'പങ്കുവെച്ചതിന് നന്ദി. നിങ്ങളുടെ ചെക്ക്-ഇൻ പിന്തുണാ സംഗ്രഹത്തിൽ ചേർത്തു.' },
    'বাংলা': { space: 'আমার স্থান', counselor: 'কাউন্সেলর ভিউ', checkin: 'আজকের চেক-ইন', howFeel: 'আপনি কেমন অনুভব করছেন?', wellness: 'সুস্থতার অবস্থা', selected: 'নির্বাচিত', see: 'এর অর্থ দেখুন', priority: 'অগ্রাধিকার তালিকা', people: 'পর্যালোচনার জন্য মানুষ', workspace: 'কাউন্সেলর কর্মক্ষেত্র · ডেমো ডেটা', active: 'সক্রিয় সহায়তা পরিকল্পনা', review: 'আজ পর্যালোচনা প্রস্তাবিত', completion: 'চেক-ইন সম্পন্নতা', difficult: 'কঠিন', low: 'কম', okay: 'ঠিক আছে', good: 'ভালো', bright: 'দারুণ', aiAck: 'শেয়ার করার জন্য ধন্যবাদ। আপনার চেক-ইন সহায়তা সারাংশে যোগ করা হয়েছে।' },
    'मराठी': { space: 'माझी जागा', counselor: 'समुपदेशक दृश्य', checkin: 'आजची नोंद', howFeel: 'तुम्हाला कसे वाटत आहे?', wellness: 'कल्याण स्थिती', selected: 'निवडलेले', see: 'याचा अर्थ पहा', priority: 'प्राधान्य यादी', people: 'पुनरावलोकनासाठी लोक', workspace: 'समुपदेशक कार्यक्षेत्र · डेमो डेटा', active: 'सक्रिय सहाय्य योजना', review: 'आज पुनरावलोकन सुचवले', completion: 'चेक-इन पूर्णता', difficult: 'कठीण', low: 'कमी', okay: 'ठीक', good: 'चांगले', bright: 'उत्कृष्ट', aiAck: 'सामायिक केल्याबद्दल धन्यवाद. तुमची नोंद सहाय्य सारांशात जोडली आहे.' },
    'ગુજરાતી': { space: 'મારી જગ્યા', counselor: 'કાઉન્સેલર દૃશ્ય', checkin: 'આજનું ચેક-ઇન', howFeel: 'તમે કેવું અનુભવો છો?', wellness: 'સ્વાસ્થ્ય સ્થિતિ', selected: 'પસંદ કરેલ', see: 'આનો અર્થ જુઓ', priority: 'પ્રાથમિકતા યાદી', people: 'સમીક્ષા માટે લોકો', workspace: 'કાઉન્સેલર કાર્યસ્થળ · ડેમો ડેટા', active: 'સક્રિય સહાય યોજનાઓ', review: 'આજે સમીક્ષા સૂચવાઈ', completion: 'ચેક-ઇન પૂર્ણતા', difficult: 'મુશ્કેલ', low: 'ઓછું', okay: 'ઠીક', good: 'સારું', bright: 'ખૂબ સારું', aiAck: 'શેર કરવા બદલ આભાર. તમારું ચેક-ઇન સહાય સારાંશમાં ઉમેરાયું છે.' },
    'ਪੰਜਾਬੀ': { space: 'ਮੇਰੀ ਥਾਂ', counselor: 'ਕੌਂਸਲਰ ਦ੍ਰਿਸ਼', checkin: 'ਅੱਜ ਦਾ ਚੈਕ-ਇਨ', howFeel: 'ਤੁਸੀਂ ਕਿਵੇਂ ਮਹਿਸੂਸ ਕਰ ਰਹੇ ਹੋ?', wellness: 'ਤੰਦਰੁਸਤੀ ਸਥਿਤੀ', selected: 'ਚੁਣਿਆ ਗਿਆ', see: 'ਇਸਦਾ ਮਤਲਬ ਵੇਖੋ', priority: 'ਤਰਜੀਹ ਸੂਚੀ', people: 'ਸਮੀਖਿਆ ਲਈ ਲੋਕ', workspace: 'ਕੌਂਸਲਰ ਕਾਰਜਸਥਾਨ · ਡੈਮੋ ਡੇਟਾ', active: 'ਸਰਗਰਮ ਸਹਾਇਤਾ ਯੋਜਨਾਵਾਂ', review: 'ਅੱਜ ਸਮੀਖਿਆ ਸੁਝਾਈ ਗਈ', completion: 'ਚੈਕ-ਇਨ ਪੂਰਨਤਾ', difficult: 'ਮੁਸ਼ਕਲ', low: 'ਘੱਟ', okay: 'ਠਇਕ', good: 'ਚੰਗਾ', bright: 'ਬਹੁਤ ਵਧੀਆ', aiAck: 'ਸਾਂਝਾ ਕਰਨ ਲਈ ਧੰਨਵਾਦ। ਤੁਹਾਡਾ ਚੈਕ-ਇਨ ਸਹਾਇਤਾ ਸਾਰਾਂਸ਼ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ ਹੈ।' }
  };

  let people = [
    { id: 'akshavi', initials: 'AK', name: 'Akshavi', queueMeta: 'Investigation · Checked in today', detailMeta: 'Investigation stage · Weekly check-in', ...moodData.Okay.counselor },
    { id: 'yaswant', initials: 'YM', name: 'Yaswant', queueMeta: 'Trial · Missed two check-ins', detailMeta: 'Trial stage · Follow-up due', score: 74, status: 'Review', tone: 'review', signal: 'A follow-up may be helpful after missed check-ins.', preview: '“I have missed a couple of check-ins this week.”', trend: 'M2 20 C28 25,42 54,66 48 S108 24,143 39 S184 47,218 33' },
    { id: 'bala', initials: 'BS', name: 'Bala', queueMeta: 'Compensation · Checked in yesterday', detailMeta: 'Compensation stage · Weekly check-in', score: 55, status: 'Watch', tone: 'watch', signal: 'Continue to observe recent check-in patterns.', preview: '“Yesterday felt manageable, but I’m still adjusting.”', trend: 'M2 42 C29 31,39 57,68 45 S111 36,143 43 S184 31,218 29' },
    { id: 'armaan', initials: 'AP', name: 'Armaan', queueMeta: 'Investigation · Checked in 3 days ago', detailMeta: 'Investigation stage · Follow-up due', score: 70, status: 'Review', tone: 'review', signal: 'A gentle follow-up is suggested after time away.', preview: '“It has been a few days since my last check-in.”', trend: 'M2 28 C30 34,40 57,68 49 S109 28,144 45 S184 52,218 37' }
  ];

  const pageCopy = {
    English: {
      date: 'TUESDAY, 25 AUGUST', welcomeTitle: 'A quiet space for <em>you.</em>', welcome: 'Welcome back, Akshavi. We can take this one moment at a time.', choices: '⌁ Your choices & privacy',
      pulseDefaultTitle: 'Steady today', pulseDefaultCopy: 'Your check-ins suggest a stable week.', demoIndicator: 'DEMO INDICATOR · NOT A DIAGNOSIS',
      talkRio: 'Talk to Rio', hereWithYou: 'Here with you', chatHello: 'Hello Akshavi. I’m Rio, your MindCare guide. How has today felt for you?', anxious: "I'm feeling anxious", pause: 'I need a small pause', case: 'Talk about my case', chatPlaceholder: 'Share what’s on your mind…', chatFootnote: 'Demo AI guidance · For emergencies, use the support options below.',
      needSupport: 'NEED SUPPORT NOW?', noWait: 'You don’t have to wait.', reachSupport: 'Reach a trained person or choose a grounding exercise.', call: 'Call SAKTHIVEL ', reset: 'Try a 60-sec reset ', helpline: 'Helpline action is simulated in this demo.',
      gentleTools: 'GENTLE TOOLS', thisMoment: 'For this moment', boxBreathing: 'Box breathing', twoMinutes: '2 minutes', groundingGuide: 'Grounding guide', senses: '5 senses exercise',
      journey: 'YOUR JOURNEY', smallSteps: 'Small steps count.', checkins: 'check-ins<br />this week', timeForYou: 'time for<br />yourself', progress: 'View gentle progress →',
      morning: 'Good morning, <em>Dr. Meera.</em>', counselorIntro: 'A focused view of people who may benefit from a check-in.', refresh: '↻ Refresh overview', filter: 'Filter ⌄', dds: 'DISTRESS & SUPPORT (DDS)', preview: 'CONVERSATION PREVIEW'
    },
    'தமிழ்': {
      date: 'செவ்வாய், 25 ஆகஸ்ட்', welcomeTitle: 'உங்களுக்கான அமைதியான <em>இடம்.</em>', welcome: 'மீண்டும் வரவேற்கிறோம், அக்ஷவி. ஒரு நேரத்தில் ஒரு தருணத்தை எடுத்துக்கொள்ளலாம்.', choices: '⌁ உங்கள் தேர்வுகள் மற்றும் தனியுரிமை',
      pulseDefaultTitle: 'இன்று நிலையாக உள்ளது', pulseDefaultCopy: 'உங்கள் பதிவுகள் ஒரு நிலையான வாரத்தைக் காட்டுகின்றன.', demoIndicator: 'டெமோ குறியீடு · நோயறிதல் அல்ல',
      talkRio: 'ரியோவுடன் பேசுங்கள்', hereWithYou: 'உங்களுடன் இருக்கிறேன்', chatHello: 'வணக்கம் அக்ஷவி. நான் உங்கள் MindCare வழிகாட்டி ரியோ. இன்று உங்களுக்கு எப்படி இருந்தது?', anxious: 'நான் பதட்டமாக உணர்கிறேன்', pause: 'எனக்கு சிறிய இடைவெளி வேண்டும்', case: 'என் வழக்கைப் பற்றி பேசுங்கள்', chatPlaceholder: 'உங்கள் மனதில் இருப்பதைப் பகிருங்கள்…', chatFootnote: 'டெமோ AI வழிகாட்டல் · அவசரநிலைகளுக்கு கீழே உள்ள உதவி விருப்பங்களைப் பயன்படுத்தவும்.',
      needSupport: 'இப்போது உதவி தேவையா?', noWait: 'நீங்கள் காத்திருக்க வேண்டியதில்லை.', reachSupport: 'பயிற்சி பெற்ற ஒருவரை அணுகவும் அல்லது மனநிலைப் பயிற்சியைத் தேர்வுசெய்யவும்.', call: 'சக்திவேலை அழைக்கவும் ', reset: '60-வினாடி ஓய்வை முயற்சிக்கவும் ', helpline: 'உதவி அழைப்பு இந்த டெமோவில் உருவகப்படுத்தப்பட்டுள்ளது.',
      gentleTools: 'மென்மையான கருவிகள்', thisMoment: 'இந்தத் தருணத்திற்காக', boxBreathing: 'பெட்டி சுவாசம்', twoMinutes: '2 நிமிடங்கள்', groundingGuide: 'நிலைப்படுத்தும் வழிகாட்டி', senses: '5 புலன்கள் பயிற்சி',
      journey: 'உங்கள் பயணம்', smallSteps: 'சிறிய படிகளும் முக்கியம்.', checkins: 'பதிவுகள்<br />இந்த வாரம்', timeForYou: 'உங்களுக்கான<br />நேரம்', progress: 'மென்மையான முன்னேற்றத்தைப் பாருங்கள் →',
      morning: 'காலை வணக்கம், <em>டாக்டர் மீரா.</em>', counselorIntro: 'பதிவு தேவைப்படக்கூடியவர்களின் கவனமான காட்சி.', refresh: '↻ கண்ணோட்டத்தைப் புதுப்பிக்கவும்', filter: 'வடிகட்டு ⌄', dds: 'துயரம் மற்றும் ஆதரவு (DDS)', preview: 'உரையாடல் முன்னோட்டம்'
    }
  };

  const counselorCopy = {
    English: { meta: 'Investigation stage · Weekly check-in', steady: 'Steady', signal: 'Monitoring signal, not a clinical diagnosis.', dds: 'DISTRESS & SUPPORT (DDS)', preview: 'CONVERSATION PREVIEW', quote: '“I’m feeling okay today. I’m taking things one moment at a time.”', time: 'Today · Just now', open: 'Open conversation', send: 'Send gentle check-in', note: 'AI flags suggest review. Outreach and any emergency steps remain human-led and governed by consent and local protocol.' },
    'हिन्दी': { meta: 'जांच चरण · साप्ताहिक चेक-इन', steady: 'स्थिर', signal: 'निगरानी संकेत, कोई नैदानिक निदान नहीं।', dds: 'तनाव और सहायता (DDS)', preview: 'बातचीत पूर्वावलोकन', quote: '“आज मैं ठीक महसूस कर रहा/रही हूँ। मैं एक-एक पल में चीज़ों को संभाल रहा/रही हूँ।”', time: 'आज · अभी', open: 'बातचीत खोलें', send: 'सौम्य चेक-इन भेजें', note: 'AI संकेत समीक्षा सुझाते हैं। संपर्क और आपात कदम सहमति व स्थानीय प्रोटोकॉल के अनुसार लोग ही संचालित करते हैं।' },
    'தமிழ்': { meta: 'விசாரணை நிலை · வாராந்திர பதிவு', steady: 'நிலையாக', signal: 'கண்காணிப்பு குறியீடு; இது மருத்துவ நோயறிதல் அல்ல.', dds: 'நெருக்கடி மற்றும் ஆதரவு (DDS)', preview: 'உரையாடல் முன்னோட்டம்', quote: '“இன்று நான் சரியாக உணர்கிறேன். ஒரு நேரத்தில் ஒரு தருணமாக எடுத்துக்கொள்கிறேன்.”', time: 'இன்று · இப்போதுதான்', open: 'உரையாடலைத் திறக்கவும்', send: 'மென்மையான பதிவை அனுப்பவும்', note: 'AI குறியீடுகள் மதிப்பாய்வை மட்டும் பரிந்துரைக்கின்றன. அணுகலும் அவசர நடவடிக்கைகளும் ஒப்புதல் மற்றும் உள்ளூர் விதிமுறைகளின்படி மனிதர்களால் மேற்கொள்ளப்படுகின்றன.' },
    'తెలుగు': { meta: 'పరిశోధన దశ · వారపు చెక్-ఇన్', steady: 'స్థిరంగా', signal: 'పర్యవేక్షణ సంకేతం, వైద్య నిర్ధారణ కాదు.', dds: 'ఒత్తిడి మరియు మద్దతు (DDS)', preview: 'సంభాషణ ముందుజూపు', quote: '“ఈరోజు నేను బాగానే ఉన్నాను. ఒక్కో క్షణాన్ని ఒక్కోసారి తీసుకుంటున్నాను.”', time: 'ఈరోజు · ఇప్పుడే', open: 'సంభాషణ తెరవండి', send: 'సున్నితమైన చెక్-ఇన్ పంపండి', note: 'AI సంకేతాలు సమీక్షను సూచిస్తాయి. సంప్రదింపులు మరియు అత్యవసర చర్యలు సమ్మతి, స్థానిక నియమాల ప్రకారం మనుషులే నిర్వహిస్తారు.' },
    'ಕನ್ನಡ': { meta: 'ತನಿಖೆ ಹಂತ · ವಾರದ ಚೆಕ್-ಇನ್', steady: 'ಸ್ಥಿರ', signal: 'ಮೇಲ್ವಿಚಾರಣಾ ಸಂಕೇತ, ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯವಲ್ಲ.', dds: 'ಒತ್ತಡ ಮತ್ತು ಬೆಂಬಲ (DDS)', preview: 'ಸಂಭಾಷಣೆ ಮುನ್ನೋಟ', quote: '“ಇಂದು ನನಗೆ ಸರಿಯಾಗಿದೆ. ನಾನು ಒಂದೊಂದು ಕ್ಷಣವನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತಿದ್ದೇನೆ.”', time: 'ಇಂದು · ಈಗಷ್ಟೇ', open: 'ಸಂಭಾಷಣೆ ತೆರೆಯಿರಿ', send: 'ಸೌಮ್ಯ ಚೆಕ್-ಇನ್ ಕಳುಹಿಸಿ', note: 'AI ಸಂಕೇತಗಳು ಪರಿಶೀಲನೆಯನ್ನು ಸೂಚಿಸುತ್ತವೆ. ಸಂಪರ್ಕ ಮತ್ತು ತುರ್ತು ಕ್ರಮಗಳನ್ನು ಒಪ್ಪಿಗೆ ಹಾಗೂ ಸ್ಥಳೀಯ ನಿಯಮಗಳಂತೆ ಜನರೇ ನಡೆಸುತ್ತಾರೆ.' },
    'മലയാളം': { meta: 'അന്വേഷണ ഘട്ടം · പ്രതിവാര ചെക്ക്-ഇൻ', steady: 'സ്ഥിരം', signal: 'നിരീക്ഷണ സൂചന; ഇത് ഒരു മെഡിക്കൽ രോഗനിർണയമല്ല.', dds: 'സമ്മർദ്ദവും പിന്തുണയും (DDS)', preview: 'സംഭാഷണത്തിന്റെ മുൻകാഴ്ച', quote: '“ഇന്ന് എനിക്ക് സുഖമായിരിക്കുന്നു. ഞാൻ ഒരു സമയത്ത് ഒരു നിമിഷം വീതം എടുക്കുകയാണ്.”', time: 'ഇന്ന് · ഇപ്പോൾ', open: 'സംഭാഷണം തുറക്കുക', send: 'സൗമ്യമായ ചെക്ക്-ഇൻ അയയ്ക്കുക', note: 'AI സൂചനകൾ അവലോകനം നിർദ്ദേശിക്കുന്നു. ബന്ധപ്പെടലും അടിയന്തര നടപടികളും സമ്മതവും പ്രാദേശിക ചട്ടങ്ങളും അനുസരിച്ച് മനുഷ്യരാണ് കൈകാര്യം ചെയ്യുന്നത്.' },
    'বাংলা': { meta: 'তদন্ত পর্যায় · সাপ্তাহিক চেক-ইন', steady: 'স্থিতিশীল', signal: 'পর্যবেক্ষণ সংকেত, চিকিৎসাগত নির্ণয় নয়।', dds: 'চাপ ও সহায়তা (DDS)', preview: 'কথোপকথনের পূর্বরূপ', quote: '“আজ আমি ঠিক আছি। আমি এক সময়ে এক মুহূর্ত করে এগোচ্ছি।”', time: 'আজ · এইমাত্র', open: 'কথোপকথন খুলুন', send: 'নরম চেক-ইন পাঠান', note: 'AI সংকেত পর্যালোচনার পরামর্শ দেয়। যোগাযোগ ও জরুরি পদক্ষেপ সম্মতি এবং স্থানীয় নিয়ম মেনে মানুষেরাই পরিচালনা করেন।' },
    'मराठी': { meta: 'तपास टप्पा · साप्ताहिक चेक-इन', steady: 'स्थिर', signal: 'निरीक्षण संकेत, वैद्यकीय निदान नाही.', dds: 'तणाव आणि मदत (DDS)', preview: 'संभाषण पूर्वावलोकन', quote: '“आज मला ठीक वाटत आहे. मी एका वेळी एक क्षण घेत आहे.”', time: 'आज · आत्ताच', open: 'संभाषण उघडा', send: 'सौम्य चेक-इन पाठवा', note: 'AI संकेत पुनरावलोकन सुचवतात. संपर्क आणि आपत्कालीन पावले संमती व स्थानिक नियमांनुसार माणसेच हाताळतात.' },
    'ગુજરાતી': { meta: 'તપાસ તબક્કો · સાપ્તાહિક ચેક-ઇન', steady: 'સ્થિર', signal: 'નિરીક્ષણ સંકેત, તબીબી નિદાન નથી.', dds: 'તણાવ અને સહાય (DDS)', preview: 'વાતચીત પૂર્વાવલોકન', quote: '“આજે હું ઠીક અનુભવું છું. હું એક સમયે એક ક્ષણ લઈ રહ્યો/રહી છું.”', time: 'આજે · હમણાં જ', open: 'વાતચીત ખોલો', send: 'સૌમ્ય ચેક-ઇન મોકલો', note: 'AI સંકેતો સમીક્ષા સૂચવે છે. સંપર્ક અને કટોકટીનાં પગલાં સંમતિ તથા સ્થાનિક નિયમો મુજબ લોકો દ્વારા જ લેવામાં આવે છે.' },
    'ਪੰਜਾਬੀ': { meta: 'ਜਾਂਚ ਪੜਾਅ · ਹਫ਼ਤਾਵਾਰੀ ਚੈਕ-ਇਨ', steady: 'ਸਥਿਰ', signal: 'ਨਿਗਰਾਨੀ ਸੰਕੇਤ, ਡਾਕਟਰੀ ਤਸ਼ਖੀਸ ਨਹੀਂ।', dds: 'ਤਣਾਅ ਅਤੇ ਸਹਾਇਤਾ (DDS)', preview: 'ਗੱਲਬਾਤ ਝਲਕ', quote: '“ਅੱਜ ਮੈਂ ਠੀਕ ਮਹਿਸੂਸ ਕਰ ਰਿਹਾ/ਰਹੀ ਹਾਂ। ਮੈਂ ਇੱਕ ਸਮੇਂ ਇੱਕ ਪਲ ਲੈ ਰਿਹਾ/ਰਹੀ ਹਾਂ।”', time: 'ਅੱਜ · ਹੁਣੇ ਹੀ', open: 'ਗੱਲਬਾਤ ਖੋਲ੍ਹੋ', send: 'ਨਰਮ ਚੈਕ-ਇਨ ਭੇਜੋ', note: 'AI ਸੰਕੇਤ ਸਮੀਖਿਆ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕਰਦੇ ਹਨ। ਸੰਪਰਕ ਅਤੇ ਐਮਰਜੈਂਸੀ ਕਦਮ ਸਹਿਮਤੀ ਅਤੇ ਸਥਾਨਕ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਲੋਕ ਹੀ ਸੰਭਾਲਦੇ ਹਨ।' }
  };

  const counselorHeaderCopy = {
    English: { greeting: 'Good morning, <em>Dr. Meera.</em>', intro: 'A focused view of people who may benefit from a check-in.', refresh: '↻ Refresh overview', filter: 'Filter ⌄' },
    'हिन्दी': { greeting: 'सुप्रभात, <em>डॉ. मीरा।</em>', intro: 'उन लोगों का केंद्रित दृश्य जिन्हें चेक-इन से लाभ हो सकता है।', refresh: '↻ अवलोकन रीफ़्रेश करें', filter: 'फ़िल्टर ⌄' },
    'தமிழ்': { greeting: 'காலை வணக்கம், <em>டாக்டர் மீரா.</em>', intro: 'பதிவு தேவைப்படக்கூடியவர்களின் கவனமான காட்சி.', refresh: '↻ கண்ணோட்டத்தைப் புதுப்பிக்கவும்', filter: 'வடிகட்டு ⌄' },
    'తెలుగు': { greeting: 'శుభోదయం, <em>డా. మీరా.</em>', intro: 'చెక్-ఇన్ వల్ల ప్రయోజనం పొందగల వ్యక్తులపై దృష్టి కేంద్రీకరించిన వీక్షణ.', refresh: '↻ అవలోకనాన్ని రిఫ్రెష్ చేయండి', filter: 'ఫిల్టర్ ⌄' },
    'ಕನ್ನಡ': { greeting: 'ಶುಭೋದಯ, <em>ಡಾ. ಮೀರಾ.</em>', intro: 'ಚೆಕ್-ಇನ್‌ನಿಂದ ಪ್ರಯೋಜನ ಪಡೆಯಬಹುದಾದ ವ್ಯಕ್ತಿಗಳ ಕೇಂದ್ರೀಕೃತ ನೋಟ.', refresh: '↻ ಅವಲೋಕನವನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಿ', filter: 'ಫಿಲ್ಟರ್ ⌄' },
    'മലയാളം': { greeting: 'സുപ്രഭാതം, <em>ഡോ. മീര.</em>', intro: 'ചെക്ക്-ഇൻ സഹായകമാകാവുന്ന ആളുകളെ കേന്ദ്രീകരിച്ചുള്ള കാഴ്ച.', refresh: '↻ അവലോകനം പുതുക്കുക', filter: 'ഫിൽട്ടർ ⌄' },
    'বাংলা': { greeting: 'সুপ্রভাত, <em>ড. মীরা।</em>', intro: 'যাঁরা চেক-ইন থেকে উপকৃত হতে পারেন, তাঁদের একটি কেন্দ্রীভূত দৃশ্য।', refresh: '↻ সারসংক্ষেপ রিফ্রেশ করুন', filter: 'ফিল্টার ⌄' },
    'मराठी': { greeting: 'शुभ सकाळ, <em>डॉ. मीरा.</em>', intro: 'चेक-इनचा लाभ होऊ शकणाऱ्या लोकांचे केंद्रित दृश्य.', refresh: '↻ आढावा रिफ्रेश करा', filter: 'फिल्टर ⌄' },
    'ગુજરાતી': { greeting: 'સુપ્રભાત, <em>ડૉ. મીરા.</em>', intro: 'ચેક-ઇનથી લાભ મેળવી શકે તેવા લોકોનો કેન્દ્રિત દૃશ્ય.', refresh: '↻ સારાંશ રિફ્રેશ કરો', filter: 'ફિલ્ટર ⌄' },
    'ਪੰਜਾਬੀ': { greeting: 'ਸ਼ੁਭ ਸਵੇਰ, <em>ਡਾ. ਮੀਰਾ।</em>', intro: 'ਉਨ੍ਹਾਂ ਲੋਕਾਂ ਦਾ ਕੇਂਦਰਿਤ ਦ੍ਰਿਸ਼ ਜਿਨ੍ਹਾਂ ਨੂੰ ਚੈਕ-ਇਨ ਤੋਂ ਲਾਭ ਹੋ ਸਕਦਾ ਹੈ।', refresh: '↻ ਸੰਖੇਪ ਤਾਜ਼ਾ ਕਰੋ', filter: 'ਫਿਲਟਰ ⌄' }
  };

  const byId = (id) => document.getElementById(id);
  const akshavi = () => people.find(p => p.id === 'akshavi');
  let selectedPersonId = 'akshavi';
  let selectedMoodName = 'Okay';
  let chatHistory = [];
  const modal = byId('modal');
  let timerId;

  const t = (key) => (translations[byId('language').value] || translations.English)[key] || translations.English[key] || key;
  const copy = (key) => (pageCopy[byId('language').value] || pageCopy.English)[key] || pageCopy.English[key] || key;
  const counselorText = (key) => (counselorCopy[byId('language').value] || counselorCopy.English)[key] || counselorCopy.English[key] || key;
  const counselorHeaderText = (key) => (counselorHeaderCopy[byId('language').value] || counselorHeaderCopy.English)[key] || counselorHeaderCopy.English[key] || key;
  const titleCaseMoodKey = (name) => name.toLowerCase();

  const applyLanguage = () => {
    const language = byId('language').value;
    document.documentElement.lang = { English: 'en', 'हिन्दी': 'hi', 'தமிழ்': 'ta', 'తెలుగు': 'te', 'ಕನ್ನಡ': 'kn', 'മലയാളം': 'ml', 'বাংলা': 'bn', 'मराठी': 'mr', 'ગુજરાતી': 'gu', 'ਪੰਜਾਬੀ': 'pa' }[language] || 'en';
    document.querySelector('[data-view="care"]').textContent = t('space');
    document.querySelector('[data-view="counselor"]').textContent = t('counselor');
    document.querySelector('.mood-card .eyebrow').textContent = t('checkin');
    document.querySelector('.mood-card h2').textContent = t('howFeel');
    document.querySelector('.wellness-copy .eyebrow').textContent = t('wellness');
    document.querySelector('.wellness-card .text-button').innerHTML = `${t('see')} <span>→</span>`;
    document.querySelector('.dashboard-head .eyebrow').textContent = t('workspace');
    document.querySelector('.case-list .eyebrow').textContent = t('priority');
    document.querySelector('.case-list h2').textContent = t('people');
    document.querySelectorAll('.dashboard-stats p')[0].textContent = t('active');
    document.querySelectorAll('.dashboard-stats p')[1].textContent = t('review');
    document.querySelectorAll('.dashboard-stats p')[2].textContent = t('completion');
    document.querySelectorAll('.moods button').forEach((button) => {
      button.querySelector('small').textContent = t(titleCaseMoodKey(button.dataset.mood));
    });
    byId('selectedMood').textContent = `${t('selected')}: ${t(titleCaseMoodKey(selectedMoodName))}`;
    document.querySelector('.welcome-row .eyebrow').textContent = copy('date');
    document.querySelector('.welcome-row h1').innerHTML = copy('welcomeTitle');
    document.querySelector('.welcome-row .subtle').textContent = copy('welcome');
    byId('consentBtn').textContent = copy('choices');
    byId('pulseTitle').textContent = selectedMoodName === 'Okay' ? copy('pulseDefaultTitle') : byId('pulseTitle').textContent;
    byId('pulseCopy').textContent = selectedMoodName === 'Okay' ? copy('pulseDefaultCopy') : byId('pulseCopy').textContent;
    document.querySelector('.demo-label').textContent = copy('demoIndicator');
    document.querySelector('.chat-card h2').textContent = copy('talkRio');
    document.querySelector('.assistant-id p').childNodes[1].textContent = copy('hereWithYou');
    document.querySelector('#messages .message.bot').textContent = copy('chatHello');
    const suggestions = document.querySelectorAll('.suggestions button');
    [copy('anxious'), copy('pause'), copy('case')].forEach((text, index) => { if (suggestions[index]) suggestions[index].textContent = text; });
    byId('chatText').placeholder = copy('chatPlaceholder');
    document.querySelector('.chat-footnote').textContent = copy('chatFootnote');
    document.querySelector('.support-card .eyebrow').textContent = copy('needSupport');
    document.querySelector('.support-card h2').textContent = copy('noWait');
    document.querySelector('.support-card > p').textContent = copy('reachSupport');
    byId('groundBtn').innerHTML = `${copy('reset')}<span>→</span>`;
    document.querySelector('.support-card small').textContent = copy('helpline');
    document.querySelector('.resource-card .eyebrow').textContent = copy('gentleTools');
    document.querySelector('.resource-card h2').textContent = copy('thisMoment');
    const resources = document.querySelectorAll('.resource');
    resources[0].querySelector('strong').textContent = copy('boxBreathing'); resources[0].querySelector('small').textContent = copy('twoMinutes');
    resources[1].querySelector('strong').textContent = copy('groundingGuide'); resources[1].querySelector('small').textContent = copy('senses');
    document.querySelector('.journey .eyebrow').textContent = copy('journey');
    document.querySelector('.journey h2').textContent = copy('smallSteps');
    const journeyStats = document.querySelectorAll('.journey-stat span');
    journeyStats[0].innerHTML = copy('checkins'); journeyStats[1].innerHTML = copy('timeForYou');
    byId('journeyBtn').textContent = copy('progress');
    document.querySelector('.dashboard-head h1').innerHTML = counselorHeaderText('greeting');
    document.querySelector('.dashboard-head .subtle').textContent = counselorHeaderText('intro');
    byId('refreshBtn').textContent = counselorHeaderText('refresh');
    document.querySelector('.filter').textContent = counselorHeaderText('filter');
    document.querySelector('.risk-panel .eyebrow').textContent = counselorText('dds');
    document.querySelector('.preview .eyebrow').textContent = counselorText('preview');
    byId('openChatBtn').textContent = counselorText('open');
    byId('checkinBtn').textContent = counselorText('send');
    document.querySelector('.governance-note').textContent = counselorText('note');
    renderCounselorDetail(people.find((person) => person.id === selectedPersonId) || akshavi());
  };

  const loadState = () => {
    try {
      const savedData = JSON.parse(localStorage.getItem('mindcare_demo_data'));
      if (savedData) {
        if (savedData.selectedMoodName) setMood(savedData.selectedMoodName, false);
        if (savedData.chatHistory && savedData.chatHistory.length > 0) {
          byId('messages').innerHTML = '';
          savedData.chatHistory.forEach(msg => addMessage(msg.kind, msg.text, false));
        }
        if (savedData.akshaviScore) akshavi().score = savedData.akshaviScore;
        if (savedData.akshaviStatus) akshavi().status = savedData.akshaviStatus;
        if (savedData.akshaviTone) akshavi().tone = savedData.akshaviTone;
      }
    } catch(e) { console.error("Error loading state", e); }
  };

  const saveState = () => {
    localStorage.setItem('mindcare_demo_data', JSON.stringify({
      selectedMoodName,
      chatHistory,
      akshaviScore: akshavi().score,
      akshaviStatus: akshavi().status,
      akshaviTone: akshavi().tone
    }));
  };

  byId('loginPatient').addEventListener('click', () => {
    byId('authScreen').hidden = true;
    document.querySelector('[data-view="care"]').click();
  });
  byId('loginCounselor').addEventListener('click', () => {
    byId('authScreen').hidden = true;
    document.querySelector('[data-view="counselor"]').click();
  });

  const stopTimer = (hideModal = true) => {
    if (timerId) window.clearInterval(timerId);
    timerId = undefined;
    byId('breathingContainer').hidden = true;
    byId('privacyToggles').hidden = true;
    if (hideModal) modal.hidden = true;
  };

  const showModal = (title, text, kicker = 'MINDFUL MOMENT', actionLabel = 'I understand') => {
    stopTimer(false);
    byId('modalTitle').textContent = title;
    byId('modalText').textContent = text;
    byId('modalKicker').textContent = kicker;
    byId('timerDisplay').hidden = true;
    byId('modalAction').textContent = actionLabel;
    byId('modalAction').setAttribute('data-close-modal', '');
    byId('modalAction').onclick = null;
    modal.hidden = false;
  };

  const startVisualBreathing = (seconds) => {
    showModal('Breathe with the guide', 'Follow the circle. Inhale as it grows, hold, and exhale as it shrinks.', 'BOX BREATHING', 'Stop exercise');
    const container = byId('breathingContainer');
    const bText = byId('breathingText');
    container.hidden = false;
    
    let cycles = 0;
    const updateText = () => {
      const phase = cycles % 4;
      if(phase === 0) bText.textContent = "Inhale...";
      if(phase === 1) bText.textContent = "Hold...";
      if(phase === 2) bText.textContent = "Exhale...";
      if(phase === 3) bText.textContent = "Hold...";
      cycles++;
    };
    updateText();
    
    const action = byId('modalAction');
    action.removeAttribute('data-close-modal');
    action.onclick = () => stopTimer();
    
    timerId = window.setInterval(updateText, 4000);
    
    setTimeout(() => {
        stopTimer(false);
        byId('modalTitle').textContent = 'Nice work.';
        byId('modalText').textContent = 'You completed this gentle moment.';
        action.textContent = 'Close';
        action.setAttribute('data-close-modal', '');
    }, seconds * 1000);
  };

  const renderCounselorDetail = (person) => {
    byId('detailAvatar').textContent = person.initials;
    byId('detailName').textContent = person.name;
    byId('detailMeta').textContent = person.detailMeta;
    byId('detailStatus').textContent = person.status;
    byId('detailStatus').className = `status ${person.tone}`;
    byId('ddsValue').innerHTML = `${person.score} <small>/ 100</small>`;
    byId('ddsText').textContent = person.signal;
    byId('previewText').textContent = person.preview;
    
    const svg = byId('trendSvg');
    svg.setAttribute('aria-label', `Recent wellness trend for ${person.name}: Score ${person.score}`);
    byId('trendPath')?.setAttribute('d', person.trend);
  };

  const renderCaseList = () => {
    const list = byId('caseList');
    list.replaceChildren();
    people.forEach((person) => {
      const row = document.createElement('div');
      row.className = `case-row${person.id === selectedPersonId ? ' active' : ''}`;
      row.tabIndex = 0;
      row.setAttribute('role', 'button');
      row.setAttribute('aria-label', `View ${person.name}`);
      row.innerHTML = `<div class="case-avatar">${person.initials}</div><div class="case-info"><strong>${person.name}</strong><small>${person.queueMeta}</small></div><span class="status ${person.tone}">${person.status}</span>`;
      const selectPerson = () => {
        selectedPersonId = person.id;
        renderCaseList();
        renderCounselorDetail(person);
      };
      row.addEventListener('click', selectPerson);
      row.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') selectPerson(); });
      list.append(row);
    });
  };

  const updateCounselorFromMood = (moodUpdate, message = null) => {
    Object.assign(akshavi(), moodUpdate.counselor, {
      score: moodUpdate.value || moodUpdate.counselor.score,
      detailMeta: `Investigation stage · Checked in`,
      queueMeta: 'Investigation · Checked in today',
      preview: message ? `“${message}”` : moodUpdate.counselor.preview
    });
    selectedPersonId = 'akshavi';
    renderCaseList();
    renderCounselorDetail(akshavi());
    saveState();
  };

  const setMood = (name, doSave = true) => {
    const mood = moodData[name];
    selectedMoodName = name;
    document.querySelectorAll('.moods button').forEach((item) => item.classList.toggle('selected', item.dataset.mood === name));
    
    byId('checkinValue').textContent = `${mood.value}%`;
    byId('checkinFill').style.width = `${mood.value}%`;
    byId('moodNote').textContent = mood.note;
    byId('pulseTitle').textContent = mood.title;
    byId('pulseCopy').textContent = `Your check-in is ${name.toLowerCase()} today.`;
    byId('pulseNumber').textContent = mood.value;
    byId('pulseRing').style.setProperty('--progress', `${mood.value}%`);
    byId('pulseRing').setAttribute('aria-label', `Wellness indicator ${mood.value} out of 100`);
    
    if(doSave) updateCounselorFromMood(mood);
    return mood;
  };

  const addMessage = (kind, text, doSave = true) => {
    const bubble = document.createElement('div');
    bubble.className = `message ${kind}`;
    bubble.innerHTML = text.replace(/\n/g, '<br>'); 
    
    const messagesDiv = byId('messages');
    const suggestions = byId('chatSuggestions');
    if(suggestions) {
      messagesDiv.insertBefore(bubble, suggestions);
    } else {
      messagesDiv.append(bubble);
    }
    bubble.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    if(doSave) {
        chatHistory.push({kind, text});
        saveState();
    }
  };

  const handleMessage = (message) => {
    const text = message.toLowerCase();
    
    const crisisRegex = /suicide|self-harm|kill|die|end it all|unsafe|hopeless/i;
    if (crisisRegex.test(text)) {
        addMessage('bot crisis', 'Immediate support is available. You are not alone. Please reach out to someone who can help right now:\n\n<a href="tel:14416">📞 Call Tele-MANAS (14416)</a>\n<a href="tel:18005990019">📞 Call KIRAN (1800-599-0019)</a>');
        
        updateCounselorFromMood({ 
            value: 95, title: 'Urgent Care', note: 'Please use the support lines above.', 
            counselor: { score: 95, status: 'URGENT REVIEW', tone: 'review', signal: 'CRISIS KEYWORD DETECTED. IMMEDIATE OUTREACH REQUIRED.', preview: `“${message}”`, trend: 'M2 60 L 218 60' } 
        }, message);
        return;
    }

    let moodName = 'Okay';
    if (/(anxious|panic|difficult|scared|sad|overwhelmed)/.test(text)) moodName = 'Difficult';
    else if (/(low|tired|pause|stressed|drained|down)/.test(text)) moodName = 'Low';
    else if (/(bright|excited|joyful|amazing|great)/.test(text)) moodName = 'Bright';
    else if (/(good|better|calm|grateful|happy)/.test(text)) moodName = 'Good';
    
    updateCounselorFromMood(moodData[moodName], message);
    addMessage('bot', 'Thank you for sharing. Your check-in has been updated in your private wellness pulse.');
  };

  document.querySelectorAll('.moods button').forEach((button) => button.addEventListener('click', () => setMood(button.dataset.mood)));

  byId('chatForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = byId('chatText');
    const message = input.value.trim();
    if (!message) return;
    addMessage('user', message);
    input.value = '';
    handleMessage(message);
  });

  document.querySelectorAll('.suggestions button').forEach((button) => button.addEventListener('click', () => {
    byId('chatText').value = button.textContent;
    byId('chatText').focus();
  }));

  const micBtn = byId('micBtn');
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    micBtn.addEventListener('click', (e) => {
        e.preventDefault();
        micBtn.classList.add('recording');
        recognition.start();
    });
    
    recognition.onresult = (e) => {
        byId('chatText').value = e.results[0][0].transcript;
        micBtn.classList.remove('recording');
    };
    
    recognition.onerror = () => micBtn.classList.remove('recording');
    recognition.onend = () => micBtn.classList.remove('recording');
  } else {
    micBtn.style.display = 'none'; 
  }

  byId('boxBreathingBtn')?.addEventListener('click', () => startVisualBreathing(120));
  
  byId('groundingBtn')?.addEventListener('click', () => {
      showModal('Use your five senses', 'Look around and slowly name:\n5 things you can see\n4 things you can feel\n3 things you can hear\n2 things you can smell\n1 thing you can taste.', 'GROUNDING GUIDE', 'Close');
  });

  byId('consentBtn')?.addEventListener('click', () => {
      showModal('Data Sharing Controls', 'You choose what information is shared with your clinical team.', 'YOUR CHOICES', 'Save Preferences');
      byId('privacyToggles').hidden = false;
  });

  byId('openChatBtn')?.addEventListener('click', () => {
    document.querySelector('[data-view="care"]').click();
    byId('chatText').focus();
  });

  byId('checkinBtn')?.addEventListener('click', () => showModal('Gentle check-in sent', 'Akshavi will receive a kind invitation to share how things are going.', 'COUNSELOR ACTION', 'Close'));
  
  byId('nudgeBtn')?.addEventListener('click', () => showModal('Send a gentle nudge', 'Template: "Take your time today. Remember to use the grounding tools if needed." — Notification sent.', 'COUNSELOR ACTION', 'Close'));
  
  byId('exportBtn')?.addEventListener('click', () => {
      const person = people.find(p => p.id === selectedPersonId);
      const data = `MindCare Summary Report\nDate: ${new Date().toLocaleDateString()}\nPatient: ${person.name}\nStatus: ${person.status}\nDDS Score: ${person.score}/100\nRecent Transcript: ${person.preview}\n\nNote: Export generated via Counselor Workspace for case files.`;
      
      const blob = new Blob([data], {type: 'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${person.name}_Case_Summary.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  });

  byId('refreshBtn')?.addEventListener('click', (event) => {
    const button = event.currentTarget;
    button.textContent = '✓ Overview refreshed';
    const temp = people[1];
    people[1] = people[3];
    people[3] = temp;
    renderCaseList();
    window.setTimeout(() => { button.textContent = '↻ Refresh overview'; }, 1500);
  });

  document.querySelector('.filter')?.addEventListener('click', (event) => {
    const button = event.currentTarget;
    const showingReview = button.dataset.reviewOnly === 'true';
    button.dataset.reviewOnly = String(!showingReview);
    button.textContent = showingReview ? 'Filter ⌄' : 'Showing review only';
    byId('caseList').querySelectorAll('.case-row').forEach((row) => {
      row.hidden = !showingReview && !row.querySelector('.status.review');
    });
  });

  document.querySelectorAll('.nav-link').forEach((button) => button.addEventListener('click', () => {
    const counselor = button.dataset.view === 'counselor';
    byId('careView').hidden = counselor;
    byId('counselorView').hidden = !counselor;
    document.querySelectorAll('.nav-link').forEach((item) => item.classList.toggle('active', item === button));
  }));

  byId('language').addEventListener('change', applyLanguage);

  loadState();
  renderCaseList();
  renderCounselorDetail(akshavi());
  applyLanguage();
  if(!chatHistory.length) {
    chatHistory = [];
  }
})();