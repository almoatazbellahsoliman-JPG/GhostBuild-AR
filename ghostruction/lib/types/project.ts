export type ProjectStatus =
  | "DRAFT"
  | "PROCESSING"
  | "READY"
  | "ERROR";

export interface Project {
  id: string;
  name: string;
  description?: string;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
}