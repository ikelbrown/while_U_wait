function countDown(){
    var daysUntilMyBirthday = 60;
    var count = daysUntilMyBirthday;
    for (var i = 60; i >= 0; i--){
        if (i >= 30){
            console.log(i + "days until my my birthday. So long so sad... :(");
        }
        if (i < 30){
            console.log(i + "days until my birthday. It's almost party time... :)");
        }
        if (i === 0){
            console.log(i + " It's my freakin BIRTHDAY. LETS PARTY!!!!!... :)");
        }
        count--;
        
    }
    
}
countDown();