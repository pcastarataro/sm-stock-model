/**
 * HIPÓTESIS
1. Se administra un único producto terminado.
2. El producto es de demanda independiente.
3. La demanda es conocida y constante.
4. El plazo de entrega ("lead time ") es conocido y constante.
5. La reposición es no instantánea es decir, la tasa de reaprovisionamiento es finita. El abastecimiento del producto se efectúa durante un período de tiempo t1p durante el cual el ingreso se hace a una tasa “p” y el egreso a una tasa “d”. Una vez finalizado el aprovisionamiento de ese ciclo, habrá solamente egreso de mercadería a la tasa de demanda “d” durante el período t1d.
6. El horizonte de planeamiento es a largo plazo.
7. El agotamiento no está permitido.
8. No hay restricciones.
9. Todos los parámetros monetarios están expresados en moneda constante.
10. El producto en estudio se mide en una unidad continua (litros, kilogramos, etc.).
11. No hay stock de protección.
 */
module.exports = function(D, d, p, b, c1, k, LT) {

    let CTEO = function() {
        return b * D + Math.sqrt(2 * k * D * c1 * (1 - d / p))
    }

    let QO = function() {
        return Math.sqrt(2 * k * D / c1 / (1 - d / p))
    }

    let NO = function() {
        return D / QO()
    }

    let SO = function() {
        return QO() * (1- d / p)
    }

    let TO = function() {
        return QO() / D
    }

    let T1p = function() {
        return QO() / p
    }

    let SRO = function() {
        if(LT <= TO() - T1p()) {
            return LT * d
        }
        else {
            return (TO() - LT) * (p - d)
        }
    }

    return {
        CTEO: CTEO,
        QO:QO,
        NO: NO,
        SO: SO,
        TO: TO,
        SRO: SRO
    }
    
}