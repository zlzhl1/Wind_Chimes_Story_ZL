const showData = function () {
    let count = parseInt(localStorage.getItem("count"));
    if (!(count == null || isNaN(count))) {
        tableBody = document.getElementById("table_body");
        tableBody.innerHTML = ""
        for (let index = 1; index <= count; index++) {
            object = JSON.parse(localStorage.getItem(index));
            const node = document.createElement("tr");
            tableBody.appendChild(node)
            for (const key in object) {
                if (Object.hasOwnProperty.call(object, key)) {
                    const td = document.createElement("td");
                    if (key === "time") {
                        td.innerHTML = new Date(object[key]).toLocaleString();
                    } else if (key === "address") {
                        object = object[key];
                        let val = "";
                        for (const key in object) {
                            if (Object.hasOwnProperty.call(object, key)) {
                                val += object[key];
                                val += " "
                            }
                        }
                        td.innerHTML = val;
                    } else {
                        td.innerHTML = object[key];
                    }
                    node.appendChild(td);
                }
            }
        }
    } else {
        clearData();
    }
}

const clearData = function () {
    localStorage.clear();
    emptyHandler();
    tableBody = document.getElementById("table_body").innerHTML = "";
}

const emptyHandler = function () {
    document.getElementById("table").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("empty_handle").style.display = "block";
}

let count = parseInt(localStorage.getItem("count"));
if (count == null || isNaN(count)) {
    emptyHandler();
}