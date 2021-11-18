$(function () {
    let fajlnev = "termekek.json";
    const termekek = [];
    const szuloElem = $(".termekek");
    let sablonElem = $(".termek");
    
  
    adatotBeolvas(fajlnev, termekek, aruhaz);
  
    sablonElem.remove();
  
    function adatotBeolvas(fajlnev, tomb, myCallback) {
      $.ajax({
        url: fajlnev,
        success: function (result) {
          result.forEach((elem) => {
            tomb.push(elem);
          });
  
          myCallback();
        },
      });
    }
  
    function aruhaz() {
      console.log(termekek);
      for (let index = 0; index < termekek.length; index++) {
        let ujElem = sablonElem.clone().appendTo(szuloElem);
  
        const ujTermek = new TermekAdmin(ujElem, termekek[index], index);
      }
    }
  
    
  
    $(window).on("termeketValaszt", (event) => {
      kosar.setujElem(event.detail);
      console.log(event.detail);
    });
  

  $(window).on("modosit", (event) => {
    
    console.log("MÓDOSÍTÁS");
    console.log(event.detail);
  });



$(window).on("torol", (event) => {
    console.log("TÖRLÉS");
    console.log(event.detail);
  });
});

  
  