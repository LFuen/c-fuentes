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
							Empowering future therapists through guidance, support, and a
							commitment to lifelong learning.
						</p>
					</blockquote>
				</Col>
				<Col>
					<Link href="/ContactForm">
						<Button className={styles.ctaButton}>Let's Begin</Button>
					</Link>
				</Col>
			</Row>

			<h1>
				<span className={styles.title}>Supervision</span>
			</h1>

			<article className={styles.topBlurb}>
				<Row className={styles.blurbRow}>
					<Col>
						<Image src={ygt} alt="The Grind" width={500} height={500} />
					</Col>
					<Col>
						<p>
							Cara began her mental health career in 2015 as a Mental Health
							Specialist in the psychotic disorders&#39; inpatient unit at McLean
							Hospital in Belmont, MA. In 2018, while pursuing her master&#39;s
							degree at the University of Massachusetts Boston in Mental Health
							Counseling, she interned at an outpatient counseling center in
							Norwell, MA. There, she provided individual therapy for children,
							adolescents, and adults facing various mental health conditions,
							including depression, anxiety, substance abuse disorders,
							borderline personality disorder, and PTSD. At this outpatient
							center, Cara additionally led group therapy sessions for adults in
							the Partial Hospitalization Program (PHP) and Intensive Outpatient
							Program (IOP). After completing her degree in 2019, she was
							promoted to Coordinator and Lead Therapist of the Substance Abuse
							IOP at this facility.
						</p>
						<p>
							In 2020, Cara moved to Florida and began working for Children&#39;s
							Home Society (CHS) in Miami, providing therapy to children and
							families referred by the Department of Children and Families
							(DCF). Upon becoming a licensed mental health counselor in 2021,
							Cara began treating adult clients via telehealth and was
							recognized as a top therapist at a major teletherapy company. Cara
							now runs her private practice via telehealth, specializing in
							treating adults with depression, anxiety disorders, trauma, grief
							and loss, and adjustment disorders, while also providing in-home
							counseling for older adults. Her diverse experience spans multiple
							populations and treatment levels. See below to learn more about
							her supervision style.
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
							OCD is a mental health condition characterized by persistent,
							unwanted thoughts (obsessions) and repetitive behaviors or mental
							acts (compulsions) aimed at reducing the anxiety those thoughts
							cause. These compulsions can interfere with daily life, as
							individuals feel compelled to perform certain rituals or routines
							to alleviate distress. While these rituals provide temporary
							relief, the cycle of obsessions and compulsions can become
							overwhelming and difficult to control without proper treatment and
							support.
						</p>
					</Col>

					<Col>
						<Image src={ygt} alt="You Got This" width={500} height={500} />
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
		</Container>
	);
}
