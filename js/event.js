document.getElementById('ellipse-area').addEventListener('click',function(){
    const inputA = document.getElementById('input-a').value;
    const inputB = document.getElementById('input-b').value;
    const areaEllipse = 3.1416*parseFloat(inputA)*parseFloat(inputB);
    document.getElementById('final-output').value=areaEllipse;

})