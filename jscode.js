function compute(){
    var c1 = document.getElementById("credit1").value;
    var c2 = document.getElementById("credit2").value;
    var c3 = document.getElementById("credit3").value;
    var c4 = document.getElementById("credit4").value;
    var c5 = document.getElementById("credit5").value;
    var c6 = document.getElementById("credit6").value;
    var c7 = document.getElementById("credit7").value;
    var c8 = document.getElementById("credit8").value;
    var c9 = document.getElementById("credit9").value;
    var c10 = document.getElementById("credit10").value;
    var g1 = document.getElementById("grade1").value;
    var g2 = document.getElementById("grade2").value;
    var g3 = document.getElementById("grade3").value;
    var g4 = document.getElementById("grade4").value;
    var g5 = document.getElementById("grade5").value;
    var g6 = document.getElementById("grade6").value;
    var g7 = document.getElementById("grade7").value;
    var g8 = document.getElementById("grade8").value;
    var g9 = document.getElementById("grade9").value;
    var g10 = document.getElementById("grade10").value;
    if (c1=="") c1=0;
    if (c2=="") c2=0;
    if (c3=="") c3=0;
    if (c4=="") c4=0;
    if (c5=="") c5=0;
    if (c6=="") c6=0;
    if (c7=="") c7=0;
    if (c8=="") c8=0;
    if (c9=="") c9=0;
    if (c10=="") c10=0;
    if (g1=="") g1=0;
    if (g2=="") g2=0;
    if (g3=="") g3=0;
    if (g4=="") g4=0;
    if (g5=="") g5=0;
    if (g6=="") g6=0;
    if (g7=="") g7=0;
    if (g8=="") g8=0;
    if (g9=="") g9=0; 
    if (g10=="") g10=0;
    var points = (c1*g1)+(c2*g2)+(c3*g3)+(c4*g4)+(c5*g5)+(c6*g6)+(c7*g7)+(c8*g8)+(c9*g9)+(c10*g10);
    var credits =parseFloat(c1)+parseFloat(c2)+parseFloat(c3)+parseFloat(c4)+parseFloat(c5)+parseFloat(c6)+parseFloat(c7)+parseFloat(c8)+parseFloat(c9)+parseFloat(c10);
    var cgpa = points/credits;
    cgpa = cgpa.toFixed(2);
    if(cgpa=="NaN"){
        alert("Enter enough values");
    }else{
    document.getElementById("result").innerHTML="You have scored <mark>"+cgpa+" </mark> CGPA ";
    }
}