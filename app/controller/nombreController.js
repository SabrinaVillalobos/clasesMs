exports.test = function (req, res) {
    var obj = {
        'nombre': 'Pedrito',
        'edad': '30',
        'pais': 'Chile',
        'ciudad': 'Santiago',
        'color': 'negro'
    }
    res.status(200).send(obj);
    var prueba = req.query.hola
    console.log('en get funcion', prueba)
}

