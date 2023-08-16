"use client";

import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import PageHeader from '../_components/PageHeader'

const faqs = [
  {
    question: 'What is The Pariah?',
    answer:
      'The Pariah is a conceptual art-based NFT project on the Ethereum blockchain and built upon the ERC-721 standard. The project pays homage to the 80s - 00s era of grittier American graphic novels and comics with a unique twist for Web 3.0',
  },
  {
    question: 'Can you tell me more about the artwork?',
    answer:
      'Sure thing! Combining both individually drawn, traditional, comic art with powerful generative algorithms and procedural pipelines, The Pariah is a unique blend of both traditional and digital art. The Pariah is a collection of 2,222 unique piece of art, with its own story, and its own personality.',
  },
  {
    question: 'Why does it look so authentic and paper-based?',
    answer:
      'Textures. Are. Key. From the liner, to the inking, to the emulated pulpy paper its digitally rendered in, everything is designed to give it a true comic feel.',
  },
  {
    question: 'Is there a Roadmap for the project?',
    answer:
      'Once minting is completed, I will be setting aside a portion of the proceeds to develop additional utility to holders. I am exploring Large-Language Models (LLMs) to generate additional lore, personalities, and storylines for individual characters and creating a truly interactive piece. I imagine a feature where each character has a memory, personality, and the user the ability to converse and understand more about the world The Pariah is set within.',
  },
  {
    question: 'Are you talking about a simulacra built on GPT?',
    answer:
      "You know your stuff.... and yes, most likely...thats what I'm dreaming of and trying to achieve. Chatting with a NFT to understand the virtual world they live in... the true metaverse I guess.",
  },
  {
    question: 'Whats the User-Influenced Minting Experience about?',
    answer:
      'I hate blind reveals but love the anticipation. So how about we allow a user to have some influences over the artwork and trait determination but still create suspense and excitement for the reveal. Lets try something new!',
  },
  {
    question: 'Is there a Discord?',
    answer:
      'Fuck no. No-one has the time to manage all of their memberships and be active, keep it to Twitter.',
  },
  {
    question: 'Can I get on the Allowlist?',
    answer:
      "Try the link... if theres space, you'll be able to add yourself. Remember to follow either the Project or Developer twitters as to not miss Mint Announcements",
  },
  {
    question: 'Who are you?',
    answer:
      "I'm just someone with an unbridled passion for art, technology, and the future. I'm a full-stack developer by trade, with experience in the Cloud, Big Data, and Machine Learning space but I've always had a passion for art and design. I've been working on this project for a while now, and I'm excited to share it with the world.",
  },
  {
    question: 'Are you doxxed?',
    answer:
      "I haven't needed to be so far and I'm not opposed to it if it becomes neccessary. I'm not a scammer, I'm not a rug-puller, and I'm not a thief. I'm just a guy who wants to create something cool and share it with the world. You'll also find a distinct and refreshing absence of influencers, VCs, and grifters here :)",
  },
  {
    question: 'This project is just one person?',
    answer:
      "Art. Procedural Pipelines. Machine Learning/GenAI Mixers. Contract. Site. Integration... and a few things still up my sleeve. Yes, one person. This isn't impossible, but it is a lot of work. Other teams are just lazy.",
  },
  {
    question: 'What tools do you use to create the art?',
    answer:
      'Daz3D, Blender, Photoshop, StableDiffusion, Custom JS and Python Application and Extensions.',
  },
  {
    question: 'What tools do you use to create the site?',
    answer:
      'React, TailwindCSS, TailwindUI, Vite, Web3Modal, wagmi, StrapiCMS, Postgres, Redis, DigitalOcean cloud hosting.',
  },
  {
    question: 'What tools do you use to create the contract?',
    answer: 'Solidity, Hardhat, Ethers.js, OpenZeppelin.',
  },
  // More questions...
];

export default function FAQ() {
  return (
    <>
    <PageHeader title={"Frequently Asked Questions"} subtitle={"Find out more about the project, myself, and my intent."}/>
    
    <div className="tracking-widest">
      <div className="max-w mx-auto px-6 py-12 sm:py-16 lg:px-8 lg:py-20 ">
        <div className="mx-auto max-w-5xl divide-y divide-white">
          <dl className="mt-10 space-y-6 divide-y divide-white">
            {faqs.map(faq => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left ">
                        <span className="font-marker leading-7 tracking-widest">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="leading-7 tracking-widest text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </>
  );
}