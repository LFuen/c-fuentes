"use client";
import { Container, Row, Col, Button, Card, CardHeader } from "reactstrap";
import Link from "next/link";
import styles from "./supervision.module.css";
import Image from "next/image";
import ygt from "./images/gotThis.jpg";

export default function Supervision() {
	const support = [
		{
			name: "Depression",
			id: 1,
		},
		{
			name: "Anxiety",
			id: 2,
		},

		{
			name: "Trauma",
			id: 3,
		},
		{
			name: "LGBTQIA+",
			id: 4,
		},
		{
			name: "Borderline Personality Disorder",
			id: 5,
		},

		{
			name: "Adjustment Disorders",
			id: 6,
		},
		{
			name: "Relationships",
			id: 7,
		},
		{
			name: "Couples",
			id: 8,
		},
		{
			name: "Substance Abuse",
			id: 9,
		},
		{
			name: "Obsessive-Compulsive Disorder (OCD)",
			id: 10,
		},
	];

	const col1 = support.slice(0, 5);
	const col2 = support.slice(5, 10);

	const interventions = [
		{
			name: "Cognitive Behavioral Therapy (CBT)",
			id: 1,
		},
		{
			name: "Trauma-Informed Care",
			id: 2,
		},
		{
			name: "Person-Centered Therapy",
			id: 3,
		},
		{
			name: "Solution-Focused Therapy",
			id: 4,
		},

		{
			name: "Strength-Based Therapy",
			id: 5,
		},
		{
			name: "Acceptance Commitment Therapy (ACT)",
			id: 6,
		},
	];

	const col3 = interventions.slice(0, 3);
	const col4 = interventions.slice(3, 6);

	return (
		<Container fluid className={styles.aboutContainer}>
			<Row className={styles.mentalHealth}>
				<Col>
					<blockquote className={styles.quote}>
						<p>
							Empowering the next generation of therapists through guidance,
							support, and a commitment to lifelong learning.
						</p>
					</blockquote>
				</Col>
				<Col>
					<Link href="/ContactForm">
						<Button className={styles.ctaButton}>Contact Me</Button>
					</Link>
				</Col>
			</Row>

			<h1>
				<span className={styles.title}>Supervision</span>
			</h1>

			<article className={styles.topBlurb}>
				<Row className={styles.blurbRow}>
					<Col>
						<Image src={ygt} alt="The Grind" width={300} height={300} />
					</Col>
					<Col>
						<p>
							I began my mental health career in 2015 as a Mental Health
							Specialist in the psychotic disorders' inpatient unit at
							McLean Hospital in Belmont, MA. In 2018, while pursuing my
							master's degree at the University of Massachusetts Boston in
							Mental Health Counseling, I interned at an outpatient counseling
							center in Norwell, MA. There, I provided individual therapy for
							children, adolescents, and adults facing various mental health
							conditions, including depression, anxiety, substance abuse
							disorders, borderline personality disorder, and PTSD. At this
							outpatient center, I additionally led group therapy sessions for
							adults in the Partial Hospitalization Program (PHP) and Intensive
							Outpatient Program (IOP). After completing my degree in 2019, I
							was promoted to Coordinator and Lead Therapist of the Substance
							Abuse IOP at the same facility.
						</p>
						<p>
							In 2020, I moved to Florida and began working for Children's
							Home Society (CHS) in Miami, providing therapy to children and
							families referred by the Department of Children and Families
							(DCF). Upon becoming a licensed mental health counselor in 2021, I
							began treating adult clients via telehealth and was recognized as
							a top therapist at a major teletherapy company. I now run my
							private practice via telehealth, specializing in treating adults
							with depression, anxiety disorders, trauma, grief and loss, and
							adjustment disorders, while also providing in-home counseling for
							older adults. My diverse experience spans multiple populations and
							treatment levels. See below to learn more about my supervision
							style.
						</p>
					</Col>
				</Row>
			</article>

			<article className={styles.techniqueArticle}>
				<Row className={styles.techniqueTitle}>
					<h2>Provided Support for Interns</h2>
				</Row>

				<Row className={styles.techniqueRow}>
					<Col xs={6} className={`${styles.techniqueColA}`}>
						{col1.map((therapy) => (
							<Card className={styles.techniqueCard} key={therapy.id}>
								<CardHeader className={styles.cardHeader}>
									{therapy.name}
								</CardHeader>
							</Card>
						))}
					</Col>

					<Col xs={6} className={styles.techniqueColB}>
						{col2.map((therapy) => (
							<Card className={styles.techniqueCard} key={therapy.id}>
								<CardHeader className={styles.cardHeader}>
									{therapy.name}
								</CardHeader>
							</Card>
						))}
					</Col>
				</Row>
			</article>

			<article className={styles.midBlurb}>
				<Row className={styles.blurbRow}>
					<Col>
						<p>
							As a qualified supervisor for MHC interns, I view supervision as
							an evolving process that adapts to your growth and professional
							development. I utilize an integrated developmental model that
							includes three stages: entry-level (highly motivated but anxious
							about evaluation), mid-level (fluctuating confidence and
							motivation), and advanced (secure, stable, with accurate empathy).
							I will assist you in identifying your current stage and provide
							feedback and guidance tailored to where you are in your journey.
							My goal is to enhance your skills and confidence at a pace that is
							appropriate for you.
						</p>
						<p>
							Together, we'll work towards fostering your growth and
							building a strong foundation for your practice. In supervision
							sessions, I prioritize creating a supportive and open environment
							where you feel comfortable discussing challenges and successes
							alike. My collaborative approach encourages self-reflection and
							ongoing learning, allowing you to develop your therapeutic style
							and skills. By addressing both your strengths and areas for
							growth, we aim to build a well-rounded foundation that will serve
							you throughout your career in mental health counseling.
						</p>
					</Col>

					<Col>
						<Image src={ygt} alt="You Got This" width={300} height={300} />
					</Col>
				</Row>
			</article>

			<article className={styles.techniqueArticle}>
				<Row className={styles.techniqueTitle}>
					<h2>Therapeutic Interventions</h2>
				</Row>

				<Row className={styles.techniqueRow}>
					<Col xs={6} className={`${styles.techniqueColA}`}>
						{col3.map((therapy) => (
							<Card className={styles.techniqueCard} key={therapy.id}>
								<CardHeader className={styles.cardHeader}>
									{therapy.name}
								</CardHeader>
							</Card>
						))}
					</Col>

					<Col xs={6} className={styles.techniqueColB}>
						{col4.map((therapy) => (
							<Card className={styles.techniqueCard} key={therapy.id}>
								<CardHeader className={styles.cardHeader}>
									{therapy.name}
								</CardHeader>
							</Card>
						))}
					</Col>
				</Row>
			</article>

			<article className={styles.bottomCTA}>
				<h2>Ready to Start Your Journey?</h2>
				<p>
					If you're ready to grow as a therapist with dedicated and
					personalized supervision, let's connect.
				</p>
				<p>
					I offer supervision services via <strong>Doxy.me</strong>, at a rate
					of
					<strong>
						{" "}
						<u>$75 per hour session</u>
					</strong>
					, ensuring you receive the highest quality guidance and support.
				</p>
				<p>
					<strong>** FLORIDA mental health interns only.</strong>
				</p>
				<Link href="/ContactForm">
					<Button className={styles.ctaButton}>Let's Begin</Button>
				</Link>
			</article>
		</Container>
	);
}
