'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Experience() {
  return (
    <div id="experience" className="flex flex-col h-screen justify-center w-full">
    <div className="flex items-center justify-center mb-4">
      <h1 className="text-5xl font-bold flex-shrink-0">
        <span className="text-sky-800">01. </span>
        My Experience
      </h1>
      <span className="flex-1 border-b border-black ml-4"></span>
    </div>
      <div id="job-1" className="flex rounded-lg cursor-pointer hover:bg-slate-100 hover:border-gray-100 hover:shadow-2xl p-2">
        <h3 className="text-slate-400">2024 - PRESENT</h3>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Software Engineer Intern • HitMeUp.ai</h1>
          <p className="text-slate-400">Currently working as a Software Engineering Intern at HitMeUp.ai. I work on the backend, specifically on the API and database. I also work on the frontend, specifically on the dashboard and user interface.</p>
          <div className="flex justify-between">
              <div className="bg-sky-400 font-bold text-sm rounded-lg border p-1">JavaScript</div>
            <div className="bg-sky-400 font-bold text-sm rounded-lg border p-1">Python</div>
            <div className="bg-sky-400 font-bold text-sm rounded-lg border p-1">PostgreSQL</div>
            <div className="bg-sky-400 font-bold text-sm rounded-lg border p-1">JavaScript</div>
          </div>
        </div>
      </div>
      <div id="job-2" className="flex rounded-lg cursor-pointer hover:bg-slate-100 hover:border-gray-100 hover:shadow-2xl p-2">
        <h3 className="text-slate-400">2022 - 2024</h3>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Director of Communications • Western AI</h1>
          <p className="text-slate-400">Currently working as a Software Engineering Intern at HitMeUp.ai. I work on the backend, specifically on the API and database. I also work on the frontend, specifically on the dashboard and user interface.</p>
          <div className="flex justify-between">
              <div className="bg-sky-400 font-bold text-sm rounded-lg border p-1">JavaScript</div>
            <div className="bg-sky-400 font-bold text-sm rounded-lg border p-1">Python</div>
            <div className="bg-sky-400 font-bold text-sm rounded-lg border p-1">PostgreSQL</div>
            <div className="bg-sky-400 font-bold text-sm rounded-lg border p-1">Figma</div>
          </div>
        </div>
      </div>
    </div>
  );
}
