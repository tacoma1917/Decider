function choose(){
    var optionsString = document.getElementById("input1").value
    var options = optionsString.split(",")
    var option = options[Math.floor(Math.random()*options.length)];
    document.getElementById("selection").innerHTML=option
    document.getElementById("selection").style.color = '#9E7C0C'
    
};