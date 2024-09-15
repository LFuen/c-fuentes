"use client";
import {
	Container,
	Row,
	Col,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	CardText,
} from "reactstrap";
import Link from "next/link";
import styles from "./therapy.module.css";

export default function Therapy() {
	const specialties = [
		{
			name: "Anxiety",
			id: 1,
			gist: "Anxiety is a mental health condition characterized by persistent feelings of worry, fear, or nervousness that can interfere with daily life. It may manifest physically through symptoms like rapid heart rate, restlessness, difficulty concentrating, and can lead to panic attacks. While occasional anxiety is normal, chronic anxiety can be overwhelming and often requires support to manage effectively.",
		},
		{
			name: "Depression",
			id: 2,
			gist: "Depression is a mood disorder marked by persistent sadness, hopelessness, and/or a loss of interest in activities once enjoyed. It can affect sleep, appetite, energy levels, and concentration, making daily tasks feel overwhelming. More than just occasional sadness, depression can significantly impact a person&#39;s ability to function in their personal and/or professional life.",
		},

		{
			name: "LGBTQIA+",
			id: 3,
			gist: "The LGBTQIA+ community encompasses a diverse range of sexual orientations, gender identities, and expressions. While many individuals within the community face unique challenges related to societal acceptance, discrimination, and mental health, they also demonstrate remarkable resilience, strength, and pride. Understanding and affirming these identities is key to fostering inclusivity and support.",
		},
		{
			name: "Trauma",
			id: 4,
			gist: "Trauma is a response to a deeply distressing or disturbing event that overwhelms a person&#39;s ability to cope, leaving lasting emotional and psychological effects. It can result from experiences such as abuse, accidents, or significant loss. Symptoms of trauma may include flashbacks, anxiety, emotional numbness, and difficulty trusting others.",
		},
		{
			name: "Obsessive-Compulsive Disorder (OCD)",
			id: 5,
			gist: "OCD is a mental health condition marked by persistent, unwanted thoughts (obsessions) and repetitive behaviors (compulsions) intended to reduce anxiety. These compulsions can interfere with daily life, as individuals feel driven to perform rituals to ease distress. Though these actions offer temporary relief, the cycle can become overwhelming without proper treatment and support.",
		},

		{
			name: "Adjustment Disorders",
			id: 6,
			gist: "Adjustment disorders are stress-related conditions that occur when someone has difficulty coping with a major life change or stressful event, such as job loss, relationship breakup, or relocation. Symptoms may include sadness, anxiety, and difficulty functioning in daily life. These emotional and behavioral responses are typically out of proportion to the actual event and can interfere with work, school, and/or relationships.",
		},
	];

	const col3 = specialties.slice(0, 3);
	const col4 = specialties.slice(3, 6);

	const therapies = [
		{
			name: "Cognitive Behavioral Therapy (CBT)",
			id: 1,
			gist: "CBT is a widely used, evidence-based approach to mental health treatment that focuses on identifying and changing negative thought patterns and behaviors. By helping individuals understand the connection between their thoughts, feelings, and actions, CBT equips them with practical strategies to manage anxiety, depression, and other mental health challenges. It is a goal-oriented, collaborative process aimed at fostering long-term emotional well-being.",
		},
		{
			name: "Trauma-Informed Care",
			id: 2,
			gist: "Trauma-informed care is an approach that recognizes the widespread impact of trauma and prioritizes safety, trust, and empowerment in the therapeutic process. It focuses on understanding the emotional, psychological, and physical effects of trauma while ensuring that care is delivered with sensitivity and compassion. By fostering a safe environment, trauma-informed care helps individuals heal without retraumatization, promoting resilience and emotional well-being.",
		},
		{
			name: "Person-Centered Therapy",
			id: 3,
			gist: "Person-centered therapy is a humanistic approach that emphasizes an individual&#39;s ability to lead their own healing process. Founded on the belief that individuals have the innate capacity for personal growth, this therapy focuses on creating a supportive, non-judgmental environment where individuals feel understood and valued. Through empathy, genuineness, and unconditional positive regard, the therapist helps individuals explore their feelings and find their own solutions, fostering greater self-awareness and personal development.",
		},
		{
			name: "Solution-Focused Therapy",
			id: 4,
			gist: "Solution-focused therapy is a goal-oriented approach that emphasizes finding practical solutions to current challenges rather than focusing on past issues. It encourages individuals to identify their strengths and resources to create positive change in their lives. By concentrating on small, achievable goals, and what&#39;s already working, solution-focused therapy helps individuals build momentum towards their desired outcomes in a short period of time.",
		},

		{
			name: "Acceptance Commitment Therapy (ACT)",
			id: 5,
			gist: "ACT is a mindfulness-based approach that encourages individuals to accept difficult thoughts and feelings rather than trying to avoid or eliminate them. The focus is on committing to actions that align with personal values, helping individuals live a meaningful life despite challenges. ACT promotes psychological flexibility by combining acceptance strategies with behavioral change techniques, empowering individuals to move forward in the face of discomfort.",
		},
		{
			name: "Strength-Based Therapy",
			id: 6,
			gist: "Strength-based therapy is an empowering approach that focuses on an individual&#39;s inherent strengths and resources, rather than their problems or deficits. By highlighting personal abilities, resilience, and past successes, this therapeutic model helps individuals build confidence and develop positive strategies for overcoming challenges. The goal is to foster self-efficacy, promote growth, and support individuals in achieving their goals by leveraging their unique strengths.",
		},
	];

	const col1 = therapies.slice(0, 3);
	const col2 = therapies.slice(3, 6);

	const notTreated = [
		{
			name: "Active / Current Substance Use",
			id: 1,
		},
		{
			name: "Suicidality with Plan / Intent",
			id: 2,
		},
		{
			name: "Eating Disorders",
			id: 3,
		},
		{
			name: "Postpartum Disorders",
			id: 4,
		},
		{
			name: "Parenting Concerns",
			id: 5,
		},
		{
			name: "Active Domestic Violence",
			id: 6,
		},
	];

	const col5 = notTreated.slice(0, 3);
	const col6 = notTreated.slice(3, 6);

	return (
		<Container fluid className={styles.aboutContainer}>
			<Row className={styles.mentalHealth}>
				<Col>
					<blockquote className={styles.quote}>
						<p>Proven techniques to help guide you on your road to strength.</p>
					</blockquote>
				</Col>
				<Col>
					<Link href="/ContactForm">
						<Button className={styles.ctaButton}>Let&#39;s Begin</Button>
					</Link>
				</Col>
			</Row>

			<article className={styles.techniqueArticle}>
				<Row className={styles.techniqueTitle}>
					<h2>Specialties</h2>
				</Row>

				<Row className={styles.techniqueRow}>
					<Col xs={6} className={`${styles.techniqueColA}`}>
						{col3.map((therapy) => (
							<Card className={styles.techniqueCard} key={therapy.id}>
								<CardHeader className={styles.cardHeader}>
									{therapy.name}
								</CardHeader>
								<CardBody>
									<CardText className={styles.cardText}>
										{therapy.gist}
									</CardText>
								</CardBody>
							</Card>
						))}
					</Col>

					<Col xs={6} className={styles.techniqueColB}>
						{col4.map((therapy) => (
							<Card className={styles.techniqueCard} key={therapy.id}>
								<CardHeader className={styles.cardHeader}>
									{therapy.name}
								</CardHeader>
								<CardBody>
									<CardText className={styles.cardText}>
										{therapy.gist}
									</CardText>
								</CardBody>
							</Card>
						))}
					</Col>
				</Row>
			</article>

			<section className={styles.diamondContainer}>
				<article className={styles.diamondBorder}>
					Healing begins when you give yourself permission to feel, grow, and
					embrace the journey toward becoming the best version of you.
				</article>
			</section>

			<article className={styles.techniqueArticle}>
				<Row className={styles.techniqueTitle}>
					<h2>Techniques Used In My Practice</h2>
				</Row>

				<Row className={styles.techniqueRow}>
					<Col xs={6} className={`${styles.techniqueColA}`}>
						{col1.map((therapy) => (
							<Card className={styles.techniqueCard} key={therapy.id}>
								<CardHeader className={styles.cardHeader}>
									{therapy.name}
								</CardHeader>
								<CardBody>
									<CardText className={styles.cardText}>
										{therapy.gist}
									</CardText>
								</CardBody>
							</Card>
						))}
					</Col>

					<Col xs={6} className={styles.techniqueColB}>
						{col2.map((therapy) => (
							<Card className={styles.techniqueCard} key={therapy.id}>
								<CardHeader className={styles.cardHeader}>
									{therapy.name}
								</CardHeader>
								<CardBody>
									<CardText className={styles.cardText}>
										{therapy.gist}
									</CardText>
								</CardBody>
							</Card>
						))}
					</Col>
				</Row>
			</article>

			<Row className={styles.treatTopRow}>
				<Col>
					<Card className={styles.treatCard}>
						<CardHeader className={styles.treatHeader}>
							I Do NOT Treat
						</CardHeader>
						<CardBody>
							<CardText className={styles.cardText}>
								<Row className={styles.treatRow}>
									<Col xs={6} key="col1" className={styles.treatCol}>
										{col5.map((treat) => (
											<ul key={treat.id}>
												<li key={treat.id}>{treat.name}</li>
											</ul>
										))}
									</Col>

									<Col xs={6} key="col2" className={styles.treatCol}>
										{col6.map((treat) => (
											<ul key={treat.id}>
												<li key={treat.id}>{treat.name}</li>
											</ul>
										))}
									</Col>
								</Row>
							</CardText>
							<CardTitle className={styles.cardTitle}>
								<b>* I do NOT treat children or adolescents.</b>
							</CardTitle>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
