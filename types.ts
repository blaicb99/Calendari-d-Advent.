export interface DayData {
  id: number;
  title: string; // The Team Name or "Curiositat general"
  content: string; // The fact
  colors: string[]; // [Primary, Secondary, Tertiary?]
  logoUrl?: string; // URL for the real image
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: DayData | null;
}