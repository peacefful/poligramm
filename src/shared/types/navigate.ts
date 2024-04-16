export interface TNavigate {
  id: number;
  title: string;
  icon: string;
  action: (() => boolean) | null;
}