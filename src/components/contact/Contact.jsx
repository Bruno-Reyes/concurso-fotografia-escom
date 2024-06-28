// src/ContactPage.js
import React from 'react';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Tag } from 'primereact/tag';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Contact = () => {
  return (
    <div className="p-d-flex p-jc-center p-ai-center p-mt-6">
      <Card title="Contact Us" className="p-shadow-3" style={{ width: '30rem' }}>
        <div className="p-d-flex p-ai-center p-mb-3">
          <i className="pi pi-envelope p-mr-2" style={{ fontSize: '1.5rem' }}></i>
          <Tag value="contact@example.com" className="p-mr-2" />
        </div>
        <Divider />
        <div className="p-d-flex p-ai-center">
          <i className="pi pi-phone p-mr-2" style={{ fontSize: '1.5rem' }}></i>
          <Tag value="+1 234 567 890" className="p-mr-2" />
        </div>
      </Card>
    </div>
  );
};

export default Contact;
