function atvaltas() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myObj = JSON.parse(this.responseText);

            var table = document.createElement("table");
            document.body.appendChild(table);

            var thead = document.createElement("thead");
            table.appendChild(thead);

            var tr_head = document.createElement("tr");
            thead.appendChild(tr_head);

            var th_name = document.createElement("th");
            th_name.textContent = "név:";
            tr_head.appendChild(th_name);

            var th_unit = document.createElement("th");
            th_unit.textContent = "egység:";
            tr_head.appendChild(th_unit);

            var th_value = document.createElement("th");
            th_value.textContent = "érték:";
            tr_head.appendChild(th_value);

            var th_type = document.createElement("th");
            th_type.textContent = "típus:";
            tr_head.appendChild(th_type);



            var tablahozArfolyamok = ["eur", "usd", "gbp", "chf", "czk", "pln"];

            for (var a in myObj.rates) {
                for (var b in tablahozArfolyamok) {
                    if (a == tablahozArfolyamok[b]) {
                        var tr = document.createElement("tr");
                        table.appendChild(tr);

                        var td_name = document.createElement("td");
                        td_name.textContent = myObj.rates[a].name;
                        tr.appendChild(td_name);

                        var td_unit = document.createElement("td");
                        td_unit.textContent = myObj.rates[a].unit;
                        tr.appendChild(td_unit);

                        var td_value = document.createElement("td");
                        td_value.textContent = myObj.rates[a].value;
                        tr.appendChild(td_value);

                        var td_type = document.createElement("td");
                        td_type.textContent = myObj.rates[a].type;
                        tr.appendChild(td_type);
                    }
                }
            }



        }
    }
    xhttp.open("GET", "apiadatok.json", true);
    xhttp.send();


}

