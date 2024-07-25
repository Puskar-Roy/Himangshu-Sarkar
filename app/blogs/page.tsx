import Blogpost from '@/components/blog-post'
import React from 'react'

const page = () => {
  return (
    <div className="w-[800px] flex flex-wrap gap-3 mt-5 mb-5">
      <Blogpost
        name="Crypto_as_it_is [Python Cryptography Toolkit]"
        link="https://medium.com/@himangshusarkar622/crypto-as-it-is-05d6e99160e7"
        description="This is a collection of both secure hash functions (such as SHA256 and
RIPEMD160), and various encryption algorithms (AES, DES, RSA, ElGamal,
etc.)."
      />
      <Blogpost
        name="Post-quantum cryptography should keep our DigiD, bank accounts and state secrets safe"
        link="https://medium.com/@himangshusarkar622/post-quantum-cryptography-should-keep-our-digid-bank-accounts-and-state-secrets-safe-0cf8a6db730c"
        description="Our banking, DigiD and sensitive medical data: what if our entire digital infrastructure can no longer be trusted? Jelle Don has this question permanently in mind as he goes about his research."
      />
      <Blogpost
        name="Critical File Vulnerabilty"
        link="https://medium.com/@himangshusarkar622/critical-file-vulnerabilty-2c28bfda934f"
        description="It means whenever any web server or a web application having file that contains some kind of sensitive information and can be use for further attacks. It includes files having database passwords, web server authentication data, critical business logic information etc."
      />
      <Blogpost
        name="Broken Link Hijacking — How expired links can be exploited"
        link="https://medium.com/@himangshusarkar622/broken-link-hijacking-how-expired-links-can-be-exploited-0865ab114888"
        description="Broken Link Hijacking (BLH) exists whenever a target links to an expired domain or page. Broken Link Hijacking comes in two forms, reflected and stored. "
      />
      <Blogpost
        name="Bug Bounty: Automate Blind SQLi"
        link="https://medium.com/@himangshusarkar622/bug-bounty-automate-blind-sqli-514ee699c27e"
        description=" wanted to share an epic win with you for you. A simple way to automate blind SQLi with Nuclei.

To begin, let’s create a Nuclie template, but let’s make it a bit more advanced to leverage the clusterbomb method. This approach will allow us to effectively brute force the endpoints that pique our interest."
      />
      <Blogpost
        name="Talk about the recent ZoomEye updates"
        link="https://pumped-creature-a1e.notion.site/Talk-about-the-recent-ZoomEye-updates-827b781fe1bb4b60a0019adc788717fd?pvs=4"
        description="ZoomEye has always been committed to being more friendly and open to developers. For example, in August of this year, we announced the removal of API data output restrictions. Another example is the API-KEY authentication mode introduced to you today. "
      />
      <Blogpost
        name="SECURITY SCRIPTS"
        link="https://www.notion.so/SECURITY-SCRIPTS-80fda4f41f4a40bba3eb5e68153f7528?pvs=4"
        description="A collection of security related Python and Bash shell scripts, mainly revolving
around testing hosts for security vulnerabilities. For the shell scripts no
fancy programming framework is required, all that is needed is a Bash shell."
      />
      <Blogpost
        name="Linux Endpoint Detection & Response"
        link="https://www.notion.so/Linux-Endpoint-Detection-Response-2e792007ffe84813ad4b171fed85c7bd?pvs=4"
        description="Python EDR system Example (server and client-side) A minimal example of how an EDR system would work in Python3.8. The project contains the server-side code and the client-side code. "
      />
      <Blogpost
        name="Using the LockBit builder to generate targeted ransomware"
        link="https://medium.com/@himangshusarkar622/using-the-lockbit-builder-to-generate-targeted-ransomware-83980845beba"
        description="The previous Kaspersky focused on a detailed analysis of the LockBit 3.0 builder leaked in 2022. Since then, attackers have been able to generate customized versions of the threat according to their needs."
      />
      
    </div>
  );
}

export default page
