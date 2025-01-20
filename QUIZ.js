var count=0;

const handleClick = () => {

    let ans=[1,4,1,2,2]
    for(let i=0; i<5; i++){
        let op1 = document.getElementById("Q" + (i + 1) + "A" + 1).checked;
        let op2 = document.getElementById("Q" + (i + 1) + "A" + 2).checked;
        let op3 = document.getElementById("Q" + (i + 1) + "A" + 3).checked;
        let op4 = document.getElementById("Q" + (i + 1) + "A" + 4).checked; 
        document.getElementById("Q" + (i + 1) + "A" + 1).disabled=true; 
        document.getElementById("Q" + (i + 1) + "A" + 2).disabled=true; 
        document.getElementById("Q" + (i + 1) + "A" + 3).disabled=true; 
        document.getElementById("Q" + (i + 1) + "A" + 4).disabled=true; 
        let qans=[op1, op2, op3, op4]
       if(qans[ans[i]-1]){
        count++;
       }
    }
    
    document.getElementById("score").innerText = "SCORE = " + count;

}