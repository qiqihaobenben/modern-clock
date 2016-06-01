window.onload = function() {
    var imgs = document.getElementsByTagName("img");
    var nums = [];
    var nub = 0;
    var week = ["images/seven.png","images/one.png","images/two.png","images/three.png","images/four.png","images/five.png","images/six.png"];
    var nub2 = null;
    for(var i = 0; i < imgs.length; i++){
        if(imgs[i].className == "num"){
            nums[nub] = imgs[i];
            nums[nub].alt = 0;
            nub++;

        }
        if(imgs[i].className == "num2") {
            nub2 = imgs[i];
            nub2.alt = 1;
        }
    }
    var numH= css(nums[0],"height");
    var num2H= css(nub2,"height");
    toTime();
    setInterval(toTime,1000);
    function toTime() {
        var objDate = new Date();
        var year =  objDate.getFullYear();
        var month = toDb(objDate.getMonth() + 1);
        var date  = toDb(objDate.getDate());
        var hours = toDb(objDate.getHours());
        var minutes = toDb(objDate.getMinutes());
        var seconds = toDb(objDate.getSeconds());
        var strTime = year + month + date + hours + minutes + seconds;
        var day  = objDate.getDay();
        for(var i = 0; i < nums.length; i++){
            fn(i);
            //nums[i].src = "images/"+ strTime.charAt(i) +".png";
        }

        function fn(nub){
            if(nums[nub].alt ==  strTime.charAt(nub)) {
                return;
            }
            startMove(nums[nub], "height", 200, 0, "linear",
                function(){
                    nums[nub].alt = strTime.charAt(nub);
                    nums[nub].src = "images/"+ strTime.charAt(nub) +".png";
                    startMove(nums[nub], "height", 200, numH, "linear");
                }
            );
        }
        if(nub2.alt != day) {
            startMove(nub2, "height", 200, 0, "linear",
                function(){
                    nub2.src = week[day] ;
                    nub2.alt = day;
                    startMove(nub2, "height", 200, num2H, "linear");
                }
            );
        }
    }
};
function toDb(nub){
    return nub < 10 ? "0" + nub: "" + nub;
}