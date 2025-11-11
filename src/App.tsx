import { useState } from "react";
import { Toaster } from "sonner";
import { ProfessionalNav } from "./components/ProfessionalNav";
import { CinematicHero } from "./components/CinematicHero";
import { BusinessCrisisSection } from "./components/BusinessCrisisSection";
import { AboutStory } from "./components/AboutStory";
import { TransformationCaseStudies } from "./components/TransformationCaseStudies";
import { ROICalculator } from "./components/ROICalculator";
import { CleanServices } from "./components/CleanServices";
import { ServicesAndPricing } from "./components/ServicesAndPricing";
import { TransformationProcess } from "./components/TransformationProcess";
import { EducationalHub } from "./components/EducationalHub";
import { CleanTestimonials } from "./components/CleanTestimonials";
import { CleanFAQ } from "./components/CleanFAQ";
import { EnhancedContact } from "./components/EnhancedContact";
import { ProfessionalFooter } from "./components/ProfessionalFooter";
import { BookingModal } from "./components/BookingModal";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Toast notifications */}
      <Toaster position="top-right" />

      {/* Navigation */}
      <ProfessionalNav onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Main Content with animation */}
      <AnimatePresence mode="wait">
        <motion.main
          key="main"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Hero Section */}
          <section id="home">
            <CinematicHero onBookingClick={() => setIsBookingModalOpen(true)} />
          </section>

          {/* Business Crisis */}
          <section id="business-crisis">
            <BusinessCrisisSection />
          </section>

          {/* About Story */}
          <section id="about">
            <AboutStory />
          </section>

          {/* Case Studies */}
          <section id="case-studies">
            <TransformationCaseStudies />
          </section>

          {/* ROI Calculator */}
          <section id="roi">
            <ROICalculator />
          </section>

          {/* Services */}
          <section id="services">
            <CleanServices onBookingClick={() => setIsBookingModalOpen(true)} />
            <ServicesAndPricing onBookingClick={() => setIsBookingModalOpen(true)} />
          </section>

          {/* Transformation Process */}
          <section id="transformation-process">
            <TransformationProcess />
          </section>

          {/* Educational Hub */}
          <section id="education">
            <EducationalHub />
          </section>

          {/* Testimonials */}
          <section id="testimonials">
            <CleanTestimonials />
          </section>

          {/* FAQ */}
          <section id="faq">
            <CleanFAQ />
          </section>

          {/* Contact */}
          <section id="contact">
            <EnhancedContact onBookingClick={() => setIsBookingModalOpen(true)} />
          </section>
        </motion.main>
      </AnimatePresence>

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
