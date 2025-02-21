import BaseButton from "@/components/BaseButton";

const About = () => {
  return (
    <>
      <BaseButton
        label="About"
        onClick={() =>
          (window.location.href = "https://cv-omega-rouge.vercel.app/")
        }
      />
    </>
  );
};

export default About;
