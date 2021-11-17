$(function () {
  let fajlnev = "termekek.json";
  const termekek = [];
  const szuloElem = $("article");
  let sablonElem = $(".termek");
  const kosar=new Kosar();

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

      const ujTermek = new Termek(ujElem, termekek[index], index);
    }
  }

  

  $(window).on("termeketValaszt", (event) => {
    kosar.setujElem(event.detail);
    console.log(event.detail);
  });
});
