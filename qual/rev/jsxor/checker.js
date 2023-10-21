let flag = "";
let decrypt = false;
let enc = [
    8, 14, 27,  0,  1,  8, 10,  2, 18, 35, 28, 26,
   29, 54,  8, 54, 17,  6, 27, 54, 30,  0, 29,  1,
   54, 35,  8, 31,  8, 58, 10, 27,  0, 25, 29, 54,
    7,  6, 29,  1,  0,  7, 14, 54,  0,  4, 25,  6,
   27, 29,  8,  7, 29, 54, 17,  6, 27, 54, 11,  8,
   10,  2, 54, 29,  6, 54, 46, 90, 29, 54,  4, 12,
   12, 54, 27, 88, 14,  1, 29, 86, 86, 20
 ]
 

async function jsxor() {
    const urlParams = new URLSearchParams(window.location.search);
    for (const pair of urlParams.entries()) {
        if (pair[0] === "flag"){
            flag = pair[1];
        } else if (pair[0] === "decrypt"){
            decrypt = JSON.parse(pair[1]);
        }
    }

    if (!decrypt) {
        console.log("Okay?? what is that for??")
    } else {
        let dec = [];
        let check = true;
        for (const char of flag) {
            dec.push(char.charCodeAt(0) ^ 0x69);
        }

        for (const e in enc) {
            if (dec.e != enc.e ){
                check = false;
            }
        }

        if (check){
            alert(`Correct brog`);
        } else {
            alert(`Wrong brog`);
        }
    }
    console.log(flag, decrypt);

}

jsxor()