if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_self");
}
/// Thanks to Timothy Huang for this "mobile checker" ^ 

document.addEventListener("DOMContentLoaded", function(){
    let canvas = document.querySelector(".canvas");
    let pole = document.querySelectorAll(".row > div");
    
    let curcolor = 'red';
    let colors = document.querySelectorAll(".select > div");
    let stamps = document.querySelectorAll(".select > img");

    let hexSpace = document.querySelector(".userColors");
    let hexButton = document.querySelector("#hexButton");
    let curColors = 0;

    let error = new Audio('audio/no.mp3');

    let reset = document.querySelector("#reset");

    let vertical = document.querySelector("#vertical");
    let horizontal = document.querySelector("#horizontal");
    let rows = document.querySelectorAll(".row")

    let remVertical = document.querySelector("#rvertical");
    let remHorizontal = document.querySelector("#rhorizontal");

    let canvasWidth = 544;
    let canvasHeight = 544;

    let rowNum = 16;
    let rowAmm = 16;

    let counter = document.querySelector("#counter");
    let count = 0;

    function colorIn(){
        if(curcolor.includes("stamp")){
            switch (curcolor){
                case "stamp1":
                    this.style.backgroundImage = 'url(images/mark.png';
                    break;
                case "stamp2":
                    this.style.backgroundImage = 'url(images/karbo.png';
                    break;
            } 
        }
        else{
            this.style.backgroundColor = curcolor;
            this.style.backgroundImage = '';
        }
    }
    
    document.addEventListener("click", function(){
        audio.play();
        audio.loop = true;
    })

    console.log(colors.length);

    canvas.addEventListener("click",function(){
        count = count + 1;
        counter.innerHTML = count;
    })

    for(var i = pole.length - 1; i >= 0; i--){
        pole[i].addEventListener("click", colorIn);
    }

    stamps[0].addEventListener("click", function(){
        curcolor = "stamp1";
    })

    stamps[1].addEventListener("click", function(){
        curcolor = "stamp2";
    })

    colors[0].addEventListener("click", function(){
        curcolor = "white";
    })

    colors[1].addEventListener("click", function(){
        curcolor = "red";
    })

    colors[2].addEventListener("click", function(){;
        curcolor = "orange";
    })

    colors[3].addEventListener("click", function(){
        curcolor = "yellow";
    })

    colors[4].addEventListener("click", function(){
        curcolor = "lightgreen";
    })

    colors[5].addEventListener("click", function(){
        curcolor = "green";
    })

    colors[6].addEventListener("click", function(){
        curcolor = "aqua";
    })

    colors[7].addEventListener("click", function(){
        curcolor = "blue";
    })

    colors[8].addEventListener("click", function(){
        curcolor = "purple";
    })

    colors[9].addEventListener("click", function(){
        curcolor = "pink";
    })

    colors[10].addEventListener("click", function(){
        curcolor = "brown";
    })

    colors[11].addEventListener("click", function(){
        curcolor = "black";
    })

    colors[12].addEventListener("click", function(){
        curcolor = "grey";
    })

    colors[13].addEventListener("click", function(){
        curcolor = "#AC7C04";
    })

    colors[14].addEventListener("click", function(){
        curcolor = "#FC3404";
    })

    colors[15].addEventListener("click", function(){
        curcolor = "#FCA444";
    })

    colors[16].addEventListener("click", function(){
        curcolor = "#FCCCD4";
    })

    colors[17].addEventListener("click", function(){
        curcolor = "#FC84AC";
    })

    colors[18].addEventListener("click", function(){
        curcolor = "black";
    })

    reset.addEventListener("click", function(){
        for(let i = pole.length - 1; i >= 0; i--){
            pole[i].style.backgroundColor = '';
            pole[i].style.backgroundImage = '';
        }
        count = 0;
        counter.innerHTML = count;
    })

    hexButton.addEventListener("click", function(){
        if(curColors < 13){
            let newColor = document.createElement("div");
            let ColorOf = document.querySelector("#hexValue").value;

            if(ColorOf.length == 7){
                if(/^#[0-9A-F]{6}$/i.test(ColorOf)){
                    hexSpace.appendChild(newColor);

                    newColor.classList.add('snew');
                    newColor.classList.add('newBlock');

                    newColor.style.backgroundColor = ColorOf;

                    newColor.addEventListener("click", function(){
                        curcolor = ColorOf;
                    })

                    curColors++;

                    newColor.addEventListener("contextmenu", function(){
                        event.preventDefault();
                        this.remove();
                        curColors--;
                    })
                }
                else{
                    error.currentTime = 0;
                    error.play();
                }
            }
            else{
                error.currentTime = 0;
                error.play();
            }
        }
        else{
            error.currentTime = 0;
            error.play();
        }
    })

    vertical.addEventListener("click", function(){
        for(let i = rows.length - 1; i >= 0; i--){
            let poleNew = document.createElement("div");
            rows[i].appendChild(poleNew);

            pole = document.querySelectorAll(".row > div");

            poleNew.addEventListener("click", colorIn);
        }
        canvasWidth += 34;
        canvas.style.width = canvasWidth + 'px';
        rowNum++;
    })

    horizontal.addEventListener("click", function(){
        let rowNew = document.createElement("div");

        canvas.appendChild(rowNew);
        rowNew.classList.add('row');

        for(let i = rowNum - 1; i >= 0; i--){
            console.log(i);

            let poleNew = document.createElement("div");
            rowNew.appendChild(poleNew);
            pole = document.querySelectorAll(".row > div");

            poleNew.addEventListener("click", colorIn);
        }
        canvasHeight += 34;
        canvas.style.height = canvasHeight + 'px';
        rows = document.querySelectorAll(".row")
        rowAmm++;
    })

    remVertical.addEventListener("click", function(){
        if(rowNum > 1){
            for(let i = rows.length - 1; i >= 0; i--){
                rows[i].removeChild(rows[i].lastElementChild);
            }
            canvasWidth -= 34;
            canvas.style.width = canvasWidth + 'px';
            rowNum--;
        }
    })

    remHorizontal.addEventListener("click", function(){
        if(rowAmm > 1){
            canvas.removeChild(canvas.lastElementChild)
            canvasHeight -= 34;
            canvas.style.height = canvasHeight + 'px';
            rows = document.querySelectorAll(".row")
            rowAmm--;
        }
    })
})