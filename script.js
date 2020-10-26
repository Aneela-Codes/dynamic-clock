    setInterval(setClock, 1000)

   const HourHand= document.querySelector('[data-hour-hand]');
    const MinuteHand = document.querySelector('[data-minute-hand]');
    const SecondHand = document.querySelector('[data-second-hand]');

  //Here the function comes

    function setRotation(element, rotationRatio){
        element.style.setProperty("--rotation", rotationRatio * 360)
    }
    setClock();
