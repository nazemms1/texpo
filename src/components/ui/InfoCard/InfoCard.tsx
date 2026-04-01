"use client";

import Image from "next/image";
import { Box, Stack, Text, Title } from "@mantine/core";
import styles from "./InfoCard.module.css";

type InfoCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  priority?: boolean;
  className?: string;
};

export function InfoCard({
  title,
  description,
  imageUrl,
  priority = false,
  className = "",
}: InfoCardProps) {
  return (
    <Box className={`${styles.infoCard} ${className}`} pos="relative">
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority={priority}
        style={{ objectFit: "cover" }}
      />

      <Box
        pos="absolute"
        top={0}
        left={0}
        right={0}
        h="42%"
        className={styles.topOverlay}
      />
      <Box
        pos="absolute"
        bottom={0}
        left={0}
        right={0}
        h="42%"
        className={styles.bottomOverlay}
      />

      <Stack pos="absolute" inset={0} className={styles.content}>
        <Box
          pt={{ base: 20, sm: 26 }}
          pl={{ base: 20, sm: 26 }}
          pr={{ base: 16, sm: 20 }}
          className={styles.titleRow}
        >
          <Title order={2} c="white" fw={700} className={styles.title}>
            {title}
          </Title>
          <Box
            w={{ base: 140, sm: 220, lg: 453 }}
            h={4}
            bg="rgba(255, 255, 255, 0.9)"
            className={styles.line}
          />
        </Box>

        <Box mt="auto" px={{ base: 14, sm: 22 }} pb={{ base: 10, sm: 14 }}>
          <Text c="white" maw={1100} className={styles.description}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
