var speechLanguage = 'ja-JP'; // Default Language
window.addEventListener('message', function(e) {
    speechLanguage = 'ja-JP'; // Default Language
    const data = e.data || {};
    if (data.type !== 'item')
      return;
    const message = data.message || {};
    const obj = { detail: { command: message.command, body: message.body, from: message.from }};
    
    const synth = window.speechSynthesis;
    if (obj.detail.command === 'PRIVMSG') {
        guessLanguage.detect(obj.detail.body, function(language) {
            if (language == 'en') { speechLanguage = 'en-US'; }
        });
      var utter = new SpeechSynthesisUtterance(obj.detail.body);
      utter.voice = synth.getVoices().filter(v => v.lang === speechLanguage)[0];
      utter.rate = 1;
      utter.pitch = 1;
      synth.speak(utter);
    }
  });
