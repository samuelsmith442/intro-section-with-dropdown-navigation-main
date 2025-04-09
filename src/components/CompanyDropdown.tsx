'use client';

import Link from 'next/link';

interface CompanyDropdownProps {
  isOpen: boolean;
}

export default function CompanyDropdown({ isOpen }: CompanyDropdownProps) {
  return (
    <div className={`dropdown absolute top-8 left-0 bg-white shadow-xl rounded-xl p-6 w-36 ${isOpen ? 'show' : ''}`}>
      <div className="flex flex-col space-y-4">
        <Link href="#" className="text-medium-gray hover:text-almost-black transition-colors">
          History
        </Link>
        <Link href="#" className="text-medium-gray hover:text-almost-black transition-colors">
          Our Team
        </Link>
        <Link href="#" className="text-medium-gray hover:text-almost-black transition-colors">
          Blog
        </Link>
      </div>
    </div>
  );
}
