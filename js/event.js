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


// for Rhombus
document.getElementById('rhombus-value').addEventListener('click',function(){

    const base = 16;
    const height = 8;
    const areaRhombus = 0.5*base*height;
    

    const previousFinalOutput = document.getElementById('final-output');
    const finalOutputString = previousFinalOutput.innerText;
    let currentOutput;
    if(finalOutputString ===''){
         currentOutput= areaRhombus;
    }
    else{
         currentOutput= finalOutputString +'\n'+areaRhombus;
    }
    
    previousFinalOutput.innerText = currentOutput;

    const previousGeometry = document.getElementById('geometric-shape').innerText;
    document.getElementById('geometric-shape').innerText= previousGeometry+ ' Rhombus';
    
    document.getElementById('final-output').innerText = previousFinalOutput.innerText;   
})

// for Pentagon
document.getElementById('pentagon-value').addEventListener('click',function(){

    const base = 6;
    const height = 10;
    const areaPentagon = 0.5*base*height;
    

    const previousFinalOutput = document.getElementById('final-output');
    const finalOutputString = previousFinalOutput.innerText;
    let currentOutput;
    if(finalOutputString ===''){
         currentOutput= areaPentagon;
    }
    else{
         currentOutput= finalOutputString +'\n'+areaPentagon;
    }
    
    previousFinalOutput.innerText = currentOutput;

    const previousGeometry = document.getElementById('geometric-shape').innerText;
    document.getElementById('geometric-shape').innerText= previousGeometry+ ' Pentagon';
    
    document.getElementById('final-output').innerText = previousFinalOutput.innerText;   
})

// for Ellipse
document.getElementById('ellipse-value').addEventListener('click',function(){

    const base = 6;
    const height = 10;
    // const areaEllipse = Math.round((3.1416*base*height)*100/100);
    const result = Math.PI*base*height
    const areaEllipse = result.toFixed(2);

    const previousFinalOutput = document.getElementById('final-output');
    const finalOutputString = previousFinalOutput.innerText;
    let currentOutput;
    if(finalOutputString ===''){
         currentOutput= areaEllipse;
    }
    else{
         currentOutput= finalOutputString +'\n'+areaEllipse;
    }
    
    previousFinalOutput.innerText = currentOutput;

    const previousGeometry = document.getElementById('geometric-shape').innerText;
    document.getElementById('geometric-shape').innerText= previousGeometry+ ' Ellipse';
    
    document.getElementById('final-output').innerText = previousFinalOutput.innerText;   
})