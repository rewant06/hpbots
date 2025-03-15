import React from 'react';

interface Stat {
  name: string;
  value: string;
}

interface StatsProps {
  stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="flex flex-col-reverse gap-1">
          <dt className="text-base text-gray-300">{stat.name}</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default Stats;