"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import Image from "next/image";
import logo from "./images/CFLogoNav.svg";
import { Button } from "reactstrap";

export default function Nav() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const handleKeydown = (e) => (e.key === "Enter" ? handleClick() : null);
	const closeMenu = () => setClick(false);

	return (
		<nav className={styles.navbar}>
			<div className={styles.navRow}>
				<div
					className={styles.menuIcon}
					onClick={handleClick}
					onKeyDown={handleKeydown}
				>
					<i className={click ? "bi bi-x" : "bi bi-list"} />
				</div>
				<div className={styles.navColA}>
					<Link href="/" onClick={closeMenu} className={styles.navbarLogo}>
						<Image src={logo} alt="Cara Fuentes - LMHC, Supervisor" />
					</Link>
				</div>
				<div className={styles.navColB}>
					<ul className={click ? `${styles.navMenu} active` : styles.navMenu}>
					<li className={styles.navItem}>
							<Link
								href="/"
								className={`${styles.navLinks} ${styles.link}`}
								onClick={closeMenu}
							>
								Home
							</Link>
						</li>
						<li className={styles.navItem}>
							<Link
								href="/Therapy"
								className={`${styles.navLinks} ${styles.link}`}
								onClick={closeMenu}
							>
								Therapy
							</Link>
						</li>
						<li className={styles.navItem}>
							<Link
								href="/Supervision"
								className={`${styles.navLinks} ${styles.link}`}
								onClick={closeMenu}
							>
								Supervision
							</Link>
						</li>
						<li className={styles.navItem}>
							<Link href="/ContactForm" onClick={closeMenu}>
								<Button className={styles.ctaButton}>Contact Me</Button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
