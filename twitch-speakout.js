window.addEventListener('message', function(e) {
    const data = e.data || {};
    if (data.type !== 'item')
      return;
    const message = data.message || {};
    const obj = { detail: { command: message.command, body: message.body, from: message.from }};
    
    const synth = window.speechSynthesis;
    if (obj.detail.command === 'PRIVMSG') {
      var utter = new SpeechSynthesisUtterance(obj.detail.body);
      utter.voice = synth.getVoices().filter(v => v.lang === 'ja-JP')[0];
      utter.rate = 1;
      utter.pitch = 1;
      synth.speak(utter);
    }
  });
