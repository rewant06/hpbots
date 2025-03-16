"use client";

import React from "react";
import BackgroundImage from "@/app/pages/components/BackgroundImage";
import Links from "@/app/pages/components/Links";
import Stats from "@/app/pages/components/Stats";

const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];
  
  const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];
  
  const AboutPage: React.FC = () => {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt="About Us"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              About Our Company
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Helping Bots is dedicated to making technology accessible and
              impactful. Our goal is to revolutionize automation and customer
              engagement.
            </p>
          </div>
          <div className="mt-10 flex justify-center gap-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
              >
                {link.name} →
              </a>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col items-center">
                <p className="text-4xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-lg text-gray-300">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutPage;