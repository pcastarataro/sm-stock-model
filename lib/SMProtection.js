/**
 * HIPÓTESIS
1. Se administra un único ítem.
2. El producto es de demanda independiente.
3. La demanda es conocida y constante.
4. El plazo de entrega ("lead time ") es conocido y constante.
5. Se mantiene un stock de seguridad, es decir una cantidad de unidades en stock que no se utiliza operativamente sino que, por el contrario, se mantiene únicamente para hacer uso de ella sólo frente a situaciones completamente imprevistas en términos de planeamiento.
6. La reposición es instantánea es decir, la tasa de reaprovisionamiento es infinita.
7. El horizonte de planeamiento es a largo plazo.
8. No se admite agotamiento.
9. Los parámetros de costos son independientes de la cantidad a pedir “q”.
10. No hay restricciones.
11. Todos los parámetros monetarios están expresados en moneda constante.
12. El producto en estudio se mide en una unidad continua (litros, kilogramos, etc.).
 */
module.exports = function(D, b, c1, k, LT, Sp) {
    var CTE = function(q) {
        return (b * D) + (0.5 * q * c1) + (k * D / q) + Sp * c1
    }

    var CTEO = function() {
        return b * D + Math.sqrt(2 * k * D * c1) + Sp * c1
    }

    var QO = function() {
        return Math.sqrt(2 * k * D / c1)
    }

    var NO = function() {
        return Math.sqrt(c1 * D / 2 / k)
    }

    var TO = function() {
        return Math.sqrt(2 * k / D / c1)
    }

    var SRO = function() {
        return LT * QO() / TO() + Sp
    }

    return {
        CTEO: CTEO,
        QO:QO,
        NO: NO,
        TO: TO,
        SRO: SRO
    }
}