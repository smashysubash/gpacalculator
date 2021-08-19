function compute(){
    var c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0,c10=0;
    var g1=0,g2=0,g3=0,g4=0,g5=0,g6=0,g7=0,g8=0,g9=0,g10=0;
    /*c1=document.getElementById("credit1").Value;
    c2=document.getElementById("credit2").Value;
    c3=document.getElementById("credit3").Value;
    c4=document.getElementById("credit4").Value;
    c5=document.getElementById("credit5").Value;
    c6=document.getElementById("credit6").Value;
    c7=document.getElementById("credit7").Value;
    c8=document.getElementById("credit8").Value;
    c9=document.getElementById("credit9").Value;
    c10=document.getElementById("credit10").Value;
    g1=document.getElementById("grade1").Value;
    g2=document.getElementById("grade2").Value;
    g3=document.getElementById("grade3").Value;
    g4=document.getElementById("grade4").Value;
    g5=document.getElementById("grade5").Value;
    g6=document.getElementById("grade6").Value;
    g7=document.getElementById("grade7").Value;
    g8=document.getElementById("grade8").Value;
    g9=document.getElementById("grade9").Value;
    g10=document.getElementById("grade10").Value;*/
    var cgpa=(c1*g1)+(c2*g2)+(c3*g3)+(c4*g4)+(c5*g5)+(c6*g6)+(c7*g7)+(c8*g8)+(c9*g9)+(c10*g10);
    document.getElementById("result").innerHTML="You have scored <mark>"+c1+"</mark> CGPA";
}