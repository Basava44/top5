import React from "react";

import styles from "./TopicLists.module.css";
import { useNavigate } from "react-router-dom";

const TopicLists = () => {
  const topics = [
    "Random",
    "The benefits of meditation",
    "The impact of social media on mental health",
    "The role of education in reducing poverty",
    "The future of renewable energy",
    "The history of the Olympics",
    "The effects of climate change on ocean ecosystems",
    "The ethics of genetic engineering",
    "The impact of music on the brain",
    "The psychology of decision-making",
    "The history of the Civil Rights Movement in the United States",
    "The cultural significance of food",
    "The benefits and drawbacks of remote work",
    "The impact of technology on human relationships",
    "The science of addiction and recovery",
    "The history of the feminist movement",
    "The impact of globalization on local economies",
    "The psychology of happiness and well-being",
    "The benefits of exercise for mental and physical health",
    "The role of social support networks in mental health",
    "The history of democracy",
    "The impact of social inequality on health outcomes",
    "The future of space exploration",
    "The cultural significance of sports",
    "The role of art in society",
    "The impact of artificial intelligence on employment",
    "The psychology of motivation",
    "The impact of social media on political discourse",
    "The history of the internet",
    "The benefits of travel for personal growth",
    "The impact of media representation on marginalized groups",
  ];
  const navigate = useNavigate();
  const topicSelected = (topic) => {
    console.log(topic);
    navigate({
      pathname: "/gamezone",
      search: topic,
    });
  };

  return (
    <>
      <nav className="navbar">Choose Top 5</nav>
      <section className={styles.mainWrapper}>
        <div className={styles.title}>Choose the Item to continue</div>
        <div className={styles.topicLists}>
          {topics.map((topic) => {
            return (
              <div
                className={`${styles.topicItem} ${
                  topic === "Random" ? styles.random : ""
                }`}
                onClick={() => {
                  topicSelected(topic);
                }}
                key={topic}
              >
                {topic}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TopicLists;
