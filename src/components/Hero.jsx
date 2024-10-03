import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        <span className=" orange_gradient"> MVP for Text summarization</span>
      </h1>
      <h2 className="desc">Text Summary through URL Links using LLMs </h2>
    </header>
  );
};

export default Hero;
