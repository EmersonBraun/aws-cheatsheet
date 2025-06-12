---
sidebar_position: 6
---

# Amazon RDS

## Qué es
Un servicio web que facilita la configuración, operación y escalado de bases de datos relacionales en la nube, proporcionando capacidades económicas y redimensionables.

## Para qué sirve
Simplificar la gestión de bases de datos relacionales, permitiendo a los desarrolladores y empresas enfocarse en sus aplicaciones en lugar de tareas administrativas.

## Casos de uso
- Aplicaciones empresariales
- Aplicaciones web y móviles
- Sistemas de comercio electrónico
- Aplicaciones de análisis
- Sistemas de gestión de contenido

## Puntos clave
- **Motor de base de datos:** Soporte para MySQL, PostgreSQL, MariaDB, Oracle y SQL Server
- **Escalabilidad:** Escalado automático de almacenamiento y capacidad
- **Alta disponibilidad:** Replicación automática en múltiples AZs
- **Seguridad:** Encriptación en reposo y en tránsito
- **Backup:** Copias de seguridad automáticas y restauración a un punto en el tiempo

## Comparación
- **Amazon RDS vs. Bases de datos auto-gestionadas:** RDS es un servicio administrado que proporciona alta disponibilidad, escalabilidad y seguridad sin la necesidad de gestionar la infraestructura. Las bases de datos auto-gestionadas ofrecen más control y personalización pero requieren más gestión. RDS es ideal para aplicaciones que necesitan bases de datos relacionales sin la sobrecarga de gestión, mientras que las bases de datos auto-gestionadas son mejores para casos de uso que requieren personalización avanzada o características específicas.

## Principais pontos
- **Motores de banco de dados:** Suporta MySQL, PostgreSQL, Oracle, SQL Server, MariaDB e Amazon Aurora
- **Totalmente gerenciado:** A AWS cuida do provisionamento, patching, backups, recuperação e escalabilidade
- **Escalabilidade:** Permite escalar a capacidade de computação e armazenamento do banco de dados
- **Alta disponibilidade:** Suporta implantações Multi-AZ (Múltiplas Zonas de Disponibilidade) para failover automático
- **Backups automatizados:** Realiza backups automáticos e permite restaurações pontuais
- **Segurança:** Integração com AWS IAM, VPC e criptografia de dados

## Comparativo com Amazon Aurora
- **Amazon RDS:** Um serviço gerenciado que facilita a configuração, operação e escalabilidade de bancos de dados relacionais em várias engines (MySQL, PostgreSQL, Oracle, SQL Server, MariaDB). É uma boa escolha para uma ampla gama de aplicações e oferece mais opções de motores de banco de dados
- **Amazon Aurora:** Um banco de dados relacional otimizado para a nuvem, projetado para alto desempenho e escalabilidade, com compatibilidade com MySQL e PostgreSQL. É uma opção mais avançada e geralmente mais cara que o RDS para os mesmos motores de banco de dados, mas oferece desempenho superior 