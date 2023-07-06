$(document).ready(function(){


    const postmessage = function() {
       
        const responses = [
            "El destino se entreteje en misteriosas formas, y los dioses te instan a explorar esta pregunta con cautela.", 
            "En la encrucijada del tiempo, una advertencia susurra: medita con prudencia tu pregunta.", 
            "El sendero que se despliega ante ti está adornado con desafíos ocultos, pero con tenacidad, hallarás la respuesta que anhelas.", 
            "Las estrellas pintan un lienzo de sorpresas, prepara tu espíritu para recibir tu respuesta.", 
            "La bruma del oráculo revela que debes sintonizar con los latidos de tu corazón y seguir la guía de tus instintos.",
            "Las sombras del pasado proyectan su influencia en el presente, allí podrás desvelar tu respuesta.",
            "Las pruebas del destino aguardan tu valor; enfrenta tus temores y desvelarás los secretos de tu pregunta.",
            "La antigua sabiduría murmura que la paciencia y la constancia son las llaves que desbloquearán las puertas hacia tus respuestas."
        ]
        let message = responses[Math.floor(Math.random() * responses.length)];
            
        let div = $("#response");
            
        setTimeout(function() {
            div.text(message);
        }, 1000)

    }
    
    $("#ask").click(postmessage);
  });   