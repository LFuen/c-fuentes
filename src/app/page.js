"use client";
import Hero from './Hero/page';
import Welcome from './Welcome/page';
import AccordionComp from './AccordionComp/page';

export default function Home() {
  return (
      <>
        <Hero />
        <section>
          <Welcome />
          <AccordionComp />
        </section>
      </>
  );
}
