import { useState } from "react";

const Section = ({ title, desc, isVisible1, setIsVisible }) => {
  return (
    <div className="section-block">
      <h2>{title}</h2>
      {isVisible1 ? (
        <>
          <div className="description-box">
            <p>{desc}</p>
          </div>
          <button
            className="section-block-btn"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
        </>
      ) : (
        <button
          className="section-block-btn"
          onClick={() => {
            setIsVisible(title); // Team
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState("Team");
  return (
    <div>
      <Section
        title={"Team"}
        desc={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible1={isVisible === "Team"}
        setIsVisible={setIsVisible}
      />
      <Section
        title={"Project"}
        desc={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible1={isVisible === "Project"}
        setIsVisible={setIsVisible}
      />
      <Section
        title={"collaboration"}
        desc={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible1={isVisible === "collaboration"}
        setIsVisible={setIsVisible}
      />
    </div>
  );
};

export default Contact;
