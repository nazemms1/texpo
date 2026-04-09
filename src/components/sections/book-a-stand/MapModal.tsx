'use client';

import { Modal } from '@mantine/core';
import { StandMapCarousel } from './StandMapCarousel';
import { useApi } from '@/src/hooks/useApi';
import { bookStandService } from '@/src/lib/api';

interface MapModalProps {
  opened: boolean;
  onClose: () => void;
}

export function MapModal({ opened, onClose }: MapModalProps) {
  const { data, loading } = useApi(() => bookStandService.getStandData(), [opened], 'map-modal-data');

  const standInfo = (data as any)?.data;
  const images = standInfo?.images?.map((img: any) => ({
    src: img.url,
    alt: img.name || 'Exhibition Map'
  })) || [];

  return (
    <Modal 
      opened={opened} 
      onClose={onClose} 
      size="xl" 
      padding={0}
      withCloseButton={true}
      centered
      radius="24px"
      overlayProps={{
        blur: 8,
        opacity: 0.4,
      }}
      styles={{
        content: {
          backgroundColor: '#ffffff',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
        },
        header: {
          backgroundColor: 'transparent',
          position: 'absolute',
          right: 20,
          top: 20,
          zIndex: 1000,
        },
        body: {
          padding: 0,
        }
      }}
    >
      <StandMapCarousel 
        images={images} 
         loading={loading}
        isModal={true}
      />
    </Modal>
  );
}
