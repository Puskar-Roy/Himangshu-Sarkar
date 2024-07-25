import React from "react";
import { ExternalLink } from "lucide-react";
import blog1 from "@/public/cyber_blog1.jpg";
import Image from "next/image";
import PropTypes from "prop-types";
const Blogpost = ({ name, link, description }:{name : string , link : string, description: string}) => {
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
          <h3 className="font-semibold leading-none tracking-tight">{name}</h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink height={15} width={15} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

Blogpost.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Blogpost;
