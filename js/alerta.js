var alertaFlotante = (titulo, texto, colorBoton, imagen) => {
    swal.fire({
        title: `${titulo}`,
        text: `${texto}`,
        confirmButtonText: 'Ok, entendí',
        confirmButtonColor: `${colorBoton}`,
        imageUrl: `${imagen}`,
        imageWidth: "auto",
        imageHeight: 135,
        timer: 5090,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
    });
}
var alertaFlotanteConRedirecion = (titulo, texto, colorBoton, imagen, direccion) => {
    swal.fire({
        title: `${titulo}`,
        text: `${texto}`,
        confirmButtonText: 'Ok, entendí',
        confirmButtonColor: `${colorBoton}`,
        imageUrl: `${imagen}`,
        imageWidth: "auto",
        imageHeight: 135,
        timer: 5090,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
    }).then((result)=>{
        if(result.isConfirmed){
            location.href = `${direccion}`;
        }
    });
    // Redirecionar
    setInterval( ()=> {
        location.href = `${direccion}`;
    }, 5100);
}