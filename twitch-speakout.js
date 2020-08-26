document.addEventListener('onEventReceived', function(obj) {
    const synth = window.speechSynthesis;
    if (obj.detail.command === 'PRIVMSG') {
        var utter = new SpeechSynthesisUtterance(obj.detail.body);
        utter.voice = synth.getVoices().filter(v => v.lang === 'ja-JP')[0];
        utter.rate = 1;
        utter.pitch = 1;
        synth.speak(utter);
    }
});
