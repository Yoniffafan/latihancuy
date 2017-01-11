// document.getElementById('nigga').innerHTML = "Shinta Bella Mega Cristy";
// var kelas = document.getElementsByClassName('memek');
// kelas[0].innerHTML = "sendirian";
// kelas[1].innerHTML = "di rumah";
// kelas[2].innerHTML = "gaada pacar";
// var tagname = document.getElementsByTagName('title');
// tagname[0].innerHTML = "coba berhasil";
// var el = document.createElement('h2');
// var teks = document.createTextNode('belleossss');
// var div1 = document.getElementsByTagName('center');
//  el.appendChild(teks);
// div1[0].appendChild(el);

// // div1[0].removeChild(el);

// var el2 = document.createElement('h3');
// var teks2 = document.createTextNode('dewani');
// el2.appendChild(teks2);
// var p1 = document.getElementsByTagName('h2');
// div1[0].replaceChild(el2, p1[0]);
// var gambar = document.getElementById('gambargaje');
//
// gambar.className = 'bgs';
//
// var input = document.getElementById('input');
//
// function clicked(){
// input.value = "terklik";
// input.style.backgroundColor = 'green';
//  }
//
//  function enter(){
//  	input.value = "terhover";
//  	input.style.backgroundColor = '#FF0000';
//  }
//
//  function leave(){
//  	input.value = "ditinggalkan";
//  	input.style.backgroundColor = 'blue';
//  }
//
// function press(e){
//   if(e.keyCode == 13){
//     input.style.backgroundColor = 'pink';
//   }
// }
//
//  input.addEventListener('click', clicked);
//  input.addEventListener('mouseenter', enter);
//  input.addEventListener('mouseleave', leave);
//  input.addEventListener('keypress', press(e));
//
//  document.querySelectorAll('#box1')[0].innerHTML = "owlolo"; //id
//  document.querySelectorAll('.box1')[1].innerHTML = "ahmadalbar"; // by class
//  document.querySelectorAll('ul div')[2].innerHTML = "kancrut"; // by tag


//  //Membuat object
//  //cara satu
  var programmer = {
    nama : "memek",
    umur : 19,
    sifat : "ganteng",
  //   //method
  //   getData : function(){ //fungsi getData
  //     return "Nama: " + this.nama + " sifat: " + this.sifat;
  //   },
  //   setData : function(nama){
  //     this.nama = nama;
  //   },
  };

// //cara dua
// var designer = new Object();
// designer.nama = "shinbell";
// designer.umur = "hampir 19";

//object prototype
function yonif_bella(nama, umur){
  this.nama = nama;
  this.umur = umur;
}

var designer = programmer;
designer.nama = "yonif";

var messi = new yonif_bella("Yonif", "bella")
var olive = new yonif_bella("olivia", "bella")
  // // programmer.setData("belleossss");
  // document.getElementById('nama').innerHTML = programmer.getData();

  document.getElementById('nama').innerHTML = programmer.nama;
  document.getElementById('nama2').innerHTML = designer.nama;


  // document.getElementById('umur').innerHTML = designer.umur+"</br>";
  // document.getElementById('sifat').innerHTML = programmer.sifat+"</br>";
