
// for triangle
document.getElementById('triangle-value').addEventListener('click',function(){
    const base = document.getElementById('base-value');
    const height = document.getElementById('height-value');


    const baseValue = base.value;
    const heightValue = height.value;
    const areaTriangle= 0.5*parseFloat(baseValue)*parseFloat(heightValue);

    document.getElementById('final-output').innerText = areaTriangle;
    document.getElementById('geometric-shape').innerText= 'Triangle';
    
})

