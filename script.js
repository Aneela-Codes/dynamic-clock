    setInterval(setClock, 1000)

   const HourHand= document.querySelector('[data-hour-hand]');
    const MinuteHand = document.querySelector('[data-minute-hand]');
    const SecondHand = document.querySelector('[data-second-hand]');

  //Here the function comes

    function setRotation(element, rotationRatio){
        element.style.setProperty("--rotation", rotationRatio * 360)
    }
  function setClock(){
        const currentDate= new Date()
        // console.log(currentDate)
        const SecondRatio = currentDate.getSeconds()/60
        // console.log(secondRatio);
        const MinuteRatio = (SecondRatio + currentDate.getMinutes())/60;
        // console.log(MinuteRatio);
        const HourRatio = (MinuteRatio + currentDate.getHours())/12;
        

        // .............Calling the setRotation Function............
        setRotation(SecondHand, SecondRatio);
        setRotation(MinuteHand, MinuteRatio);
        setRotation(HourHand, HourRatio);
    }
    setClock();
