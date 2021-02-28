let score = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        let dodgeball_1 = 0
        led.plot(dodgeball_1, randint(0, 4))
        basic.pause(500)
        score += dodgeball_1
    }
    led.unplot(0, 0)
})
