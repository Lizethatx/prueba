<!DOCTYPE html>
<html lang="es">
<head>
	<!--http://www.lawebdelprogramador.com-->
	<title>Ejemplo de un simple calendario en JavaScript</title>
	<meta charset="utf-8">
	<style>
		#calendar {
			font-family:Arial;
			font-size:12px;
		}
		#calendar caption {
			text-align:left;
			padding:5px 10px;
			background-color:#003366;
			color:#fff;
			font-weight:bold;
			font-size:medium;
		}
		#calendar caption div:nth-child(1) {float:left;}
		#calendar caption div:nth-child(2) {float:right;}
		#calendar caption div:nth-child(2) a {cursor:pointer;}
		#calendar th {
			background-color:#006699;
			color:#fff;
			width:40px;
		}
		#calendar td {
			text-align:right;
			padding:2px 5px;
			background-color:silver;
		}
		#calendar .hoy {
			background-color:red;
		}
	</style>
</head>
 
<body>
 
<h1>Ejemplo de un simple calendario en JavaScript
<table id="calendar">
	<caption></caption>
	<thead>
		<tr>
			<th>Lun</th><th>Mar</th><th>Mie</th><th>Jue</th><th>Vie</th><th>Sab</th><th>Dom</th>
		</tr>
	</thead>
	<tbody>
	</tbody>
</table>
 
</body>
</html>
 
<script>
var actual=new Date();
function mostrarCalendario(year,month)
{
	var now=new (year,month-1,1)
	var last=new (year,month,0);
	var primerDiaSemana=(now.getDay()==0)?7:now.getDay();
	var ultimoDiaMes=last.getDate();
	var dia=0;
	var resultado="<tr bgcolor='silver'>";
	var diaActual=0;
	console.log(ultimoDia);
 
	var last_cell=primerDiaSemana+ultimoDiaMes;
 
	// hacemos un bucle hasta 42, que es el máximo de valores que puede
	// haber... 6 columnas de 7 dias
	for(var i=1;i<=42;i++)
	{
		if(i==primerDiaSemana)
		{
			// determinamos en que dia empieza
			dia=1;
		}
		if(i<primerDiaSemana || i>=last_cell)
		{
			// celda vacia
			resultado+="<td>&nbsp;</td>";
		}else{
			// mostramos el dia
			if(dia==actual.getDate() && month==actual.getMonth()+1 && year==actual.getFullYear())
				resultado+="<td class='hoy'>"+dia+"</td>";
			else
				resultado+="<td>"+dia+"</td>";
			dia++;
		}
		if(i%7==0)
		{
			if(dia>ultimoDiaMes)
				break;
			resultado+="</tr><tr>\n";
		}
	}
	resultado+="</tr>"
 
... (26 líneas restantes)
