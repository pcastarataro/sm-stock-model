/**
 * MODELO REPOSICION INSTANTANEA
 * 1. Se administra un único ítem.
 * 2. El producto es de demanda independiente.
 * 3. La demanda es conoc ida y se efectúa a tasa constante.
 * 4. El plazo de entrega (“lead time”) del producto solicitado, es decir el tiempo que transcurre desde que se emite la orden hasta que se recibe el producto, es conocido y constante.
 * 5. La reposición se hace exactamente cuando el nivel de stock es cero es decir no hay stock de protección.
 * 6. El reaprovisionamiento es instantáneo. Esto significa que la tasa de reposición es infinita.
 * 7. El horizonte de planeamiento es de largo plazo.
 * 8. El costo de agotamiento es infinitamente alto es decir, no está permitido el déficit del producto.
 * 9. El costo unitario de adquisición “b”, el costo unitario de almacenamiento “c1” y el costo del pedido “k” son independientes de la cantidad a pedir “q”.
 * 10. No hay restricciones que limiten la decisión a tomar sobre el tamaño del lote.
 * 11. Todos los parámetros monetarios están expresados en moneda constante.
 * 12. El producto en estudio se mide en una unidad continua (litros, kilogramos, etc.). Para cantidades relativamente grandes, esta hipótesis de trabajo no introduce prácticamente error alguno aúnen el caso de que el ítem en cuestión se mida en realidad en unidades discretas.
 */
module.exports = function(D, b, c1, k, LT) {

    let CTE = function(q) {
        return (b * D) + (0.5 * q * c1) + (k * D / q)
    }

    let CTEO = function() {
        return b * D + Math.sqrt(2 * k * D * c1)
    }

    let QO = function() {
        return Math.sqrt(2 * k * D / c1)
    }

    let NO = function() {
        return Math.sqrt(c1 * D / 2 / k)
    }

    let TO = function() {
        return Math.sqrt(2 * k / D / c1)
    }

    let SRO = function() {
        return LT * QO() / TO() 
    }

    return {
        CTEO: CTEO,
        QO:QO,
        NO: NO,
        TO: TO,
        SRO: SRO
    }
}