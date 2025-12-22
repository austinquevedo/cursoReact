-- ============================================
-- MODELO RELACIONAL - SISTEMA DE FICHAS MÉDICAS
-- Base de datos para sistema hospitalario
-- ============================================

-- Eliminar tablas si existen (para recreación)
-- DROP TABLE IF EXISTS detalle_factura CASCADE;
-- DROP TABLE IF EXISTS factura CASCADE;
-- DROP TABLE IF EXISTS poliza_seguro CASCADE;
-- DROP TABLE IF EXISTS seguro_medico CASCADE;
-- DROP TABLE IF EXISTS antecedente_medico CASCADE;
-- DROP TABLE IF EXISTS historial_medico CASCADE;
-- DROP TABLE IF EXISTS cama CASCADE;
-- DROP TABLE IF EXISTS habitacion CASCADE;
-- DROP TABLE IF EXISTS hospitalizacion CASCADE;
-- DROP TABLE IF EXISTS resultado_examen CASCADE;
-- DROP TABLE IF EXISTS laboratorio CASCADE;
-- DROP TABLE IF EXISTS examen CASCADE;
-- DROP TABLE IF EXISTS prescripcion CASCADE;
-- DROP TABLE IF EXISTS medicamento CASCADE;
-- DROP TABLE IF EXISTS tratamiento CASCADE;
-- DROP TABLE IF EXISTS diagnostico CASCADE;
-- DROP TABLE IF EXISTS consulta CASCADE;
-- DROP TABLE IF EXISTS personal_especialidad CASCADE;
-- DROP TABLE IF EXISTS especialidad CASCADE;
-- DROP TABLE IF EXISTS personal_medico CASCADE;
-- DROP TABLE IF EXISTS paciente CASCADE;

-- ============================================
-- TABLAS PRINCIPALES
-- ============================================

-- Tabla: Paciente
CREATE TABLE paciente (
    id SERIAL PRIMARY KEY,
    documento VARCHAR(50) NOT NULL UNIQUE,
    tipo_documento VARCHAR(20) NOT NULL CHECK (tipo_documento IN ('DNI', 'Pasaporte', 'Cédula', 'Otro')),
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    genero VARCHAR(20) CHECK (genero IN ('Masculino', 'Femenino', 'Otro', 'Prefiero no decir')),
    estado_civil VARCHAR(20) CHECK (estado_civil IN ('Soltero', 'Casado', 'Divorciado', 'Viudo', 'Unión libre')),
    telefono VARCHAR(20),
    email VARCHAR(100),
    direccion TEXT,
    ciudad VARCHAR(100),
    codigo_postal VARCHAR(20),
    pais VARCHAR(100) DEFAULT 'Argentina',
    contacto_emergencia VARCHAR(100),
    telefono_emergencia VARCHAR(20),
    relacion_emergencia VARCHAR(50),
    tipo_sangre VARCHAR(5) CHECK (tipo_sangre IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
    alergias TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla: Especialidad
CREATE TABLE especialidad (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    activa BOOLEAN DEFAULT TRUE
);

-- Tabla: Personal Médico
CREATE TABLE personal_medico (
    id SERIAL PRIMARY KEY,
    documento VARCHAR(50) NOT NULL UNIQUE,
    tipo_documento VARCHAR(20) NOT NULL CHECK (tipo_documento IN ('DNI', 'Pasaporte', 'Cédula', 'Otro')),
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100) NOT NULL,
    direccion TEXT,
    numero_matricula VARCHAR(50) NOT NULL UNIQUE,
    especialidad_id INTEGER REFERENCES especialidad(id),
    tipo_personal VARCHAR(20) NOT NULL CHECK (tipo_personal IN ('Medico', 'Enfermero', 'Tecnico', 'Administrativo')),
    fecha_ingreso DATE NOT NULL,
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla: Personal - Especialidad (Muchos a Muchos)
CREATE TABLE personal_especialidad (
    id SERIAL PRIMARY KEY,
    personal_medico_id INTEGER NOT NULL REFERENCES personal_medico(id) ON DELETE CASCADE,
    especialidad_id INTEGER NOT NULL REFERENCES especialidad(id) ON DELETE CASCADE,
    fecha_certificacion DATE,
    activa BOOLEAN DEFAULT TRUE,
    UNIQUE(personal_medico_id, especialidad_id)
);

-- Tabla: Consulta
CREATE TABLE consulta (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL REFERENCES paciente(id) ON DELETE RESTRICT,
    personal_medico_id INTEGER NOT NULL REFERENCES personal_medico(id) ON DELETE RESTRICT,
    especialidad_id INTEGER NOT NULL REFERENCES especialidad(id) ON DELETE RESTRICT,
    fecha_hora TIMESTAMP NOT NULL,
    tipo_consulta VARCHAR(20) NOT NULL CHECK (tipo_consulta IN ('Primera vez', 'Control', 'Urgencia', 'Emergencia', 'Seguimiento')),
    motivo_consulta TEXT NOT NULL,
    sintomas TEXT,
    diagnostico_id INTEGER, -- Referencia circular, se define después
    observaciones TEXT,
    estado VARCHAR(20) NOT NULL DEFAULT 'Programada' CHECK (estado IN ('Programada', 'En curso', 'Completada', 'Cancelada', 'No asistió')),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: Diagnóstico
CREATE TABLE diagnostico (
    id SERIAL PRIMARY KEY,
    codigo_cie10 VARCHAR(20),
    nombre VARCHAR(200) NOT NULL,
    descripcion TEXT,
    tipo VARCHAR(20) CHECK (tipo IN ('Enfermedad', 'Síndrome', 'Lesión', 'Otro')),
    severidad VARCHAR(20) CHECK (severidad IN ('Leve', 'Moderada', 'Grave', 'Crítica')),
    fecha_diagnostico TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    consulta_id INTEGER NOT NULL REFERENCES consulta(id) ON DELETE CASCADE,
    personal_medico_id INTEGER NOT NULL REFERENCES personal_medico(id) ON DELETE RESTRICT,
    activo BOOLEAN DEFAULT TRUE
);

-- Agregar foreign key circular después de crear diagnostico
ALTER TABLE consulta ADD CONSTRAINT fk_consulta_diagnostico 
    FOREIGN KEY (diagnostico_id) REFERENCES diagnostico(id) ON DELETE SET NULL;

-- Tabla: Tratamiento
CREATE TABLE tratamiento (
    id SERIAL PRIMARY KEY,
    consulta_id INTEGER NOT NULL REFERENCES consulta(id) ON DELETE CASCADE,
    diagnostico_id INTEGER REFERENCES diagnostico(id) ON DELETE SET NULL,
    nombre VARCHAR(200) NOT NULL,
    descripcion TEXT,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('Medicamento', 'Terapia', 'Cirugía', 'Fisioterapia', 'Otro')),
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    dosis VARCHAR(100),
    frecuencia VARCHAR(100),
    instrucciones TEXT,
    estado VARCHAR(20) NOT NULL DEFAULT 'Activo' CHECK (estado IN ('Activo', 'Completado', 'Cancelado', 'Suspendido')),
    personal_medico_id INTEGER NOT NULL REFERENCES personal_medico(id) ON DELETE RESTRICT
);

-- Tabla: Medicamento
CREATE TABLE medicamento (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    nombre VARCHAR(200) NOT NULL,
    principio_activo VARCHAR(200),
    laboratorio VARCHAR(100),
    presentacion VARCHAR(100),
    concentracion VARCHAR(50),
    tipo VARCHAR(50) CHECK (tipo IN ('Antibiótico', 'Analgésico', 'Antiinflamatorio', 'Otro')),
    requiere_receta BOOLEAN DEFAULT TRUE,
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla: Prescripción
CREATE TABLE prescripcion (
    id SERIAL PRIMARY KEY,
    tratamiento_id INTEGER NOT NULL REFERENCES tratamiento(id) ON DELETE CASCADE,
    medicamento_id INTEGER NOT NULL REFERENCES medicamento(id) ON DELETE RESTRICT,
    dosis VARCHAR(100) NOT NULL,
    frecuencia VARCHAR(100) NOT NULL,
    duracion INTEGER NOT NULL, -- Días
    cantidad INTEGER NOT NULL,
    instrucciones TEXT,
    fecha_prescripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    estado VARCHAR(20) NOT NULL DEFAULT 'Activa' CHECK (estado IN ('Activa', 'Completada', 'Cancelada'))
);

-- Tabla: Examen
CREATE TABLE examen (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    nombre VARCHAR(200) NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('Laboratorio', 'Imagenología', 'Funcional', 'Patología', 'Otro')),
    descripcion TEXT,
    requiere_ayuno BOOLEAN DEFAULT FALSE,
    instrucciones_pre TEXT,
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla: Laboratorio
CREATE TABLE laboratorio (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    direccion TEXT,
    telefono VARCHAR(20),
    email VARCHAR(100),
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla: Resultado de Examen
CREATE TABLE resultado_examen (
    id SERIAL PRIMARY KEY,
    consulta_id INTEGER NOT NULL REFERENCES consulta(id) ON DELETE CASCADE,
    examen_id INTEGER NOT NULL REFERENCES examen(id) ON DELETE RESTRICT,
    paciente_id INTEGER NOT NULL REFERENCES paciente(id) ON DELETE RESTRICT,
    personal_medico_id INTEGER NOT NULL REFERENCES personal_medico(id) ON DELETE RESTRICT,
    laboratorio_id INTEGER REFERENCES laboratorio(id) ON DELETE SET NULL,
    fecha_orden TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_realizacion TIMESTAMP,
    fecha_resultado TIMESTAMP,
    resultado TEXT,
    valores JSONB, -- Valores numéricos y rangos normales
    interpretacion TEXT,
    archivo_adjunto VARCHAR(500),
    estado VARCHAR(20) NOT NULL DEFAULT 'Ordenado' CHECK (estado IN ('Ordenado', 'En proceso', 'Completado', 'Cancelado'))
);

-- Tabla: Habitación
CREATE TABLE habitacion (
    id SERIAL PRIMARY KEY,
    numero VARCHAR(20) NOT NULL UNIQUE,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('Individual', 'Doble', 'Triple', 'Cuádruple', 'UCI', 'UCC')),
    piso INTEGER NOT NULL,
    sector VARCHAR(100),
    capacidad INTEGER NOT NULL,
    activa BOOLEAN DEFAULT TRUE
);

-- Tabla: Cama
CREATE TABLE cama (
    id SERIAL PRIMARY KEY,
    habitacion_id INTEGER NOT NULL REFERENCES habitacion(id) ON DELETE CASCADE,
    numero VARCHAR(20) NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('Normal', 'UCI', 'UCC', 'Aislamiento')),
    equipamiento JSONB,
    disponible BOOLEAN DEFAULT TRUE,
    activa BOOLEAN DEFAULT TRUE,
    UNIQUE(habitacion_id, numero)
);

-- Tabla: Hospitalización
CREATE TABLE hospitalizacion (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL REFERENCES paciente(id) ON DELETE RESTRICT,
    habitacion_id INTEGER NOT NULL REFERENCES habitacion(id) ON DELETE RESTRICT,
    cama_id INTEGER NOT NULL REFERENCES cama(id) ON DELETE RESTRICT,
    fecha_ingreso TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_alta TIMESTAMP,
    motivo_ingreso TEXT NOT NULL,
    diagnostico_ingreso_id INTEGER REFERENCES diagnostico(id) ON DELETE SET NULL,
    diagnostico_alta_id INTEGER REFERENCES diagnostico(id) ON DELETE SET NULL,
    estado VARCHAR(20) NOT NULL DEFAULT 'Activa' CHECK (estado IN ('Activa', 'Alta médica', 'Alta voluntaria', 'Fallecimiento')),
    observaciones TEXT,
    personal_medico_id INTEGER NOT NULL REFERENCES personal_medico(id) ON DELETE RESTRICT
);

-- Tabla: Antecedente Médico
CREATE TABLE antecedente_medico (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL REFERENCES paciente(id) ON DELETE CASCADE,
    tipo VARCHAR(50) NOT NULL CHECK (tipo IN ('Enfermedad crónica', 'Cirugía previa', 'Alergia', 'Medicamento', 'Familiares', 'Otro')),
    descripcion TEXT NOT NULL,
    fecha_inicio DATE,
    fecha_fin DATE,
    severidad VARCHAR(20) CHECK (severidad IN ('Leve', 'Moderada', 'Grave')),
    tratamiento_actual TEXT,
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla: Historial Médico
CREATE TABLE historial_medico (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL REFERENCES paciente(id) ON DELETE CASCADE,
    tipo_registro VARCHAR(20) NOT NULL CHECK (tipo_registro IN ('Consulta', 'Hospitalización', 'Examen', 'Tratamiento', 'Otro')),
    referencia_id INTEGER NOT NULL, -- ID de la consulta, hospitalización, etc.
    fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    descripcion TEXT NOT NULL,
    personal_medico_id INTEGER REFERENCES personal_medico(id) ON DELETE SET NULL,
    archivos_adjuntos JSONB -- Array de URLs/paths
);

-- Tabla: Seguro Médico
CREATE TABLE seguro_medico (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('Público', 'Privado', 'Mixto')),
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla: Póliza de Seguro
CREATE TABLE poliza_seguro (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL REFERENCES paciente(id) ON DELETE CASCADE,
    seguro_medico_id INTEGER NOT NULL REFERENCES seguro_medico(id) ON DELETE RESTRICT,
    numero_poliza VARCHAR(100) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    cobertura JSONB, -- Detalles de cobertura
    activa BOOLEAN DEFAULT TRUE
);

-- Tabla: Factura
CREATE TABLE factura (
    id SERIAL PRIMARY KEY,
    numero_factura VARCHAR(50) NOT NULL UNIQUE,
    paciente_id INTEGER NOT NULL REFERENCES paciente(id) ON DELETE RESTRICT,
    fecha_emision TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_vencimiento DATE,
    subtotal DECIMAL(10, 2) NOT NULL,
    descuento DECIMAL(10, 2) DEFAULT 0,
    impuesto DECIMAL(10, 2) DEFAULT 0,
    total DECIMAL(10, 2) NOT NULL,
    estado VARCHAR(20) NOT NULL DEFAULT 'Pendiente' CHECK (estado IN ('Pendiente', 'Pagada', 'Vencida', 'Cancelada')),
    metodo_pago VARCHAR(20) CHECK (metodo_pago IN ('Efectivo', 'Tarjeta', 'Transferencia', 'Seguro')),
    fecha_pago TIMESTAMP,
    observaciones TEXT
);

-- Tabla: Detalle de Factura
CREATE TABLE detalle_factura (
    id SERIAL PRIMARY KEY,
    factura_id INTEGER NOT NULL REFERENCES factura(id) ON DELETE CASCADE,
    concepto VARCHAR(200) NOT NULL,
    tipo_concepto VARCHAR(20) NOT NULL CHECK (tipo_concepto IN ('Consulta', 'Examen', 'Medicamento', 'Habitación', 'Otro')),
    referencia_id INTEGER, -- ID de consulta, examen, etc.
    cantidad INTEGER NOT NULL DEFAULT 1,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    descuento DECIMAL(10, 2) DEFAULT 0,
    subtotal DECIMAL(10, 2) NOT NULL
);

-- ============================================
-- AGENDA MÉDICA Y RESERVAS
-- ============================================

-- Tabla: Horario de Atención
CREATE TABLE horario_atencion (
    id SERIAL PRIMARY KEY,
    personal_medico_id INTEGER NOT NULL REFERENCES personal_medico(id) ON DELETE CASCADE,
    dia_semana INTEGER NOT NULL CHECK (dia_semana BETWEEN 1 AND 7), -- 1=Lunes, 7=Domingo
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    duracion_cita INTEGER NOT NULL, -- Duración en minutos (ej: 30, 45, 60)
    intervalo_entre_citas INTEGER DEFAULT 0, -- Minutos entre citas (ej: 5, 10)
    activo BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (hora_fin > hora_inicio),
    UNIQUE(personal_medico_id, dia_semana, hora_inicio)
);

-- Tabla: Excepción de Horario
CREATE TABLE excepcion_horario (
    id SERIAL PRIMARY KEY,
    personal_medico_id INTEGER NOT NULL REFERENCES personal_medico(id) ON DELETE CASCADE,
    tipo VARCHAR(30) NOT NULL CHECK (tipo IN ('Vacaciones', 'Día libre', 'Horario especial', 'Ausencia', 'Capacitación')),
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    hora_inicio TIME, -- Si es horario especial, puede tener horas diferentes
    hora_fin TIME,
    motivo TEXT,
    activa BOOLEAN DEFAULT TRUE,
    CHECK (fecha_fin >= fecha_inicio),
    CHECK ((hora_inicio IS NULL AND hora_fin IS NULL) OR (hora_inicio IS NOT NULL AND hora_fin IS NOT NULL AND hora_fin > hora_inicio))
);

-- Tabla: Bloque de Horario
CREATE TABLE bloque_horario (
    id SERIAL PRIMARY KEY,
    personal_medico_id INTEGER NOT NULL REFERENCES personal_medico(id) ON DELETE RESTRICT,
    especialidad_id INTEGER NOT NULL REFERENCES especialidad(id) ON DELETE RESTRICT,
    fecha DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    disponible BOOLEAN DEFAULT TRUE,
    reservado BOOLEAN DEFAULT FALSE,
    tipo_bloque VARCHAR(20) NOT NULL DEFAULT 'Regular' CHECK (tipo_bloque IN ('Regular', 'Urgencia', 'Emergencia', 'Administrativo')),
    observaciones TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (hora_fin > hora_inicio),
    UNIQUE(personal_medico_id, fecha, hora_inicio)
);

-- Tabla: Reserva/Cita
CREATE TABLE reserva (
    id SERIAL PRIMARY KEY,
    paciente_id INTEGER NOT NULL REFERENCES paciente(id) ON DELETE RESTRICT,
    personal_medico_id INTEGER NOT NULL REFERENCES personal_medico(id) ON DELETE RESTRICT,
    especialidad_id INTEGER NOT NULL REFERENCES especialidad(id) ON DELETE RESTRICT,
    bloque_horario_id INTEGER NOT NULL REFERENCES bloque_horario(id) ON DELETE RESTRICT,
    fecha_hora TIMESTAMP NOT NULL,
    tipo_consulta VARCHAR(20) NOT NULL CHECK (tipo_consulta IN ('Primera vez', 'Control', 'Urgencia', 'Emergencia', 'Seguimiento')),
    motivo_consulta TEXT NOT NULL,
    estado VARCHAR(20) NOT NULL DEFAULT 'Reservada' CHECK (estado IN ('Reservada', 'Confirmada', 'En espera', 'En atención', 'Completada', 'Cancelada', 'No asistió')),
    prioridad VARCHAR(10) CHECK (prioridad IN ('Normal', 'Alta', 'Urgente')),
    recordatorio_enviado BOOLEAN DEFAULT FALSE,
    fecha_recordatorio TIMESTAMP,
    notas TEXT,
    consulta_id INTEGER REFERENCES consulta(id) ON DELETE SET NULL, -- Si se convierte en consulta
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cancelado_por VARCHAR(20) CHECK (cancelado_por IN ('Paciente', 'Médico', 'Sistema', 'Administración')),
    motivo_cancelacion TEXT,
    fecha_cancelacion TIMESTAMP
);

-- Tabla: Configuración de Agenda
CREATE TABLE configuracion_agenda (
    id SERIAL PRIMARY KEY,
    personal_medico_id INTEGER REFERENCES personal_medico(id) ON DELETE CASCADE, -- NULL = configuración global
    anticipacion_minima INTEGER NOT NULL DEFAULT 24, -- Horas mínimas para reservar
    anticipacion_maxima INTEGER NOT NULL DEFAULT 90, -- Días máximos para reservar
    duracion_default INTEGER NOT NULL DEFAULT 30, -- Duración por defecto en minutos
    intervalo_default INTEGER NOT NULL DEFAULT 5, -- Intervalo por defecto entre citas
    permitir_reservas_online BOOLEAN DEFAULT TRUE,
    permitir_cancelacion_online BOOLEAN DEFAULT TRUE,
    horas_cancelacion_permitida INTEGER NOT NULL DEFAULT 24, -- Horas antes de la cita para cancelar
    enviar_recordatorios BOOLEAN DEFAULT TRUE,
    horas_antes_recordatorio INTEGER NOT NULL DEFAULT 24, -- Horas antes de la cita para enviar recordatorio
    activa BOOLEAN DEFAULT TRUE,
    UNIQUE(personal_medico_id) -- Un médico solo puede tener una configuración
);

-- ============================================
-- ÍNDICES PARA OPTIMIZACIÓN
-- ============================================

-- Índices en Paciente
CREATE INDEX idx_paciente_documento ON paciente(documento);
CREATE INDEX idx_paciente_nombre_apellido ON paciente(nombre, apellido);
CREATE INDEX idx_paciente_activo ON paciente(activo);

-- Índices en Consulta
CREATE INDEX idx_consulta_paciente ON consulta(paciente_id);
CREATE INDEX idx_consulta_personal_medico ON consulta(personal_medico_id);
CREATE INDEX idx_consulta_fecha_hora ON consulta(fecha_hora);
CREATE INDEX idx_consulta_estado ON consulta(estado);

-- Índices en Diagnóstico
CREATE INDEX idx_diagnostico_consulta ON diagnostico(consulta_id);
CREATE INDEX idx_diagnostico_codigo_cie10 ON diagnostico(codigo_cie10);

-- Índices en Tratamiento
CREATE INDEX idx_tratamiento_consulta ON tratamiento(consulta_id);
CREATE INDEX idx_tratamiento_estado ON tratamiento(estado);

-- Índices en Resultado Examen
CREATE INDEX idx_resultado_examen_paciente ON resultado_examen(paciente_id);
CREATE INDEX idx_resultado_examen_consulta ON resultado_examen(consulta_id);
CREATE INDEX idx_resultado_examen_estado ON resultado_examen(estado);

-- Índices en Hospitalización
CREATE INDEX idx_hospitalizacion_paciente ON hospitalizacion(paciente_id);
CREATE INDEX idx_hospitalizacion_estado ON hospitalizacion(estado);
CREATE INDEX idx_hospitalizacion_fecha_ingreso ON hospitalizacion(fecha_ingreso);

-- Índices en Cama
CREATE INDEX idx_cama_habitacion ON cama(habitacion_id);
CREATE INDEX idx_cama_disponible ON cama(disponible);

-- Índices en Historial Médico
CREATE INDEX idx_historial_paciente ON historial_medico(paciente_id);
CREATE INDEX idx_historial_fecha ON historial_medico(fecha);

-- Índices en Factura
CREATE INDEX idx_factura_paciente ON factura(paciente_id);
CREATE INDEX idx_factura_numero ON factura(numero_factura);
CREATE INDEX idx_factura_estado ON factura(estado);

-- Índices en Horario Atención
CREATE INDEX idx_horario_atencion_personal ON horario_atencion(personal_medico_id);
CREATE INDEX idx_horario_atencion_dia ON horario_atencion(dia_semana);
CREATE INDEX idx_horario_atencion_activo ON horario_atencion(activo);

-- Índices en Excepción Horario
CREATE INDEX idx_excepcion_horario_personal ON excepcion_horario(personal_medico_id);
CREATE INDEX idx_excepcion_horario_fechas ON excepcion_horario(fecha_inicio, fecha_fin);
CREATE INDEX idx_excepcion_horario_activa ON excepcion_horario(activa);

-- Índices en Bloque Horario
CREATE INDEX idx_bloque_horario_personal ON bloque_horario(personal_medico_id);
CREATE INDEX idx_bloque_horario_fecha ON bloque_horario(fecha);
CREATE INDEX idx_bloque_horario_disponible ON bloque_horario(disponible, reservado);
CREATE INDEX idx_bloque_horario_fecha_hora ON bloque_horario(fecha, hora_inicio);

-- Índices en Reserva
CREATE INDEX idx_reserva_paciente ON reserva(paciente_id);
CREATE INDEX idx_reserva_personal_medico ON reserva(personal_medico_id);
CREATE INDEX idx_reserva_bloque_horario ON reserva(bloque_horario_id);
CREATE INDEX idx_reserva_fecha_hora ON reserva(fecha_hora);
CREATE INDEX idx_reserva_estado ON reserva(estado);
CREATE INDEX idx_reserva_consulta ON reserva(consulta_id);

-- ============================================
-- TRIGGERS PARA ACTUALIZACIÓN AUTOMÁTICA
-- ============================================

-- Trigger para actualizar fecha_actualizacion en Paciente
CREATE OR REPLACE FUNCTION update_paciente_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.fecha_actualizacion = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_paciente
    BEFORE UPDATE ON paciente
    FOR EACH ROW
    EXECUTE FUNCTION update_paciente_timestamp();

-- Trigger para actualizar fecha_actualizacion en Consulta
CREATE OR REPLACE FUNCTION update_consulta_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.fecha_actualizacion = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_consulta
    BEFORE UPDATE ON consulta
    FOR EACH ROW
    EXECUTE FUNCTION update_consulta_timestamp();

-- Trigger para actualizar disponibilidad de cama
CREATE OR REPLACE FUNCTION update_cama_disponibilidad()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.estado = 'Activa' THEN
        UPDATE cama SET disponible = FALSE WHERE id = NEW.cama_id;
    ELSIF NEW.estado IN ('Alta médica', 'Alta voluntaria', 'Fallecimiento') THEN
        UPDATE cama SET disponible = TRUE WHERE id = NEW.cama_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_cama_on_hospitalizacion
    AFTER INSERT OR UPDATE ON hospitalizacion
    FOR EACH ROW
    EXECUTE FUNCTION update_cama_disponibilidad();

-- Trigger para actualizar fecha_actualizacion en Horario Atención
CREATE TRIGGER trigger_update_horario_atencion
    BEFORE UPDATE ON horario_atencion
    FOR EACH ROW
    EXECUTE FUNCTION update_paciente_timestamp(); -- Reutilizamos la función

-- Trigger para actualizar fecha_actualizacion en Reserva
CREATE TRIGGER trigger_update_reserva
    BEFORE UPDATE ON reserva
    FOR EACH ROW
    EXECUTE FUNCTION update_consulta_timestamp(); -- Reutilizamos la función

-- Trigger para actualizar bloque_horario cuando se crea una reserva
CREATE OR REPLACE FUNCTION update_bloque_horario_on_reserva()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.estado IN ('Reservada', 'Confirmada', 'En espera', 'En atención') THEN
        UPDATE bloque_horario 
        SET reservado = TRUE, disponible = FALSE 
        WHERE id = NEW.bloque_horario_id;
    ELSIF NEW.estado IN ('Cancelada', 'No asistió', 'Completada') THEN
        UPDATE bloque_horario 
        SET reservado = FALSE, disponible = TRUE 
        WHERE id = NEW.bloque_horario_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_bloque_on_reserva
    AFTER INSERT OR UPDATE ON reserva
    FOR EACH ROW
    EXECUTE FUNCTION update_bloque_horario_on_reserva();

-- ============================================
-- VISTAS ÚTILES
-- ============================================

-- Vista: Pacientes con última consulta
CREATE OR REPLACE VIEW vista_paciente_ultima_consulta AS
SELECT 
    p.id,
    p.documento,
    p.nombre,
    p.apellido,
    p.telefono,
    p.email,
    MAX(c.fecha_hora) as ultima_consulta,
    COUNT(c.id) as total_consultas
FROM paciente p
LEFT JOIN consulta c ON p.id = c.paciente_id
WHERE p.activo = TRUE
GROUP BY p.id, p.documento, p.nombre, p.apellido, p.telefono, p.email;

-- Vista: Consultas del día
CREATE OR REPLACE VIEW vista_consultas_hoy AS
SELECT 
    c.id,
    c.fecha_hora,
    p.nombre || ' ' || p.apellido as paciente,
    pm.nombre || ' ' || pm.apellido as medico,
    e.nombre as especialidad,
    c.tipo_consulta,
    c.estado
FROM consulta c
JOIN paciente p ON c.paciente_id = p.id
JOIN personal_medico pm ON c.personal_medico_id = pm.id
JOIN especialidad e ON c.especialidad_id = e.id
WHERE DATE(c.fecha_hora) = CURRENT_DATE
ORDER BY c.fecha_hora;

-- Vista: Hospitalizaciones activas
CREATE OR REPLACE VIEW vista_hospitalizaciones_activas AS
SELECT 
    h.id,
    p.nombre || ' ' || p.apellido as paciente,
    hab.numero as habitacion,
    c.numero as cama,
    h.fecha_ingreso,
    h.motivo_ingreso,
    pm.nombre || ' ' || pm.apellido as medico_responsable
FROM hospitalizacion h
JOIN paciente p ON h.paciente_id = p.id
JOIN habitacion hab ON h.habitacion_id = hab.id
JOIN cama c ON h.cama_id = c.id
JOIN personal_medico pm ON h.personal_medico_id = pm.id
WHERE h.estado = 'Activa';

-- Vista: Reservas del día
CREATE OR REPLACE VIEW vista_reservas_hoy AS
SELECT 
    r.id,
    r.fecha_hora,
    p.nombre || ' ' || p.apellido as paciente,
    p.telefono,
    pm.nombre || ' ' || pm.apellido as medico,
    e.nombre as especialidad,
    r.tipo_consulta,
    r.estado,
    r.prioridad,
    r.motivo_consulta
FROM reserva r
JOIN paciente p ON r.paciente_id = p.id
JOIN personal_medico pm ON r.personal_medico_id = pm.id
JOIN especialidad e ON r.especialidad_id = e.id
WHERE DATE(r.fecha_hora) = CURRENT_DATE
ORDER BY r.fecha_hora, r.prioridad DESC NULLS LAST;

-- Vista: Disponibilidad de médicos
CREATE OR REPLACE VIEW vista_disponibilidad_medicos AS
SELECT 
    pm.id as medico_id,
    pm.nombre || ' ' || pm.apellido as medico,
    e.nombre as especialidad,
    ha.dia_semana,
    CASE ha.dia_semana
        WHEN 1 THEN 'Lunes'
        WHEN 2 THEN 'Martes'
        WHEN 3 THEN 'Miércoles'
        WHEN 4 THEN 'Jueves'
        WHEN 5 THEN 'Viernes'
        WHEN 6 THEN 'Sábado'
        WHEN 7 THEN 'Domingo'
    END as dia_nombre,
    ha.hora_inicio,
    ha.hora_fin,
    ha.duracion_cita,
    COUNT(bh.id) FILTER (WHERE bh.disponible = TRUE AND bh.fecha >= CURRENT_DATE) as bloques_disponibles
FROM personal_medico pm
JOIN especialidad e ON pm.especialidad_id = e.id
LEFT JOIN horario_atencion ha ON pm.id = ha.personal_medico_id AND ha.activo = TRUE
LEFT JOIN bloque_horario bh ON pm.id = bh.personal_medico_id AND bh.disponible = TRUE
WHERE pm.activo = TRUE AND pm.tipo_personal = 'Medico'
GROUP BY pm.id, pm.nombre, pm.apellido, e.nombre, ha.dia_semana, ha.hora_inicio, ha.hora_fin, ha.duracion_cita
ORDER BY pm.nombre, ha.dia_semana, ha.hora_inicio;

-- Vista: Próximas reservas del paciente
CREATE OR REPLACE VIEW vista_proximas_reservas_paciente AS
SELECT 
    r.id,
    r.fecha_hora,
    pm.nombre || ' ' || pm.apellido as medico,
    e.nombre as especialidad,
    r.tipo_consulta,
    r.motivo_consulta,
    r.estado,
    r.recordatorio_enviado,
    CASE 
        WHEN r.fecha_hora < CURRENT_TIMESTAMP THEN 'Pasada'
        WHEN r.fecha_hora::date = CURRENT_DATE THEN 'Hoy'
        WHEN r.fecha_hora::date = CURRENT_DATE + INTERVAL '1 day' THEN 'Mañana'
        ELSE 'Futura'
    END as proximidad
FROM reserva r
JOIN personal_medico pm ON r.personal_medico_id = pm.id
JOIN especialidad e ON r.especialidad_id = e.id
WHERE r.estado IN ('Reservada', 'Confirmada', 'En espera')
ORDER BY r.fecha_hora;

