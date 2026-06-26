export interface OsintResource {
  name: string;
  url: string;
  description: string;
}

export interface OsintSection {
  title: string;
  resources: OsintResource[];
}

export interface OsintCategory {
  id: string;
  title: string;
  sections: OsintSection[];
}
