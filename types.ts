
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PainPointProps {
  text: string;
  icon: React.ReactNode;
}

export interface DiagnosisResponse {
  analysis: string;
  recommendations: string[];
}
