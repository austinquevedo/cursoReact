import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    maxWidth: '800px',
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
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  section: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#1a237e',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e0e0e0',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    fontSize: '0.95rem',
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
    boxSizing: 'border-box',
    '&:focus': {
      outline: 'none',
      borderColor: '#1a237e',
    },
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    transition: 'border-color 0.3s',
    minHeight: '100px',
    resize: 'vertical',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
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
    boxSizing: 'border-box',
    '&:focus': {
      outline: 'none',
      borderColor: '#1a237e',
    },
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    backgroundColor: '#1a237e',
    color: 'white',
    marginTop: '1rem',
    width: '100%',
    '&:hover': {
      backgroundColor: '#283593',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(26, 35, 126, 0.3)',
    },
    '&:disabled': {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
      transform: 'none',
    },
  },
  required: {
    color: '#f44336',
    marginLeft: '0.25rem',
  },
});

export interface PatientData {
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

interface PatientFormProps {
  onSubmit: (data: PatientData) => void;
  initialData?: Partial<PatientData>;
}

export function PatientForm({ onSubmit, initialData }: PatientFormProps) {
  const classes = useStyles();
  const [formData, setFormData] = useState<PatientData>({
    nombre: initialData?.nombre || '',
    apellido: initialData?.apellido || '',
    fechaNacimiento: initialData?.fechaNacimiento || '',
    documento: initialData?.documento || '',
    telefono: initialData?.telefono || '',
    email: initialData?.email || '',
    direccion: initialData?.direccion || '',
    genero: initialData?.genero || '',
    fechaConsulta: initialData?.fechaConsulta || new Date().toISOString().split('T')[0],
    motivoConsulta: initialData?.motivoConsulta || '',
    observaciones: initialData?.observaciones || '',
  });

  const handleChange = (field: keyof PatientData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = formData.nombre && formData.apellido && formData.documento && formData.fechaConsulta;

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>📋 Registro de Paciente</h1>
      <p className={classes.subtitle}>Complete los datos del paciente y la consulta</p>

      <form className={classes.form} onSubmit={handleSubmit}>
        {/* Datos del Paciente */}
        <div className={classes.section}>
          <h2 className={classes.sectionTitle}>Datos del Paciente</h2>
          <div className={classes.formRow}>
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Nombre <span className={classes.required}>*</span>
              </label>
              <input
                type="text"
                className={classes.input}
                value={formData.nombre}
                onChange={(e) => handleChange('nombre', e.target.value)}
                required
                placeholder="Ingrese el nombre"
              />
            </div>
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Apellido <span className={classes.required}>*</span>
              </label>
              <input
                type="text"
                className={classes.input}
                value={formData.apellido}
                onChange={(e) => handleChange('apellido', e.target.value)}
                required
                placeholder="Ingrese el apellido"
              />
            </div>
          </div>

          <div className={classes.formRow}>
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                className={classes.input}
                value={formData.fechaNacimiento}
                onChange={(e) => handleChange('fechaNacimiento', e.target.value)}
              />
            </div>
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Documento <span className={classes.required}>*</span>
              </label>
              <input
                type="text"
                className={classes.input}
                value={formData.documento}
                onChange={(e) => handleChange('documento', e.target.value)}
                required
                placeholder="DNI, Pasaporte, etc."
              />
            </div>
          </div>

          <div className={classes.formRow}>
            <div className={classes.formGroup}>
              <label className={classes.label}>Género</label>
              <select
                className={classes.select}
                value={formData.genero}
                onChange={(e) => handleChange('genero', e.target.value)}
              >
                <option value="">Seleccione...</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
                <option value="prefiero-no-decir">Prefiero no decir</option>
              </select>
            </div>
            <div className={classes.formGroup}>
              <label className={classes.label}>Teléfono</label>
              <input
                type="tel"
                className={classes.input}
                value={formData.telefono}
                onChange={(e) => handleChange('telefono', e.target.value)}
                placeholder="+54 9 11 1234-5678"
              />
            </div>
          </div>

          <div className={classes.formRow}>
            <div className={classes.formGroup}>
              <label className={classes.label}>Email</label>
              <input
                type="email"
                className={classes.input}
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="paciente@email.com"
              />
            </div>
            <div className={classes.formGroup}>
              <label className={classes.label}>Dirección</label>
              <input
                type="text"
                className={classes.input}
                value={formData.direccion}
                onChange={(e) => handleChange('direccion', e.target.value)}
                placeholder="Calle y número"
              />
            </div>
          </div>
        </div>

        {/* Datos de la Consulta */}
        <div className={classes.section}>
          <h2 className={classes.sectionTitle}>Datos de la Consulta</h2>
          <div className={classes.formRow}>
            <div className={classes.formGroup}>
              <label className={classes.label}>
                Fecha de Consulta <span className={classes.required}>*</span>
              </label>
              <input
                type="date"
                className={classes.input}
                value={formData.fechaConsulta}
                onChange={(e) => handleChange('fechaConsulta', e.target.value)}
                required
              />
            </div>
            <div className={classes.formGroup}>
              <label className={classes.label}>Motivo de Consulta</label>
              <select
                className={classes.select}
                value={formData.motivoConsulta}
                onChange={(e) => handleChange('motivoConsulta', e.target.value)}
              >
                <option value="">Seleccione...</option>
                <option value="consulta-general">Consulta General</option>
                <option value="limpieza">Limpieza Dental</option>
                <option value="dolor">Dolor</option>
                <option value="control">Control</option>
                <option value="ortodoncia">Ortodoncia</option>
                <option value="implante">Implante</option>
                <option value="endodoncia">Endodoncia</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div className={classes.formGroup}>
            <label className={classes.label}>Observaciones</label>
            <textarea
              className={classes.textarea}
              value={formData.observaciones}
              onChange={(e) => handleChange('observaciones', e.target.value)}
              placeholder="Notas adicionales sobre la consulta..."
            />
          </div>
        </div>

        <button
          type="submit"
          className={classes.button}
          disabled={!isFormValid}
        >
          Continuar al Registro Dental
        </button>
      </form>
    </div>
  );
}

