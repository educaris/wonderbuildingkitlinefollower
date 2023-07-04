function Rechts () {
    wuKong.setAllMotor(0, -80)
}
function Links () {
    wuKong.setAllMotor(-80, 0)
}
function anders () {
    wuKong.setAllMotor(-100, -100)
}
basic.showIcon(IconNames.Heart)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        anders()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        Links()
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        Rechts()
    }
})
