function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Cgsj74n3d/model.json', modelReady);
    
}


function modelReady()
{
    classifier.classify(gotResult);
}

function gotResult(error, results)
{
    if (error) 
    {
    console.error(error);
    } else{
        console.log(results);
     

        document.getElementById("result_label").innerHTML = 'I Can Hear - '+ results[0].label;
        document.getElementById("result-confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
     


            img = document.getElementById('a0');
          
    
            if (results[0].label == "Clap")
            {
                img.src = 'clapping.png';
               
            } else if (results[0].label == "Snap")
            {
                img.src = 'snapping.jpg';
       
            }  else
            {
                img.src = 'keyborad.jpg';
         
      
  
        }
        }
        
    }