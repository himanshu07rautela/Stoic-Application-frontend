// src/pages/Resources.jsx
import React from 'react';
import TableOfContents from '../components/TableOfContents';
import Theme from '../components/Theme';
import Philosophers from '../components/Philosophers';
import PracticalStoicism from '../components/PracticalStoicismData';
import Books from '../components/Books';
import ContemporaryStoicism from '../components/ContemporaryStoicism';
const Resources = () => {
  return (
    <>
      <TableOfContents />  
      <Philosophers/>
      <PracticalStoicism/>
      <Books/>
      <Theme />
      <ContemporaryStoicism/>
    </>
  );
};

export default Resources;