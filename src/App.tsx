import { useState } from 'react';
import { Toaster } from 'sonner';
import { ProfessionalNav } from './components/ProfessionalNav';
import { CinematicHero } from './components/CinematicHero';
import { BusinessCrisisSection } from './components/BusinessCrisisSection';
import { AboutStory } from './components/AboutStory';
import { ROICalculator } from './components/ROICalculator';
import { TransformationCaseStudies } from './components/TransformationCaseStudies';
import { TransformationProcess } from './components/TransformationProcess';
import { EducationalHub } from './components/EducationalHub';
import { CleanServices } from './components/CleanServices';
import { CleanTestimonials } from './components/CleanTestimonials';
import { EnhancedContact } from './components/EnhancedContact';
import { ProfessionalFooter } from './components/ProfessionalFooter';
import { BookingModal } from './components/BookingModal';
import { CleanFAQ } from './components/CleanFAQ';
import { ServiceAgreement } from './components/ServiceAgreement';

import {ServicesAndPricing} from './components/ServicesAndPricing';



export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  


  return (
    <div className="min-h-screen bg-white">
      {/* Toast notifications */}
      <Toaster position="top-right" />
      
      {/* Navigation */}
      <ProfessionalNav onBookingClick={() => setIsBookingModalOpen(true)} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Cinematic video background */}
        <CinematicHero onBookingClick={() => setIsBookingModalOpen(true)} />
        
        {/* Business Crisis Section - Emotional pain points */}
        <BusinessCrisisSection />
        
        {/* About Story - Who we are and why we exist */}
        <AboutStory />
        
        {/* Transformation Case Studies - Real results with metrics */}
        <TransformationCaseStudies />
        
        
        {/* ROI Calculator - Interactive tool */}
        <ROICalculator />
        
        {/* Services - Solutions, not just services */}
        <section id="services">
          <CleanServices onBookingClick={() => setIsBookingModalOpen(true)} />
        </section>
          {/* Services and Pricing */}  

<section id="services">
  <CleanServices onBookingClick={() => setIsBookingModalOpen(true)} />
  <ServicesAndPricing onBookingClick={() => setIsBookingModalOpen(true)} />
</section>

        

        {/* Transformation Process - How we work */}
        <TransformationProcess />
        
        {/* Educational Hub - Teaching what we do */}
        <section id="education">
          <EducationalHub />
        </section>
        
        {/* Testimonials - Social proof */}
        <section id="testimonials">
          <CleanTestimonials />
        </section>
          {/* FAQ Section */}
        <section id="faq">
    <CleanFAQ />
  </section>
  

        {/* Contact Section */}
        <EnhancedContact onBookingClick={() => setIsBookingModalOpen(true)} />
      </main>

      {/* Footer */}
      <ProfessionalFooter />
      
      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
