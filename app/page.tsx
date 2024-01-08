import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import FullScreenPage from './components/FullScreenPage';
import React, { useState } from 'react';

export default function Home() {
  return (
    <FullScreenPage>
    <h1>Welcome to My Full-Screen Page</h1>
  </FullScreenPage>
  )
}
