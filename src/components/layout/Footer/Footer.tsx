'use client';

import Link from 'next/link';
import { IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/src/lib/constants';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>TEXPO</span>
          <p className={styles.tagline}>
            The future of technology exhibitions — connecting innovators, industries, and ideas
            on a global stage.
          </p>
          <div className={styles.socials}>
            {[IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className={styles.socialBtn}
                whileHover={{ scale: 1.15, color: '#1a7aff' }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className={styles.links}>
          <h4 className={styles.colTitle}>Navigation</h4>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.links}>
          <h4 className={styles.colTitle}>Contact</h4>
          <p className={styles.contactItem}>info@texpo.example.com</p>
          <p className={styles.contactItem}>+1 (555) 000-0000</p>
          <p className={styles.contactItem}>Exhibition City, Country</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} TEXPO. All rights reserved.</span>
      </div>
    </footer>
  );
}
