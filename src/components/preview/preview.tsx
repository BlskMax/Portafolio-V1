import styles from './Preview.module.css';

const Card = () => {
    const projects = [
        {
          name: "/images/craftTransp.png",
          role: "Comic Subscription Service",
          image: "/images/comiPrev.png",
          link: "#comicCard", 
        },
        {
          name: "/images/ewTransp.png",
          role: "Appointments bank app",
          image: "/images/eliPrev.png",
          link: "#eliCard", 
        },
        {
            name: "/images/flickTransp.png",
            role: "Movie information submit",
            image: "/images/frPrev.png",
            link: "#flickCard",
        },
        {
            name: "/images/skyLogo.png",
            role: "E-Commerce",
            image: "/images/smPrev.png",
            link: "#skyCard",
        },
      ];

  return (
    <div className={styles.container}>
      {projects.map((person, index) => (
        <a href={person.link} key={index} className={styles.card}> 
        <div
          key={index}
          className={styles.card}
          style={{ backgroundImage: `url(${person.image})` }}
        >
          <div className={styles.content}>
            <img src={person.name} alt={person.role} className={styles.nameImage} />
            <span>{person.role}</span>
          </div>
        </div>
        </a>
        
      ))}
    </div>
  );
};

export default Card;
