"use client";

import React from 'react';
import certifications from "../../change_data/certifications.json";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const CertificationsCards = () => {
  return (
    <div className="sm:py-10 py-5 flex flex-col animate-fade-right w-full">
      <h2 className="font-semibold tracking-tighter sm:text-3xl flex sm:mb-10 mb-5 sm:justify-center text-2xl">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {certifications.map((item, index) => (
          <Card key={index} className="bg-slate-900 border-none shadow-xl hover:-translate-y-1 transition duration-300">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center gap-4">
              
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden mb-2 p-2">
                {/* Using img instead of next/image to prevent crashing while waiting for real images */}
                <img
                  src={item.logo}
                  alt={`${item.company}`}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col items-center gap-1 w-full">
                <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {item.company}
                </p>
                <p className="text-gray-500 text-xs">
                  {item.from} {item.to !== item.from ? `- ${item.to}` : ''}
                </p>
              </div>

              <Link href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-6 py-2 flex items-center gap-2">
                  View Certificate <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </Link>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CertificationsCards;
