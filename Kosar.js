class Kosar {
  constructor() {
    this.kosarTomb = [];

    this.elem = $(".kosar");
  }

  setujElem(adat) {
    this.kosarTomb.push(adat);
    this.megjelenit();
  }

  megjelenit() {
    $(".kosar table").html("");

    var txt;

    for (let index = 0; index < this.kosarTomb.length; index++) {
      txt +=
        "<tr><td>" +
        this.kosarTomb[index].nev +
        "</td><td>" +
        this.kosarTomb[index].ar +
        " Ft</td>" +"<td><button type='button' class='torles' id=" +">&#10060;</button></td></tr>";
    }

    $(".kosar table").html(txt);

    var osszeg = 0;
    this.kosarTomb.forEach((elem) => {
      osszeg += elem.ar;
    });

    $(".kosar p").html("Összesen: " + osszeg + " Ft");

    $(".torles").on("click", () => this.torles());
    }

    torles() {
        let aktTermek = $(this).attr("data-id");
        this.kosarTomb.splice(aktTermek, 1);
        this.megjelenit();
    }
  }

