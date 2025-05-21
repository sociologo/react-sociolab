# react-sociolab

Éste repositorio contiene el código de la página sociolab.cl levantada por medio de Vercel a partir de la página Egator.

https://www.sociolab.cl

https://react-sociolab.vercel.app/

![image](https://github.com/user-attachments/assets/a874229d-4f6e-45f8-8621-36b76b5921be)

npm start

# 🧠 Motor Predictivo de Pobreza Multidimensional Territorial

🎯 Objetivo General (versión extendida y detallada)
“Desarrollar un sistema predictivo automatizado que permita estimar, monitorear y mapear la pobreza multidimensional en unidades territoriales pequeñas (barrios, comunas, zonas censales) combinando fuentes de datos socioeconómicos, geoespaciales y administrativos mediante técnicas de machine learning, con el fin de mejorar la focalización de políticas públicas, optimizar la asignación de recursos sociales y facilitar intervenciones tempranas en territorios vulnerables.”
🔍 Análisis del objetivo
1. ✅ “Sistema predictivo automatizado”
No es solo un mapa o una consulta de datos estáticos: es un motor que aprende patrones y generaliza predicciones sobre zonas no censadas o escasamente caracterizadas.

Puede ejecutarse regularmente (mensual, trimestral, anual) para actualizar las predicciones.

Permite correr escenarios de simulación (por ejemplo: ¿cómo impactaría en la pobreza barrial una mejora en infraestructura?).

2. 🧮 “Estimar, monitorear y mapear la pobreza multidimensional”
➤ Estimar:
A partir de correlatos observables como calidad de la vivienda, escolaridad, imágenes satelitales, acceso a servicios, etc., el sistema puede inferir niveles de pobreza multidimensional sin requerir encuestas directas en todos los territorios.

Ideal para lugares con vacíos de datos, zonas rurales, campamentos o asentamientos informales.

➤ Monitorear:
Al actualizarse con nueva información, permite observar evolución en el tiempo.

Detecta cambios abruptos (gentrificación, migración, impacto de obras públicas, etc.).

➤ Mapear:
Entrega resultados en forma georreferenciada, ideal para dashboards interactivos.

Facilita la toma de decisiones territoriales visuales: “mapas de calor de pobreza”, zonas críticas, clústeres de vulnerabilidad.

3. 🌍 “En unidades territoriales pequeñas”
A diferencia de CASEN o Censo, que entregan datos agregados a nivel regional o comunal, este motor permite predicciones en:

Zonas censales

Barrios

Manzanas

Comunas subdivididas en cuadrantes homogéneos

Esto es clave para políticas hiperfocalizadas (urbanismo, salud, educación, vivienda).

4. 🧩 “Combinando fuentes de datos socioeconómicos, geoespaciales y administrativos”
📊 Socioeconómicos:
CASEN, Censo, encuestas municipales, registros de transferencias (bonos, subsidios, pensiones).

Características como ingreso, empleo, escolaridad, composición del hogar.

🛰️ Geoespaciales:
Imágenes satelitales (NDVI, uso de suelo, densidad, materiales constructivos).

Infraestructura urbana: distancia a salud, educación, transporte.

🏛️ Administrativos:
Registro Social de Hogares.

Datos de salud, escolaridad, SENAME, JUNAEB, etc.

➡️ El valor está en la integración inteligente y automatizada de estas capas diversas.

5. 🧠 “Mediante técnicas de machine learning”
Aplicación de modelos como Random Forest, XGBoost, redes neuronales espaciales, modelos bayesianos jerárquicos, etc.

Selección del mejor modelo según precisión, interpretabilidad y performance geográfica.

Explicabilidad integrada (por ejemplo, SHAP) para que decisores entiendan por qué una zona es clasificada como pobre.

6. 🎯 “Mejorar la focalización de políticas públicas”
Actualmente, los programas sociales se asignan con base en datos desactualizados o agregados.

Este motor permite:

Identificar zonas no cubiertas por programas sociales.

Redirigir recursos hacia territorios más pobres no visibles en datos agregados.

Informar decisiones de planificación urbana, educativa, sanitaria o de transporte.

7. 🛠️ “Optimizar la asignación de recursos sociales”
Mismo presupuesto, pero mejor asignado.

Aplicación en subsidios habitacionales, programas de empleo, alimentación, becas, etc.

Ahorro estatal y mejora en eficiencia de gasto público.

8. ⏱️ “Facilitar intervenciones tempranas en territorios vulnerables”
Detectar signos tempranos de deterioro territorial o surgimiento de pobreza.

Actuar antes de que los problemas se profundicen (por ejemplo: informalidad, deserción, hacinamiento, violencia).



# 🧠 1. Sistema Predictivo de ECNT por Zona Geográfica



Diseñar, desarrollar e implementar un sistema predictivo basado en técnicas de análisis estadístico y aprendizaje automático (machine learning), capaz de estimar y proyectar con alta precisión la prevalencia de enfermedades crónicas no transmisibles (ECNT) —tales como diabetes tipo 2, hipertensión arterial, obesidad y enfermedades cardiovasculares— a nivel territorial en Chile, integrando múltiples fuentes de datos sociales, económicos, demográficos, ambientales y de infraestructura sanitaria, con el fin de apoyar la toma de decisiones informadas en políticas públicas de salud, focalizar intervenciones preventivas, optimizar la asignación de recursos sanitarios y reducir las brechas de desigualdad en salud.

🔍 Desglose detallado de los componentes del objetivo
1. Diseñar, desarrollar e implementar un sistema predictivo
Implica un enfoque integral: desde la concepción del modelo teórico y estadístico hasta su implementación práctica en una plataforma interactiva (ej: dashboard web).

Abarca el desarrollo de algoritmos, visualización de datos y validación empírica con datos reales del sistema de salud chileno.

2. Basado en técnicas estadísticas y de aprendizaje automático
Se fundamenta en modelos de regresión, árboles de decisión, redes neuronales, modelos bayesianos o técnicas ensemble.

El objetivo es capturar relaciones complejas entre los determinantes sociales de la salud y la prevalencia de enfermedades crónicas.

Permite generar tanto estimaciones actuales como proyecciones a futuro (predicción temporal).

3. Capaz de estimar y proyectar prevalencia de ECNT
El sistema debe ser capaz de:

Predecir la probabilidad o tasa de prevalencia por comuna, barrio o zona censal.

Estimar tendencias a mediano y largo plazo (proyecciones).

Comparar zonas territoriales entre sí para identificar focos críticos.

4. A nivel territorial
El enfoque territorial permite incorporar la dimensión espacial de la desigualdad en salud.

La unidad mínima podría ser la comuna, pero idealmente se trabaja con zonas censales o radios urbanos/rurales.

El sistema debe generar resultados georreferenciables (mapas de riesgo sanitario).

5. Integrando múltiples fuentes de datos
Salud: DEIS, Encuesta Nacional de Salud, registros clínicos.

Sociales: CASEN, Censo, Registro Social de Hogares.

Ambientales: contaminación del aire, calidad del entorno urbano.

Infraestructura: densidad y distancia a centros de salud.

6. Con el fin de apoyar la toma de decisiones informadas
El modelo no es solo un ejercicio académico, sino una herramienta práctica de política pública.

Se pone al servicio de tomadores de decisión: municipalidades, servicios de salud, MINSAL, ONGs, organismos internacionales.

7. Focalizar intervenciones preventivas y optimizar recursos
Ejemplos:

Dirigir operativos de control de glicemia o presión arterial a las comunas con mayor riesgo proyectado.

Anticipar demanda futura de medicamentos crónicos.

Decidir dónde construir nuevos CESFAM o aumentar personal médico.

8. Reducir las brechas de desigualdad en salud
La aplicación busca justicia sanitaria territorial, identificando zonas históricamente postergadas con alta vulnerabilidad y riesgo sanitario.

Permite políticas de salud más equitativas y basadas en evidencia.

✍️ Cómo presentarlo en distintos contextos
✅ En una postulación a fondos públicos o internacionales:
“Este sistema busca contribuir a los Objetivos de Desarrollo Sostenible (ODS), particularmente al ODS 3 (Salud y bienestar) y al ODS 10 (Reducción de desigualdades), mediante la creación de una herramienta innovadora que permite predecir y focalizar con precisión los focos de enfermedades crónicas, facilitando una respuesta sanitaria equitativa y eficiente.”

✅ En un portafolio profesional o página web:
“Este modelo predictivo combina sociología, ciencia de datos y salud pública para anticipar el impacto de la desigualdad territorial en la prevalencia de enfermedades crónicas en Chile. Es una herramienta que traduce datos en decisiones de alto impacto.”

✅ En una propuesta comercial:
“Nuestro sistema permite a municipalidades, servicios de salud y organismos públicos anticipar de forma precisa dónde y cómo aumentarán las enfermedades crónicas, optimizando inversiones preventivas, reduciendo el gasto futuro y mejorando la equidad en salud.”






Ideal para intervenciones multisectoriales de municipios o gobiernos regionales.

🧭 En resumen:
Este motor sirve como una brújula inteligente para la acción territorial, cruzando el mundo técnico (datos y ML) con el político-social (redistribución, justicia social, eficiencia estatal).
