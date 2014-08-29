var op =prompt("Escoja el soporte deseado entre el 1 y el 10:"); //Se crea el prompt donde se pide al usuario el soporte que quiere

var a = new Array(22); //Se crea el arreglo para guardar todas las cadenas de texto

a[0]="Rendimiento bajo";/**/
a[1]="Puede estar lento por varias razones. Lo que se recomienda hacer es: ";
a[2]="•	Desfragmentador de disco";
a[3]="•	Pasar el programa CCleaner";
a[4]="•	Pasar un análisis del antivirus";
a[5]="Bloqueos";/**/
a[6]="Sigue algunos pasos de diagnóstico para limpiar el spyware, causante principal de los bloqueos del sistema. Hay programas para evitar los shareware y spy-ware que puedes cargar en tu PC gratuitamente pero se cobra un cargo para descargar las actualizaciones. Los tres programas con mejor reputación son Ad-Aware, Cyber Patrol y Spybot.";
a[7]="No responde o se cuelga";/**/
a[8]="Cuando tu computadora no encuentra un driver actualizado, no responde o se cuelga. Los drivers de hardware se deben actualizar de manera regular. Además eso ayuda a incrementar la memoria RAM virtual de tu computadora. (Ver la sección de recursos).";
a[9]="Pantallas azules o se reinicia sola";/**/
a[10]="Los problemas con el hardware pueden causar problemas en la computadora. Si algunas piezas generadoras de energía se están gastando o si hay piezas defectuosas, pueden ser culpables de estos problemas, un ejemplo pueden ser los ventiladores de refrigeración. Mantén el ventilador limpio y asegúrate de que todos los cables y enchufes estén bien conectados. Si nada de esto funciona, lee el artículo que podrás encontrar en la sección recursos de PANTALLA DE LA MUERTE a continuación.";
a[11]="Chasquidos o vibraciones";/**/
a[12]="Este es otro problema de hardware. Si la computadora hace ruidos como chasquidos, chillidos, soplidos o aullidos, el problema puede provenir de los componentes electrónicos. Quita la tapa de la computadora y deja que la computadora siga funcionando para verificar si puedes encontrar de dónde viene el problema. Para ahorrar algo de dinero puedes hacer las reparaciones tú mismo, pero siempre es mejor llamar a un técnico experto si no te sientes seguro de realizar las reparaciones internas de tu computadora.";
a[13]="El mouse no responde ";/**/
a[14]="Si no aparece el Mouse en la pantalla o tiene problemas de desplazamiento, ve a INICIO , CONFIGURACION , PANEL DE CONTROL , MOUSE. Los indicadores que aparecen a lo largo de la ventana del Mouse te permitirán controlar las funciones del Mouse. Si la configuración está correcta, verifica que el Mouse esté conectado correctamente. También puedes abrir el Mouse y limpiarlo con un copito de algodón y alcohol."; 
a[15]="Muchas de las fallas que encuentras, las puedes solucionar, si no debes acudir a un profesional. No pierdas la esperanza de solucionar tus problemas. También los vendedores de computadoras y equipos periféricos te pueden suministrar asistencia técnica directa o te pueden recomendar centros especializados de reparación de computadoras. ";
a[16]="La computadora se reinicia automáticamente o se apaga";/**/
a[17]="Pueden ser dos. La presencia de un “gusano” (un tipo de virus), o alguna obstrucción ( basura, mala coneccion ) dentro del gabinete o el cooler. Esto último sucede cuando la PC no puede refrescarse: antes de recalentarse, sencillamente se apaga ,Se puede solucionar Si se trata de un virus, correr los antivirus correspondientes. Si el problema es una obstrucción, una buena forma de evitarlo es mantener el interior del gabinete y el cooler limpios, tener la cpu en un lugar ventilado, y evitar su exposición al humo. Si el problema persiste, el problema puede ser la fuente de la PC, por lo que habría que chequear si ésta funciona correctamente o si está bien conectada y verificar la limpieza de dicho comptador ";
a[18]="EL COMPUTADOR PITA A LO QUE INTENTO ENCENDERLO  Y NO ENVÍA VIDEO";/**/
a[19]="Estos problemas se pueden causar por algun movimiento del CPU ya sea que se cambie de lugar o algun moviento de cambio de computador. Se puede causar por estar las memorias saturadas de polvo e impide el correcto funcionamiento de las mismas.";
a[20]="Solución. Este es un problema típico de memoria, se recomienda revisar las memoras que estén bien puestas en los slots del maimboard (Tarjeta Madre). Se recomienda sacar las memorias, limpiar los slots y limpiar las memorias con un limpiador de contactos que estén en el mercado, se las vuelve a poner  las memorias en los slots y el computador te debe enviar video.";
a[21]="Aparecen programas en Windows y se cierran.";/**/
a[22]="El posible que nuestra PC tenga programas mal instalados que no respondan y se deban finalizar. También están los que reinician el inicio. Otra es que no haya archivos de Windows necesarios para restáuralos y están corruptos. Otra causa puede ser la falta de memoria RAM., y esto se soluciona con actualizar los programas, las causas pueden venir de otro lado, como drivers mal instalados. Podrías re-instalar el programa que funciona mal. Si el problema es con Windows sería recomendable formatear para REPARAR WINDOWS, si notamos que el problema puede venir de la memoria RAM, se le puede agregar mayor memoria virtual a la PC y así optimizar su rendimiento. "
a[23]="El modem no responde";
a[24]="Si el módem es interno, revisa que esté fijo en la ranura de expansión. Si es externo, verifica que esté en el puerto correcto. Luego, revise que esté conectado a la línea telefónica y que la línea está en el jack correcto. Luego revisa los prefijos especiales de marcación y deshabilita las llamadas en espera para que no lo desconecten las llamadas que están entrando. Si esto no soluciona el problema, ve a PROPIEDADES DEL SISTEMA / PANEL DE CONTROL y verifica las funciones de las IRQ, líneas de solicitud de interrupción. Puede ser que tu módem está tratando de compartir las IRQ con otro dispositivo. Por último, revisa si hay conflictos de puerto COM. Por ejemplo, si estas usando un Mouse COM 1 y no el Mouse PS/2 que es más común, obviamente el Mouse está ocupando ese puerto que tu módem no puede ocupar. Intenta configurar el módem para el puerto COM 2 o 4.";


document.write("<br><table class='table' id='dev-table'>"); //En esta tabla se colocan los enunciados a tomar en cuenta

document.write("<tr><th>Problema 1</th><th>Problema 2</th><th>Problema 3</th><th>Problema 4</th><th>Problema 5</th></tr>");
document.write("<tr><td> "+a[0]+ "</td><td>"+a[5]+"</td><td>"+a[7]+"</td><td>"+a[9]+"</td><td>"+a[11]+"</td></tr>")
document.write("<tr><th>Problema 6</th><th>Problema 7</th><th>Problema 8</th><th>Problema 9</th><th>Problema 10</th></tr>");
document.write("<tr><td> "+a[13]+ "</td><td>"+a[16]+"</td><td>"+a[18]+"</td><td>"+a[21]+"</td><td>"+a[23]+"</td></tr>")
document.write("</table><br>")

//Se hace los diferentes casos en los que será consultado la información de los problemas

if(op==1){
document.write("<div class='bs-callout bs-callout-info'><h4>"+a[0]+"</h4>"); //Se crea el contenedor de de la respuesta
document.write(a[1]);
document.write("<br>"+a[2]); //Se va imprimiendo cada cadena contenida en un índice del arreglo
document.write("<br>"+a[3]);
document.write("<br>"+a[4]);
document.write("</div>"); //Se cierra el contenedor

}
 else if (op==2){
 	document.write("<div class='bs-callout bs-callout-info'><h4>"+a[5]+"</h4>");
 	document.write("<br><br>"+a[6]);
 	document.write("</div>");
 }
 else if (op==3){
 	document.write("<div class='bs-callout bs-callout-warning'><h4>"+a[7]+"</h4>");
 	document.write("<br><br>"+a[8]);
 	document.write("</div>");
 }
 else if (op==4){
 	document.write("<div class='bs-callout bs-callout-danger'><h4>"+a[9]+"</h4>");
 	document.write("<br><br>"+a[10]);
 	document.write("</div>");
 }
 else if (op==5){
 	document.write("<div class='bs-callout bs-callout-info'><h4>"+a[11]+"</h4>");
 	document.write("<br><br>"+a[12]);
 	document.write("</div>");
 }
 else if (op==6){
 	
 	document.write("<div class='bs-callout bs-callout-warning'><h4>"+a[13]+"</h4>");
 	document.write("<br><br>"+a[14]);
 	document.write(a[15]);
 	document.write("</div>");
 }
 else if (op==7){
 	document.write("<div class='bs-callout bs-callout-danger'><h4>"+a[16]+"</h4>");
 	document.write("<br><br>"+a[17]);
 	document.write("</div>");
 }
 else if (op==8){
 	document.write("<div class='bs-callout bs-callout-info'><h4>"+a[18]+"</h4>");
 	document.write("<br><br>"+a[19]); 
 	document.write(a[20]);
 	document.write("</div>");
 }
 else if (op==9){
 	document.write("<div class='bs-callout bs-callout-warning'><h4>"+a[21]+"</h4>");
 	document.write("<br><br>"+a[22]);
 	document.write("</div>");
 }
 else if (op==10){
 	document.write("<div class='bs-callout bs-callout-danger'><h4>"+a[23]+"</h4>");
 	document.write("<br><br>"+a[24]);
 	document.write("</div>");
 }
 else
 {
 	alert("Opción inválida.") //En caso que no haya algo válido, tira un mensaje de error
 }
