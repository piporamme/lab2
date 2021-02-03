let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ :")

document.getElementById("result1").innerHTML= lotto_number
document.getElementById("result").innerHTML= Math.floor(Math.random() * 100)
/*<h1>hello poramme</h1>
    <p>เลขที่คุณซื้อ คือ </p>
    <p id="result1"></p>
    <p>เลขที่ถูกรางวัล คือ</p>
    <p id="result"></p> */
