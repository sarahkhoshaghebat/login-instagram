
function myFunction1() {
    let data1 = document.getElementById('inpt1').value;
    let data2 = document.getElementById('inpt2').value;
    try {
        if (data2 === "") {
            throw " this is Empty";
        }
        if (data2 > 12) {
            throw "This password is too big";
        }
        if (data2 < 8) {
            throw "This password is too small";
        }
    }
    catch (err) {
        document.getElementById('inpt3').innerHTML = err;
    }
    finally {
        document.getElementById('inpt3').value = " ";
    }

}
