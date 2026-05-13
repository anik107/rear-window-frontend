export interface NavItem {
  label: string;
  href: string;
}

export interface NavConfig {
  brand: {
    topText: string;
    bottomText: string;
    href: string;
  };
  search: {
    placeholder: string;
  };
  links: NavItem[];
  auth: {
    label: string;
    href: string;
  };
}