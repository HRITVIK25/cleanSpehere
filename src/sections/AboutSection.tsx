import React from 'react';
import { Users, Lightbulb, Target, Zap } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <FadeIn>
          <div className="section-title">
            <h2>About <span className="text-primary-600">Us</span></h2>
            <p className="section-subtitle">
              Learn about our mission, vision, and approach to creating cleaner communities
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Who We Are</h3>
              <p className="text-gray-600">
                CleanSphere Innovations Pvt. Ltd. is a forward-thinking environmental technology company 
                dedicated to building a cleaner, greener future. Founded with a mission to revolutionize 
                community hygiene and sustainability, we harness the power of innovation to solve pressing 
                environmental challenges.
              </p>
              <p className="text-gray-600">
                Our team combines expertise in environmental science, smart technology, and social impact 
                to deliver solutions that empower communities, drive systemic change, and promote responsible living.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="CleanSphere team" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold">Vision</h3>
              </div>
              <p className="text-gray-600">
                To become a global leader in clean technology, fostering healthier and more 
                sustainable communities through innovation and collaboration.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-secondary-100 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-semibold">Mission</h3>
              </div>
              <ul className="text-gray-600 space-y-3 list-disc pl-5">
                <li>To develop and deploy scalable environmental solutions that are accessible to all.</li>
                <li>To create awareness and inspire collective responsibility for cleaner surroundings.</li>
                <li>To integrate smart technologies that optimize waste management and environmental monitoring.</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-accent-100 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-accent-600" />
                </div>
                <h3 className="text-2xl font-semibold">Our Approach</h3>
              </div>
              <p className="text-gray-600">
                We want to make our cities clean through the contribution of everyone — individuals, 
                communities, and institutions alike. To drive this change, we are excited to launch 
                our first innovation: TrashBot.
              </p>
              <p className="text-gray-600 mt-4">
                This is how, through innovation, we will make our surroundings clean.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold">Our Team</h3>
              </div>
              <p className="text-gray-600">
                Our diverse team of engineers, environmental scientists, designers, and community 
                organizers shares a common passion for environmental sustainability and technological innovation.
              </p>
              <p className="text-gray-600 mt-4">
                We believe that by combining expertise across disciplines, we can create solutions that 
                are not only technically sound but also socially impactful and environmentally responsible.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;