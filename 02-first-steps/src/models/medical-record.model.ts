/**
 * Modelo Relacional - Sistema de Fichas Médicas de Hospital
 * 
 * Este archivo contiene las interfaces TypeScript que representan
 * las entidades del modelo relacional de base de datos.
 */

// ============================================
// ENTIDADES PRINCIPALES
// ============================================

/**
 * Paciente - Información básica del paciente
 */
export interface Paciente {
  id: number;
  documento: string; // DNI, Pasaporte, etc. (único)
  tipoDocumento: 'DNI' | 'Pasaporte' | 'Cédula' | 'Otro';
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  genero: 'Masculino' | 'Femenino' | 'Otro' | 'Prefiero no decir';
  estadoCivil: 'Soltero' | 'Casado' | 'Divorciado' | 'Viudo' | 'Unión libre';
  telefono: string;
  email?: string;
  direccion: string;
  ciudad: string;
  codigoPostal?: string;
  pais: string;
  contactoEmergencia?: string;
  telefonoEmergencia?: string;
  relacionEmergencia?: string;
  tipoSangre?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  alergias?: string;
  fechaCreacion: Date;
  fechaActualizacion: Date;
  activo: boolean;
}

/**
 * Personal Médico - Médicos, enfermeros, especialistas
 */
export interface PersonalMedico {
  id: number;
  documento: string;
  tipoDocumento: 'DNI' | 'Pasaporte' | 'Cédula' | 'Otro';
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  telefono: string;
  email: string;
  direccion: string;
  numeroMatricula: string; // Número de matrícula profesional
  especialidadId: number;
  tipoPersonal: 'Medico' | 'Enfermero' | 'Tecnico' | 'Administrativo';
  fechaIngreso: Date;
  activo: boolean;
}

/**
 * Especialidad Médica
 */
export interface Especialidad {
  id: number;
  codigo: string; // Código único de la especialidad
  nombre: string; // Ej: Cardiología, Pediatría, etc.
  descripcion?: string;
  activa: boolean;
}

/**
 * Consulta/Cita Médica
 */
export interface Consulta {
  id: number;
  pacienteId: number;
  personalMedicoId: number;
  especialidadId: number;
  fechaHora: Date;
  tipoConsulta: 'Primera vez' | 'Control' | 'Urgencia' | 'Emergencia' | 'Seguimiento';
  motivoConsulta: string;
  sintomas?: string;
  diagnosticoId?: number; // Relación con diagnóstico
  observaciones?: string;
  estado: 'Programada' | 'En curso' | 'Completada' | 'Cancelada' | 'No asistió';
  fechaCreacion: Date;
  fechaActualizacion: Date;
}

/**
 * Diagnóstico
 */
export interface Diagnostico {
  id: number;
  codigoCIE10?: string; // Código de clasificación internacional
  nombre: string;
  descripcion: string;
  tipo: 'Enfermedad' | 'Síndrome' | 'Lesión' | 'Otro';
  severidad?: 'Leve' | 'Moderada' | 'Grave' | 'Crítica';
  fechaDiagnostico: Date;
  consultaId: number;
  personalMedicoId: number;
  activo: boolean;
}

/**
 * Tratamiento
 */
export interface Tratamiento {
  id: number;
  consultaId: number;
  diagnosticoId?: number;
  nombre: string;
  descripcion: string;
  tipo: 'Medicamento' | 'Terapia' | 'Cirugía' | 'Fisioterapia' | 'Otro';
  fechaInicio: Date;
  fechaFin?: Date;
  dosis?: string;
  frecuencia?: string;
  instrucciones?: string;
  estado: 'Activo' | 'Completado' | 'Cancelado' | 'Suspendido';
  personalMedicoId: number;
}

/**
 * Medicamento
 */
export interface Medicamento {
  id: number;
  codigo: string; // Código único del medicamento
  nombre: string;
  principioActivo: string;
  laboratorio: string;
  presentacion: string; // Tabletas, jarabe, inyección, etc.
  concentracion: string; // Ej: 500mg, 10ml
  tipo: 'Antibiótico' | 'Analgésico' | 'Antiinflamatorio' | 'Otro';
  requiereReceta: boolean;
  activo: boolean;
}

/**
 * Prescripción de Medicamento
 */
export interface Prescripcion {
  id: number;
  tratamientoId: number;
  medicamentoId: number;
  dosis: string;
  frecuencia: string; // Ej: "Cada 8 horas", "2 veces al día"
  duracion: number; // Días de tratamiento
  cantidad: number;
  instrucciones?: string;
  fechaPrescripcion: Date;
  fechaInicio: Date;
  fechaFin?: Date;
  estado: 'Activa' | 'Completada' | 'Cancelada';
}

/**
 * Examen/Prueba Médica
 */
export interface Examen {
  id: number;
  codigo: string; // Código único del examen
  nombre: string;
  tipo: 'Laboratorio' | 'Imagenología' | 'Funcional' | 'Patología' | 'Otro';
  descripcion?: string;
  requiereAyuno?: boolean;
  instruccionesPre?: string;
  activo: boolean;
}

/**
 * Resultado de Examen
 */
export interface ResultadoExamen {
  id: number;
  consultaId: number;
  examenId: number;
  pacienteId: number;
  personalMedicoId: number; // Quien ordena el examen
  fechaOrden: Date;
  fechaRealizacion?: Date;
  fechaResultado?: Date;
  resultado?: string; // Resultado textual
  valores?: string; // JSON con valores numéricos/normales
  interpretacion?: string;
  archivoAdjunto?: string; // URL o path del archivo
  estado: 'Ordenado' | 'En proceso' | 'Completado' | 'Cancelado';
  laboratorioId?: number;
}

/**
 * Laboratorio
 */
export interface Laboratorio {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email?: string;
  activo: boolean;
}

/**
 * Hospitalización
 */
export interface Hospitalizacion {
  id: number;
  pacienteId: number;
  habitacionId: number;
  camaId: number;
  fechaIngreso: Date;
  fechaAlta?: Date;
  motivoIngreso: string;
  diagnosticoIngresoId?: number;
  diagnosticoAltaId?: number;
  estado: 'Activa' | 'Alta médica' | 'Alta voluntaria' | 'Fallecimiento';
  observaciones?: string;
  personalMedicoId: number; // Médico responsable
}

/**
 * Habitación
 */
export interface Habitacion {
  id: number;
  numero: string;
  tipo: 'Individual' | 'Doble' | 'Triple' | 'Cuádruple' | 'UCI' | 'UCC';
  piso: number;
  sector: string; // Ej: "Cardiología", "Pediatría"
  capacidad: number;
  activa: boolean;
}

/**
 * Cama
 */
export interface Cama {
  id: number;
  habitacionId: number;
  numero: string;
  tipo: 'Normal' | 'UCI' | 'UCC' | 'Aislamiento';
  equipamiento?: string; // JSON con equipamiento disponible
  disponible: boolean;
  activa: boolean;
}

/**
 * Historial Médico
 */
export interface HistorialMedico {
  id: number;
  pacienteId: number;
  tipoRegistro: 'Consulta' | 'Hospitalización' | 'Examen' | 'Tratamiento' | 'Otro';
  referenciaId: number; // ID de la consulta, hospitalización, etc.
  fecha: Date;
  descripcion: string;
  personalMedicoId?: number;
  archivosAdjuntos?: string; // JSON array de URLs/paths
}

/**
 * Antecedente Médico
 */
export interface AntecedenteMedico {
  id: number;
  pacienteId: number;
  tipo: 'Enfermedad crónica' | 'Cirugía previa' | 'Alergia' | 'Medicamento' | 'Familiares' | 'Otro';
  descripcion: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  severidad?: 'Leve' | 'Moderada' | 'Grave';
  tratamientoActual?: string;
  activo: boolean;
}

/**
 * Facturación
 */
export interface Factura {
  id: number;
  numeroFactura: string; // Número único de factura
  pacienteId: number;
  fechaEmision: Date;
  fechaVencimiento?: Date;
  subtotal: number;
  descuento: number;
  impuesto: number;
  total: number;
  estado: 'Pendiente' | 'Pagada' | 'Vencida' | 'Cancelada';
  metodoPago?: 'Efectivo' | 'Tarjeta' | 'Transferencia' | 'Seguro';
  fechaPago?: Date;
  observaciones?: string;
}

/**
 * Detalle de Factura
 */
export interface DetalleFactura {
  id: number;
  facturaId: number;
  concepto: string; // Consulta, examen, medicamento, etc.
  tipoConcepto: 'Consulta' | 'Examen' | 'Medicamento' | 'Habitación' | 'Otro';
  referenciaId?: number; // ID de consulta, examen, etc.
  cantidad: number;
  precioUnitario: number;
  descuento: number;
  subtotal: number;
}

/**
 * Seguro Médico
 */
export interface SeguroMedico {
  id: number;
  nombre: string;
  codigo: string;
  tipo: 'Público' | 'Privado' | 'Mixto';
  activo: boolean;
}

/**
 * Póliza de Seguro del Paciente
 */
export interface PolizaSeguro {
  id: number;
  pacienteId: number;
  seguroMedicoId: number;
  numeroPoliza: string;
  fechaInicio: Date;
  fechaFin?: Date;
  cobertura?: string; // JSON con detalles de cobertura
  activa: boolean;
}

// ============================================
// RELACIONES Y TABLAS INTERMEDIAS
// ============================================

/**
 * Relación muchos a muchos: Personal Médico - Especialidades
 * (Un médico puede tener múltiples especialidades)
 */
export interface PersonalEspecialidad {
  id: number;
  personalMedicoId: number;
  especialidadId: number;
  fechaCertificacion?: Date;
  activa: boolean;
}

/**
 * Relación: Paciente - Seguro Médico
 * (Ya cubierta por PolizaSeguro, pero se puede usar para historial)
 */

// ============================================
// AGENDA MÉDICA Y RESERVAS
// ============================================

/**
 * Horario de Atención - Horarios regulares de trabajo de un médico
 */
export interface HorarioAtencion {
  id: number;
  personalMedicoId: number;
  diaSemana: 1 | 2 | 3 | 4 | 5 | 6 | 7; // 1=Lunes, 7=Domingo
  horaInicio: string; // Formato HH:mm (ej: "09:00")
  horaFin: string; // Formato HH:MM (ej: "17:00")
  duracionCita: number; // Duración en minutos (ej: 30, 45, 60)
  intervaloEntreCitas?: number; // Minutos entre citas (ej: 5, 10)
  activo: boolean;
  fechaCreacion: Date;
  fechaActualizacion: Date;
}

/**
 * Excepción de Horario - Días especiales (vacaciones, días libres, horarios especiales)
 */
export interface ExcepcionHorario {
  id: number;
  personalMedicoId: number;
  tipo: 'Vacaciones' | 'Día libre' | 'Horario especial' | 'Ausencia' | 'Capacitación';
  fechaInicio: Date;
  fechaFin: Date;
  horaInicio?: string; // Si es horario especial, puede tener horas diferentes
  horaFin?: string;
  motivo?: string;
  activa: boolean;
}

/**
 * Bloque de Horario - Bloques de tiempo disponibles para reservas
 * Se generan automáticamente basados en HorarioAtencion
 */
export interface BloqueHorario {
  id: number;
  personalMedicoId: number;
  especialidadId: number;
  fecha: Date; // Solo fecha, sin hora
  horaInicio: string; // Formato HH:mm
  horaFin: string; // Formato HH:mm
  disponible: boolean; // Si está disponible para reservar
  reservado: boolean; // Si ya tiene una reserva asignada
  tipoBloque: 'Regular' | 'Urgencia' | 'Emergencia' | 'Administrativo';
  observaciones?: string;
  fechaCreacion: Date;
}

/**
 * Reserva/Cita - Reserva de una cita médica
 */
export interface Reserva {
  id: number;
  pacienteId: number;
  personalMedicoId: number;
  especialidadId: number;
  bloqueHorarioId: number; // Relación con el bloque de horario
  fechaHora: Date; // Fecha y hora completa de la cita
  tipoConsulta: 'Primera vez' | 'Control' | 'Urgencia' | 'Emergencia' | 'Seguimiento';
  motivoConsulta: string;
  estado: 'Reservada' | 'Confirmada' | 'En espera' | 'En atención' | 'Completada' | 'Cancelada' | 'No asistió';
  prioridad?: 'Normal' | 'Alta' | 'Urgente';
  recordatorioEnviado: boolean; // Si se envió recordatorio
  fechaRecordatorio?: Date; // Cuándo se envió el recordatorio
  notas?: string; // Notas adicionales de la reserva
  consultaId?: number; // Si se convirtió en consulta, referencia
  fechaCreacion: Date;
  fechaActualizacion: Date;
  canceladoPor?: 'Paciente' | 'Médico' | 'Sistema' | 'Administración';
  motivoCancelacion?: string;
  fechaCancelacion?: Date;
}

/**
 * Configuración de Agenda - Configuración general del sistema de agenda
 */
export interface ConfiguracionAgenda {
  id: number;
  personalMedicoId?: number; // Si es null, es configuración global
  anticipacionMinima: number; // Horas mínimas para reservar (ej: 24 horas)
  anticipacionMaxima: number; // Días máximos para reservar (ej: 90 días)
  duracionDefault: number; // Duración por defecto en minutos
  intervaloDefault: number; // Intervalo por defecto entre citas
  permitirReservasOnline: boolean;
  permitirCancelacionOnline: boolean;
  horasCancelacionPermitida: number; // Horas antes de la cita para cancelar
  enviarRecordatorios: boolean;
  horasAntesRecordatorio: number; // Horas antes de la cita para enviar recordatorio
  activa: boolean;
}

// ============================================
// TIPOS AUXILIARES
// ============================================

export type EstadoConsulta = 'Programada' | 'En curso' | 'Completada' | 'Cancelada' | 'No asistió';
export type TipoConsulta = 'Primera vez' | 'Control' | 'Urgencia' | 'Emergencia' | 'Seguimiento';
export type EstadoTratamiento = 'Activo' | 'Completado' | 'Cancelado' | 'Suspendido';
export type EstadoHospitalizacion = 'Activa' | 'Alta médica' | 'Alta voluntaria' | 'Fallecimiento';
export type EstadoReserva = 'Reservada' | 'Confirmada' | 'En espera' | 'En atención' | 'Completada' | 'Cancelada' | 'No asistió';
export type TipoExcepcionHorario = 'Vacaciones' | 'Día libre' | 'Horario especial' | 'Ausencia' | 'Capacitación';
export type DiaSemana = 1 | 2 | 3 | 4 | 5 | 6 | 7; // 1=Lunes, 7=Domingo

