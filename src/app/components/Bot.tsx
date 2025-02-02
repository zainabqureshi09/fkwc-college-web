'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const AICollegeAssistant = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.type = 'text/javascript';
    script.onload = () => {
      // @ts-ignore
      window.voiceflow?.chat.load({
        verify: { projectID: '676306d677a8a407e72f8503' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-no-repeat bg-cover overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundImage: 'url(/logo.png)' }}
    >
      <h1 className="text-center text-red-700 text-4xl md:text-5xl font-bold px-4">
        This is our AI college assistant, don&apos;t hesitate to ask anything about FKWC.
      </h1>
      <h1 className="text-center md:text-right text-2xl md:text-3xl mt-4">
        Click below &#x1F447;
      </h1>
    </div>
  );
};

export default AICollegeAssistant;
