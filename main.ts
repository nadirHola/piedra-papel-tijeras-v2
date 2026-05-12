input.onGesture(Gesture.Shake, function () {
    if (true) {
        basic.showString("HOLA")
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        music.play(music.stringPlayable("C5 B A G A C5 F G ", 120), music.PlaybackMode.UntilDone)
    }
    game.resume()
})
