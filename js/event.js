// let finalOutput;
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

//for rectangle
document.getElementById('rectangle-value').addEventListener('click',function(){
    const width = document.getElementById('width-value');
    const height = document.getElementById('height-value');


    const widthValue = width.value;
    const heightValue = height.value;
    const areaRectangle= parseFloat(widthValue)*parseFloat(heightValue);

    const previousFinalOutput = document.getElementById('final-output');
    const finalOutputString = previousFinalOutput.innerText;
    const currentOutput= finalOutputString +'\n'+areaRectangle;
    previousFinalOutput.innerText = currentOutput;

    const previousGeometry = document.getElementById('geometric-shape').innerText;
    document.getElementById('geometric-shape').innerText= previousGeometry+ ' Rectangle';
    

    document.getElementById('final-output').innerText = previousFinalOutput.innerText;

    
})

// for parallelogram
document.getElementById('parallelogram-value').addEventListener('click',function(){

    const base = 10;
    const height = 12;
    const areaParallelogram = base*height;
    

    const previousFinalOutput = document.getElementById('final-output');
    const finalOutputString = previousFinalOutput.innerText;
    let currentOutput;
    if(finalOutputString ===''){
         currentOutput= areaParallelogram;
    }
    else{
         currentOutput= finalOutputString +'\n'+areaParallelogram;
    }
    
    previousFinalOutput.innerText = currentOutput;

    const previousGeometry = document.getElementById('geometric-shape').innerText;
    document.getElementById('geometric-shape').innerText= previousGeometry+ ' Parallelogram';
    
    document.getElementById('final-output').innerText = previousFinalOutput.innerText;

    
})
