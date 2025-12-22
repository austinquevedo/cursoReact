import { useState } from 'react';
import { PatientForm } from './PatientForm';
import type { PatientData } from './PatientForm';
import { DentalChart } from './DentalChart';

export function DentalApp() {
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [showChart, setShowChart] = useState(false);

  const handlePatientSubmit = (data: PatientData) => {
    setPatientData(data);
    setShowChart(true);
  };

  const handleBack = () => {
    setShowChart(false);
  };

  if (showChart && patientData) {
    return <DentalChart patientData={patientData} onBack={handleBack} />;
  }

  return <PatientForm onSubmit={handlePatientSubmit} />;
}

