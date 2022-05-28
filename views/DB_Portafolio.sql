Create database Jhon_Camargo;
Use Jhon_Camargo;
#drop database jhon_camargo;
Create table correo(
	IdCorreo integer auto_increment primary key not null,
	NombrePersona varchar(70) not null,
    RemitenteCorreo varchar(150) not null,
    AsuntoCorreo varchar(110) not null,
    MensajeCorreo text not null,
    FechaCorreo datetime not null
);
select * from correo;