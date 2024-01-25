import React from 'react';
import { Container, Section, Heading, Text, Image } from 'daisyui';

const PortfolioDetails = () => {
  return (
    <Section className="py-16">
      <Container>
        <Heading className="text-4xl font-bold mb-4 text-center">
          Project Name
        </Heading>
        <Text className="text-lg mb-12 text-center">
          A brief description of the project and its features.
        </Text>
        <div className="flex flex-col md:flex-row gap-8">
          <Image
            src="https://via.placeholder.com/300x300"
            alt="Project Image"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <Heading className="text-2xl font-bold mb-2">
              Technologies Used
            </Heading>
            <Text className="text-gray-600">
              A list of the technologies and tools used to build the project.
            </Text>
            <Heading className="text-2xl font-bold mb-2">
              Project Links
            </Heading>
            <Text className="text-gray-600">
              {/* Add your project links here */}
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PortfolioDetails;
