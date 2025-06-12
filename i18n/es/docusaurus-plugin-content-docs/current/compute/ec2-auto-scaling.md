---
sidebar_position: 2
---

# AWS EC2 Auto Scaling

## Qué es
Un servicio que ajusta automáticamente el número de instancias EC2 en su aplicación para mantener el rendimiento y la disponibilidad mientras optimiza los costos.

## Para qué sirve
Escalar automáticamente la capacidad de cómputo de su aplicación hacia arriba o hacia abajo según la demanda, asegurando un rendimiento óptimo y eficiencia en costos.

## Casos de uso
- Aplicaciones web con tráfico variable
- Trabajos de procesamiento por lotes
- Aplicaciones con patrones de carga predecibles
- Aplicaciones de alta disponibilidad
- Optimización de costos para cargas de trabajo variables

## Puntos clave
- **Escalado dinámico:** Ajusta automáticamente la capacidad según la demanda
- **Escalado predictivo:** Utiliza aprendizaje automático para predecir patrones de tráfico
- **Escalado programado:** Escala según cambios de carga predecibles
- **Verificaciones de estado:** Reemplaza automáticamente instancias no saludables
- **Múltiples políticas de escalado:** Seguimiento de objetivos, escalado por pasos y escalado simple

## Comparación
- **AWS EC2 Auto Scaling vs. Escalado manual:** Auto Scaling ajusta automáticamente la capacidad según la demanda, reduciendo la sobrecarga operativa y asegurando un rendimiento óptimo. El escalado manual requiere intervención humana para agregar o eliminar instancias, lo que puede llevar a un sobreaprovisionamiento o subaprovisionamiento. Auto Scaling es ideal para aplicaciones con cargas de trabajo variables, mientras que el escalado manual podría ser adecuado para aplicaciones con cargas estables y predecibles. 