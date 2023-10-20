const saveData = function () {
    if (document.getElementById("name").value == "" || document.getElementById("phone").value == ""
        || document.getElementById("email").value == "" || document.getElementById("message").value == ""
        || document.getElementById("area").value == "" || document.getElementById("city").value == ""
        || document.getElementById("state").value == "" || document.getElementById("post_code").value == ""){
        alert("Please fill all of the form!");
        return false;
    }
    let count = parseInt(localStorage.getItem("count"));
    if (count == null || isNaN(count)) {
        count = 1;
        localStorage.setItem("count", count);
    } else {
        count = count + 1;
        localStorage.setItem("count", count);
    }
    localStorage.setItem(count, JSON.stringify({
        time: Number(new Date()),
        full_name: document.getElementById("name").value,
        phone_number: document.getElementById("phone").value,
        email_address: document.getElementById("email").value,
        message: document.getElementById("message").value,
        address: {
            area: document.getElementById("area").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            post_code: document.getElementById("post_code").value,
        }
    }));
    alert("Submitted Successfully\nYou can go to the for more detail information.");
    return true;
}