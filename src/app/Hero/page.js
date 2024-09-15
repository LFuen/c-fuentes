"use client";
import styles from './hero.module.css';
import { Row, Col, Button } from 'reactstrap';
import Link from 'next/link';



export default function Hero () {
    return (
        <Row className={styles.hero}>
            <Col className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Therapy for the Modern World</h1>
                <p>Empowering individuals through personalized therapy sessions.</p>
                <Link href="/ContactForm"><Button className={styles.ctaButton}>Contact Me</Button></Link>
            </Col>
        </Row>
    );
};