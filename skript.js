
//pregledovanje kje smo na Home page 
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

const div = document.querySelectorAll(".home1");
div.forEach(div1 => observer.observe(div1));



//ob kliku na radio gumbe se pojavijo / izginejo pice ki jih želimo izdelat
function showImage(imagename) {
  document.getElementById("napolitana").style.display = "none";
  document.getElementById("romana").style.display = "none";
  document.getElementById("polnozrnata").style.display = "none";
  document.getElementById("foccacia").style.display = "none";
  document.getElementById(imagename).style.display = "flex";
}
//ob kliku na radiogumba se prikaže  željena txt field in labela ali je to kolicina moke ali ali stevilo oseb
function txtShow(textname) {
  document.getElementById("mokaText").value = ""
  document.getElementById("stOsebText").value = ""
  document.getElementById("Moka").style.display = "none";
  document.getElementById("Osebe").style.display = "none";
  document.getElementById(textname).style.display = "block";
}

function izracunaj() {

  let hidracija = 0;
  let kolicinaMoke = 200;
  let kolicinaMokeZapisana;
  let masa;
  let kolicinaVode;
  let stOsebz;
  let izbranaPica
  let kolicinaSoli;
  let kvas;



  if (document.getElementById("napolitanaRadio").checked) {
    hidracija = 0.65;
    izbranaPica = "Napolitana"
  }
  else if (document.getElementById("romanaRadio").checked) {
    hidracija = 0.64;
    izbranaPica = "Romana"
  }
  else if (document.getElementById("polnozrnataRadio").checked) {
    hidracija = 0.85;
    izbranaPica = "Polnozrnata"
  }
  else {
    hidracija = 0.75;
    izbranaPica = "Foccacia"
  }

  if (document.getElementById("mokaRadio").checked) {

    document.getElementById("mokaRadio");
    kolicinaMokeZapisana = document.getElementById("mokaText").value;
    kolicinaMoke = parseFloat(kolicinaMokeZapisana);

  } else {


    stOsebz = parseFloat(document.getElementById("stOsebText").value)

    kolicinaMoke *= stOsebz;
  }
  kolicinaSoli = kolicinaMoke * 0.03;
  kolicinaVode = kolicinaMoke * hidracija;
  kvas = kolicinaMoke * 0.003;
  masa = kolicinaMoke + kolicinaVode + kolicinaSoli + kvas;
  //pregled če so v text fildu le številke ali če je prazen fild
  let regex = /^[0-9]*$/;
  let stOsebZapisano = document.getElementById("stOsebText").value;
  kolicinaMokeZapisana = document.getElementById("mokaText").value;

  if (document.getElementById("mokaText").value === "" && document.getElementById("stOsebText").value === "") {
    alert("ali ste vstavili stevilo oseb/ kolicino moke?");
  } if (!regex.test(stOsebZapisano) || !regex.test(kolicinaMokeZapisana)) {
    alert("vstavite številke");
  }
  else {
    izbranaPicaNode = document.createTextNode(izbranaPica)
    let node = document.createTextNode("skupna kolicina mase: " + masa + "g");
    let node1 = document.createTextNode("kolicina vode: " + kolicinaVode + "g/ml");
    let node2 = document.createTextNode("kolicina moke: " + kolicinaMoke + "g");
    let node3 = document.createTextNode("kolicina soli: " + kolicinaSoli + "g");
    let node4 = document.createTextNode("kolicina kvasa: " + kvas + "g svežega kvasa");
    let hrake = document.createElement("hr");

    let brake = document.createElement("br");
    let brake2 = document.createElement("br");
    let brake3 = document.createElement("br");
    let brake4 = document.createElement("br");
    let brake5 = document.createElement("br");
    let brake6 = document.createElement("br");

    let element = document.getElementById("rezultati");
    element.appendChild(izbranaPicaNode);
    element.appendChild(brake3);
    element.appendChild(brake4);
    element.appendChild(node1);
    element.appendChild(brake2);
    element.appendChild(node2);
    element.appendChild(brake5);
    element.appendChild(node3)
    element.appendChild(brake6);
    element.appendChild(node4);
    element.appendChild(brake);
    element.appendChild(node);
    element.appendChild(hrake);

  }
}
function zbrisiZgodovino() {
  document.getElementById("rezultati").innerHTML = "";
}