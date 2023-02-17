document.getElementById('triangle-area').addEventListener('click',function(){
    const base = document.getElementById('base-value');
    const height = document.getElementById('height-value');

    const finalValue = document.getElementById('final-output');
    const finalValueString = finalValue.innerText;
    const finalArea = parseFloat(finalValueString);

    const baseValue = base.value;
    const heightValue = height.value;
    const areaTriangle= 0.5*parseFloat(baseValue)*parseFloat(heightValue);

    finalArea.innerText = areaTriangle;
    
})
// document.getElementById('ellipse-area').addEventListener('click',function(){
//     const inputA = document.getElementById('input-a').value;
//     const inputANew =inputA.value;
//     console.log(inputANew); 
//     // const inputB = document.getElementById('input-b').value;
//     // const areaEllipse = 3.1416*parseFloat(inputA)*parseFloat(inputB);
//     // document.getElementById('final-output').value=areaEllipse;

// })
