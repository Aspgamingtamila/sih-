(() => {
  const moodData = {
    Difficult: { value: 20, title: 'A hard moment', note: 'You do not have to carry this alone.', counselor: { score: 85, status: 'Review now', tone: 'review', signal: 'A lower check-in may benefit from a timely, human-led review.', preview: '“Today feels especially difficult. I could use some support.”', trend: 'M2 18 C30 18,38 48,68 42 S112 20,142 37 S185 61,218 57' } },
    Low: { value: 40, title: 'A gentle day', note: 'Small, caring steps are enough today.', counselor: { score: 72, status: 'Check in', tone: 'review', signal: 'A gentle follow-up may be helpful today.', preview: '“I’m feeling low today and would appreciate a little support.”', trend: 'M2 28 C28 27,37 43,67 39 S111 25,142 37 S185 48,218 42' } },
    Okay: { value: 62, title: 'Steady today', note: 'It’s okay to be exactly where you are.', counselor: { score: 62, status: 'Steady', tone: 'stable', signal: 'Monitoring signal, not a clinical diagnosis.', preview: '“I’m feeling okay today. I’m taking things one moment at a time.”', trend: 'M2 45 C25 40,33 58,55 45 S86 13,107 27 S139 48,157 32 S190 25,218 13' } },
    Good: { value: 78, title: 'A positive moment', note: 'Notice what is helping you feel this way.', counselor: { score: 40, status: 'Improving', tone: 'stable', signal: 'A positive check-in suggests steadier support needs.', preview: '“I’m feeling good today. A few things have been helping.”', trend: 'M2 52 C28 54,39 40,69 42 S111 28,143 32 S187 18,218 15' } },
    Bright: { value: 92, title: 'Feeling bright', note: 'Let this good moment be yours to enjoy.', counselor: { score: 18, status: 'Bright', tone: 'stable', signal: 'A positive check-in suggests lower current support needs.', preview: '“I’m feeling bright today and wanted to share that.”', trend: 'M2 58 C28 55,40 45,68 40 S110 29,142 25 S182 13,218 8' } }
  };

  // Bot Dictionary for varied, non-repetitive conversational replies
  const botReplies = {
    Difficult: [
        "I'm sorry things feel so hard right now. Remember you don't have to carry this alone.",
        "That sounds really tough. Please use the grounding tools here if you need a breather.",
        "I hear how difficult this is. I'm noting this so your care team knows you might need extra support.",
        "It's okay to not be okay. If it gets overwhelming, please check the support options below."
    ],
    Low: [
        "It's completely valid to feel low. Be gentle with yourself today.",
        "Thanks for sharing. Take things one small step at a time today.",
        "I hear you. If you need a break, the Box Breathing tool might offer a quiet moment.",
        "I've updated your pulse. Small, caring steps are enough for today."
    ],
    Okay: [
        "Thank you for checking in. It's okay to take things one moment at a time.",
        "I hear you. Taking it day by day is a good approach. I've logged your check-in.",
        "Thanks for sharing. I've noted this in your wellness pulse.",
        "Steady is good. I'm here if you need to talk more."
    ],
    Good: [
        "I'm glad to hear you're feeling good today. Notice what is helping you feel this way.",
        "That's great. I've updated your pulse to reflect this positive moment.",
        "It's wonderful to hear things are feeling better. Thanks for checking in.",
        "I appreciate you sharing this good moment with me."
    ],
    Bright: [
        "That's wonderful! Let this bright moment be yours to enjoy.",
        "I'm so glad to hear that. I've recorded your bright check-in.",
        "It's great to hear you're having such a positive day. Keep noticing the good things.",
        "Thank you for sharing your brightness today!"
    ]
  };

  // Generates a massive, scrollable history to simulate "500+ chats" visually without the literal payload size.
  const generateRichHistory = (name) => {
      let history = [];
      const days = 14; 
      for(let i=days; i>0; i--) {
          const isHard = i % 4 === 0;
          history.push({ kind: 'bot', text: `Check-in reminder for ${i} days ago. How were things then?` });
          history.push({ kind: 'user', text: isHard ? 'I was feeling pretty overwhelmed with the case.' : 'Things were steady. Just taking it day by day.' });
          history.push({ kind: 'bot', text: isHard ? 'I understand. Dealing with this process is genuinely exhausting. Remember to lean on your support tools.' : 'I am glad things felt steady. Routine can be a helpful anchor.' });
      }
      history.push({ kind: 'bot', text: `Hello ${name}. I’m Rio, your MindCare guide. How has today felt for you?` });
      return history;
  };

  // Enhanced People Array with dedicated Patient Data
  let people = [
    { id: 'akshavi', initials: 'AK', name: 'Akshavi', checkins: '3', time: '12m', queueMeta: 'Investigation · Checked in today', detailMeta: 'Investigation stage · Weekly check-in', defaultMood: 'Okay', chatHistory: generateRichHistory('Akshavi'), ...moodData.Okay.counselor },
    { id: 'yaswant', initials: 'YM', name: 'Yaswant', checkins: '0', time: '0m', queueMeta: 'Trial · Missed two check-ins', detailMeta: 'Trial stage · Follow-up due', defaultMood: 'Difficult', chatHistory: [{kind: 'bot', text: 'Hello Yaswant. I noticed you missed your last two check-ins. How are you holding up?'}, {kind: 'user', text: 'I have missed a couple of check-ins this week. Just feeling very drained by the trial.'}], score: 74, status: 'Review', tone: 'review', signal: 'A follow-up may be helpful after missed check-ins.', preview: '“I have missed a couple of check-ins this week.”', trend: 'M2 20 C28 25,42 54,66 48 S108 24,143 39 S184 47,218 33' },
    { id: 'bala', initials: 'BS', name: 'Bala', checkins: '5', time: '20m', queueMeta: 'Compensation · Checked in yesterday', detailMeta: 'Compensation stage · Weekly check-in', defaultMood: 'Low', chatHistory: [{kind: 'bot', text: 'Hello Bala. How was yesterday?'}, {kind: 'user', text: 'Yesterday felt manageable, but I’m still adjusting.'}], score: 55, status: 'Watch', tone: 'watch', signal: 'Continue to observe recent check-in patterns.', preview: '“Yesterday felt manageable, but I’m still adjusting.”', trend: 'M2 42 C29 31,39 57,68 45 S111 36,143 43 S184 31,218 29' },
    { id: 'armaan', initials: 'AP', name: 'Armaan', checkins: '1', time: '5m', queueMeta: 'Investigation · Checked in 3 days ago', detailMeta: 'Investigation stage · Follow-up due', defaultMood: 'Okay', chatHistory: [{kind: 'bot', text: 'Hi Armaan, just a gentle check-in.'}, {kind: 'user', text: 'It has been a few days since my last check-in.'}], score: 70, status: 'Review', tone: 'review', signal: 'A gentle follow-up is suggested after time away.', preview: '“It has been a few days since my last check-in.”', trend: 'M2 28 C30 34,40 57,68 49 S109 28,144 45 S184 52,218 37' }
  ];

  let currentPatientId = 'akshavi';
  let activeView = 'care'; // 'care' or 'counselor'
  const byId = (id) => document.getElementById(id);
  const getPatient = () => people.find(p => p.id === currentPatientId);

  const modal = byId('modal');
  let timerId, textIntervalId;

  // -- UI Switching Logic for Multi-Patient -- 
  const setPatientView = (patientId) => {
      currentPatientId = patientId;
      const p = getPatient();
      
      // Update Headers and Avatars
      byId('profileBtn').textContent = p.initials;
      byId('profileBtn').style.background = 'var(--lilac)';
      byId('profileBtn').style.color = 'var(--lav)';
      byId('welcomeName').innerHTML = `${p.name}.`;
      
      // Update Journey Stats
      byId('statCheckins').textContent = p.checkins;
      byId('statTime').textContent = p.time;
      
      // Reset Chat
      const messagesDiv = byId('messages');
      messagesDiv.innerHTML = '';
      p.chatHistory.forEach(msg => {
          const bubble = document.createElement('div');
          bubble.className = `message ${msg.kind}`;
          bubble.innerHTML = msg.text.replace(/\n/g, '<br>');
          messagesDiv.appendChild(bubble);
      });
      messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
      
      // Set Default Mood
      setMood(p.defaultMood, false);
  };

  const setRole = (role) => {
    activeView = role;
    const isCounselor = role === 'counselor';
    byId('careView').hidden = isCounselor;
    byId('counselorView').hidden = !isCounselor;
    document.querySelectorAll('.nav-link').forEach((item) => item.classList.toggle('active', item.dataset.view === role));
    
    if (isCounselor) {
        byId('profileBtn').textContent = 'SN';
        byId('profileBtn').style.background = 'var(--gold)';
        byId('profileBtn').style.color = 'white';
        renderCaseList();
    } else {
        setPatientView(currentPatientId);
    }
    byId('authScreen').hidden = true;
  };

  // Auth Button Listeners
  document.querySelectorAll('.auth-buttons button').forEach(btn => {
      btn.addEventListener('click', (e) => {
          const loginId = e.currentTarget.dataset.login;
          if(loginId === 'counselor') {
              setRole('counselor');
          } else {
              currentPatientId = loginId;
              setRole('care');
          }
      });
  });

  byId('profileBtn').addEventListener('click', () => {
    byId('authScreen').hidden = false;
  });

  // -- Modal / Timer / Breathing Logic (Strictly separated to fix CSS overlap bug) --
  const stopTimer = (hideModal = true) => {
    if (timerId) window.clearInterval(timerId);
    if (textIntervalId) window.clearInterval(textIntervalId);
    timerId = undefined;
    textIntervalId = undefined;
    
    // Explicitly hide elements so they NEVER bleed into other modals
    byId('breathingContainer').hidden = true;
    byId('timerDisplay').hidden = true;
    byId('privacyToggles').hidden = true;
    
    if (hideModal) modal.hidden = true;
  };

  const showModal = (title, text, kicker = 'MINDFUL MOMENT', actionLabel = 'I understand') => {
    stopTimer(false); 
    byId('modalTitle').textContent = title;
    byId('modalText').textContent = text;
    byId('modalKicker').textContent = kicker;
    
    const actionBtn = byId('modalAction');
    actionBtn.textContent = actionLabel;
    
    // Wire up button safely
    actionBtn.onclick = () => { stopTimer(true); };
    
    modal.hidden = false;
  };

  const startVisualBreathing = (seconds) => {
    showModal('Breathe with the guide', 'Follow the circle. Inhale as it grows, hold, and exhale as it shrinks.', 'BOX BREATHING', 'Stop exercise');
    
    const container = byId('breathingContainer');
    const bText = byId('breathingText');
    const tDisplay = byId('timerDisplay');
    
    container.hidden = false;
    tDisplay.hidden = false; 
    
    let remaining = seconds;
    let cycles = 0;
    
    const renderTime = () => {
      tDisplay.textContent = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
    };
    
    const updateText = () => {
      const phase = cycles % 4;
      if(phase === 0) bText.textContent = "Inhale...";
      if(phase === 1) bText.textContent = "Hold...";
      if(phase === 2) bText.textContent = "Exhale...";
      if(phase === 3) bText.textContent = "Hold...";
      cycles++;
    };
    
    renderTime();
    updateText();
    
    const actionBtn = byId('modalAction');
    actionBtn.onclick = () => stopTimer(true);
    
    textIntervalId = window.setInterval(updateText, 4000);
    
    timerId = window.setInterval(() => {
        remaining -= 1;
        renderTime();
        if (remaining <= 0) {
            stopTimer(false);
            byId('modalTitle').textContent = 'Nice work.';
            byId('modalText').textContent = 'You completed this gentle moment.';
            actionBtn.textContent = 'Close';
            actionBtn.onclick = () => stopTimer(true);
        }
    }, 1000);
  };
  
  const startNumericTimer = (title, text, kicker, seconds) => {
    showModal(title, text, kicker, 'Stop exercise');
    const tDisplay = byId('timerDisplay');
    tDisplay.hidden = false; 
    
    let remaining = seconds;
    const renderTime = () => {
      tDisplay.textContent = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
    };
    
    renderTime();
    
    const actionBtn = byId('modalAction');
    actionBtn.onclick = () => stopTimer(true);
    
    timerId = window.setInterval(() => {
        remaining -= 1;
        renderTime();
        if (remaining <= 0) {
            stopTimer(false);
            byId('modalTitle').textContent = 'Nice work.';
            byId('modalText').textContent = 'You completed this gentle moment.';
            actionBtn.textContent = 'Close';
            actionBtn.onclick = () => stopTimer(true);
        }
    }, 1000);
  };

  // Close modal via 'X'
  document.querySelectorAll('[data-close-modal]').forEach(el => {
      el.addEventListener('click', () => stopTimer(true));
  });

  // -- Chat Logic --
  const addMessage = (kind, text, saveToCurrent = true) => {
    const bubble = document.createElement('div');
    bubble.className = `message ${kind}`;
    bubble.innerHTML = text.replace(/\n/g, '<br>'); 
    
    const messagesDiv = byId('messages');
    messagesDiv.appendChild(bubble);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    if(saveToCurrent) {
        getPatient().chatHistory.push({kind, text});
    }
  };

  const handleMessage = (message) => {
    const text = message.toLowerCase();
    
    // Strict Safety Check
    const crisisRegex = /suicide|self-harm|kill|die|end it all|unsafe|hopeless/i;
    if (crisisRegex.test(text)) {
        addMessage('bot crisis', 'Immediate support is available. You are not alone. Please reach out to someone who can help right now:\n\n<a href="tel:14416">📞 Call Tele-MANAS (14416)</a>\n<a href="tel:18005990019">📞 Call KIRAN (1800-599-0019)</a>');
        
        updateCounselorFromMood({ 
            value: 95, title: 'Urgent Care', note: 'Please use the support lines above.', 
            counselor: { score: 95, status: 'URGENT REVIEW', tone: 'review', signal: 'CRISIS KEYWORD DETECTED. IMMEDIATE OUTREACH REQUIRED.', preview: `“${message}”`, trend: 'M2 60 L 218 60' } 
        }, message);
        return;
    }

    // Standard routing
    let moodName = 'Okay';
    if (/(anxious|panic|difficult|scared|sad|overwhelmed|bad|terrible)/.test(text)) moodName = 'Difficult';
    else if (/(low|tired|pause|stressed|drained|down)/.test(text)) moodName = 'Low';
    else if (/(bright|excited|joyful|amazing|great)/.test(text)) moodName = 'Bright';
    else if (/(good|better|calm|grateful|happy)/.test(text)) moodName = 'Good';
    
    updateCounselorFromMood(moodData[moodName], message);
    
    // Varied Chatbot Reply
    const options = botReplies[moodName] || botReplies['Okay'];
    const reply = options[Math.floor(Math.random() * options.length)];
    
    // slight delay for realism
    setTimeout(() => {
        addMessage('bot', reply);
    }, 500);
  };

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
    const text = button.textContent;
    addMessage('user', text);
    handleMessage(text);
  }));

  // Speech API
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

  // -- Wellness & Mood Logic -- 
  const setMood = (name, updateCounselor = true) => {
    const mood = moodData[name];
    selectedMoodName = name;
    getPatient().defaultMood = name;
    
    document.querySelectorAll('.moods button').forEach((item) => item.classList.toggle('selected', item.dataset.mood === name));
    
    // update dashboard visuals
    byId('checkinValue').textContent = `${mood.value}%`;
    byId('checkinFill').style.width = `${mood.value}%`;
    byId('moodNote').textContent = mood.note;
    byId('pulseTitle').textContent = mood.title;
    byId('pulseCopy').textContent = `Your check-in is ${name.toLowerCase()} today.`;
    byId('pulseNumber').textContent = mood.value;
    byId('pulseRing').style.setProperty('--progress', `${mood.value}%`);
    byId('pulseRing').setAttribute('aria-label', `Wellness indicator ${mood.value} out of 100`);
    
    if(updateCounselor) updateCounselorFromMood(mood);
    return mood;
  };

  const updateCounselorFromMood = (moodUpdate, message = null) => {
    const p = getPatient();
    Object.assign(p, moodUpdate.counselor, {
      score: moodUpdate.value || moodUpdate.counselor.score,
      detailMeta: `Investigation stage · Checked in`,
      queueMeta: 'Investigation · Checked in today',
      preview: message ? `“${message}”` : moodUpdate.counselor.preview
    });
    if(activeView === 'counselor') renderCaseList();
  };

  document.querySelectorAll('.moods button').forEach((button) => button.addEventListener('click', () => setMood(button.dataset.mood)));

  // -- Counselor Logic --
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
      // If no one is strictly selected, default to the top person
      const isActive = person.id === currentPatientId;
      row.className = `case-row${isActive ? ' active' : ''}`;
      row.tabIndex = 0;
      row.setAttribute('role', 'button');
      row.setAttribute('aria-label', `View ${person.name}`);
      row.innerHTML = `<div class="case-avatar">${person.initials}</div><div class="case-info"><strong>${person.name}</strong><small>${person.queueMeta}</small></div><span class="status ${person.tone}">${person.status}</span>`;
      
      const selectPerson = () => {
        currentPatientId = person.id;
        renderCaseList();
        renderCounselorDetail(person);
      };
      
      row.addEventListener('click', selectPerson);
      row.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') selectPerson(); });
      list.append(row);
    });
    
    // Render the detail for the currently active person
    renderCounselorDetail(getPatient());
  };

  // Button assignments
  byId('pulseBtn')?.addEventListener('click', () => showModal('Your wellness pulse', 'This indicator reflects your check-ins and is not a diagnosis.', 'WELLNESS PULSE', 'Close'));
  byId('journeyBtn')?.addEventListener('click', () => showModal('Your gentle progress', 'Every check-in is a meaningful step. Thank you for making time for yourself.', 'YOUR JOURNEY', 'Close'));
  byId('chatInfoBtn')?.addEventListener('click', () => showModal('About Rio', 'Rio is a demo guide for gentle, supportive conversation. It learns context but is not a clinical tool.', 'CHAT INFORMATION', 'Close'));
  byId('resourceInfoBtn')?.addEventListener('click', () => showModal('More support tools', 'This demo keeps options simple. A production version can include saved resources and accessibility preferences.', 'MORE OPTIONS', 'Close'));

  byId('boxBreathingBtn')?.addEventListener('click', () => startVisualBreathing(120));
  byId('groundingBtn')?.addEventListener('click', () => {
      startNumericTimer('Use your five senses', 'Look around and slowly name:\n5 things you can see\n4 things you can feel\n3 things you can hear\n2 things you can smell\n1 thing you can taste.', 'GROUNDING GUIDE', 60);
  });

  byId('consentBtn')?.addEventListener('click', () => {
      showModal('Data Sharing Controls', 'You choose what information is shared with your clinical team.', 'YOUR CHOICES', 'Save Preferences');
      byId('privacyToggles').hidden = false;
  });

  byId('openChatBtn')?.addEventListener('click', () => {
    setRole('care'); // Opens the care view for the currently selected patient in counselor list
    byId('chatText').focus();
  });
  
  byId('checkinBtn')?.addEventListener('click', () => showModal('Gentle check-in sent', 'The user will receive a kind invitation to share how things are going.', 'COUNSELOR ACTION', 'Close'));
  byId('nudgeBtn')?.addEventListener('click', () => showModal('Send a gentle nudge', 'Template: "Take your time today. Remember to use the grounding tools if needed." — Notification sent.', 'COUNSELOR ACTION', 'Close'));
  
  byId('exportBtn')?.addEventListener('click', () => {
      const p = getPatient();
      const data = `MindCare Summary Report\nDate: ${new Date().toLocaleDateString()}\nPatient: ${p.name}\nStatus: ${p.status}\nDDS Score: ${p.score}/100\nRecent Transcript: ${p.preview}\n\nNote: Export generated via Counselor Workspace for case files.`;
      
      const blob = new Blob([data], {type: 'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${p.name}_Case_Summary.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  });

  byId('refreshBtn')?.addEventListener('click', (event) => {
    const button = event.currentTarget;
    button.textContent = '✓ Overview refreshed';
    // visually shuffle queue
    const temp = people[1];
    people[1] = people[3];
    people[3] = temp;
    renderCaseList();
    window.setTimeout(() => { button.textContent = '↻ Refresh overview'; }, 1500);
  });

  byId('filterBtn')?.addEventListener('click', (event) => {
    const button = event.currentTarget;
    const showingReview = button.dataset.reviewOnly === 'true';
    button.dataset.reviewOnly = String(!showingReview);
    button.textContent = showingReview ? 'Filter ⌄' : 'Showing review only';
    byId('caseList').querySelectorAll('.case-row').forEach((row) => {
      row.hidden = !showingReview && !row.querySelector('.status.review');
    });
  });

  // Init
  setPatientView('akshavi'); // start on Akshavi
})();
