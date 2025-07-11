export interface Speaker {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  speaker?: string;
  description: string;
}
