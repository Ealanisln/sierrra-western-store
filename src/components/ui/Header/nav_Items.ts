interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }

export const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Collections",
      children: [
        {
          label: "Explore Design Work",
          subLabel: "Trending Design to inspire you",
          href: "#",
        },
        {
          label: "New & Noteworthy",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
      ],
    },
    {
      label: "Clothing",
      children: [
        {
          label: "Accesories",
          subLabel: "Find your dream design job",
          href: "#",
        },
        {
          label: "Hats",
          subLabel: "An exclusive list for contract work",
          href: "#",
        },
      ],
    },
    {
      label: "Support",
      href: "#",
    },
    {
      label: "About us",
      href: "#",
    },
  ];