import React from 'react';
import Image from 'next/image';
import styles from '../landing/styless/CardItem.module.css';

interface CardItemProps {
  icon: string;
  title: string;
  description: string;
}

const CardItem: React.FC<CardItemProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.cardItem}>
      <Image src={icon} alt={`${title} Icon`} width={40} height={40} unoptimized />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardItem;
