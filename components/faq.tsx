"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "This Extension is Free?",
      content: (
        <div className="text-muted-foreground">
          Yes, this extension is free. You can use it to fill any webform.
        </div>
      ),
    },
    {
      title: "Is it available on every browser?",
      content: (
        <div className="text-muted-foreground">
          It is only available in Firefox. Chrome version is ready but gathering money to deploy it there💰
        </div>
      ),
    },
    {
      title: "How can I use this extension?",
      content: (
        <div className="text-muted-foreground">
          Refer to the documentation available on our website or visit our youtube demo video
          <a
            href="https://www.youtube.com/"
            className="text-primary underline"
            target="_blank"
            rel="noreferrer"
          >
            Youtube
          </a>
          .
        </div>
      ),
    },
    {
      title: "Do you save our personal data?",
      content: (
        <div className="text-muted-foreground">
          We do not save any personal data. Our extension is designed to fill web forms without storing any user information.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <div className="flex w-full max-w-lg">
        <Accordion type="multiple" className="w-full">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-muted-foreground"
            >
              <AccordionTrigger className="text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
