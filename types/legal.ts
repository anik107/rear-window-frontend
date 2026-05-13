export interface PolicySubItem {
  id: string;
  title: string;
  content: string[];
}

export interface PolicySection {
  id: string;
  number: number;
  title: string;
  items: PolicySubItem[];
}

export interface PolicyPageData {
  title: string;
  subtitle: string;
  sections: PolicySection[];
}