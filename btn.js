var count = 0
var array = 
[
    [
        ["プロフィール","Profile"],
        ["経歴","Career"],
        ["実績","Track Record"],
        ["ニュース","News"],
        ["連絡先","Mail"],
    ],[
        ["プロフィール","Profile"],
        ["経歴","Career"],
        ["実績","Track Record"],
        ["ニュース","News"],
        ["連絡先","Mail"],
    ]
]


function counter(){
    count += 1;
    if (count%2 == 0){
        onclick(0);
    }else{
        onclick(1);
    }
}
function onclick(count){
    document.getElementById("Ja_En_btn").value = ["English","日本語"][count];
    for(let i=0;i < array.length;i++){
        for(let j=0;j < array[i].length;j++){
            let Str1 = "T_" + String(i) + "_" + String(j);
            document.getElementById(Str1).innerText = array[i][j][count];
        }
    }
}