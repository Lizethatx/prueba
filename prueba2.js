<html>
<head>
<title>Pagina 02</title>

<script language="javascript">
<!--
function Subir()
{
	var formulario="";
	var usuario=document.form1.usuario.value;
	var nombre=document.form1.nombre.value;
	var apellido=document.form1.apellido.value;
	var email=document.form1.email.value;
	var clave1=document.form1.clave1.value;
	var clave2=document.form1.clave2.value;
	var hobbies="";
	var b=document.form1.hobby.length;
	for(a=0;a<b;a++)
	{
	if (document.form1.hobby[a].checked)
		hobbies+=document.form1.hobby[a].value + ", ";
	}
	var pais=document.form1.pais.value;
	var sexo=document.form1.sexo.value;
	if (usuario=="" || nombre=="" || apellido=="" || pais=="" )
	{
		alert("Los campos con asterisco son obligatorios!!!");
		return false;
	}
	if (hobbies.length==0)
	{
		alert("Debes seleccionar al menos un hobby!!");
		return false;
	}
	if ((clave1!=clave2) || (clave1==""))
	{
		alert("Las claves deben ser iguales y no pueden ser en blanco!!!");
		return false;
	}
	if (email=="") email="No informado";
	if (sexo=="") sexo="No informado";
	formulario="Usuario: " + usuario + "\nNombre: " + nombre + "\nApellido: " + apellido + "\n"
		 + "E-mail: " + email + "\nClave: " + clave1  + "\nHobbies: " + hobbies + "\nPais: "
		+ pais + "\nSexo: " + sexo;
	alert(formulario);	
}

//-->
</script>

</head>
<body>
<form name="form1" method="POST" action="">
<table border="0" cellpadding="0" cellspacing="0" width="400">
<tr>
	<td width="50%">Ingresa el usuario: (*)</td>
	<td width="50%"><input type="text" name="usuario" id="usuario" value=""></td>
</tr>
<tr>
	<td width="50%">Ingresa el nombre: (*)</td>
	<td><input type="text" name="nombre" id="nombre" value=""></td>
</tr>
<tr>
	<td width="50%">Ingresa el apellido: (*)</td>
	<td><input type="text" name="apellido" id="apellido" value=""></td>
</tr>
<tr>
	<td width="50%">Ingresa el correo electronico:</td>
	<td width="50%"><input type="text" name="email" id="email" value=""></td>
</tr>
<tr>
	<td width="50%">Ingresa una password: (*)</td>
	<td width="50%"><input type="password" name="clave1" id="clave1" value=""></td>
</tr>
<tr>
	<td width="50%">Repite la password: (*)</td>
	<td width="50%"><input type="password" name="clave2" id="clave2" value=""></td>
</tr>
<tr>
	<td width="50%" align="left" valign="top">Seleccione sus hobbies: (*)</td>
	<td width="50%">
	<input type="checkbox" name="hobby" value="programar">Programar&nbsp;
	<input type="checkbox" name="hobby" value="deportes">Deportes<br>
	<input type="checkbox" name="hobby" value="meditar">Meditar&nbsp;
	<input type="checkbox" name="hobby" value="cine">Cine<br>
	<input type="checkbox" name="hobby" value="leer">Leer&nbsp;
	<input type="checkbox" name="hobby" value="videojuegos">Video Juegos<br>
	</td>
</tr>
<tr>
	<td width="50%">Pais: (*)</td>
	<td width="50%">
	<select name="pais" id="pais">
		<option value="">--</option>
		<option value="argentina">Argentina</option>
		<option value="brasil">Brasil</option>
		<option value="chile">Chile</option>
		<option value="colombia">Colombia</option>
		<option value="ecuador">Ecuador</option>
	</select>
