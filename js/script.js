$(function(){
    vectorImagen= new Array(33);
    var valor1=0;
    var valor2=0;
    var turno=0;
	var score = 0;
	var contador = 0;

    function CargarAleatorio(){	 //carga de imágenes 1-16 posiciones
       
        for(i=1;i<17;i++){
            vectorImagen[i]= i+".png";
        }

								//carga imágenes 17-32 posiciones
        var k=1;
        for(i=17;i<33;i++){
            vectorImagen[i]= k+".png";
            k++;
        }

								//intercambio de imágenes
        var aux=" ";
        for(i=1;i<32;i++){
            var aleatorio=Math.floor((Math.random()*32)+1); //redondear valor
            aux=vectorImagen[i];
            vectorImagen[i]=vectorImagen[aleatorio];
            vectorImagen[aleatorio]=aux;
        }
        for(i=1;i<33;i++){
            $("#"+i+"a").attr("src","img/"+vectorImagen[i]);
        }
    } 

    //llamamos a la función cargar aleatorio
    $("#cargar").on("click",function(){
        CargarAleatorio();
    })

    //función ocultar
    function ocultar(){
        for(i=1;i<33;i++){
            $("#"+i+"a").attr("src","img/0.png");
        }
    }
    //llamamos a la función ocultar
    $("#ocultar").on("click",function(){
        ocultar();
    })

    //función evento
    function evento(identificador){
        if (turno==0) {
            valor1=identificador;
            turno=1;
			contador++;
			$("#"+valor1+"a").attr("src","img/"+vectorImagen[valor1]);
			$("#turno").html(turn);
        }else{
            valor2=identificador;
            turno=0;
             $("#"+valor2+"a").attr("src","img/"+vectorImagen[valor2]);
			 $("#turno").html(contador);
			 

        if(vectorImagen[valor1]==vectorImagen[valor2]){			
           alert('¡Has acertado!');
		   score++;
		   $("#aciertos").html(score);
        }else{
            alert('Diferentes');
             $("#"+valor1+"a").attr("src","img/0.png");
              $("#"+valor2+"a").attr("src","img/0.png");
        }
        }
    }

    //llamar a la función evento
    $(".boton").on("click",function(){
        var identificador=$(this).data('id');
        evento(identificador);
    })
});