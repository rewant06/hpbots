import React from 'react';

interface Link {
  name: string;
  href: string;
}

interface LinksProps {
  links: Link[];
}

const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
      {links.map((link) => (
        <a key={link.name} href={link.href}>
          {link.name} <span aria-hidden="true">&rarr;</span>
        </a>
      ))}
    </div>
  );
};

export default Links;