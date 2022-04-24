var count = 1
var array = 
[
    [ //T_0
        ["プロフィール","Profile"],
        ["経歴","Career"],
        ["実績","Track Record"],
        ["ニュース","News"],
        ["連絡先","Mail"],
    ],[ //T_1
        ["プロフィール","Profile"],
        ["経歴","Career"],
        ["実績","Track Record"],
        ["ニュース","News"],
        ["連絡先","Mail"],
    ],[  //T_2
        ["所属:静岡大学大学院操業科学技術研究科情報学専攻","Affiliation: Department of Informatics, Graduate School of Operational Science and Technology, Shizuoka University"],
        ["学年:修士一年","Academic Year:Seminary Year"],
        ["配属:狩野研究室","Assignment: Kano Laboratory"],
        ["専門:自然言語処理、機械学習、テキスト分類","Expertise: Natural language processing, machine learning, text classification"],
    ],[  //T_3
        ["2018/03 静岡県立藤枝東高校卒業","2018/03 Graduated from Fujieda Higashi High School in Shizuoka Prefecture"],
        ["2022/04 静岡大学情報学部情報科学科入学","2022/04 Entered Shizuoka University, Faculty of Informatics, Department of Information Science"],
        ["2022/03 静岡大学情報学部情報科学科卒業","2022/03 Graduated from Shizuoka University, Faculty of Informatics, Department of Information Science"],
        ["2022/04 静岡大学大学院総合技術研究科情報学専攻入学","2022/04 Entered Shizuoka University, Graduate School of Integrated Arts and Sciences, Department of Informatics"],
    ],[  //T_4
        ["静岡大学情報学部主席卒業","B.A. in Informatics, Shizuoka University, Shizuoka, Japan"],
        ["国際会議ワークショップ査読付き論文(第一著者1回,第三著者1回)","International conference workshop refereed papers (1st author, 3rd author)"],
        ["国内学会論文","Domestic Society Papers"],
        ["最高レート : 787","Maximum Rate : 787"],
    ],[  //T_5
        ["静岡大学情報学部を首席で卒業し、学長表彰を頂きました。","I graduated at the top of his class from Shizuoka University's Faculty of Informatics and received the President's Commendation."],
        ["言語処理学会第28回年次大会(NLP2022)にて発表しました。","Presented at the 28th Annual Conference of the Association for Natural Language Processing (NLP2022)."],
        ["成績優秀者として表彰され、四年後期の学費が免除されました。","I received an award for outstanding academic achievement and was exempted from paying tuition for the second semester of my fourth year."],
        ["国際会議のワークショップCOLIEE2021にて査読付き論文の発表をしました。"," Presented a peer-reviewed paper at the international conference workshop COLIEE2021."],
        ["成績優秀者として表彰され、三年前期の学費が免除されました。"," I received an award for outstanding academic achievement and was exempted from paying tuition for the first semester of my third year."],
    ],[  //T_6
        ["藤田真伎　ポートフォリオ","Masaki Fujita Portfolio"],
        ["静岡大学大学院総合技術研究科情報学専攻","Department of Informatics, Graduate School of Integrated Arts and Sciences, Shizuoka University"],
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