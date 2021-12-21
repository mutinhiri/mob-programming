function birthdayCakeCandles(candles) {
    // Write your code here
    let max = 0 ;
    let candles_num = 0
    for(let i =0; i<candles.length; i++){
        if(max<candles[i]){
            max = candles[i] 
        }
    }
    for (let i =0; i<candles.length; i++){
        if(candles[i] ==max){
            candles_num ++
        }
    }return candles_num
}
