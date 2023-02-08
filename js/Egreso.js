class Egreso extends Dato{

    static contadorEgresos = 0;
    
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._idIngresos = ++Egreso.contadorEgresos;
    }
    
    get idEgresos(){
        return this._idEgresos;
    }
    
    }