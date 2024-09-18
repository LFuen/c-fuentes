"use client";
import { useState } from "react";
import {
	Container,
	Button,
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
} from "reactstrap";
import styles from "./accordion.module.css";
import Link from "next/link";

export default function AccordionComp () {
	const [open, setOpen] = useState("1");
	const toggle = (id) => {
		if (open === id) {
			setOpen(null);
		} else {
			setOpen(id);
		}
	};

	const apos = "'";

	return (
		<Container fluid className={styles.accordionContainer}>
			<Accordion open={open} toggle={toggle}>
				<AccordionItem className={styles.accordionItem}>
					<AccordionHeader targetId="1" className={styles.accordionHeader}>
						<h3>Anxiety and Depression</h3>
					</AccordionHeader>
					<AccordionBody accordionId="1" className={styles.accordionBody}>
						<p>
							Living with anxiety and depression can feel like an uphill battle;
							constantly draining your energy, clouding your thoughts, and
							making even the simplest tasks seem overwhelming. It{apos}s easy to
							feel stuck or lost in these moments, unsure of how to move forward
							or regain a sense of normalcy. But you don{apos}t have to go through it
							alone. I{apos}m here to offer the support, understanding, and the tools you
							need to manage these emotions and regain control of your life.
						</p>
					</AccordionBody>
				</AccordionItem>

				<AccordionItem>
					<AccordionHeader targetId="2" className={styles.accordionHeader}>
						<h3>Trauma</h3>
					</AccordionHeader>
					<AccordionBody accordionId="2" className={styles.accordionBody}>
						<p>
							Many of us carry the weight of past trauma, which can intensify
							feelings of anxiety, depression, and stress. I understand how
							deeply these experiences can affect your emotional well-being and
							daily life. By creating a safe and compassionate space, I help you
							process unresolved trauma, develop coping strategies, and heal at
							your own pace. Together, we{apos}ll work to break free from the
							patterns that no longer serve you and foster a greater sense of
							resilience and self-compassion.
						</p>
					</AccordionBody>
				</AccordionItem>

				<AccordionItem>
					<AccordionHeader targetId="3" className={styles.accordionHeader}>
						<h3>Life Transitions</h3>
					</AccordionHeader>
					<AccordionBody accordionId="3" className={styles.accordionBody}>
						<p>
							Navigating through life transitions can feel overwhelming, whether
							it{apos}s starting a new job, moving to a new location, or facing a
							significant change in your personal or professional life. These
							shifts can bring about stress, anxiety, and a sense powerlessness.
							With personalized support and guidance, I{apos}ll work closely with you
							to help you manage these transitions while providing you with
							practical tools and strategies to regain stability. My goal is to
							help you move forward with confidence and clarity, no matter how
							daunting the changes may seem. Together, we{apos}ll create a plan
							tailored to your unique needs, ensuring you{apos}re equipped with the
							right skills and mindset to embrace the life you{apos}ve always
							envisioned and deserve.
						</p>
						<Link href="/contact" passHref>
							<Button color="primary" size="lg">
								Contact Me
							</Button>
						</Link>
					</AccordionBody>
				</AccordionItem>
			</Accordion>
		</Container>
	);
};
