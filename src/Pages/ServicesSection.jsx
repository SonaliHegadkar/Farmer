import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: 'fas fa-cloud-sun',
      title: 'Weather Updates',
      description: 'Get real-time weather updates and forecasts tailored for your location.',
    },
    {
      id: 2,
      icon: 'fas fa-seedling',
      title: 'Crop Management',
      description: 'Receive personalized advice on crop planning, planting, and maintenance.',
    },
    {
      id: 3,
      icon: 'fas fa-chart-line',
      title: 'Market Prices',
      description: 'Stay up-to-date with the latest market prices for your crops and commodities.',
    },
    {
      id: 4,
      icon: 'fas fa-tractor',
      title: 'Farm Equipment',
      description: 'Access information and recommendations on farm equipment and machinery.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f3f4f6', padding: '3rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1rem', color: '#6366f1', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</h2>
          <p style={{ marginTop: '0.5rem', fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', lineHeight: '2rem' }}>
            Our Offerings for Farmers
          </p>
          <p style={{ marginTop: '1rem', maxWidth: '500px', margin: '0 auto', fontSize: '1.25rem', color: '#6b7280' }}>
            Explore our range of services designed to support and empower your farming operations.
          </p>
        </div>

        <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {services.map((service) => (
            <div key={service.id} style={{ position: 'relative' }}>
              <dt>
                <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.375rem', backgroundColor: 'green', color: '#fff' }}>
                  <i className={`${service.icon} text-lg`} />
                </div>
                <p style={{ marginLeft: '4rem', fontSize: '1.125rem', fontWeight: 'semibold', color: '#1f2937' }}>{service.title}</p>
              </dt>
              <dd style={{ marginTop: '0.5rem', marginLeft: '4rem', fontSize: '1rem', color: '#6b7280' }}>{service.description}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;