$(document).ready(function(){


    const postmessage = function() {
       
        const responses = [
            "Los dioses te otorgan su bendición, pues tu destino se entrelaza con esta posibilidad.", 
            "En la encrucijada del tiempo, una advertencia susurra: medita con prudencia tu pregunta.", 
            "Las estrellas guían tu camino hacia la realización; tus esfuerzos serán recompensados con éxito y abundancia.", 
            "En el intricado laberinto del destino, esta opción no es la senda que te conducirá a la verdad que buscas", 
            "Las fuerzas ocultas advierten que este camino está velado por sombras.",
            "Las sombras del pasado proyectan su influencia en el presente, allí podrás develar tu respuesta.",
            "Seguir esta vía puede desencadenar consecuencias indeseadas; considera otras opciones",
            "Los designios del destino permanecen ocultos; será tu intuición la que te guíe en esta encrucijada insondable."
        ]
        let message = responses[Math.floor(Math.random() * responses.length)];
            
        let div = $("#response");
            
        setTimeout(function() {
            div.text(message);
        }, 1000)

    }
    
    $("#ask").click(postmessage);
  });   