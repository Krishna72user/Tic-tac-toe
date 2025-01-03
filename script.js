let count=1;
let one = document.querySelector(".one").innerText;
let two = document.querySelector(".two").innerText;
let three = document.querySelector(".three").innerText;
let four = document.querySelector(".four").innerText;
let five = document.querySelector(".five").innerText;
let six = document.querySelector(".six").innerText;
let seven = document.querySelector(".seven").innerText;
let eight = document.querySelector(".eight").innerText;
let nine = document.querySelector(".nine").innerText;
let xcng = document.querySelector(".x");
let ocng = document.querySelector(".o");
let winner = document.querySelector(".winner");
let ln = document.querySelector(".line");
const x = document.querySelector(".sx");
const o = document.querySelector(".so");
let lcon = document.querySelector(".lcon");
const button = document.getElementById("new");
let w="";
const style = document.createElement('style');
const cont = document.querySelector(".container")
o.addEventListener("click",(e)=>{
    style.append(`@keyframes ani{
        from{
            top: 0vh;
        }
        to{
            top: -100vh;
        }
    } `)
     w="o";
     document.head.append(style);
     ocng.style.backgroundColor="rgb(238, 60, 90)"
     ocng.style.color="white";
    })
x.addEventListener("click",(e)=>{
    style.append(`@keyframes ani{
        from{
            top: 0vh;
        }
        to{
            top: -100vh;
            }
            } `)
            w="x";
            xcng.style.backgroundColor="#00BFFF";
            xcng.style.color="white";
     document.head.append(style);
})
button.addEventListener("click",()=>{
    window.location.reload();
})
cont.addEventListener("click",(e)=>{
    if(( one==two && two == three &&one=="X")||(one==four && four == seven  && four=="X")
        || (one==five && five == nine && five=="X")
        || (two==five && five == eight && five=="X")||(three==six && six == nine &&six=="X")
        || (four==five && five == six&& five=="X")
        || (seven==eight && eight == nine &&eight=="X")
        ||(three==five && five == seven && five=="X")){
        }
    else if(( one==two && two == three &&one=="O")||(one==four && four == seven  && four=="O")
        || (one==five && five == nine && five=="O")
        || (two==five && five == eight && five=="O")||(three==six && six == nine &&six=="O")
        || (four==five && five == six&& five=="O")
        || (seven==eight && eight == nine &&eight=="O")
        ||(three==five && five == seven && five=="O")){
        }
    else if(w=="x"){
        if(count==1|| (count%2!=0) && e.target.innerText==""){
        e.target.innerText=`X`;
        e.target.style.color="#00BFFF";
        xcng.style.backgroundColor="white";
        xcng.style.color="black";
        ocng.style.backgroundColor="rgb(238, 60, 90)"
        ocng.style.color="white";
        count++;
    }
    else if(count%2==0&& e.target.innerText==""){
        e.target.innerText="O"
        e.target.style.color="rgb(238, 60, 90)";
        ocng.style.backgroundColor="white"
        ocng.style.color="black"
        xcng.style.backgroundColor="#00BFFF";
        xcng.style.color="white";
        count++;
        }
        one = document.querySelector(".one").innerText;
        two = document.querySelector(".two").innerText;
        three = document.querySelector(".three").innerText;
        four = document.querySelector(".four").innerText;
        five = document.querySelector(".five").innerText;
        six = document.querySelector(".six").innerText;
        seven = document.querySelector(".seven").innerText;
        eight = document.querySelector(".eight").innerText;
        nine = document.querySelector(".nine").innerText;
        if(( one==two && two == three &&one=="X")||(one==four && four == seven  && four=="X")
        || (one==five && five == nine && five=="X")
        || (two==five && five == eight && five=="X")||(three==six && six == nine &&six=="X")
        || (four==five && five == six&& five=="X")
        || (seven==eight && eight == nine &&eight=="X")
        ||(three==five && five == seven && five=="X")){
        style.append(`@keyframes opa{
            from{
                width:1em;
            }
            to{
                width: 11em;
            }
        }`)
        ln.style.visibility="visible";
        ln.style.border="3px solid #00BFFF"
        ln.style.backgroundColor="#00BFFF"
        winner.innerText="X is the Winner!"
        winner.style.color="#00BFFF";
        button.style.display="block"
        if((one==five && five == nine)){
            ln.style.transform=`rotate(45deg)`
            ln.style.width="20em"
        }
        else if((three==five && five == seven)){
            ln.style.transform=`rotate(135deg)`
            ln.style.width="20em"
        }
        else if((four==five && five == six)){
            ln.style.transform=`rotate(0deg)`
        }
        else if((two==five && five == eight )){
            ln.style.transform=`rotate(90deg)`
        }
        else if((one==two && two == three) && one !=""){
            lcon.style.alignItems="flex-start";
        }
        else if((seven==eight && eight==nine )){
            lcon.style.alignItems="flex-end";
        }
        else if((one==four && four == seven )&& one !=""){
            ln.style.transform=`rotate(90deg) translateY(5.3em)`;
        }
        else if(three==six && six == nine){
            ln.style.transform=`rotate(90deg) translateY(-5.3em)`;
        }
    }
        else if(( one==two && two == three &&one=="O")||(one==four && four == seven  && four=="O")
        || (one==five && five == nine && five=="O")
        || (two==five && five == eight && five=="O")||(three==six && six == nine &&six=="O")
        || (four==five && five == six&& five=="O")
        || (seven==eight && eight == nine &&eight=="O")
        ||(three==five && five == seven && five=="O")){
            style.append(`@keyframes opa{
                from{
                    width:1em;
                }
                to{
                    width: 11em;
                }
            }`)
            button.style.display="block"
            ln.style.visibility="visible";
            ln.style.border="3px solid rgb(238, 60, 90)"
            ln.style.backgroundColor="rgb(238, 60, 90)"
            winner.innerText="O is the Winner!"
            winner.style.color="rgb(238, 60, 90)";
            if((one==five && five == nine)){
                ln.style.transform=`rotate(45deg)`
                ln.style.width="20em"
            }
            else if((three==five && five == seven)){
                ln.style.transform=`rotate(135deg)`
                ln.style.width="20em"
            }
            else if((four==five && five == six)){
                ln.style.transform=`rotate(0deg)`
            }
            else if((two==five && five == eight )){
                ln.style.transform=`rotate(90deg)`
            }
            else if((one==two && two == three) && one !=""){
                lcon.style.alignItems="flex-start";
            }
            else if((seven==eight && eight==nine )){
                lcon.style.alignItems="flex-end";
            }
            else if((one==four && four == seven )&& one !=""){
                ln.style.transform=`rotate(90deg) translateY(5.3em)`;
            }
            else if(three==six && six == nine){
                ln.style.transform=`rotate(90deg) translateY(-5.3em)`;
            }
        }
    }
else{
    if(count==1|| (count%2!=0) && e.target.innerText==""){
        e.target.innerText="O"
        e.target.style.color=`rgb(238, 60, 90)`;
        ocng.style.backgroundColor="white"
        ocng.style.color="black"
        xcng.style.backgroundColor="#00BFFF";
        xcng.style.color="white";
        count++;
    }
    else if(count%2==0&& e.target.innerText==""){
        e.target.innerText=`X`;
        e.target.style.color="#00BFFF";
        xcng.style.backgroundColor="white";
        xcng.style.color="black";
        ocng.style.backgroundColor="rgb(238, 60, 90)"
        ocng.style.color="white";
        count++;
    }
    one = document.querySelector(".one").innerText;
    two = document.querySelector(".two").innerText;
    three = document.querySelector(".three").innerText;
    four = document.querySelector(".four").innerText;
    five = document.querySelector(".five").innerText;
    six = document.querySelector(".six").innerText;
    seven = document.querySelector(".seven").innerText;
    eight = document.querySelector(".eight").innerText;
    nine = document.querySelector(".nine").innerText;
    if(( one==two && two == three &&one=="X")||(one==four && four == seven  && four=="X")
        || (one==five && five == nine && five=="X")
        || (two==five && five == eight && five=="X")||(three==six && six == nine &&six=="X")
        || (four==five && five == six&& five=="X")
        || (seven==eight && eight == nine &&eight=="X")
        ||(three==five && five == seven && five=="X")){
            style.append(`@keyframes opa{
                from{
                    width:1em;
                }
                to{
                    width: 11em;
                }
            }`)
            button.style.display="block"
            ln.style.visibility="visible";
            ln.style.border="3px solid #00BFFF"
            ln.style.backgroundColor="#00BFFF"
            winner.innerText="X is the Winner!"
            winner.style.color="#00BFFF";
            if((one==five && five == nine)){
                ln.style.transform=`rotate(45deg)`
                ln.style.width="20em"
            }
            else if((three==five && five == seven)){
                ln.style.transform=`rotate(135deg)`
                ln.style.width="20em"
            }
            else if((four==five && five == six)){
                ln.style.transform=`rotate(0deg)`
            }
            else if((two==five && five == eight )){
                ln.style.transform=`rotate(90deg)`
            }
            else if((one==two && two == three) && one !=""){
                lcon.style.alignItems="flex-start";
            }
            else if((seven==eight && eight==nine )){
                lcon.style.alignItems="flex-end";
            }
            else if((one==four && four == seven )&& one !=""){
                ln.style.transform=`rotate(90deg) translateY(5.3em)`;
            }
            else if(three==six && six == nine){
                ln.style.transform=`rotate(90deg) translateY(-5.3em)`;
            }
        }

        else if(( one==two && two == three &&one=="O")||(one==four && four == seven  && four=="O")
            || (one==five && five == nine && five=="O")
            || (two==five && five == eight && five=="O")||(three==six && six == nine &&six=="O")
            || (four==five && five == six&& five=="O")
            || (seven==eight && eight == nine &&eight=="O")
            ||(three==five && five == seven && five=="O")){
                style.append(`@keyframes opa{
                    from{
                        width:1em;
                    }
                    to{
                        width: 11em;
                    }
                }`)
                button.style.display="block"
                ln.style.visibility="visible";
                ln.style.border="3px solid rgb(238, 60, 90)"
                ln.style.backgroundColor="rgb(238, 60, 90)"
                winner.innerText="O is the Winner!"
                winner.style.color="rgb(238, 60, 90)";
                if((one==five && five == nine)){
                    ln.style.transform=`rotate(45deg)`
                    ln.style.width="20em"
                }
                else if((three==five && five == seven)){
                    ln.style.transform=`rotate(135deg)`
                    ln.style.width="20em"
                }
                else if((four==five && five == six)){
                    ln.style.transform=`rotate(0deg)`
                }
                else if((two==five && five == eight )){
                    ln.style.transform=`rotate(90deg)`
                }
                else if((one==two && two == three) && one !=""){
                    lcon.style.alignItems="flex-start";
                }
                else if((seven==eight && eight==nine )){
                    lcon.style.alignItems="flex-end";
                }
                else if((one==four && four == seven )&& one !=""){
                    ln.style.transform=`rotate(90deg) translateY(5.3em)`;
                }
                else if(three==six && six == nine){
                    ln.style.transform=`rotate(90deg) translateY(-5.3em)`;
                }
            }
    }
})
