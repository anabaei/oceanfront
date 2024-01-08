'use client';
// components/FullScreenPage.tsx
import React, { ReactNode, useState } from 'react';
import styles from './FullScreenPage.module.css';
import NavBar from './NavBar';


interface FullScreenPageProps {
    children: ReactNode;
}

const FullScreenPage: React.FC<FullScreenPageProps> = ({ children }) => {
    return (
        
        <div>
            <NavBar />
            <div className={styles.fullScreenPage}>
                <div className={styles.centeredContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FullScreenPage;
