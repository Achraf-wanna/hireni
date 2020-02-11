let i = 0,
    j = 0;
let jobsArray = [
    "بلومبي",
    "نجار",
    "بناي",
    "رسام",
    "أستاذ التقوية والدعم",
    "تقني معلوماتي",
    "والمزيد من الخدامي"
]

function changeJobs() {
    if(j < jobsArray[i].length){
        document.getElementById("discription").innerHTML += jobsArray[i][j];
    }
    j++;
    if (j > jobsArray[i].length + 5) {
        i++;
        j = 0;
        document.getElementById("discription").innerHTML = "";
        if (i === jobsArray.length) {
            i = 0;
        }
    }
}


setInterval(changeJobs, 100);