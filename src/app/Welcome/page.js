"use client";
import smile from "./images/Cara.jpg";
import { Row, Col, Button, Container } from "reactstrap";
import styles from "./welcome.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
	return (
		<Container className={styles.welcome}>
			<Row className={styles.topRow}>
				<h4>Cara Fuentes, LMHC - Qualified Supervisor</h4>
				<blockquote>Uncover Your Strength, Embrace Your Journey.</blockquote>
			</Row>
			<Row className={styles.photoRow}>
				<Col xs={4} title="Welcome!" className={styles.headshot}>
					<Image alt="Welcome" src={smile} />
				</Col>
				<Col xs={6} className={styles.intro}>
					<p>
						I am a Licensed Mental Health Therapist and Qualified Supervisor in
						Florida, with a Master's of Science from the University of
						Massachusetts Boston. I was recognized in November 2021 as the top
						therapist at a well-known teletherapy platform for exemplary client
						satisfaction and high-quality care. I specialize in treating
						depression, anxiety disorders, PTSD, and adjustment disorders. I
						take a <span className={styles.tooltip}>holistic</span> and
						individualized approach to therapy, combining evidence-based
						techniques with a compassionate and empathetic style. I value
						creating a caring, safe, and non-judgmental space where clients can
						explore their thoughts and feelings, develop coping strategies, and
						foster personal growth. I am certified in trauma-informed care,
						ensuring sensitivity to the impact of trauma on a clients' life.
					</p>
					<p>
						For more information, see the details below and visit the{" "}
						<Link href="/Therapy">Therapy</Link> tab.
					</p>
					<Link href="/ContactForm" passhref>
						<Button className={styles.ctaButton}>Contact Now</Button>
					</Link>
				</Col>
			</Row>

			<Row className={styles.bottomRow}>
				<blockquote>How Can Therapy Help Me?</blockquote>
				<p>
					Each category below will help you understand a little bit more about
					how we can work together to overcome the following obstacles:
				</p>
			</Row>
		</Container>
	);
}
