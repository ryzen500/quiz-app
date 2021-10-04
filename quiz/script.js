const soalData= [
    {
    soal:'Berapakah hasil dari soal 1 + 1 ',
    a :'2',
    b :'3',
    c :'4',
    jawaban_benar :'a'
    },

    {
        soal:'bahasa Pemograman yang paling sering digunakan pada tahun 2019 adalah ',
        a:'Java',
        b:'Python',
        c:'PHP',
        jawaban_benar:'a'
    },

    {
        soal:'Apa itu HTML ? ',
        a:'Hyper text Mark up Language ',
        b:'Cassanding sheet style ',
        c:'Structured Query Language',
        jawaban_benar:'a'
    },


    {
        soal:'Apa itu CSS ? ',
        a:'Hyper text Mark up Language ',
        b:'Cassanding sheet style ',
        c:'Structured Query Language',
        jawaban_benar:'b'
    },

    {
        soal:'Apa itu SQL ? ',
        a:'Hyper text Mark up Language ',
        b:'Cassanding sheet style ',
        c:'Structured Query Language',
        jawaban_benar:'c'
    }
];


const banyakjawaban = document.querySelectorAll(".jawaban");
const quiz = document.getElementById("quiz");
    const soalEl = document.getElementById("soal");
    const a_text = document.getElementById("a_text");
    const b_text =document.getElementById("b_text");
    const c_text =document.getElementById("c_text");
    const submitBtn = document.getElementById("submit");


let  Soalsaatini =0;
let score=0;

loadQuiz();


function loadQuiz(){
 deselectJawaban();
    const dataquizdata =soalData[Soalsaatini];
    soalEl.innerText = dataquizdata.soal;

    a_text.innerText =dataquizdata.a;
    b_text.innerText =dataquizdata.b;
    c_text.innerText =dataquizdata.c;

}


function getSelected() { 

    let  jawabann= undefined;

    banyakjawaban.forEach(jawaban => {
        if (jawaban.checked) {
          jawabann = jawaban.id;
        }
    });

    return jawabann;
}


function deselectJawaban(){
    banyakjawaban.forEach(jawaban => {
        jawaban.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
   

    // alert ketika berhasil menyelesaikan kelima soal 

     const jawabans =getSelected();

    if (jawabans) {
        // Jawaban  yang benar 
        if (jawabans === soalData[Soalsaatini].jawaban_benar) {
            score++;
        }
        Soalsaatini++; 
        if (Soalsaatini < soalData.length) {

            loadQuiz();        
        }else{
            // alert("Selamat Anda telah selesai mengisi jawaban semua soal ");
            quiz.innerHTML =`<h1>Selamat Anda  Mendapatkan  Nilai dengan score sebagai  ${score} dari ${soalData.length} yang dibuat</h1>`;
        }    
    }

 

});