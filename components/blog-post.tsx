import React from 'react'
import { ExternalLink } from "lucide-react";
import blog1 from '@/public/cyber_blog1.jpg'
import Image from 'next/image';
const Blogpost = () => {
  return (
    <div className="w-[15.5rem] rounded-xl border bg-card text-card-foreground shadow cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground">
      <Image
        className="rounded-xl"
        src={blog1}
        alt="Blog image"
        height={400}
        width={400}
      />
      <div className="space-y-2 p-6">
        <div className="flex space-x-1">
          <h3 className="font-semibold leading-none tracking-tight">
            Cybersecurity Tips
          </h3>
          <ExternalLink height={15} width={15} />
        </div>
        <p className="text-sm text-muted-foreground">
          Top 9 Cybersecurity Tips for Small to Medium Sized Businesses
        </p>
      </div>
    </div>
  );
}

export default Blogpost
