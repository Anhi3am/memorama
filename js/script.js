$(function(){
    vectorImagen= new Array(33);
    var valor1=0;
    var valor2=0;
    var turno=0;
	var score = 0;
	var contador = 0;

    function CargarAleatorio(){	 //load images 1-16 positions
       
        for(i=1;i<17;i++){
            vectorImagen[i]= i+".png";
        }

								//load images 17-32 positions
        var k=1;
        for(i=17;i<33;i++){
            vectorImagen[i]= k+".png";
            k++;
        }

								//image sharing
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

    //we call the function load random
    $("#cargar").on("click",function(){
        CargarAleatorio();
    })

    //hide function
    function ocultar(){
        for(i=1;i<33;i++){
            $("#"+i+"a").attr("src","img/0.png");
        }
    }
    //we call the hide function
    $("#ocultar").on("click",function(){
        ocultar();
    })

    //event function
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

    //we call the event function
    $(".boton").on("click",function(){
        var identificador=$(this).data('id');
        evento(identificador);
    })
});
