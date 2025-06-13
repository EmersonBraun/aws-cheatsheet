---
sidebar_position: 10
---

# Amazon Macie

## Qué es
Un servicio de seguridad de datos que utiliza aprendizaje automático y coincidencia de patrones para descubrir, clasificar y proteger datos sensibles en Amazon S3.

## Para qué sirve
Identificar y alertar sobre la presencia de datos sensibles (por ejemplo, información de identificación personal - PII, credenciales) en tus buckets S3, así como monitorear el acceso a esos datos para detectar riesgos de seguridad.

## Casos de uso
- Descubrimiento de datos sensibles en buckets S3 (por ejemplo, números de tarjetas de crédito, identificaciones nacionales, contraseñas).
- Evaluación de riesgos de seguridad para datos almacenados en S3.
- Monitoreo de acceso a datos sensibles para detectar actividades inusuales.
- Generación de alertas sobre configuraciones de seguridad inadecuadas en buckets S3.
- Ayuda en el cumplimiento de regulaciones de protección de datos (por ejemplo, GDPR, LGPD).

## Puntos clave
- **Descubrimiento de datos sensibles:** Utiliza aprendizaje automático y técnicas de coincidencia de patrones para identificar datos sensibles.
- **Visibilidad:** Proporciona un panel centralizado para visualizar la postura de seguridad de tus datos en S3.
- **Alertas:** Genera alertas detalladas sobre hallazgos de datos sensibles y actividades sospechosas.
- **Totalmente gestionado:** No hay infraestructura que aprovisionar o gestionar.
- **Integración:** Se integra con AWS Security Hub y Amazon EventBridge para la automatización de respuestas.

## Comparativo
- **Amazon Macie:** Especializado en el descubrimiento y protección de datos sensibles en Amazon S3, utilizando aprendizaje automático para identificar patrones de datos complejos.
- **AWS Config:** Monitorea las configuraciones de los recursos AWS para cumplimiento, pero no inspecciona el contenido de los datos almacenados.
- **Herramientas DLP (Prevención de Pérdida de Datos) tradicionales:** Pueden ser complejas de implementar y gestionar en entornos de nube, y pueden no tener la misma integración nativa con S3 que ofrece Macie. 