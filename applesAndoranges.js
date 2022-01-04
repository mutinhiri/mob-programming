function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    const appleRes = apples.map(pos => pos = pos + a).filter(pos => pos >= s && pos <= t).length
    const orangeRes = oranges.map(pos => pos = pos + b).filter(pos => pos >= s && pos <= t).length
    
    // const orangeRes = apples.map(pos => pos >= (pos + b).filter(pos => pos <= s && pos <= t)).length
    
    // console.log(apples,"\n", oranges, "\n", s, "\n", t, "\n", a, "\n", b)
    console.log(appleRes)
    console.log(orangeRes)
    

}
