import React from 'react';

import team1 from '../assets/images/team1.png';
import team2 from '../assets/images/team2.png';
import team3 from '../assets/images/team3.png';
import team4 from '../assets/images/team4.png';

const teamMembers = [
  {
    name: 'Harrison Boateng',
    title: 'Senior',
    role: 'IT Consultant',
    image: team1,
  },
  {
    name: 'Elias Diek',
    title: 'Co-Founder',
    role: 'AI + Full Stack Dev',
    image: team2,
  },
  {
    name: 'James Zappi',
    title: 'Founder',
    role: 'President',
    image: team3,
  },
  {
    name: 'Karen S. Cruz',
    title: 'Marketing',
    role: 'Director',
    image: team4,
  },
];

const Team = () => (
  <section className="pt-24 pb-36 bg-gray-50 ">
    <div className='mx-auto max-w-[1250px]'>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg">Our staff has talent and industry experise dating back to 2002.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="p-6 w-64 flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-56 h-48 rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <div className="italic text-base">{member.title}</div>
            <div className="italic text-base">{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team; 