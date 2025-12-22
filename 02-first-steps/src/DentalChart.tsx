import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '2rem',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#1a237e',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '3rem',
  },
  dentalChart: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
  },
  dentalImageContainer: {
    width: '100%',
    maxWidth: '900px',
    margin: '2rem 0',
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  dentalImageTitle: {
    textAlign: 'center',
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#1a237e',
    marginBottom: '1rem',
  },
  dentalImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  patientInfo: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    marginBottom: '2rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  patientInfoTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#1a237e',
    marginBottom: '1rem',
  },
  patientInfoRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    fontSize: '0.95rem',
  },
  patientInfoItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  patientInfoLabel: {
    fontWeight: 600,
    color: '#666',
    marginBottom: '0.25rem',
  },
  patientInfoValue: {
    color: '#333',
  },
  backButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    backgroundColor: '#757575',
    color: 'white',
    marginBottom: '1rem',
    '&:hover': {
      backgroundColor: '#616161',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(117, 117, 117, 0.3)',
    },
  },
  jaw: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
  },
  jawLabel: {
    textAlign: 'center',
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#1a237e',
    marginBottom: '0.5rem',
  },
  teethRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  tooth: {
    width: '50px',
    height: '60px',
    borderRadius: '8px',
    border: '2px solid #333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
      zIndex: 10,
    },
  },
  toothNumber: {
    fontSize: '0.7rem',
    fontWeight: 600,
    color: '#333',
    marginBottom: '0.2rem',
  },
  toothLabel: {
    fontSize: '0.6rem',
    color: '#666',
  },
  treatmentBadge: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '1px solid #fff',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    background: 'white',
    borderRadius: '20px',
    padding: '2rem',
    maxWidth: '500px',
    width: '90%',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    animation: '$slideIn 0.3s ease',
  },
  '@keyframes slideIn': {
    from: {
      transform: 'translateY(-50px)',
      opacity: 0,
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
  modalHeader: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#1a237e',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#333',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    transition: 'border-color 0.3s',
    '&:focus': {
      outline: 'none',
      borderColor: '#1a237e',
    },
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'border-color 0.3s',
    '&:focus': {
      outline: 'none',
      borderColor: '#1a237e',
    },
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end',
    marginTop: '2rem',
  },
  button: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  buttonPrimary: {
    backgroundColor: '#1a237e',
    color: 'white',
    '&:hover': {
      backgroundColor: '#283593',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(26, 35, 126, 0.3)',
    },
  },
  buttonSecondary: {
    backgroundColor: '#e0e0e0',
    color: '#333',
    '&:hover': {
      backgroundColor: '#bdbdbd',
    },
  },
  treatmentsList: {
    marginTop: '1rem',
    maxHeight: '200px',
    overflowY: 'auto',
  },
  treatmentItem: {
    padding: '0.5rem',
    marginBottom: '0.5rem',
    borderRadius: '6px',
    fontSize: '0.9rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  treatmentColor: {
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    marginRight: '0.5rem',
    border: '1px solid #ddd',
  },
  removeButton: {
    background: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '0.25rem 0.5rem',
    cursor: 'pointer',
    fontSize: '0.8rem',
    '&:hover': {
      background: '#d32f2f',
    },
  },
});

// Nomenclatura dental estándar (32 dientes)
const DENTAL_NOTATION = [
  // Arriba (Maxilar)
  { number: 18, label: 'M3' }, { number: 17, label: 'M2' }, { number: 16, label: 'M1' },
  { number: 15, label: 'PM2' }, { number: 14, label: 'PM1' },
  { number: 13, label: 'C' }, { number: 12, label: 'I2' }, { number: 11, label: 'I1' },
  { number: 21, label: 'I1' }, { number: 22, label: 'I2' }, { number: 23, label: 'C' },
  { number: 24, label: 'PM1' }, { number: 25, label: 'PM2' },
  { number: 26, label: 'M1' }, { number: 27, label: 'M2' }, { number: 28, label: 'M3' },
  // Abajo (Mandibular)
  { number: 48, label: 'M3' }, { number: 47, label: 'M2' }, { number: 46, label: 'M1' },
  { number: 45, label: 'PM2' }, { number: 44, label: 'PM1' },
  { number: 43, label: 'C' }, { number: 42, label: 'I2' }, { number: 41, label: 'I1' },
  { number: 31, label: 'I1' }, { number: 32, label: 'I2' }, { number: 33, label: 'C' },
  { number: 34, label: 'PM1' }, { number: 35, label: 'PM2' },
  { number: 36, label: 'M1' }, { number: 37, label: 'M2' }, { number: 38, label: 'M3' },
];

const TREATMENT_TYPES = [
  { value: 'caries', label: 'Caries', color: '#f44336' },
  { value: 'obturacion', label: 'Obturación', color: '#2196F3' },
  { value: 'corona', label: 'Corona', color: '#FF9800' },
  { value: 'endodoncia', label: 'Endodoncia', color: '#9C27B0' },
  { value: 'extraccion', label: 'Extracción', color: '#000000' },
  { value: 'implante', label: 'Implante', color: '#4CAF50' },
  { value: 'limpieza', label: 'Limpieza', color: '#00BCD4' },
  { value: 'ortodoncia', label: 'Ortodoncia', color: '#E91E63' },
];

interface Treatment {
  id: string;
  type: string;
  date: string;
  notes: string;
  color: string;
}

interface ToothData {
  number: number;
  label: string;
  treatments: Treatment[];
}

interface PatientData {
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  documento: string;
  telefono: string;
  email: string;
  direccion: string;
  genero: string;
  fechaConsulta: string;
  motivoConsulta: string;
  observaciones: string;
}

interface DentalChartProps {
  patientData?: PatientData;
  onBack?: () => void;
}

export function DentalChart({ patientData, onBack }: DentalChartProps) {
  const classes = useStyles();
  const [teeth, setTeeth] = useState<Record<number, ToothData>>(() => {
    const initial: Record<number, ToothData> = {};
    DENTAL_NOTATION.forEach(({ number, label }) => {
      initial[number] = { number, label, treatments: [] };
    });
    return initial;
  });

  const [selectedTooth, setSelectedTooth] = useState<number | null>(null);
  const [treatmentType, setTreatmentType] = useState('');
  const [treatmentDate, setTreatmentDate] = useState(new Date().toISOString().split('T')[0]);
  const [treatmentNotes, setTreatmentNotes] = useState('');

  const handleToothClick = (toothNumber: number) => {
    setSelectedTooth(toothNumber);
  };

  const handleCloseModal = () => {
    setSelectedTooth(null);
    setTreatmentType('');
    setTreatmentNotes('');
    setTreatmentDate(new Date().toISOString().split('T')[0]);
  };

  const handleAddTreatment = () => {
    if (!selectedTooth || !treatmentType) return;

    const treatment = TREATMENT_TYPES.find(t => t.value === treatmentType);
    if (!treatment) return;

    const newTreatment: Treatment = {
      id: Date.now().toString(),
      type: treatmentType,
      date: treatmentDate,
      notes: treatmentNotes,
      color: treatment.color,
    };

    setTeeth(prev => ({
      ...prev,
      [selectedTooth!]: {
        ...prev[selectedTooth!],
        treatments: [...prev[selectedTooth!].treatments, newTreatment],
      },
    }));

    setTreatmentType('');
    setTreatmentNotes('');
    setTreatmentDate(new Date().toISOString().split('T')[0]);
  };

  const handleRemoveTreatment = (toothNumber: number, treatmentId: string) => {
    setTeeth(prev => ({
      ...prev,
      [toothNumber]: {
        ...prev[toothNumber],
        treatments: prev[toothNumber].treatments.filter(t => t.id !== treatmentId),
      },
    }));
  };

  const getToothColor = (tooth: ToothData) => {
    if (tooth.treatments.length === 0) return '#fff';
    // Retorna el color del último tratamiento
    return tooth.treatments[tooth.treatments.length - 1].color;
  };

  const getTreatmentLabel = (type: string) => {
    return TREATMENT_TYPES.find(t => t.value === type)?.label || type;
  };

  const upperTeeth = DENTAL_NOTATION.slice(0, 16);
  const lowerTeeth = DENTAL_NOTATION.slice(16);

  // SVG de distribución dental con rostro
  const DentalDistributionSVG = () => (
    <svg
      viewBox="0 0 800 600"
      className={classes.dentalImage}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fondo */}
      <rect width="800" height="600" fill="#f8f9fa" />
      
      {/* Título */}
      <text x="400" y="30" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1a237e">
        Vista Frontal de la Distribución Dental
      </text>
      
      {/* Rostro - Cabeza */}
      <ellipse
        cx="400"
        cy="280"
        rx="220"
        ry="250"
        fill="#ffdbac"
        stroke="#d4a574"
        strokeWidth="3"
      />
      
      {/* Cuello */}
      <rect
        x="350"
        y="500"
        width="100"
        height="60"
        fill="#ffdbac"
        stroke="#d4a574"
        strokeWidth="2"
        rx="10"
      />
      
      {/* Ojos */}
      <ellipse cx="330" cy="200" rx="25" ry="20" fill="#ffffff" stroke="#333" strokeWidth="2" />
      <ellipse cx="470" cy="200" rx="25" ry="20" fill="#ffffff" stroke="#333" strokeWidth="2" />
      <circle cx="330" cy="200" r="12" fill="#333" />
      <circle cx="470" cy="200" r="12" fill="#333" />
      <ellipse cx="332" cy="198" rx="4" ry="5" fill="#ffffff" />
      <ellipse cx="472" cy="198" rx="4" ry="5" fill="#ffffff" />
      
      {/* Cejas */}
      <path
        d="M 300 180 Q 330 170 360 180"
        stroke="#8b4513"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 440 180 Q 470 170 500 180"
        stroke="#8b4513"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Nariz */}
      <ellipse cx="400" cy="250" rx="8" ry="15" fill="#e6c89a" />
      <path
        d="M 392 250 Q 400 260 408 250"
        stroke="#d4a574"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Mejillas */}
      <ellipse cx="280" cy="280" rx="30" ry="25" fill="#ffb3ba" opacity="0.6" />
      <ellipse cx="520" cy="280" rx="30" ry="25" fill="#ffb3ba" opacity="0.6" />
      
      {/* Maxilar Superior - Dientes en la boca */}
      <g transform="translate(50, 320)">
        <text x="350" y="-10" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1a237e">
          Maxilar Superior
        </text>
        {/* Dientes superiores */}
        {upperTeeth.map((tooth, index) => {
          const x = (index * 40) + 20;
          const y = 20;
          const toothData = teeth[tooth.number];
          const bgColor = getToothColor(toothData);
          
          return (
            <g key={tooth.number}>
              <rect
                x={x}
                y={y}
                width="35"
                height="30"
                fill={bgColor}
                stroke={toothData.treatments.length > 0 ? bgColor : "#333"}
                strokeWidth="2"
                rx="3"
              />
              <text
                x={x + 17.5}
                y={y + 12}
                textAnchor="middle"
                fontSize="9"
                fontWeight="bold"
                fill="#333"
              >
                {tooth.number}
              </text>
              <text
                x={x + 17.5}
                y={y + 22}
                textAnchor="middle"
                fontSize="7"
                fill="#666"
              >
                {tooth.label}
              </text>
            </g>
          );
        })}
      </g>
      
      {/* Línea divisoria de la boca */}
      <line x1="50" y1="370" x2="750" y2="370" stroke="#333" strokeWidth="1.5" />
      
      {/* Mandibular Inferior - Dientes en la boca */}
      <g transform="translate(50, 380)">
        <text x="350" y="-10" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1a237e">
          Mandibular Inferior
        </text>
        {/* Dientes inferiores */}
        {lowerTeeth.map((tooth, index) => {
          const x = (index * 40) + 20;
          const y = 20;
          const toothData = teeth[tooth.number];
          const bgColor = getToothColor(toothData);
          
          return (
            <g key={tooth.number}>
              <rect
                x={x}
                y={y}
                width="35"
                height="30"
                fill={bgColor}
                stroke={toothData.treatments.length > 0 ? bgColor : "#333"}
                strokeWidth="2"
                rx="3"
              />
              <text
                x={x + 17.5}
                y={y + 12}
                textAnchor="middle"
                fontSize="9"
                fontWeight="bold"
                fill="#333"
              >
                {tooth.number}
              </text>
              <text
                x={x + 17.5}
                y={y + 22}
                textAnchor="middle"
                fontSize="7"
                fill="#666"
              >
                {tooth.label}
              </text>
            </g>
          );
        })}
      </g>
      
      {/* Labios */}
      <path
        d="M 200 360 Q 400 340 600 360 Q 400 380 200 360"
        fill="#d87093"
        stroke="#b85070"
        strokeWidth="2"
        opacity="0.8"
      />
      <path
        d="M 200 360 Q 400 350 600 360"
        fill="none"
        stroke="#b85070"
        strokeWidth="1"
      />
      
      {/* Mentón */}
      <ellipse cx="400" cy="440" rx="80" ry="30" fill="#ffdbac" />
      
      {/* Leyenda de colores */}
      <g transform="translate(50, 520)">
        <text x="0" y="0" fontSize="14" fontWeight="600" fill="#333">
          Leyenda de Tratamientos:
        </text>
        {TREATMENT_TYPES.slice(0, 4).map((treatment, index) => (
          <g key={treatment.value} transform={`translate(${index * 120}, 20)`}>
            <rect width="15" height="15" fill={treatment.color} stroke="#333" strokeWidth="1" />
            <text x="20" y="12" fontSize="10" fill="#333">
              {treatment.label}
            </text>
          </g>
        ))}
        {TREATMENT_TYPES.slice(4).map((treatment, index) => (
          <g key={treatment.value} transform={`translate(${index * 120}, 40)`}>
            <rect width="15" height="15" fill={treatment.color} stroke="#333" strokeWidth="1" />
            <text x="20" y="12" fontSize="10" fill="#333">
              {treatment.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );

  return (
    <div className={classes.container}>
      {onBack && (
        <button className={classes.backButton} onClick={onBack}>
          ← Volver a Datos del Paciente
        </button>
      )}
      
      <h1 className={classes.title}>📋 Registro Dental</h1>
      <p className={classes.subtitle}>Haz clic en cualquier diente para agregar o ver tratamientos</p>

      {/* Información del paciente */}
      {patientData && (
        <div className={classes.patientInfo}>
          <h3 className={classes.patientInfoTitle}>Información del Paciente</h3>
          <div className={classes.patientInfoRow}>
            <div className={classes.patientInfoItem}>
              <span className={classes.patientInfoLabel}>Nombre:</span>
              <span className={classes.patientInfoValue}>
                {patientData.nombre} {patientData.apellido}
              </span>
            </div>
            <div className={classes.patientInfoItem}>
              <span className={classes.patientInfoLabel}>Documento:</span>
              <span className={classes.patientInfoValue}>{patientData.documento}</span>
            </div>
            <div className={classes.patientInfoItem}>
              <span className={classes.patientInfoLabel}>Fecha de Consulta:</span>
              <span className={classes.patientInfoValue}>{patientData.fechaConsulta}</span>
            </div>
            <div className={classes.patientInfoItem}>
              <span className={classes.patientInfoLabel}>Motivo:</span>
              <span className={classes.patientInfoValue}>
                {patientData.motivoConsulta || 'No especificado'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Imagen de distribución dental */}
      <div className={classes.dentalImageContainer}>
        <h3 className={classes.dentalImageTitle}>Distribución Dental - Vista Frontal</h3>
        <DentalDistributionSVG />
      </div>

      <div className={classes.dentalChart}>
        {/* Maxilar Superior */}
        <div className={classes.jaw}>
          <div className={classes.jawLabel}>Maxilar Superior</div>
          <div className={classes.teethRow}>
            {upperTeeth.map(({ number, label }) => {
              const tooth = teeth[number];
              const bgColor = getToothColor(tooth);
              return (
                <div
                  key={number}
                  className={classes.tooth}
                  onClick={() => handleToothClick(number)}
                  style={{
                    backgroundColor: bgColor,
                    borderColor: tooth.treatments.length > 0 ? bgColor : '#333',
                  }}
                >
                  <div className={classes.toothNumber}>{number}</div>
                  <div className={classes.toothLabel}>{label}</div>
                  {tooth.treatments.length > 0 && (
                    <div
                      className={classes.treatmentBadge}
                      style={{ backgroundColor: bgColor }}
                      title={`${tooth.treatments.length} tratamiento(s)`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mandibular Inferior */}
        <div className={classes.jaw}>
          <div className={classes.jawLabel}>Mandibular Inferior</div>
          <div className={classes.teethRow}>
            {lowerTeeth.map(({ number, label }) => {
              const tooth = teeth[number];
              const bgColor = getToothColor(tooth);
              return (
                <div
                  key={number}
                  className={classes.tooth}
                  onClick={() => handleToothClick(number)}
                  style={{
                    backgroundColor: bgColor,
                    borderColor: tooth.treatments.length > 0 ? bgColor : '#333',
                  }}
                >
                  <div className={classes.toothNumber}>{number}</div>
                  <div className={classes.toothLabel}>{label}</div>
                  {tooth.treatments.length > 0 && (
                    <div
                      className={classes.treatmentBadge}
                      style={{ backgroundColor: bgColor }}
                      title={`${tooth.treatments.length} tratamiento(s)`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal para agregar tratamientos */}
      {selectedTooth && (
        <div className={classes.modalOverlay} onClick={handleCloseModal}>
          <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={classes.modalHeader}>
              Diente #{selectedTooth} - {teeth[selectedTooth].label}
            </h2>

            <div className={classes.formGroup}>
              <label className={classes.label}>Tipo de Tratamiento</label>
              <select
                className={classes.select}
                value={treatmentType}
                onChange={(e) => setTreatmentType(e.target.value)}
              >
                <option value="">Seleccione un tratamiento</option>
                {TREATMENT_TYPES.map((treatment) => (
                  <option key={treatment.value} value={treatment.value}>
                    {treatment.label}
                  </option>
                ))}
              </select>
            </div>

            <div className={classes.formGroup}>
              <label className={classes.label}>Fecha</label>
              <input
                type="date"
                className={classes.input}
                value={treatmentDate}
                onChange={(e) => setTreatmentDate(e.target.value)}
              />
            </div>

            <div className={classes.formGroup}>
              <label className={classes.label}>Notas</label>
              <input
                type="text"
                className={classes.input}
                value={treatmentNotes}
                onChange={(e) => setTreatmentNotes(e.target.value)}
                placeholder="Observaciones adicionales..."
              />
            </div>

            <div className={classes.buttonGroup}>
              <button
                className={`${classes.button} ${classes.buttonSecondary}`}
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
              <button
                className={`${classes.button} ${classes.buttonPrimary}`}
                onClick={handleAddTreatment}
                disabled={!treatmentType}
              >
                Agregar Tratamiento
              </button>
            </div>

            {/* Lista de tratamientos existentes */}
            {teeth[selectedTooth].treatments.length > 0 && (
              <div className={classes.treatmentsList}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: '#333' }}>
                  Tratamientos Registrados:
                </h3>
                {teeth[selectedTooth].treatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    className={classes.treatmentItem}
                    style={{ backgroundColor: `${treatment.color}20` }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                      <div
                        className={classes.treatmentColor}
                        style={{ backgroundColor: treatment.color }}
                      />
                      <div>
                        <strong>{getTreatmentLabel(treatment.type)}</strong>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>
                          {treatment.date} {treatment.notes && `- ${treatment.notes}`}
                        </div>
                      </div>
                    </div>
                    <button
                      className={classes.removeButton}
                      onClick={() => handleRemoveTreatment(selectedTooth, treatment.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

