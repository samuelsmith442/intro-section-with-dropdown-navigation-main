'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FeatureDropdownProps {
  isOpen: boolean;
}

export default function FeatureDropdown({ isOpen }: FeatureDropdownProps) {
  return (
    <div className={`dropdown absolute top-8 right-0 bg-white shadow-xl rounded-xl p-6 w-40 ${isOpen ? 'show' : ''}`}>
      <div className="flex flex-col space-y-4">
        <Link href="#" className="flex items-center text-medium-gray hover:text-almost-black transition-colors">
          <Image src="/images/icon-todo.svg" alt="Todo" width={16} height={16} className="mr-3" />
          Todo List
        </Link>
        <Link href="#" className="flex items-center text-medium-gray hover:text-almost-black transition-colors">
          <Image src="/images/icon-calendar.svg" alt="Calendar" width={16} height={16} className="mr-3" />
          Calendar
        </Link>
        <Link href="#" className="flex items-center text-medium-gray hover:text-almost-black transition-colors">
          <Image src="/images/icon-reminders.svg" alt="Reminders" width={16} height={16} className="mr-3" />
          Reminders
        </Link>
        <Link href="#" className="flex items-center text-medium-gray hover:text-almost-black transition-colors">
          <Image src="/images/icon-planning.svg" alt="Planning" width={16} height={16} className="mr-3" />
          Planning
        </Link>
      </div>
    </div>
  );
}
