'use client';
import React from 'react'
import styles from './style.module.scss';

interface ProjectProps {
    index: number;
    title: string;
    manageModal: (isOpen: boolean, index: number, clientX: number, clientY: number) => void;
}

const Project: React.FC<ProjectProps> = ({
    index,
    title,
    manageModal
}) => {
    return (
        <div
            className={styles.project}
            onMouseEnter={(e) => {
                manageModal(true, index, e.clientX, e.clientY);
            }}
            onMouseLeave={(e) => {
                manageModal(false, index, e.clientX, e.clientY);
            }}
        >
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    );
}

export default Project;