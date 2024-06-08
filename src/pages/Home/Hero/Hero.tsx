import "./Hero.scss";
import LockOpenIcon from "@mui/icons-material/LockOpen";
function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div>
          <h1 className="font-accent text-light text-4xl md:text-5xl font-extrabold ">
            <span>Unlock</span>
            <span>
              <LockOpenIcon sx={{ fontSize: "2.5rem", mb: 1 }} />
            </span>
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold mb-7 ">Your World</h2>
          <p className="max-w-[45ch]">
            Expert Guidance and Seamless Travel Solutions for Your Global
            Adventure
          </p>
        </div>
      </div>
    </div>
  );
}
// function HeroAddon(){
//   return <div>hero Addon</div>
// }
export default Hero;
