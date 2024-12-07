

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MAPS = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const getLocations = async () => {
      const fakeLocation = [
        { title: 'Mahad', lat:  18.08209397458222, lng: 73.42234238155838, description: `<h1 class='font-bold'> Ground Intelligence</h1>
 Stay ahead with actionable insights that drive success.
 <h1 class='font-bold'>End-to-End Social Media Management</h1>
 Seamless strategies for every platform, handled with precision.
 <h1 class='font-bold'>Dedicated Social Media Management Team</h1>
 Experts ensuring your online presence shines every day.
 <h1 class='font-bold'>Project Manager</h1>
 Your single point of contact for streamlined communication and 
efficient execution.
 <h1 class='font-bold'>Broadcasting Tools</h1>
 Deliver impactful messages with cutting-edge technology.
 <h1 class='font-bold'>Audio-Video Bridge</h1>
 Connect, collaborate, and communicate seamlessly with high-quality 
multimedia tools.
<h1 class='font-bold'> Auto Posting & Auto Commenting</h1>
 Save time and maintain consistency with intelligent automation.
` },
        { title: 'Phaltan', lat: 17.993249003656196, lng: 74.42942449739226, description: `<h1 class='font-bold'>Ground Intelligence</h1>
 Stay ahead with actionable insights that drive success.
 <h1 class='font-bold'>End-to-End Social Media Management</h1>
 Seamless strategies for every platform, handled with precision.
 <h1 class='font-bold'>Dedicated Social Media Management Team</h1>
 Experts ensuring your online presence shines every day.
 <h1 class='font-bold'>Project Manager</h1>
 Your single point of contact for streamlined communication and 
efficient execution.
 <h1 class='font-bold'>Broadcasting Tools</h1>
 Deliver impactful messages with cutting-edge technology.
 <h1 class='font-bold'>Audio-Video Bridge</h1>
 Connect, collaborate, and communicate seamlessly with high-quality 
multimedia tools.
 <h1 class='font-bold'>Auto Posting & Auto Commenting</h1>
 Save time and maintain consistency with intelligent automation.` },
        { title: 'Jamner', lat: 20.809693513918464, lng:  75.77802942639441, description: ` <h1 class='font-bold'>Ground Intelligence</h1>
 Empower your strategy with real-time data and insights.
 <h1 class='font-bold'>End-to-End Social Media Management</h1>
 From planning to execution, we’ve got every aspect covered.
 <h1 class='font-bold'>Coordinator Manager</h1>
 Streamlined operations with dedicated coordination at every level.
 <h1 class='font-bold'>Broadcasting Tools</h1>
 Deliver your message loud and clear with state-of-the-art broadcasting 
solutions.
 <h1 class='font-bold'>Audio-Video Bridge</h1>
 Seamless multimedia communication for impactful collaborations.
 <h1 class='font-bold'>Auto Posting & Auto Commenting</h1>
 Smart automation to save time and enhance engagement.
 <h1 class='font-bold'>All AI Tools</h1>
 Stay ahead of the curve with the power of cutting-edge artificial 
intelligence` },

        { title: 'Pachora', lat:  20.65919095233716, lng: 75.3478719850142, description: `<h1 class='font-bold'>Ground Intelligence</h1>
 Leverage data-driven insights to craft smarter strategies.
 <h1 class='font-bold'>End-to-End Social Media Management</h1>
 From strategy to execution, we handle it all seamlessly.
 <h1 class='font-bold'>Project Manager</h1>
 Your dedicated expert to ensure smooth project flow and timely 
delivery.
 <h1 class='font-bold'>Broadcasting Tools</h1>
 Reach your audience effortlessly with advanced broadcasting 
capabilities.
 <h1 class='font-bold'>Audio-Video Bridge</h1>
 Engage with your community through high-quality, seamless media 
connections.
 <h1 class='font-bold'>Auto Posting & Auto Commenting</h1>
 Maximize engagement with intelligent automation, ensuring 
consistency and efficiency` },

        { title: 'Nagar', lat:  19.09051436028614, lng: 74.74678713274912, description: ` <h1 class='font-bold'>Ground Intelligence</h1>
 Harness powerful insights to fuel your strategy and drive growth.
 <h1 class='font-bold'>End-to-End Social Media Management</h1>
 Complete control over every aspect of your social media presence, 
from planning to execution.
 <h1 class='font-bold'>Social Media Management Team</h1>
 A dedicated team of experts, ensuring consistent engagement and 
growth across platforms.
 <h1 class='font-bold'>Project Manager</h1>
 Your central point of coordination for flawless project execution and 
clear communication.
 <h1 class='font-bold'>Broadcasting Tools</h1>
 Deliver impactful content with cutting-edge broadcasting technologies.
 <h1 class='font-bold'>Audio-Video Bridge</h1>
 Seamless communication with high-quality video and audio for 
effective content delivery.
 <h1 class='font-bold'>Auto Posting & Auto Commenting</h1>
 Effortlessly maintain consistency and boost engagement through 
automated solutions.
 <h1 class='font-bold'>Trolling Contain</h1>
 Mitigate and manage negative interactions, ensuring a positive brand 
image.
 <h1 class='font-bold'>Taglines & Hashtags</h1>
 Craft catchy, on-brand taglines and hashtags to amplify your reach and 
visibility.
 <h1 class='font-bold'>Daily Creatives</h1>
 Fresh, engaging, and visually stunning content delivered every day to 
captivate your audience.
` },
        { title: 'Chinchwad', lat: 18.639050644225645, lng: 73.79385485804474, description: ` <h1 class='font-bold'>Ground Intelligence</h1>
 Unlock valuable insights to strategically guide your digital presence and 
decisions.
 <h1 class='font-bold'>End-to-End Social Media Management</h1>
 Seamless management from content creation to audience 
engagement, ensuring a cohesive online presence.
 <h1 class='font-bold'>Social Media Management Team</h1>
 A dedicated team of experts working tirelessly to boost your brand’s 
online engagement and visibility.
 <h1 class='font-bold'>Project Manager</h1>
 Your direct point of contact for smooth project execution, timelines, and 
coordination.
 <h1 class='font-bold'>Broadcasting Tools</h1>
 Broadcast your message effortlessly with advanced tools that reach a 
wider audience.
 <h1 class='font-bold'>Audio-Video Bridge</h1>
 High-quality audio and video integration for flawless communication 
and content sharing.
 <h1 class='font-bold'>Auto Posting & Auto Commenting</h1>
 Streamline your social media workflow with intelligent automation, 
ensuring consistent activity and engagement.
 <h1 class='font-bold'>Whisper Campaigning</h1>
 Create subtle, targeted campaigns that influence and engage your 
audience in an authentic way, driving strategic results.
` },

        { title: 'Bramhapuri', lat: 20.611129583843827, lng: 79.85732078839634, description: `<h1 class='font-bold'>Ground Intelligence</h1>
 Leverage data-driven insights to inform your strategy and stay ahead of 
trends.
 <h1 class='font-bold'>End-to-End Social Media Management</h1>
 Complete management from content creation to strategy execution, 
ensuring a cohesive digital presence.
 <h1 class='font-bold'>Broadcasting Tools</h1>
 Reach your audience effectively with state-of-the-art broadcasting 
technologies for a wider impact.
 <h1 class='font-bold'>Audio-Video Bridge</h1>
 Enable seamless communication and engagement through high-quality 
audio and video integration.
 <h1 class='font-bold'>Auto Posting & Auto Commenting</h1>
 Automate posting and commenting to ensure consistency and maintain 
high engagement across platforms.
 <h1 class='font-bold'>Daily Creatives</h1>
 Fresh, engaging, and visually compelling content delivered daily to 
captivate your audience and maintain relevance.` },

        { title: 'Mahim', lat: 19.04080586011608, lng: 72.8442694173768, description: ` <h1 class='font-bold'>Ground Intelligence</h1>
 Comprehensive research and insights to drive strategic decision
making.
 <h1 class='font-bold'>End-to-End Social Media Management</h1>
 Complete management of social media platforms, from planning to 
execution.
 <h1 class='font-bold'>Broadcasting Tools</h1>
 Advanced tools for seamless broadcast and live streaming 
experiences.
 <h1 class='font-bold'>Audio-Video Bridge</h1>
 Integration of audio and video tools for enhanced communication and 
content sharing.
 <h1 class='font-bold'>Auto Posting</h1>
 Automated scheduling and posting of content for consistent online 
presence.
 <h1 class='font-bold'>Auto Commenting</h1>
 Efficient automated responses and engagement with audiences.
 <h1 class='font-bold'>Daily Creatives</h1>
 Consistent production of fresh and engaging creative content for daily 
interaction.` },
        { title: 'Delhi', lat:  28.66899139266332,  lng: 77.22222835970781, description: ` <h1 class='font-bold'> Digital Marketing with Technology Interventions:</h1>
 AI & Machine Learning: Predict trends, personalize content, and 
automate tasks.
 Automation Tools: Automate emails, social media, and customer 
interactions.
 Big Data & Analytics: Analyze user behavior to make data-driven 
decisions.
 Chatbots: Offer instant customer service and gather feedback.
 <h1 class='font-bold'>Smart Outreach:</h1>
 Personalization: Tailor messages and content based on customer data.
 Programmatic Advertising: Automated, real-time ad buying for precise 
targeting.
 Omnichannel Marketing: Ensure a seamless customer experience 
across multiple platforms.
 <h1 class='font-bold'>Social Listening:</h1>
 Sentiment Analysis: Track positive, negative, or neutral sentiments.
 Brand Mentions & Tracking: Monitor online conversations about your 
brand.
 Competitor Analysis: Gain insights into competitors’ strategies and 
gaps.
 Trend Identification: Spot emerging trends to stay relevant.
` },

        { title: 'kashmir', lat:   31.972668806835898,   lng: 76.3923224335794, description: ` <h1 class='font-bold'> Audience Sentiment Analysis:</h1> Understanding how the audience 
feels about certain topics, influencers, or brands, based on their social 
media engagement and discussions. This would focus on key metrics 
like positive, negative, and neutral sentiments.
 <h1 class='font-bold'>Trend Tracking:</h1> Identifying trending topics or conversations on digital 
platforms. This would help you stay updated with the latest 
conversations relevant to your target audience.
 <h1 class='font-bold'>Engagement Metrics:</h1> Analyzing the number of likes, shares, 
comments, and mentions that a topic or brand receives on various 
digital platforms, giving insights into the level of audience engagement.
 <h1 class='font-bold'>Brand Mentions:</h1> Tracking how often and where your brand or 
competitors are mentioned across different platforms, along with the 
context in which they're discussed.
 <h1 class='font-bold'>Keyword Analysis:</h1> Identifying frequently used keywords and phrases 
associated with your brand or target topics. This can help refine SEO 
and content strategies.
 <h1 class='font-bold'>Audience Demographics:</h1> Gaining insights into the geographic 
locations, age groups, gender, and other demographic data of the 
audiences engaging with your brand or target topic.
 <h1 class='font-bold'>Content Performance:</h1> Evaluating which types of content (posts, 
videos, tweets, etc.) perform best in terms of engagement and reach, 
which can help in planning future outreach strategies.

` },

        { title: 'Ladakh', lat:   34.611628412934934,   lng: 77.28495286970566, description: ` <h1 class='font-bold'> Audience Sentiment Analysis:</h1> Understanding how the audience 
feels about certain topics, influencers, or brands, based on their social 
media engagement and discussions. This would focus on key metrics 
like positive, negative, and neutral sentiments.
 <h1 class='font-bold'>Trend Tracking:</h1> Identifying trending topics or conversations on digital 
platforms. This would help you stay updated with the latest 
conversations relevant to your target audience.
 <h1 class='font-bold'>Engagement Metrics:</h1> Analyzing the number of likes, shares, 
comments, and mentions that a topic or brand receives on various 
digital platforms, giving insights into the level of audience engagement.
 <h1 class='font-bold'>Brand Mentions:</h1> Tracking how often and where your brand or 
competitors are mentioned across different platforms, along with the 
context in which they're discussed.
 <h1 class='font-bold'>Keyword Analysis:</h1> Identifying frequently used keywords and phrases 
associated with your brand or target topics. This can help refine SEO 
and content strategies.
 <h1 class='font-bold'>Audience Demographics:</h1> Gaining insights into the geographic 
locations, age groups, gender, and other demographic data of the 
audiences engaging with your brand or target topic.
 <h1 class='font-bold'>Content Performance:</h1> Evaluating which types of content (posts, 
videos, tweets, etc.) perform best in terms of engagement and reach, 
which can help in planning future outreach strategies.

` },

        { title: ' Uttar Pradesh', lat:   30.049248072255754,  lng: 79.07463502156651 , description: ` <h1 class='font-bold'> Digital Marketing with Technology Interventions:</h1>
 AI & Machine Learning: Predict trends, personalize content, and 
automate tasks.
 Automation Tools: Automate emails, social media, and customer 
interactions.
 Big Data & Analytics: Analyze user behavior to make data-driven 
decisions.
 Chatbots: Offer instant customer service and gather feedback.
 <h1 class='font-bold'>Smart Outreach:</h1>
 Personalization: Tailor messages and content based on customer data.
 Programmatic Advertising: Automated, real-time ad buying for precise 
targeting.
 Omnichannel Marketing: Ensure a seamless customer experience 
across multiple platforms.
 <h1 class='font-bold'>Social Listening:</h1>
 Sentiment Analysis: Track positive, negative, or neutral sentiments.
 Brand Mentions & Tracking: Monitor online conversations about your 
brand.
 Competitor Analysis: Gain insights into competitors’ strategies and 
gaps.
 Trend Identification: Spot emerging trends to stay relevant.
` },

        { title: 'Chhattisgarh', lat:    22.292669548848977,   lng: 82.20233769217906 , description: ` <h1 class='font-bold'> Digital Marketing with Technology Interventions:</h1>
 AI & Machine Learning: Predict trends, personalize content, and 
automate tasks.
 Automation Tools: Automate emails, social media, and customer 
interactions.
 Big Data & Analytics: Analyze user behavior to make data-driven 
decisions.
 Chatbots: Offer instant customer service and gather feedback.
 <h1 class='font-bold'>Smart Outreach:</h1>
 Personalization: Tailor messages and content based on customer data.
 Programmatic Advertising: Automated, real-time ad buying for precise 
targeting.
 Omnichannel Marketing: Ensure a seamless customer experience 
across multiple platforms.
 <h1 class='font-bold'>Social Listening:</h1>
 Sentiment Analysis: Track positive, negative, or neutral sentiments.
 Brand Mentions & Tracking: Monitor online conversations about your 
brand.
 Competitor Analysis: Gain insights into competitors’ strategies and 
gaps.
 Trend Identification: Spot emerging trends to stay relevant.
` },
        { title: 'Gujarat', lat:     23.194525849637373,    lng: 70.85884076514203 , description: ` <h1 class='font-bold'> Digital Marketing with Technology Interventions:</h1>
 AI & Machine Learning: Predict trends, personalize content, and 
automate tasks.
 Automation Tools: Automate emails, social media, and customer 
interactions.
 Big Data & Analytics: Analyze user behavior to make data-driven 
decisions.
 Chatbots: Offer instant customer service and gather feedback.
 <h1 class='font-bold'>Smart Outreach:</h1>
 Personalization: Tailor messages and content based on customer data.
 Programmatic Advertising: Automated, real-time ad buying for precise 
targeting.
 Omnichannel Marketing: Ensure a seamless customer experience 
across multiple platforms.
 <h1 class='font-bold'>Social Listening:</h1>
 Sentiment Analysis: Track positive, negative, or neutral sentiments.
 Brand Mentions & Tracking: Monitor online conversations about your 
brand.
 Competitor Analysis: Gain insights into competitors’ strategies and 
gaps.
 Trend Identification: Spot emerging trends to stay relevant.
` },
        { title: 'Madhya Pradesh', lat:    23.456496656403882,    lng: 76.76659827161913 , description: ` <h1 class='font-bold'> Digital Marketing with Technology Interventions:</h1>
 AI & Machine Learning: Predict trends, personalize content, and 
automate tasks.
 Automation Tools: Automate emails, social media, and customer 
interactions.
 Big Data & Analytics: Analyze user behavior to make data-driven 
decisions.
 Chatbots: Offer instant customer service and gather feedback.
 <h1 class='font-bold'>Smart Outreach:</h1>
 Personalization: Tailor messages and content based on customer data.
 Programmatic Advertising: Automated, real-time ad buying for precise 
targeting.
 Omnichannel Marketing: Ensure a seamless customer experience 
across multiple platforms.
 <h1 class='font-bold'>Social Listening:</h1>
 Sentiment Analysis: Track positive, negative, or neutral sentiments.
 Brand Mentions & Tracking: Monitor online conversations about your 
brand.
 Competitor Analysis: Gain insights into competitors’ strategies and 
gaps.
 Trend Identification: Spot emerging trends to stay relevant.
` },
        { title: 'Assam', lat:  26.55180033248778, lng:  92.58815218331866 , description: ` <h1 class='font-bold'> Digital Marketing with Technology Interventions:</h1>
 AI & Machine Learning: Predict trends, personalize content, and 
automate tasks.
 Automation Tools: Automate emails, social media, and customer 
interactions.
 Big Data & Analytics: Analyze user behavior to make data-driven 
decisions.
 Chatbots: Offer instant customer service and gather feedback.
 <h1 class='font-bold'>Smart Outreach:</h1>
 Personalization: Tailor messages and content based on customer data.
 Programmatic Advertising: Automated, real-time ad buying for precise 
targeting.
 Omnichannel Marketing: Ensure a seamless customer experience 
across multiple platforms.
 <h1 class='font-bold'>Social Listening:</h1>
 Sentiment Analysis: Track positive, negative, or neutral sentiments.
 Brand Mentions & Tracking: Monitor online conversations about your 
brand.
 Competitor Analysis: Gain insights into competitors’ strategies and 
gaps.
 Trend Identification: Spot emerging trends to stay relevant.
` },
      ];
      setLocations(fakeLocation);
    };
    getLocations();
  }, []);

  return (
    <div id="app" className="w-full h-screen">
      <LoadScript googleMapsApiKey="AIzaSyAcEDtQbw9CpH8C1hYp7kmujHnOroEez-Y">
        <GoogleMap
          id="map"
          mapContainerStyle={{
            width: '100%',
            height: '100%',
          }}
          zoom={5}
          center={{ lat: 22.788991848868555, lng: 79.30530240916862 }}
          options={{
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: false,
          }}
        >
          {locations.map((location) => (
            <Marker
              key={location.title}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => setSelectedLocation(location)}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={{
                lat: selectedLocation.lat,
                lng: selectedLocation.lng,
              }}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="text-sm p-2">
                <h3 className="font-bold">{selectedLocation.title}</h3>
                <div 
        className="max-h-96 overflow-y-auto mb-6" 
        dangerouslySetInnerHTML={{ __html: selectedLocation.description }} 
      />
                {/* <p>{selectedLocation.description}</p> */}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MAPS;

