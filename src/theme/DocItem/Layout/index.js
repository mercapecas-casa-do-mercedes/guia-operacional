import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import { AccordionProvider } from '@site/src/components/DocAccordion/AccordionContext';

export default function LayoutWrapper(props) {
  return (
    <AccordionProvider>
      <Layout {...props} />
    </AccordionProvider>
  );
}
