class Termek {
  constructor(elem, adat, index) {
    this.elem = elem;
    this.adat = adat;
    this.adat.index = index;
    this.nev = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");
    this.ar = this.elem.children("span");
    this.kosar = this.elem.children("button");

    this.kosar.on("click", () => {
  
      this.kosarbaTesz(); 

    });

    //console.log(elem);
    this.setAdatok(this.adat);
  }

  setAdatok(ertekek) {
    this.nev.html(ertekek.nev);
    this.kep.attr("src", ertekek.kep);
    this.leiras.html(ertekek.leiras);
    this.ar.html(ertekek.ar);
  }

  kosarbaTesz() {
    let esemeny = new CustomEvent("termeketValaszt", { detail: this.adat });
    
    window.dispatchEvent(esemeny);
  }
}
