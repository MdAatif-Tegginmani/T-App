import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Doe',
    position: 'CTO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bob Smith',
    position: 'Developer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Alice Johnson',
    position: 'Designer',
    image: 'https://via.placeholder.com/150',
  },
];

const Team = () => {
  return (
    <div className='container flex justify-center mt-10 '>
      <h1 className=''>Our Team</h1>
      <div className="team-members  mt-10">
        {teamMembers.map((member) => (
          <div key={member.name} className="team-member ">
            <img src={member.image} alt={member.name} />
            <h3 className=''>{member.name}</h3>
            <p className='mb-10' >{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;