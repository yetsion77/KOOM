'use client';  // זה חשוב בגלל שאנחנו משתמשים בהוקים של React

import LocationGame from '@/components/LocationGame';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LocationGame />
    </div>
  );
}